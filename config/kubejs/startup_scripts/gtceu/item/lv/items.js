StartupEvents.registry('item', event => {
    event.create('gtceu:pure_sodium_alluminate_dust').texture('gtceu:item/aluminium_line/pure_sodium_alluminate_dust')
    event.create('gtceu:graphite_electrode').texture('gtceu:item/aluminium_line/graphite_electrode')

    // Fixed Bed Reactor Stuff
    const generateCatalystBeds = (bases) => {
        bases.forEach(element => {
            event.create(`gtceu:unrefined_${element}_catalyst_bed`).texture(`gtceu:item/fixed_bed_reactor/unrefined_${element}_catalyst_bed`)
            event.create(`gtceu:${element}_catalyst_bed`).texture(`gtceu:item/fixed_bed_reactor/${element}_catalyst_bed`)
        });
    }

    // Supports
    // DATAGEN 1 CATALYST_BED [ 0xcfcfcf, 0x1f1f1f, 0x4f4f4f, 0x7a7a7a ]
    generateCatalystBeds([ 'alumina', 'carbon', 'fluorinated_graphite', 'silicon' ])

    // Catalysts
    const generateCatalysts = (materials) => {
        materials.forEach(el => {
            event.create(`gtceu:${el}_catalyst`).texture(`gtceu:item/fixed_bed_reactor/${el}_catalyst`)
        })
    }

    // DATAGEN 1 CATALYST [ 0x6369ff, 0xfcfce1, 0xE8E8D3, 0xffA71c ]
    generateCatalysts([ 'cobalt', 'platinum', 'antimony_trifluoride', 'copper' ])
})