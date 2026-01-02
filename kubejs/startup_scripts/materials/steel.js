GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('direct_reduced_iron')
    .color(0x52513C)    
    .ingot()
    .liquid(1711)
    .components('3x gtceu:iron', '4x gtceu:oxygen')
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

})