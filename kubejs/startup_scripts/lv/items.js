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
    generateCatalystBeds([ 'alumina', 'carbon' ])

    // Catalysts
    const generateCatalysts = (materials) => {
        materials.forEach(el => {
            event.create(`gtceu:${el}_catalyst`).texture(`gtceu:item/fixed_bed_reactor/${el}_catalyst`)
        })
    }

    generateCatalysts([ 'cobalt', 'platinum' ])
})