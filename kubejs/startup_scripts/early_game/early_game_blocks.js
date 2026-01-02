StartupEvents.registry("block", event => {
    event.create("gtsac:primitive_oven_bricks").soundType('stone').hardness(3.0).resistance(2.0).requiresTool(true).tagBlock("mineable/wrench").textureAll('kubejs:block/primitive_oven_bricks')
    event.create("gtsac:primitive_baking_oven_bricks").soundType('stone').hardness(3.0).resistance(2.0).requiresTool(true).tagBlock("mineable/wrench").textureAll('kubejs:block/primitive_baking_oven_bricks')
})