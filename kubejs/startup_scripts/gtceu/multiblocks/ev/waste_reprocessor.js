GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('waste_reprocessor')
            .category('multiblock')
            .setEUIO('in')
            .setMaxIOSize(1, 2, 1, 2)
            .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.UP_TO_DOWN)
            .setSound(GTSoundEntries.MACERATOR)
})



GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('waste_reprocessor', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('waste_reprocessor')
        .appearanceBlock(GCYMBlocks.CASING_CORROSION_PROOF)
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK_SUBTICK), GTRecipeModifiers.BATCH_MODE])
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("BAAAAABAAAAAA", "BADDDABAAAAAA", "BDDDDDBAAAAAA", "BDDDDDBAAAAAA", "BDDDDDBAAAAAA", "BADDDABAAAAAA", "BBBBBBBAAAAAA")
        .aisle("AADDDAAAAAAAA", "ADAAADAAAAAAA", "DAAAAADAAAAAA", "DAAEAADAAAAAA", "DAAAAADAAAAAA", "ADAAADAAAAAAA", "BADDDABAAAAAA")
        .aisle("AADDDAAABAAAB", "ADAAADAABAAAB", "DAAFAADABDDDB", "DAFEFADABDDDB", "DAAFAADABDDDB", "DDAAADDABBBBB", "BDDDDDBAAAAAA")
        .aisle("AADDDAAAAAAAA", "ADAAADAAADDDA", "DAAAAADADAAAD", "DAAEAADADAEAD", "DAAAAADADAAAD", "ADAAADAABDDDB", "BADDDABAAAAAA")
        .aisle("AADDDAAAAAAAA", "ADAAADAAADDDA", "DAAFAADADAFAD", "DAFEFAFFFFEFD", "DAAFAADADAFAD", "DDAAADDABDDDB", "BDDDDDBAAAAAA")
        .aisle("AADDDAAAAAAAA", "ADAAADAAADDDA", "DAAAAADADAAAD", "DAAEAADADAEAD", "DAAAAADADAAAD", "ADAAADAABDDDB", "BADDDABAAAAAA")
        .aisle("AADDDAAAAAAAA", "ADAAADAAADDDA", "DAAFAADADAFAD", "DAFEFAFFFFEFD", "DAAFAADADAFAD", "DDAAADDABDDDB", "BDDDDDBAAAAAA")
        .aisle("AADDDAAAAAAAA", "ADAAADAAADDDA", "DAAAAADADAAAD", "DAAEAADADAEAD", "DAAAAADADAAAD", "ADAAADAABDDDB", "BADDDABAAAAAA")
        .aisle("AADDDAAABAAAB", "ADAAADAABAAAB", "DAAFAADABDDDB", "DAFEFADABDDDB", "DAAFAADABDDDB", "DDAAADDABBBBB", "BDDDDDBAAAAAA")
        .aisle("AADDDAAAAAAAA", "ADAAADAAAAAAA", "DAAAAADAAAAAA", "DAAEAADAAAAAA", "DAAAAADAAAAAA", "ADAAADAAAAAAA", "BADDDABAAAAAA")
        .aisle("BAAAAABAAAAAA", "BADDDABAAAAAA", "BDDDDDBAAAAAA", "BDD@DDBAAAAAA", "BDDDDDBAAAAAA", "BADDDABAAAAAA", "BBBBBBBAAAAAA")
           .where("A", Predicates.any())
           .where("B", Predicates.blocks("gtceu:black_steel_frame"))
           .where("D", Predicates.blocks("gtceu:corrosion_proof_casing").setMinGlobalLimited(260)
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
           .where("E", Predicates.blocks("gtceu:steel_gearbox"))
           .where("F", Predicates.blocks("gtceu:titanium_pipe_casing"))
           .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel('gtceu:block/casings/gcym/corrosion_proof_casing', 'gtceu:block/machines/sifter');
})





























