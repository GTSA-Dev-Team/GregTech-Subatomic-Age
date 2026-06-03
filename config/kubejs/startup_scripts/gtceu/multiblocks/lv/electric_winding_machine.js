GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('electric_winding_machine')
            .category('multiblock')
            .setEUIO('in')
            .setMaxIOSize(6, 1, 2, 0)
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.CUT)
})



GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('electric_winding_machine', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('electric_winding_machine')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK_SUBTICK), GTRecipeModifiers.BATCH_MODE])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BBBBBBB", "BBBBBBB", "BBBBBBB")
            .aisle("BBBBBBB", "BEEEEEB", "BDDDDDB")
            .aisle("BBB@BBB", "BDDDDDB", "BDDDDDB")
               .where("B", Predicates.blocks("gtceu:solid_machine_casing").setMinGlobalLimited(35)
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
               .where("@", Predicates.controller(Predicates.blocks(definition.get())))
               .where("D", Predicates.blocks("gtceu:tempered_glass"))
               .where("E", Predicates.blocks("gtceu:steel_gearbox"))
            .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/machines/electric_winding_machine');
})





























