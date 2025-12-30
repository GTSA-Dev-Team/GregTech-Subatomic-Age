// @ts-check

StartupEvents.registry('item', event => {
    event.create("gtsac:grass_fibre").texture("gtsac:grass_fibre")
    event.create("gtceu:flint_hammer", "pickaxe").tier("wood").texture("gtsac:flint_hammer")
    event.create("gtsac:stone_pebble").texture("gtsac:stone_pebble")
    event.create("gtsac:primitive_oven_brick").texture("gtsac:primitive_oven_brick")
    event.create("gtsac:compressed_primitive_brick").texture("gtsac:compressed_primitive_brick")
    event.create("gtsac:primitive_brick_dust").texture("gtsac:primitive_brick_dust")
    event.create("gtsac:vacuum_tube_components").texture("gtsac:vacuum_tube_component")
    event.create('gtsac:lead_battery_cathode').texture('gtsac:lead_battery_cathode')
    event.create('gtsac:lead_batter_anode').texture('gtsac:lead_batter_anode')
});