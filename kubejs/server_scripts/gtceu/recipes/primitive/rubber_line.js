ServerEvents.recipes(gtsa => {
    gtsa.recipes.gtceu.extractor('latex_extraction')
            .itemInputs('#gtceu:rubber_logs')
            .itemOutputs('2x gtceu:raw_latex_dust')
            .EUt(8)
            .duration(20 * 10)

    gtsa.recipes.gtceu.alloy_smelter('latex_smelting')
            .itemInputs([ '4x gtceu:latex_dust', 'gtceu:sulfur_dust' ])
            .itemOutputs('2x gtceu:rubber_ingot')
            .EUt(8)
            .duration(20 * 10)
})