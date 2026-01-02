GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('steam_mixer')
        .category('primitive')
        .setMaxIOSize(6, 2, 3, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MIXER)

    event.create('vacuum_ejection')
        .category('basic')
        .setMaxIOSize(6, 2, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_chemical_reactor', 'steam')
        .machine((holder, isHP) => new $GTSACFluidSteamMachine(holder, isHP))
        .definition((isHP, builder) => {
        builder.recipeType('chemical_reactor')
            .tier(isHP ? 1 : 0)
    })

    event.create('steam_mixer', 'steam')
        .machine((holder, isHP) => new $GTSACFluidSteamMachine(holder, isHP))
        .definition((isHP, builder) => {
        builder.recipeType('steam_mixer')
            .tier(isHP ? 1 : 0)
    })

    event.create('vacuum_chamber', 'simple')
        .tiers(GTMachineUtils.LOW_TIERS)
        .definition((tier, builder) => {
            builder.recipeType('vacuum_ejection')
            .workableCasingModel(`gtceu:block/casings/voltage/${tierToHullMap[tier]}/side`, 'gtceu:block/machines/air_scrubber')
        })
    
    event.create('steam_vacuum_chamber', 'steam')
        .definition((isHP, builder) => {
            builder.recipeType('vacuum_ejection')

        })
}) 