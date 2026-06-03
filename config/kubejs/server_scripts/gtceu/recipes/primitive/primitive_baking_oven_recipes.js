ServerEvents.recipes(gtsa => {
    gtsa.shaped('gtsac:primitive_baking_oven_bricks', [
        'PPP',
        'PSP',
        'PPP'
    ], { P: "gtsac:primitive_oven_brick", S: "#forge:tools/screwdrivers"})

    gtsa.shaped('gtceu:primitive_baking_oven', [
        'BCB',
        'OHO',
        'BOB'
    ], { B: "gtceu:bronze_bolt", C: "minecraft:campfire", O: "gtsac:primitive_baking_oven_bricks", H: "gtceu:bronze_machine_casing" })
});