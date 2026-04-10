ServerEvents.recipes(event => {
    const id = global.id;

    event.shapeless('8x gtceu:primitive_brick_dust', [ '3x gtceu:clay_dust', '2x gtceu:flint_dust', '3x gtceu:quartz_sand_dust' ])

    event.smelting('gtsac:primitive_oven_brick', 'gtsac:compressed_primitive_brick')

    event.shaped('gtsac:primitive_oven_brick', [
        'AA',
        'AA'
    ], {
        A: 'gtsac:primitive_brick'
    })

    event.recipes.gtceu.compressor('primitive_bricks_compression')
            .itemInputs('gtceu:primitive_brick_dust')
            .itemOutputs('gtsac:compressed_primitive_brick')
            .duration(100)
            .EUt(8)


    event.recipes.gtceu.primitive_oven('firebrick_smelting')
            .itemInputs('gtceu:compressed_fireclay')
            .itemOutputs('gtceu:firebrick')
            .duration(20 * 5)
            .EUt(4)

        event.shaped('gtceu:primitive_oven', [
                'BPB',
                'PHP',
                'BPB'
        ], { B: "gtsac:primitive_oven_brick", P: "gtceu:bronze_plate", H: "gtceu:bronze_machine_casing" })

        event.recipes.gtceu.primitive_oven('wrought_iron_smelting')
                .itemInputs('minecraft:iron_ingot')
                .itemOutputs('gtceu:wrought_iron_ingot')
                .duration(20 * 5)
                .EUt(8)
});