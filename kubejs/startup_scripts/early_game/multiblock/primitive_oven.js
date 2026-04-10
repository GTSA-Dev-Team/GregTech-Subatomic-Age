GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('primitive_oven')
        .category('primitive')
        .setMaxIOSize(2, 1, 0, 0)
        .setSound(GTSoundEntries.FURNACE)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("primitive_oven", "multiblock")
        .machine((holder) => new $SteamMulti(holder, 1))    
        .rotationState(RotationState.ALL)
        .recipeType('primitive_oven')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', '#C#')
            .aisle('CCC', 'CAC', 'CAC')
            .aisle('CCC', 'CBC', "#C#")
            .where('C', Predicates.blocks('gtsac:primitive_oven_bricks').setMinGlobalLimited(16)
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.STEAM).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setMaxGlobalLimited(1)))
            .where('A', Predicates.any())
            .where('#', Predicates.any())
            .where('B', Predicates.controller(Predicates.blocks(definition.get())))
        .build())
        .workableCasingModel('kubejs:block/primitive_oven_bricks', 'gtceu:block/machines/electric_furnace');
})

