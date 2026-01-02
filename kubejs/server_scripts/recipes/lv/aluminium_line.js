ServerEvents.recipes(event => {
    /////////////////////////////////////////////////
    ///                                           ///
    ///       ALUMINIUM DUST RECIPE REMOVAL       ///
    ///                                           ///
    /////////////////////////////////////////////////

    const removeItemFromRecipes = (type, output, allowedItems, allowedFluids) => {
        event.forEachRecipe({ output: output, type: type }, (recipe) => {
            if (allowedFluids.some(id => recipe.hasInput(Fluid.of("gtceu:" + id)))) {
                event.replaceOutput({ id: recipe.getId() }, output, 'gtceu:aluminium_hydroxide_dust')
                return;
            }

            if (allowedItems.some(id => recipe.hasInput(Item.of("gtceu:" + id)))) {
                return;
            }

            event.replaceOutput({ id: recipe.getId() }, output, `gtceu:bauxite_dust`)
        })
    }

    const removeByType = (type, output) => { event.remove({ output: output, type: type }) }

    removeItemFromRecipes("gtceu:centrifuge", "gtceu:aluminium_dust", [ "incoloy_ma_956_dust", "maraging_steel_300_dust", "kanthal_dust", "cobalt_brass_dust" ],
            [ "ruby_slurry", "sapphire_slurry", "green_sapphire_slurry" ])   
    removeItemFromRecipes("gtceu:electrolyzer", "gtceu:aluminium_dust", [ "watertight_steel_dust" ], []) 

    removeByType("gtceu:ore_washer", "gtceu:aluminium_dust")
    removeByType("gtceu:macerator", "gtceu:aluminium_dust")
    removeByType("gtceu:thermal_centrifuge", "gtceu:aluminium_dust")
    removeByType("gtceu:forge_hammer", "gtceu:aluminium_dust")

    event.remove({
        input: "gtceu:refined_aluminium_ore",
        type: "minecraft:crafting_shapeless"
    })

    /////////////////////////////////////////////////
    ///                                           ///
    ///       CONTROL BLOCK RECIPES               ///
    ///                                           ///
    /////////////////////////////////////////////////

    event.shaped('gtceu:rotary_kiln', [
        'CRC',
        'PHP',
        'CUC'
    ], { C: "#gtceu:circuits/lv", R: "gtceu:steel_rotor", P: "gtceu:steel_large_fluid_pipe", H: "gtceu:lv_machine_hull", U: "gtceu:lv_electric_pump" })

    event.shaped('gtsac:clarifier', [
        'GPG',
        'RHR',
        'CPC'
    ], { C: "#gtceu:circuits/lv", R: "gtceu:steel_rotor", H: "gtceu:lv_machine_hull", P: "gtceu:lv_electric_pump", G: "minecraft:glass" })

    event.shaped('gtceu:filtration_unit', [
        'GRG',
        'FHF',
        'CPC'
    ], { C: "#gtceu:circuits/lv", R: "gtceu:steel_rotor", H: "gtceu:lv_machine_hull", P: "gtceu:lv_electric_pump", G: "minecraft:glass", F: "gtceu:fluid_filter" })

    event.shaped('gtsac:neutralization_tank', [
        'RFR',
        'PHP',
        'RCR'
    ], { C: "#gtceu:circuits/lv", R: "gtceu:steel_rotor", H: "gtceu:lv_machine_hull", P: "gtceu:lv_electric_pump", F: "gtceu:fluid_filter" })

    /////////////////////////////////////////////////
    ///                                           ///
    ///       BAUXITE PROCESSING BEGINS           ///
    ///                                           ///
    /////////////////////////////////////////////////

    event.recipes.gtceu.autoclave('bauxite_leeching')
            .itemInputs("gtceu:bauxite_dust")
            .inputFluids("gtceu:sodium_hydroxide 2000")
            .itemOutputs("2x gtceu:sodium_alluminate_dust")
            .outputFluids("minecraft:water 1000")
            .duration(20 * 5)
            .EUt(16)

    event.recipes.gtceu.filtrator('bauxite_filtration')
            .itemInputs("2x gtceu:sodium_alluminate_dust")
            .itemOutputs("gtceu:pure_sodium_alluminate_dust")
            .outputFluids("gtceu:red_mud 1750")
            .duration(20 * 1)
            .EUt(32)

    event.recipes.gtceu.clarifier('bauxite_clarification')
            .itemInputs("gtceu:pure_sodium_alluminate_dust")
            .inputFluids("minecraft:water 2000")
            .itemOutputs("gtceu:aluminium_hydroxide_dust")
            .outputFluids("gtceu:sodium_hydroxide")
            .duration(20 * 10)
            .EUt(32)

    const aluminaCalcinationFluidDurationMultiplierMap = {
        "methane": 1,
        "refinery_gas": 1.5,
        "coal_gas": 2
    }

    const registerAluminiumCalcinationRecipes = (fluid) => {
        const fluidName = fluid.getId().split(":")[1];
        event.recipes.gtceu.rotary_kiln('alumina_calcination_' + fluidName)
                .itemInputs("2x gtceu:aluminium_hydroxide_dust")
                .inputFluids(fluid)
                .itemOutputs("gtceu:alumina_dust")
                .outputFluids("minecraft:water 3000")
                .duration(20 * 15 * aluminaCalcinationFluidDurationMultiplierMap[fluidName])
                .EUt(128)
    }
    
    registerAluminiumCalcinationRecipes(Fluid.of("gtceu:methane", 250))
    registerAluminiumCalcinationRecipes(Fluid.of("gtceu:refinery_gas", 750))
    registerAluminiumCalcinationRecipes(Fluid.of("gtceu:coal_gas", 1000))

    event.recipes.gtceu.electrolyzer('red_mud_electrolysis')
                .inputFluids('gtceu:red_mud 12000')
                .itemOutputs('3x gtceu:hematite_dust', 'gtceu:bauxite_dust', '2x gtceu:silicon_dioxide_dust', 'gtceu:rutile_dust', '2x gtceu:quicklime_dust', '2x gtceu:sodium_dust')
                .outputFluids('minecraft:water 9000')
                .duration(15*20)
                .EUt(30)
    /////////////////////////////////////////////////
    ///                                           ///
    ///       HALL HéROULT PROCESS BEGINS         ///
    ///                                           ///
    /////////////////////////////////////////////////

    event.recipes.gtceu.chemical_reactor('hexafluoroaluminic_acid_production')
                .itemInputs("gtceu:aluminium_hydroxide_dust")
                .inputFluids("gtceu:hydrofluoric_acid 6000")
                .outputFluids("gtceu:hexafluoroaluminic_acid 1000", "minecraft:water 3000")
                .duration(20 * 45)
                .EUt(32)

    event.recipes.gtceu.neutralization('hexafluoroaluminic_acid_neutralization')
                .inputFluids([ "gtceu:hexafluoroaluminic_acid 1000", "gtceu:sodium_hydroxide 3000" ])
                .outputFluids([ "gtceu:cryolite 1152", "minecraft:water 2500" ])
                .duration(20 * 60)
                .EUt(32)

    event.recipes.gtceu.rotary_kiln('coal_tar_rotary_kiln')
                .itemInputs('16x gtceu:coke_gem')
                .inputFluids('gtceu:methane 500')
                .outputFluids('gtceu:coal_tar 500')
                .duration(20 * 20)
                .EUt(128)

    event.recipes.gtceu.rotary_kiln('graphite_electrode')
                .itemInputs([ 'gtceu:steel_rod', '32x gtceu:coke_gem' ])
                .inputFluids('gtceu:coal_tar 8000')
                .itemOutputs('gtceu:graphite_electrode')
                .duration(20 * 120)
                .EUt(128)

    event.recipes.gtceu.mixer('alumina_cryolite_mixing')
                .inputFluids("gtceu:alumina 2304", "gtceu:cryolite 2304")
                .outputFluids("gtceu:alumina_cryolite_mixture 4608")
                .duration(20 * 50)
                .EUt(32)

    event.recipes.gtceu.electrolyzer('alumina_cryolite_mixture_electrolysis')
                .inputFluids("gtceu:alumina_cryolite_mixture 4608")
                .notConsumable("gtceu:graphite_electrode")
                .itemOutputs('16x gtceu:aluminium_dust')
                .outputFluids('gtceu:cryolite 2304')
                .outputFluids('gtceu:carbon_dioxide 1000')
                .duration(20 * 30)
                .EUt(32)
})