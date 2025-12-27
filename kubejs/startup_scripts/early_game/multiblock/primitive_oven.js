GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('primitive_oven')
        .category('primitive')
        .setMaxIOSize(2, 1, 0, 0)
        .setSound(GTSoundEntries.FURNACE)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("gtsac:primitive_oven", "primitive")
        .rotationState(RotationState.ALL)
        .recipeType('primitive_oven')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', '#C#')
            .aisle('CCC', 'CAC', 'CAC')
            .aisle('ICO', 'CBC', "#C#")
            .where('C', Predicates.blocks('gtsac:primitive_oven_bricks'))
            .where('A', Predicates.blocks('air').or(Predicates.blocks('cave_air')))
            .where('#', Predicates.any())
            .where('I', Predicates.blocks('gtceu:steam_input_bus'))
            .where('O', Predicates.blocks('gtceu:steam_output_bus'))
            .where('B', Predicates.controller(Predicates.blocks(definition.get())))
        .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/machines/macerator');
})