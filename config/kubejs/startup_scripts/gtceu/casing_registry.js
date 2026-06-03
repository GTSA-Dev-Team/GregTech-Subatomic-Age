StartupEvents.registry('block', event => {
    event.create('gtsac:pressure_resistant_casing')
        .textureAll('kubejs:block/casing/pressure_resistant_casing')
        .tagBlock('mineable/wrench')
        .soundType('metal')
        .requiresTool(true)

    event.create('gtsac:kinetic_impact_resistant_heavy_casing')
        .textureAll('kubejs:block/casing/cannon_casing')
        .tagBlock('mineable/wrench')
        .soundType('metal')
        .requiresTool(true)
})