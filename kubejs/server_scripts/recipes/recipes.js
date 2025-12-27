ServerEvents.recipes(event => {
    const remove = (array) => {
        array.forEach(element => {
            event.remove({
                output: element
            })
        });
    }

    const removeGtceu = (array) => {
        remove(array.map(item => "gtceu:" + item))
    }

    removeGtceu([ "flint_knife", "flint_shovel", "flint_pickaxe", "flint_mortar", "flint_sword", "flint_hoe", "flint_axe", "compressed_fireclay", "coke_oven_bricks" ])
    remove([ "minecraft:wooden_axe", "minecraft:wooden_hoe", "minecraft:wooden_pickaxe", "minecraft:wooden_shovel", "minecraft:wooden_sword", "minecraft:blast_furnace", "minecraft:smoker", "minecraft:furnace" ])
    event.remove({
        input: "minecraft:brick",
        type: "minecraft:crafting_shaped"
    })
    event.remove({
        output: "gtceu:firebrick",
        type: "minecraft:smelting"
    })
    event.remove({
        input: "minecraft:clay",
        type: "minecraft:crafting_shapeless"
    })
    event.remove({
        input: "minecraft:flint",
        type: "minecraft:crafting_shaped"
    })
    event.remove({
        input: "minecraft:sand",
        type: "minecraft:crafting_shaped"
    })

    event.shaped('1x gtceu:long_wood_rod', [
        'AAA',
        'SAS',
        'AAA'
    ], {
        A: 'gtsac:grass_fibre',
        S: 'minecraft:stick'
    })

    event.shaped('1x gtceu:flint_hammer', [
        'FFG',
        'FFL',
        'FFG'
    ], {
        F: "minecraft:flint",
        G: "gtsac:grass_fibre",
        L: "gtceu:long_wood_rod"
    })

    event.shaped('1x minecraft:cobblestone', [
        'PP ',
        'PP ',
        '   '
    ], { P: "gtsac:stone_pebble" })

    event.shaped('minecraft:furnace', [
        'CCC',
        'CFC',
        'CCC'
    ], { C: "#forge:cobblestone", F: "minecraft:flint" })

    event.shapeless('minecraft:bricks', ['9x minecraft:brick'])

    event.recipes.gtceu.compressor('fireclay_compression')
            .itemInputs('4x gtceu:fireclay_dust')
            .itemOutputs('gtceu:compressed_fireclay')
            .duration(20 * 30)
            .EUt(8)

    event.shaped('gtceu:coke_oven_bricks', [
        'PPP',
        'PWP',
        'PPP'
    ], { P: "gtsac:primitive_oven_brick", W: "#forge:tools/wrenches" })
});