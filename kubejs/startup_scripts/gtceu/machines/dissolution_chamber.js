GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('dissolution_chamber')
    .category('basic')
    .setMaxIOSize(3, 3, 3, 3)
    .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('dissolution_chamber', 'simple')
    .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV)
    .definition((tier, builder) => {
        builder.recipeType('dissolution_chamber')
        .workableCasingModel(`gtceu:block/casings/voltage/${tierToHullMap[tier]}/side`, 'gtceu:block/machines/chemical_bath')
    })
})