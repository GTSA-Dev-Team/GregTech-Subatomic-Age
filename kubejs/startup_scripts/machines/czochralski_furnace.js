GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create('cz_furnace')
        .category('basic')
        .setMaxIOSize(3, 3, 3, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('czochralski_furnace', 'simple')
    .definition((tier, builder) => {
        builder.recipeType('cz_furnace')
        .workableCasingModel(`gtceu:block/casings/voltage/${tierToHullMap[tier]}/side`, 'gtceu:block/machines/chemical_bath')
    })
})