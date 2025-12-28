GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('coagulation')
        .category('primitive')
        .setMaxIOSize(1, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("gtsac:coagulation_tank", "primitive")
        .rotationState(RotationState.ALL)
        .recipeType('coagulation')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('F F', 'WWW', 'WWW', 'WWW', 'WWW')
            .aisle('   ', 'WWW', 'WAW', 'WAW', 'WAW')
            .aisle('F F', 'WWW', "W@W", 'WWW', 'WWW')
            .where('F', Predicates.blocks('gtceu:treated_wood_frame'))
            .where('W', Predicates.blocks('gtceu:wood_wall')
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                    .or(Predicates.blocks('gtceu:ulv_input_bus')))
            .where('A', Predicates.blocks('air').or(Predicates.blocks('cave_air')))
            .where(' ', Predicates.any())
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
        .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/machines/macerator');
})