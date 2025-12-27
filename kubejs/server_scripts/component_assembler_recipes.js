ServerEvents.recipes(event => {
    function Motors(input1, input2, input3, input4, tier) {
        event.recipes.gtceu.component_assembly(`${tier}_motor`)
            .itemInputs(`${input1}`, `${input2}`, `${input3}`, `${input4}`)

            .itemOutputs(`gtceu:${tier}_electric_motor`)
            .duration(15)
            .EUt(128, 0.94)
    }
    
    Motors('2x gtceu:copper_single_cable', '2x gtceu:aluminium_rod', 'gtceu:magnetic_steel_rod', '4x gtceu:cupronickel_double_wire', 'mv')
})