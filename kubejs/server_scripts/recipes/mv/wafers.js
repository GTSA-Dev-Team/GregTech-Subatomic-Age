ServerEvents.recipes(event => {
    removeGtceu(event, [ 'silicon_boule', 'phosphorus_boule', 'naquadah_boule', 'neutronium_boule', 'silicon_wafer' ])

    ////     SILICON PURIFICATION

    event.recipes.gtceu.electric_arc_furnace('metallurgical_grade_silicon')
        .itemInputs('gtceu:silicon_dioxide_dust', '2x gtceu:carbon_dust')
        .itemOutputs('gtceu:metallurgical_grade_silicon_dust')
        .outputFluids('gtceu:carbon_monoxide 2000')
        .duration(20 * 5)
        .EUt(512)

    event.recipes.gtceu.fixed_bed_reactor('hydrochlorination_silicon')
        .notConsumable('gtceu:copper_catalyst')
        .itemInputs('gtceu:metallurgical_grade_silicon_dust')
        .inputFluids('gtceu:hydrochloric_acid 3000')
        .outputFluids('gtceu:hydrogen 1000', 'gtceu:impure_trichlorosilane 1000')
        .duration(20 * 12)
        .EUt(128)

    event.recipes.gtceu.distillation_tower('trichlorosilane_distillation')
        .inputFluids('gtceu:impure_trichlorosilane 1000')
        .outputFluids('gtceu:silicon_tetrachloride 200', 'gtceu:trichlorosilane 765', 'gtceu:dichlorosilane 30', 'gtceu:hydrochloric_acid 5')
        .duration(20 * 40)
        .EUt(120)

    event.recipes.gtceu.fixed_bed_reactor('silicon_tetrachloride_reuse')
        .notConsumable('gtceu:copper_catalyst')
        .inputFluids('gtceu:silicon_tetrachloride 1000', 'gtceu:hydrochloric_acid 2000')
        .itemInputs('gtceu:metallurgical_grade_silicon_dust')
        .outputFluids('gtceu:impure_trichlorosilane 2000')
        .duration(20 * 15)
        .EUt(120)

    event.recipes.gtceu.fixed_bed_reactor('trichlorosilane_cvd')
        .notConsumable('gtceu:silicon_plate')
        .inputFluids('gtceu:trichlorosilane 2000', 'gtceu:hydrogen 4000')
        .itemOutputs('2x gtceu:silicon_rods')
        .outputFluids('gtceu:hydrochloric_acid 6000')
        .duration(20 * 20)
        .EUt(128)

    event.recipes.gtceu.macerator('silicon_rods_maceration')
        .itemInputs("gtceu:silicon_rods")
        .itemOutputs("2x gtceu:silicon_chunks")
        .duration(20 * 7)
        .EUt(32)

    event.recipes.gtceu.extractor('polysilicon_extraction')
        .itemInputs('2x gtceu:silicon_chunks')
        .outputFluids('gtceu:polysilicon 144')
        .duration(20 * 4.9)
        .EUt(120)

    //// BOULE CREATION

    event.recipes.gtceu.autoclave('silicon_seed_crystal')
        .inputFluids('gtceu:polysilicon 1000')
        .itemInputs("gtceu:small_metallurgical_grade_silicon_dust")
        .chancedOutput('gtceu:silicon_seed_crystal', 1000, 0)
        .duration(20 * 10)
        .EUt(120)

    event.recipes.gtceu.vacuum_ejection('quartz_crucible')
        .notConsumable("gtceu:cylinder_casting_mold")
        .inputFluids('gtceu:silicon_dioxide 1008')
        .itemOutputs("gtceu:quartz_crucible")
        .duration(20 * 75)
        .EUt(128)

    event.recipes.gtceu.cz_furnace('silicone_boule_growth')
        .notConsumable("gtceu:quartz_crucible")
        .inputFluids('gtceu:polysilicon 4608', 'gtceu:nitrogen 8000')
        .itemInputs("gtceu:silicon_seed_crystal")
        .circuit(1)
        .itemOutputs("gtceu:silicon_boule")
        .duration(20 * 450)
        .EUt(128)

    const genCutterRecipes = (fluidsToAmountMap, wafer, seed, boule) => {
        fluidsToAmountMap.forEach(holder => {
            event.recipes.gtceu.cutter(`${wafer.wafer}_${boule}_${holder.fluid}_${seed}_cutting`)
                .itemInputs("gtceu:" + boule)
                .inputFluids(Fluid.of("gtceu:" + holder.fluid, holder.amount))
                .itemOutputs(`gtceu:${seed}`, `${wafer.amount}x gtceu:${wafer.wafer}`)
                .duration(20 * 100)
                .EUt(128)
        })
    }

    genCutterRecipes([ { fluid: "distilled_water", amount: 2000 } ], { wafer: "raw_silicon_wafer", amount: 16 }, "silicon_seed_crystal", "silicon_boule")

    event.recipes.gtceu.mixer('wafer_treatment_acid')
        .inputFluids([ "gtceu:hydrofluoric_acid 1000", "gtceu:hydrochloric_acid 1000" ])
        .outputFluids("gtceu:wafer_treatment_acid 1000")
        .duration(20 * 13)
        .EUt(32)

    event.recipes.gtceu.chemical_bath('treating_wafers')
        .inputFluids("gtceu:wafer_treatment_acid 50")
        .itemInputs("gtceu:raw_silicon_wafer")
        .itemOutputs("gtceu:silicon_wafer")
        .duration(20 * 15)
        .EUt(128)

    event.remove({ input: "gtceu:silicon_wafer", type: "gtceu:laser_engraver" });

    const registerUVLightBoxRecipes = (recipes) => {
        recipes.forEach(recipe => {
            event.recipes.gtceu.uv_lithography(`${recipes.indexOf(recipe)}_lithography`)
                .itemInputs(recipe.wafer)
                .inputFluids(recipe.photoresist)
                .notConsumable(recipe.lens)
                .itemOutputs(recipe.output_wafer)
                .duration(20 * 60)
                .EUt(128)
        })
    };

    registerUVLightBoxRecipes([ 
        { wafer: "gtceu:silicon_wafer", lens: "#forge:lenses/green",      output_wafer: "gtceu:exposed_ram_wafer",        photoresist: "gtceu:novolacs_photoresist 10" },
        { wafer: "gtceu:silicon_wafer", lens: "gtceu:cyan_glass_lens",    output_wafer: "gtceu:exposed_simple_soc_wafer", photoresist: "gtceu:novolacs_photoresist 10" },
        { wafer: "gtceu:silicon_wafer", lens: "gtceu:orange_glass_lens",  output_wafer: "gtceu:exposed_lpic_wafer",       photoresist: "gtceu:novolacs_photoresist 10" },
        { wafer: "gtceu:silicon_wafer", lens: "#forge:lenses/light_blue", output_wafer: "gtceu:exposed_cpu_wafer",        photoresist: "gtceu:novolacs_photoresist 10" },
        { wafer: "gtceu:silicon_wafer", lens: "#forge:lenses/blue",       output_wafer: "gtceu:exposed_ulpic_wafer",      photoresist: "gtceu:novolacs_photoresist 10" },
        { wafer: "gtceu:silicon_wafer", lens: "#forge:lenses/red",        output_wafer: "gtceu:exposed_ilc_wafer",        photoresist: "gtceu:novolacs_photoresist 10" } 
    ]);

    const registerChemBathRecipes = (recipes) => {
        recipes.forEach(recipe => {
            event.recipes.gtceu.chemical_bath(`${recipe.output_wafer}_chembath`)
                .itemInputs(recipe.wafer)
                .inputFluids("gtceu:hydrofluoric_acid 100")
                .itemOutputs("gtceu:" + recipe.output_wafer)
                .duration(20 * 25)
                .EUt(128)
        })
    }
    
    registerChemBathRecipes([
        { wafer: "gtceu:exposed_ram_wafer",         output_wafer: "ram_wafer"        },
        { wafer: "gtceu:exposed_simple_soc_wafer",  output_wafer: "simple_soc_wafer" },
        { wafer: "gtceu:exposed_lpic_wafer",        output_wafer: "lpic_wafer"       },
        { wafer: "gtceu:exposed_cpu_wafer",         output_wafer: "cpu_wafer"        },
        { wafer: "gtceu:exposed_ulpic_wafer",       output_wafer: "ulpic_wafer"      },
        { wafer: "gtceu:exposed_ilc_wafer",         output_wafer: "ilc_wafer"        }
    ])

    event.recipes.gtceu.cstr('novolacs_mixing')
        .inputFluids([ "gtceu:phenol 50", "gtceu:formaldehyde 25" ])
        .outputFluids("gtceu:novolacs_photoresist 75")
        .duration(5)
        .EUt(128)

    event.remove({ output: Fluid.of("gtceu:formaldehyde", 1000) })

    event.recipes.gtceu.fixed_bed_reactor('formaldehyde_synthesis')
        .notConsumable("gtceu:silver_dust")
        .inputFluids([ "gtceu:methanol 1000", "gtceu:oxygen 1000" ])
        .outputFluids([ "gtceu:formaldehyde 1000", "minecraft:water 1000" ])
        .duration(20 * 20)
        .EUt(32)
})