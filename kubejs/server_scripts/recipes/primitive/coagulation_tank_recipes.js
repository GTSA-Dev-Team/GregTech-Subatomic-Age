ServerEvents.recipes(gtsa => {
    gtsa.recipes.gtceu.coagulation('latex_coagulation')
            .notConsumable('gtceu:iron_rod')
            .itemInputs('gtceu:raw_latex_dust')
            .inputFluids('minecraft:water 250')
            .itemOutputs('2x gtceu:latex_dust')
            .duration(20 * 30)

    gtsa.shaped('gtceu:coagulation_tank', [
        'WRW',
        'SCS',
        'WPW'
    ], { W: "gtceu:wood_wall", R: "gtceu:steel_rotor", S: "gtceu:bronze_screw", C: "gtceu:bronze_machine_casing", P: "gtceu:bronze_plate" })
});