ServerEvents.recipes(event => {
    event.shaped('gtceu:electric_steel_kiln', [
        'BCB',
        'PHR',
        'BCB',
    ], {
        B: 'gtceu:steel_block',
        C: '#gtceu:circuits/lv',
        P: 'gtceu:lv_electric_pump',
        H: 'gtceu:lv_machine_hull',
        R: 'gtceu:lv_robot_arm'
    })
    
    event.recipes.gtceu.rotary_kiln('direct_reduced_iron')
        .itemInputs('8x minecraft:iron_ingot')
        .inputFluids('gtceu:oxygen 1000', 'gtceu:carbon_monoxide 2000')
        .itemOutputs('12x gtceu:direct_reduced_iron_ingot')
        .duration(10*20)
        .EUt(64)

    event.recipes.gtceu.electric_steel_kiln('dri_to_steel')
        .inputFluids('gtceu:direct_reduced_iron 2304')
        .itemInputs('gtceu:carbon_dust')
        .outputFluids('gtceu:steel 3456')
        .itemOutputs('8x gtceu:ash_dust')
        .duration(30*20)
        .EUt(64)
})