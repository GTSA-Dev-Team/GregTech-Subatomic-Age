GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('neutralization')
            .category('multiblock')
            .setEUIO('in')
            .setMaxIOSize(6, 6, 6, 6)
            .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('neutralization_tank', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('neutralization')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK_SUBTICK), GTRecipeModifiers.BATCH_MODE])
        .pattern(definition => FactoryBlockPattern.start()
                .aisle("BBAAABB", "BBAAABB", "BBAAABB", "CCCCCCC", "DEEEEED", "DEEEEED", "DEEEEED", "DEEEEED", "DEEEEED", "CCCCCCC")
                .aisle("BBAAABB", "BBAAABB", "BBAAABB", "CDDDDDC", "EAAFAAE", "EAAAAAE", "EAAFAAE", "EAAAAAE", "EAAFAAE", "CEEDEEC")
                .aisle("AAAAAAA", "AAAAAAA", "AAAAAAA", "CDDDDDC", "EAAFAAE", "EAAGAAE", "EAAFAAE", "EAAGAAE", "EAAFAAE", "CEDDDEC")
                .aisle("AAAAAAA", "AAAAAAA", "AAAAAAA", "CDDDDDC", "EFFGFFE", "EAGGGAE", "EFFGFFE", "EAGGGAE", "EFFGFFE", "CDDEDDC")
                .aisle("AAAAAAA", "AAAAAAA", "AAAAAAA", "CDDDDDC", "EAAFAAE", "EAAGAAE", "EAAFAAE", "EAAGAAE", "EAAFAAE", "CEDDDEC")
                .aisle("BBAAABB", "BBAAABB", "BBAAABB", "CDDDDDC", "EAAFAAE", "EAAAAAE", "EAAFAAE", "EAAAAAE", "EAAFAAE", "CEEDEEC")
                .aisle("BBAAABB", "BBAAABB", "BBAAABB", "CCCCCCC", "DEEDEED", "DEDDDED", "DDDHDDD", "DEDDDED", "DEEDEED", "CCCCCCC")
            .where("A", Predicates.any())
            .where("B", Predicates.blocks("gtceu:steel_frame"))
            .where("C", Predicates.blocks("gtceu:steel_firebox_casing"))
            .where("D", Predicates.blocks("gtceu:solid_machine_casing")
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("E", Predicates.blocks("gtceu:tempered_glass"))
            .where("F", Predicates.blocks("gtceu:steel_pipe_casing"))
            .where("G", Predicates.blocks("gtceu:steel_gearbox"))
            .where("H", Predicates.controller(Predicates.blocks(definition.get())))
        .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/machines/electric_winding_machine');
})





























