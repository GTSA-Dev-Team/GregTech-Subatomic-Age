GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('electric_steel_kiln')
            .category('multiblock')
            .setEUIO('in')
            .setMaxIOSize(3, 3, 3, 3)
            .setProgressBar(GuiTextures.PROGRESS_BAR_MASS_FAB, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.FURNACE)
})



GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('electric_steel_kiln', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('electric_steel_kiln')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK_SUBTICK), GTRecipeModifiers.BATCH_MODE])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ABBAAAABBBAAAABBA", "ACCAAAACCCAAAACCA", "ACCAAAACCCAAAACCA", "ACCAAAACCCAAAACCA", "ACCAAAACCCAAAACCA", "AAAAAAACCCAAAAAAA", "AAAAAAACCCAAAAAAA", "AAAAAAACCCAAAAAAA", "AAAAAAACCCAAAAAAA")
            .aisle("BBBBAABBBBBAABBBB", "CEECAACAAACAACEEC", "CAACAACAAACAACAAC", "CAACAACAAACAACAAC", "CCCCAACAAACAACCCC", "AAAAAACAAACAAAAAA", "AAAAAACAAACAAAAAA", "AAAAAACAAACAAAAAA", "AAAAAACCCCCAAAAAA")
            .aisle("BBBBAABBBBBAABBBB", "CEECAACFFFCAACEEC", "CAACAACAFACAACAAC", "CAACAACAFACAACAAC", "CCGCAACFFFCAACGCC", "AAGAAACAFACAAAGAA", "AAGGGGGGGGGGGGGAA", "AAAAAACAAACAAAAAA", "AAAAAACCHCCAAAAAA")
            .aisle("ABBAAABBBBBAAABBA", "ACCAAACAAACAAACCA", "ACCAAACAAACAAACCA", "ACCAAACAAACAAACCA", "ACCAAACAAACAAACCA", "AAAAAACAAACAAAAAA", "AAAAAACAAACAAAAAA", "AAAAAACAAACAAAAAA", "AAAAAACCCCCAAAAAA")
            .aisle("AAAAAAABBBAAAAAAA", "AAAAAAACCCAAAAAAA", "AAAAAAAC@CAAAAAAA", "AAAAAAACCCAAAAAAA", "AAAAAAACCCAAAAAAA", "AAAAAAACCCAAAAAAA", "AAAAAAACCCAAAAAAA", "AAAAAAACCCAAAAAAA", "AAAAAAACCCAAAAAAA")
               .where("A", Predicates.any())
               .where("B", Predicates.blocks("gtceu:steel_firebox_casing"))
               .where("C", Predicates.blocks("gtceu:solid_machine_casing").setMinGlobalLimited(155)
                 .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                 .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                 .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                 .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2)
                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))))
               .where("E", Predicates.blocks("gtceu:steel_gearbox"))
               .where("F", Predicates.blocks("gtceu:steel_frame"))
               .where("G", Predicates.blocks("gtceu:steel_pipe_casing"))
               .where("H", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
               .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/machines/alloy_smelter');
})





























