GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('component_assembler')
            .category('multiblock')
            .setEUIO('in')
            .setMaxIOSize(6, 2, 2, 0)
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.ASSEMBLER)
})



GTCEuStartupEvents.registry('gtceu:machine', event => {
    //Component Assembler
    event.create('component_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('component_assembler')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK_SUBTICK), GTRecipeModifiers.BATCH_MODE])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BCCCCCB", "BCCCCCB", "BDDDDDB", "BDDDDDB", "BDDDDDB", "BDDDDDB", "BDDDDDB", "BDDDDDB", "BCCCCCB")
            .aisle("CCCCCCC", "CAEEEAC", "DAAAAAD", "DAAAAAD", "DAAAAAD", "DAAAAAD", "DAAAAAD", "DAEEEAD", "CCCCCCC")
            .aisle("CCCCCCC", "CEEEEEC", "DAAEAAD", "DAAEAAD", "DAAAAAD", "DAAEAAD", "DAAEAAD", "DEEEEED", "CCCCCCC")
            .aisle("CCCCCCC", "CEEEEEC", "DAEEEAD", "DAEEEAD", "DAAEAAD", "DAEEEAD", "DAEEEAD", "DEEEEED", "CCCCCCC")
            .aisle("CCCCCCC", "CEEEEEC", "DAAEAAD", "DAAEAAD", "DAAAAAD", "DAAEAAD", "DAAEAAD", "DEEEEED", "CCCCCCC")
            .aisle("CCCCCCC", "CAEEEAC", "DAAAAAD", "DAAAAAD", "DAAAAAD", "DAAAAAD", "DAAAAAD", "DAEEEAD", "CCCCCCC")
            .aisle("BCC@CCB", "BCCCCCB", "BDDDDDB", "BDDDDDB", "BDDDDDB", "BDDDDDB", "BDDDDDB", "BDDDDDB", "BCCCCCB")
                .where("A", Predicates.any())
                .where("B", Predicates.blocks("gtceu:steel_frame"))
                .where("C", Predicates.blocks("gtceu:solid_machine_casing")
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
                .where("D", Predicates.blocks("gtceu:tempered_glass"))
                .where("E", Predicates.blocks("gtceu:frostproof_machine_casing"))
                .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/machines/assembler');
})





























