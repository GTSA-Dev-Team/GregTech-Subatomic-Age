ServerEvents.recipes(event => {
    event.shaped('gtceu:electric_arc_furnace', [
        'HGH',
        'PAP',
        'CMC'
    ], {
        H: 'gtceu:copper_hex_cable',
        G: 'gtceu:graphite_dust',
        P: 'gtceu:mv_electric_piston',
        A: 'gtceu:mv_arc_furnace',
        C: '#gtceu:circuits/mv',
        M: 'gtceu:mv_electric_motor'
    })

    event.shaped('gtceu:vacuum_pressure_vessel', [
        'DMD',
        'MVP',
        'CSC'
    ], {
        P: 'gtceu:mv_electric_piston',
        M: 'gtceu:mv_electric_pump',
        C: '#gtceu:circuits/mv',
        S: 'gtceu:copper_single_cable',
        D: 'gtceu:double_aluminium_plate',
        V: 'gtceu:mv_vacuum_chamber'
    })
})