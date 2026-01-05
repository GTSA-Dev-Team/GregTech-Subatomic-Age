GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create('uv_lithography')
        .category('basic')
        .setMaxIOSize(3, 3, 3, 3)
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('uv_light_box', 'simple')
    .definition((tier, builder) => {
        builder.recipeType('uv_lithography')
        .workableCasingModel(`gtceu:block/casings/voltage/${tierToHullMap[tier]}/side`, 'gtceu:block/machines/chemical_bath')
    })
})