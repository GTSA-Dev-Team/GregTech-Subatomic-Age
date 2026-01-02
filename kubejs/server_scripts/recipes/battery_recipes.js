ServerEvents.recipes(event => {
    event.remove({
        output: Fluid.of("gtceu:sulfuric_acid", 1000),
        input: Fluid.of("gtceu:sulfur_trioxide", 1000),
        type: "gtceu:chemical_reactor"
    })

    event.remove({ output: "gtceu:lv_lithium_battery" })

    event.shaped('gtsac:lead_battery_cathode', [
        '   ',
        'CP ',
        '   '
    ], { C: "gtceu:tin_single_cable", P: "gtceu:battery_alloy_plate" })

    event.shaped('gtsac:lead_batter_anode', [
        '   ',
        ' PC',
        '   '
    ], { C: "gtceu:tin_single_cable", P: "gtceu:battery_alloy_plate" })

    event.recipes.gtceu.chemical_reactor('iron_iii_sulfate_dust')
        .itemInputs('2x gtceu:pyrite_dust')
        .itemOutputs([ 'gtceu:iron_iii_sulfate_dust', 'gtceu:sulfur_dust' ])
        .EUt(8)
        .duration(20 * 5)
    
    event.recipes.gtceu.chemical_reactor('sulfur_trioxide_steam_age_recipe')
        .itemInputs('gtceu:iron_iii_sulfate_dust')
        .itemOutputs('gtceu:hematite_dust')
        .outputFluids('gtceu:sulfur_trioxide 3000')
        .EUt(8)
        .duration(20 * 10)

    event.recipes.gtceu.steam_mixer('sulfuric_acid_steam_age')
        .inputFluids([ 'gtceu:sulfur_trioxide 1000', 'minecraft:water 1000' ])
        .outputFluids('gtceu:sulfuric_acid 1000')
        .EUt(8)
        .duration(20 * 5)

    event.shaped('gtceu:lv_lithium_battery', [
        '   ',
        'ASC',
        '   '
    ], { A: "gtsac:lead_batter_anode", C: "gtsac:lead_battery_cathode", S: "gtceu:sulfuric_acid_bucket" })
})