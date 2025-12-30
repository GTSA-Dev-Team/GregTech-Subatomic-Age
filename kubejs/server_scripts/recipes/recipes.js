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

    const ulvInput = (type) => {
        event.shaped(`gtceu:ulv_input_${type}`, [
            ' G ',
            ' H ',
            '   '
        ], { H: "gtceu:ulv_machine_casing", G: type === "hatch" ? "minecraft:glass" : "minecraft:chest" } )
    };
    const ulvOutput = (type) => {
        event.shaped(`gtceu:ulv_output_${type}`, [
            '   ',
            ' H ',
            ' G '
        ], { H: "gtceu:ulv_machine_casing", G: type === "hatch" ? "minecraft:glass" : "minecraft:chest" } )
    };
    ulvInput("hatch")
    ulvInput("bus")
    ulvOutput("hatch")
    ulvOutput("bus")

    removeGtceu([ "flint_knife", "flint_shovel", "flint_pickaxe", "flint_mortar", "flint_sword", "flint_hoe", "flint_axe", "compressed_fireclay", "coke_oven_bricks" ])
    remove([ "minecraft:wooden_axe", "minecraft:wooden_hoe", "minecraft:wooden_pickaxe", "minecraft:wooden_shovel", 
        "minecraft:wooden_sword", "minecraft:blast_furnace", "minecraft:smoker", "minecraft:furnace", "steamadditions:steam_foundry", "steamadditions:steam_separator" ])
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
    event.remove({
        output: "gtceu:steam_oven",
        input: "gtceu:lp_steam_furnace"
    })
    event.remove({
        output: "gtceu:steam_grinder",
        input: "gtceu:lp_steam_macerator"
    })
    event.remove({
        output: "gtceu:lead_dust",
        input: "#forge:tools/mortars"
    })
    event.remove({
        output: "gtceu:raw_rubber_dust",
        type: "gtceu:extractor"
    })
    event.remove({
        output: "gtceu:resistor",
        input: "gtceu:fine_copper_wire",
        type: "crafting_shaped"
    })
    event.remove({
        output: "gtceu:phenolic_circuit_board",
        input: ["gtceu:wood_dust", "gtceu:glue"]
    })
    event.remove({
        output: "gtceu:phenolic_printed_circuit_board",
        type: "crafting_shaped"
    })
    event.remove({
        output: 'gtceu:stainless_steel_dust',
        type: 'gtceu:mixer'
    })
    event.remove({
        output: 'gtceu:diode',
        input: Fluid.of('gtceu:glass', 144)
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

    const steamReactorRecipe = (isHP) => {
        const mat = isHP ? "steel" : "bronze"
        const hull = isHP ? "gtceu:steel_brick_casing" : "gtceu:bronze_machine_casing"
        event.shaped('gtceu:' + (isHP ? "hp" : "lp") + "_steam_chemical_reactor", [
            'GRG',
            'SPS',
            'BHB'
        ], { G: "minecraft:glass", R: `gtceu:${mat}_rotor`, S: `gtceu:${mat}_screw`, P: `gtceu:${mat}_plate`, B: "minecraft:bricks", H: hull })
    }
    steamReactorRecipe(true)
    steamReactorRecipe(false)

    const steamMixerRecipe = (isHP) => {
        const mat = isHP ? "steel" : "bronze"
        const hull = isHP ? "gtceu:steel_brick_casing" : "gtceu:bronze_machine_casing"
        event.shaped('gtceu:' + (isHP ? "hp" : "lp") + "_steam_mixer", [
            'GRG',
            'GMG',
            'VHV'
        ], { G: "minecraft:glass", R: `gtceu:${mat}_rotor`, M: "ulvcovm:ulv_electric_motor", V: "gtceu:vacuum_tube", H: hull})
    }
    steamMixerRecipe(true)
    steamMixerRecipe(false)

    const steamVacuumEjectorRecipe = (isHP) => {
        const mat = isHP ? "steel" : "bronze"
        const hull = isHP ? "gtceu:steel_brick_casing" : "gtceu:bronze_brick_casing"
        const cable = !isHP ? "gtceu:red_alloy_single_cable" : "gtceu:tin_single_cable"
        event.shaped('gtceu:' + (isHP ? "hp" : "lp") + "_steam_vacuum_chamber", [
            'CRC',
            'GPG',
            'SBS'
        ], { G: "minecraft:glass", R: `gtceu:${mat}_rotor`, C: cable, P: "ulvcovm:ulv_electric_pump", S: "gtceu:steel_plate", B: hull })
    }
    steamVacuumEjectorRecipe(true)
    steamVacuumEjectorRecipe(false)
});