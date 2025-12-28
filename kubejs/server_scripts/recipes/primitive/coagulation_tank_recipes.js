ServerEvents.recipes(event => {
    event.recipes.gtceu.coagulation('latex_coagulation')
            .notConsumable('gtceu:iron_rod')
            .inputFluids('gtceu:latex 500')
            .itemOutputs('gtceu:latex_dust')
            .duration(20 * 30)

    event.shaped('gtceu:coagulation_tank', [
        'WRW',
        'SCS',
        'WPW'
    ], { W: "gtceu:wood_wall", R: "gtceu:steel_rotor", S: "gtceu:bronze_screw", C: "gtceu:bronze_machine_casing", P: "gtceu:bronze_plate" })
});