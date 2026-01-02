ServerEvents.recipes(event => {
    const id = global.id;

    event.shapeless('gtceu:primitive_brick_dust', [ '3x gtceu:clay_dust', '2x gtceu:flint_dust', '3x gtceu:quartz_sand_dust' ])

    event.smelting('gtsac:primitive_oven_brick', 'gtsac:compressed_primitive_brick')

    event.shapeless('gtsac:primitive_oven_bricks', [ '9x gtsac:primitive_oven_brick' ])

    event.recipes.gtceu.compressor('primitive_bricks_compression')
            .itemInputs('gtceu:primitive_brick_dust')
            .itemOutputs('gtsac:compressed_primitive_brick')
            .duration(100)
            .EUt(8)


    event.recipes.gtceu.primitive_oven('firebrick_smelting')
            .itemInputs([ 'gtceu:compressed_fireclay', '2x gtceu:coke_gem' ])
            .itemOutputs('gtceu:firebrick')
            .duration(20 * 5);

        event.shaped('gtceu:primitive_oven', [
                'BPB',
                'PHP',
                'BPB'
        ], { B: "gtsac:primitive_oven_brick", P: "gtceu:bronze_plate", H: "gtceu:bronze_machine_casing" })

        event.recipes.gtceu.primitive_oven('wrought_iron_smelting')
                .itemInputs([ 'minecraft:iron_ingot', 'minecraft:coal' ])
                .itemOutputs('gtceu:wrought_iron_ingot')
                .duration(20 * 5)
});