ServerEvents.recipes(event => {
    const id = global.id;

    event.shapeless('gtsac:primitive_brick_dust', [ '3x gtceu:clay_dust', '2x gtceu:flint_dust', '3x gtceu:quartz_sand_dust' ])

    event.smelting('gtsac:primitive_oven_brick', 'gtsac:compressed_primitive_brick')

    event.shapeless('gtsac:primitive_oven_bricks', [ '9x gtsac:primitive_oven_brick' ])

    event.recipes.gtceu.compressor('primitive_bricks_compression')
            .itemInputs('gtsac:primitive_brick_dust')
            .itemOutputs('gtsac:compressed_primitive_brick')
            .duration(200)
            .EUt(8)


    event.recipes.gtceu.primitive_oven('firebrick_smelting')
            .itemInputs([ 'gtceu:compressed_fireclay', '2x gtceu:coke_gem' ])
            .itemOutputs('gtceu:firebrick')
            .duration(20 * 30)

    // TODO: Add controller block recipe
});