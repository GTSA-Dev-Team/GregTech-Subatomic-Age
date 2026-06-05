ServerEvents.recipes(gtsa => {

    GTMachineUtils.ELECTRIC_TIERS.forEach(tier => {
        registerDC(tier)
        registerCSTR(tier)
        registerFBR(tier)
        registerVC(tier)
        registerCzochracz(tier)

        //console.log(spring(tier).toString())
        //console.log(coilBlock(tier).toString())

    })


    function registerDC(tier) {
        gtsa.shaped(`gtceu:${numToTierMap[tier]}_dissolution_chamber`, [
            'CRC',
            'PHV',
            'MEM',
        ], {
            C: cable(tier),
            R: rotor(tier),
            P: pump(tier),
            H: hull(tier),
            V: conveyor(tier),
            M: motor(tier),
            E: circuit(tier)
        })
    }

    function registerCSTR(tier) {
        gtsa.shaped(`gtceu:${numToTierMap[tier]}_continuous_stirred_tank_reactor`, [
            'CRC',
            'PHP',
            'EME',
        ], {
            C: cable(tier),
            R: rotor(tier),
            P: pump(tier),
            H: hull(tier),
            M: motor(tier),
            E: circuit(tier)
        })
    }

    function registerFBR(tier) {
        gtsa.shaped(`gtceu:${numToTierMap[tier]}_fixed_bed_reactor`, [
            'CRC',
            'PHM',
            'LEL',
        ], {
            C: cable(tier),
            R: rotor(tier),
            P: pump(tier),
            H: hull(tier),
            L: plate(tier),
            M: motor(tier),
            E: circuit(tier)
        })
    }

    function registerCzochracz(tier) {
        gtsa.shaped(`gtceu:${numToTierMap[tier]}_czochralski_furnace`, [
            'PCP',
            'SHS',
            'EBE',
        ], {
            C: coilBlock(tier),
            P: plate(tier),
            S: spring(tier),
            H: hull(tier),
            E: circuit(tier),
            B: cable(tier),
        })
    }

    function registerVC(tier) {
        gtsa.shaped(`gtceu:${numToTierMap[tier]}_vacuum_chamber`, [
            'CRC',
            'GPG',
            'IHI'
        ], {
            C: cable(tier),
            R: rotor(tier),
            P: pump(tier),
            H: hull(tier),
            I: circuit(tier),
            G: glass(tier)
        })
    }

})