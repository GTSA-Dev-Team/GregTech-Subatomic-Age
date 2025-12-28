ServerEvents.recipes(event => {
    event.recipes.gtceu.extractor('latex_extraction')
            .itemInputs('#gtceu:rubber_logs')
            .outputFluids('gtceu:latex 250')
            .EUt(8)
            .duration(20 * 10)

    event.recipes.gtceu.alloy_smelter('latex_smelting')
            .itemInputs([ '4x gtceu:latex_dust', 'gtceu:sulfur_dust' ])
            .itemOutputs('2x gtceu:rubber_ingot')
            .EUt(8)
            .duration(20 * 10)
})