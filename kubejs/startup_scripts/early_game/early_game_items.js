// @ts-check

StartupEvents.registry('item', event => {
    event.create("gtsac:grass_fibre").texture("kubejs:item/grass_fibre")
    event.create("gtceu:flint_hammer", "pickaxe").tier("wood").texture("kubejs:item/flint_hammer")
    event.create("gtsac:stone_pebble").texture("kubejs:item/stone_pebble")
    event.create("gtsac:primitive_oven_brick").texture("kubejs:item/primitive_oven_brick")
    event.create("gtsac:compressed_primitive_brick").texture("kubejs:item/compressed_primitive_brick")
    event.create("gtsac:vacuum_tube_components").texture("kubejs:item/vacuum_tube_component")
    event.create('gtsac:lead_battery_cathode').texture('kubejs:item/lead_battery_cathode')
    event.create('gtsac:lead_battery_anode').texture('kubejs:item/lead_battery_anode')
});