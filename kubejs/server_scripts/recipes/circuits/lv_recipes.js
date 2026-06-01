ServerEvents.recipes(gtsa => {
    gtsa.remove({
        output: "gtceu:vacuum_tube"
    })

    gtsa.recipes.gtceu.vacuum_ejection('vacuum_tubes')
        .itemInputs([ 'gtceu:glass_tube', '2x gtsac:vacuum_tube_components', '8x gtceu:fine_nickel_wire' ])
        .itemOutputs('gtceu:vacuum_tube')
        .EUt(8)
        .duration(20 * 30)
    
    gtsa.shaped('2x gtsac:vacuum_tube_components', [
        ' C ',
        'NRF',
        ' S '
    ], { C: "gtceu:fine_copper_wire", N: "gtceu:nickel_plate", R: "gtceu:steel_rod", F: "gtceu:nickel_foil", S: "gtceu:steel_plate" })
});