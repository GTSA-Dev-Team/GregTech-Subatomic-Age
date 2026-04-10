ServerEvents.recipes(event => {
    event.recipes.gtceu.distillation_tower('diluted_nitric_acid_distilling')
        .inputFluids('gtceu:diluted_nitric_acid 2000')
        .outputFluids('gtceu:nitric_acid 1000', 'minecraft:water 1000')
        .duration(30*20)
        .EUt(120)
})