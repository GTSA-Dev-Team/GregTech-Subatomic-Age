ServerEvents.recipes(event => {
    [
        {tier: 'lv', rotor: 'tin', cable: 'tin'},
        {tier: 'mv', rotor: 'bronze', cable: 'copper'},
        {tier: 'hv', rotor: 'steel', cable: 'gold'},
        {tier: 'ev', rotor: 'stainless_steel', cable: 'aluminium'},
    ].forEach(volt => {
        event.shaped(`gtceu:${volt.tier}_dissolution_chamber`, [
            'CRC',
            'PHV',
            'MEM'
        ], {
            C: `gtceu:${volt.cable}_single_cable`,
            R: `gtceu:${volt.rotor}_rotor`,
            P: `gtceu:${volt.tier}_electric_pump`,
            H: `gtceu:${volt.tier}_machine_hull`,
            V: `gtceu:${volt.tier}_conveyor_module`,
            M: `gtceu:${volt.tier}_electric_motor`,
            E: `#gtceu:circuits/${volt.tier}`
        })
    })
})