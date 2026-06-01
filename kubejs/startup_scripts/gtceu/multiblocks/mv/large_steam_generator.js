GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_steam_generator')
        .category('multiblock')
        .setEUIO('out')
        .setMaxIOSize(0, 0, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

})

GTCEuStartupEvents.registry('gtceu:machine', event =>{
    event.create('large_steam_generator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('large_steam_generator')
        .generator(true)
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("BBB", "BCB", "BBB")
        .aisle("BBB", "DED", "BBB")
        .aisle("BBB", "DED", "BBB")
        .aisle("BBB", "DED", "BBB")
        .aisle("BBB", "B@B", "BBB")
           .where("A", Predicates.blocks("minecraft:air"))
           .where("B", Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE)))
           .where("C", Predicates.abilities(PartAbility.OUTPUT_ENERGY))
           .where("D", Predicates.blocks("gtceu:tempered_glass"))
           .where("E", Predicates.blocks("gtceu:steel_gearbox"))
           .where("@", Predicates.controller(Predicates.blocks(definition.get())))
        .build())
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/generator/large_steam_turbine');


})
