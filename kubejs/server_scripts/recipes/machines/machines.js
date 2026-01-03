ServerEvents.recipes(event => {
    [
        {tier: 'lv', rotor: 'tin', cable: 'tin', plate: 'steel'},
        {tier: 'mv', rotor: 'bronze', cable: 'copper', plate: 'aluminium'},
        {tier: 'hv', rotor: 'steel', cable: 'gold', plate: 'stainless_steel'},
        {tier: 'ev', rotor: 'stainless_steel', cable: 'aluminium', plate: 'titanium'},
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

        event.shaped(`gtceu:${volt.tier}_continuous_stirred_tank_reactor`, [
            'CRC',
            'PHP',
            'EME'
        ], {
            C: `gtceu:${volt.cable}_single_cable`,
            R: `gtceu:${volt.rotor}_rotor`,
            P: `gtceu:${volt.tier}_electric_pump`,
            H: `gtceu:${volt.tier}_machine_hull`,
            M: `gtceu:${volt.tier}_electric_motor`,
            E: `#gtceu:circuits/${volt.tier}`
        })

        event.shaped(`gtceu:${volt.tier}_fixed_bed_reactor`, [
            'CRC',
            'PHM',
            'LLL'
        ], {
            C: `gtceu:${volt.cable}_single_cable`,
            R: `gtceu:${volt.rotor}_rotor`,
            P: `gtceu:${volt.tier}_electric_pump`,
            H: `gtceu:${volt.tier}_machine_hull`,
            M: `gtceu:${volt.tier}_electric_motor`,
            //E: `#gtceu:circuits/${volt.tier}`,
            L: `gtceu:${volt.plate}_plate`
        })
    });

    [
        { tier: 'lv', rotor: 'steel', cable: 'cupronickel' },
        { tier: 'mv', rotor: 'aluminium', cable: 'electrum' },
        { tier: 'hv', rotor: 'stainless_steel', cable: 'steel' },
        { tier: 'ev', rotor: 'titanium', cable: 'graphene' },
    ].forEach(volt => {
        event.shaped(`gtceu:${volt.tier}_vacuum_chamber`, [
            'CRC',
            'GPG',
            'IHI'
        ], {
            C: `gtceu:${volt.cable}_single_cable`,
            R: `gtceu:${volt.rotor}_rotor`,
            G: "minecraft:glass",
            P: `gtceu:${volt.tier}_electric_pump`,
            I: `#gtceu:circuits/${volt.tier}`,
            H: `gtceu:${volt.tier}_machine_hull`
        })
    })


})