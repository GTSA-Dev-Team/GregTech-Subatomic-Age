ServerEvents.recipes(event => {
    removeGtceu(event, [ 'silicon_boule', 'phosphorus_boule', 'naquadah_boule', 'neutronium_boule', 'silicon_wafer' ])

    ////     SILICON PURIFICATION

    event.recipes.gtceu.electric_arc_furnace('metallurgical_grade_silicon')
        .itemInputs('gtceu:silicon_dioxide_dust', '2x gtceu:carbon_dust')
        .itemOutputs('gtceu:metallurgical_grade_silicon_dust')
        .outputFluids('gtceu:carbon_monoxide 2000')

    event.recipes.gtceu.fixed_bed_reactor('hydrochlorination_silicon')
        .notConsumable('gtceu:copper_catalyst')
        .itemInputs('gtceu:metallurgical_grade_silicon_dust')
        .inputFluids('gtceu:hydrochloric_acid 3000')
        .outputFluids('gtceu:hydrogen 1000', 'gtceu:impure_trichlorosilane 1000')

    event.recipes.gtceu.distillation_tower('trichlorosilane_distillation')
        .inputFluids('gtceu:impure_trichlorosilane 1000')
        .outputFluids('gtceu:silicon_tetrachloride 200', 'gtceu:trichlorosilane 765', 'gtceu:dichlorosilane 30', 'gtceu:hydrochloric_acid 5')

    event.recipes.gtceu.fixed_bed_reactor('silicon_tetrachloride_reuse')
        .notConsumable('gtceu:copper_catalyst')
        .inputFluids('gtceu:silicon_tetrachloride 1000', 'gtceu:hydrochloric_acid 2000')
        .itemInputs('gtceu:metallurgical_grade_silicon_dust')
        .outputFluids('gtceu:impure_trichlorosilane 2000')

    event.recipes.gtceu.fixed_bed_reactor('trichlorosilane_cvd')
        .notConsumable('gtceu:silicon_plate')
        .inputFluids('gtceu:trichlorosilane 2000', 'gtceu:hydrogen 4000')
        .itemOutputs('2x gtceu:silicon_rods')
        .outputFluids('gtceu:hydrochloric_acid 6000')

    event.recipes.gtceu.macerator('silicon_rods_maceration')
        .itemInputs("gtceu:silicon_rods")
        .itemOutputs("2x gtceu:silicon_chunks")

    event.recipes.gtceu.extractor('polysilicon_extraction')
        .itemInputs('2x gtceu:silicon_chunks')
        .outputFluids('gtceu:polysilicon 144')

    //// BOULE CREATION

    event.recipes.gtceu.autoclave('silicon_seed_crystal')
        .inputFluids('gtceu:polysilicon 1000')
        .itemInputs("gtceu:small_metallurgical_grade_silicon_dust")
        .chancedOutput('gtceu:silicon_seed_crystal', 1000, 0)

    event.recipes.gtceu.vacuum_ejection('quartz_crucible')
        .notConsumable("gtceu:cylinder_casting_mold")
        .inputFluids('gtceu:silicon_dioxide 1008')
        .itemOutputs("gtceu:quartz_crucible")
        .duration(20 * 75)
        .EUt(128)

    event.recipes.gtceu.cz_furnace('silicone_boule_growth')
        .notConsumable("gtceu:quartz_crucible")
        .inputFluids('gtceu:polysilicon 4608', 'gtceu:nitrogen 8000')
        .circuit(1)
        .itemInputs("gtceu:silicon_seed_crystal")
        .itemOutputs("gtceu:silicon_boule")
        .duration(20 * 450)
        .EUt(128)

    //interface WaferCuttingData {
    //    fluids: SAFluid[],
    //    wafer: SAItemOut,
    //    seed: SAItemOut,
    //    boule: SAItem
    //}

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

    //const genCutterRecipes = (data: WaferCuttingData) => {
    //    data.fluids.forEach((fluid) => {
    //        event.recipes.gtceu.cutter(`${data.wafer}_${data.boule}_${data.seed}_${fluid}_cutting`)
    //            .itemInputs(data.wafer)
    //            .inputFluids(fluid)
    //            .itemOutputs(data.seed, data.wafer)
    //            .duration(20 * 100)
    //            .EUt(128)
    //    })
    //}

    //genCutterRecipes({ fluids: [ "gtceu:distilled_water 2000" ], wafer: "16x gtceu:silicon_wafer", seed: "gtceu:silicon_seed_crystal", boule: "gtceu:silicon_boule" })

    genCutterRecipes([ { fluid: "distilled_water", amount: 2000 } ], { wafer: "silicon_wafer", amount: 16 }, "silicon_seed_crystal", "silicon_boule")

})