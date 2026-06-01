GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('diluted_nitric_acid')
    .liquid(293)
    .color(0x9C8C00)
    .components('nitric_acid', 'water')
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})