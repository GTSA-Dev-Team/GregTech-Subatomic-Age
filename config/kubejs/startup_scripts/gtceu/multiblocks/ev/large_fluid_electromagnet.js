GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('large_fluid_electromagnet')
            .category('multiblock')
            .setEUIO('in')
            .setMaxIOSize(0, 3, 1, 3)
            .setProgressBar(GuiTextures.PROGRESS_BAR_MAGNET, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.REPLICATOR)
})



GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_fluid_electromagnet', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeTypes('large_fluid_electromagnet')
        .appearanceBlock(GCYMBlocks.CASING_NONCONDUCTING)
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK_SUBTICK), GTRecipeModifiers.BATCH_MODE, GTRecipeModifiers.PARALLEL_HATCH])
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("BBBBB", "BBBBB", "BBBBB")
        .aisle("BCBCB", "DCDCD", "BCBCB")
        .aisle("BCBCB", "DCDCD", "BCBCB")
        .aisle("BBBBB", "BB@BB", "BBBBB")
           .where("A", Predicates.any())
           .where("B", Predicates.blocks("gtceu:nonconducting_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
           .where("C", Predicates.blocks("gtceu:electrolytic_cell"))
           .where("D", Predicates.blocks("gtceu:ptfe_pipe_casing"))
           .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('gtceu:block/casings/gcym/nonconducting_casing', 'gtceu:block/machines/electromagnetic_separator');
})





























