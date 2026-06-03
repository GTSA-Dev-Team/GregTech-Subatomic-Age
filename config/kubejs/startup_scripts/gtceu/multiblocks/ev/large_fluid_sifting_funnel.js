GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('large_fluid_sifting_funnel')
            .category('multiblock')
            .setEUIO('in')
            .setMaxIOSize(0, 3, 1, 3)
            .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.MACERATOR)
})



GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_fluid_sifting_funnel', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeTypes('large_fluid_sifting_funnel')
        .appearanceBlock(GCYMBlocks.CASING_VIBRATION_SAFE)
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK_SUBTICK), GTRecipeModifiers.BATCH_MODE, GTRecipeModifiers.PARALLEL_HATCH])
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("ABABA", "ABABA", "ABBBA", "BBCBB", "ABBBA")
        .aisle("BBBBB", "BABAB", "BEEEB", "BEEEB", "BAAAB")
        .aisle("ABBBA", "ABABA", "BECEB", "CECEC", "BAAAB")
        .aisle("BBBBB", "BABAB", "BEEEB", "BEEEB", "BAAAB")
        .aisle("ABABA", "ABABA", "AB@BA", "BBCBB", "ABBBA")
            .where("A", Predicates.any())
            .where("B", Predicates.blocks("gtceu:vibration_safe_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("C", Predicates.blocks("gtceu:ptfe_pipe_casing"))
            .where("E", Predicates.blocks("gtceu:assembly_line_grating"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('gtceu:block/casings/gcym/vibration_safe_casing', 'gtceu:block/machines/sifter');
})





























