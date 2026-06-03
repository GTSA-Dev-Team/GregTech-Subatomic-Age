

const CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine")

//Custom recipe modifier dependencies
const $GTRecipe = Java.loadClass("com.gregtechceu.gtceu.api.recipe.GTRecipe");
const $MetaMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.MetaMachine");

//Custom temp modifier for gt multis recipe
function TemperatureModifier(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL
    
    if (!machine instanceof $CoilWorkableElectricMultiblockMachine) {
        return $RecipeModifier.nullWrongType($CoilWorkableElectricMultiblockMachine, machine);
    } else {

        let temp = machine.getCoilType().getCoilTemperature()

        let recipeTemp = recipe.data.getInt("RequiredTemp")
        if (recipeTemp > temp) {
            return ModifierFunction.NULL
        }
        return ModifierFunction.IDENTITY
    }
}

//gt recipe type registry
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mana_blast_furnace')
        .category('Mana')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 2, 2) // (1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) // (2)
        .setSound(GTSoundEntries.ARC)
    event.create('mana_generator')
        .category('Mana')
        .setEUIO('in')
        .setMaxIOSize(2, 3, 3, 1) // (1)
        .setProgressBar(GuiTextures.PRIMITIVE_BLAST_FURNACE_PROGRESS_BAR, FillDirection.LEFT_TO_RIGHT) // (2)
        .setSound(GTSoundEntries.BATH)
})

//gt multiblocks registry
GTCEuStartupEvents.registry('gtceu:machine', event => {

    //EMI display
    GTRecipeTypes.get("mana_blast_furnace").addDataInfo((data) => (
		`Temperature: ${data.getInt("RequiredTemp")}K` 
	)) 
    
    event.create("mana_blast_furnace", "multiblock")
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeTypes('mana_blast_furnace')
        .recipeModifiers([(machine, recipe) => TemperatureModifier(machine, recipe),GTRecipeModifiers.PARALLEL_HATCH])
        .appearanceBlock(() => new Block.getBlock("botania:livingrock_bricks"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("abbba", "accca", "accca", "accca", "abbba")
            .aisle("bbbbb", "cdddc", "cdddc", "cdddc", "bbbbb")
            .aisle("bbbbb", "cdedc", "cdedc", "cdedc", "bbfbb")
            .aisle("bbbbb", "cdddc", "cdddc", "cdddc", "bbbbb")
            .aisle("ab@ba", "accca", "accca", "accca", "abbba")
            .where("a", Predicates.blocks("botania:glimmering_livingwood_log"))
            .where("b", Predicates.blocks("botania:livingrock_bricks").setMinGlobalLimited(10)
                .or(Predicates.abilities(PartAbility.INPUT_LASER).setMaxGlobalLimited(1)
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1))
            )
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where("c", Predicates.blocks("botania:mana_glass"))
            .where("d", Predicates.heatingCoils())
            .where("e", Predicates.any())
            .where("f", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel(
            "botania:block/livingrock_bricks",
            "gtceu:block/multiblock/electric_blast_furnace"
        )
    event.create("mana_generator", "multiblock")
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeTypes('mana_generator')
        .recipeModifiers()
        .appearanceBlock(() => new Block.getBlock("botania:livingrock_bricks"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aaa", "bcb", "bcb", "ded")
            .aisle("afa", "chc", "chc", "ece")
            .aisle("a@a", "bcb", "bcb", "ded")
            .where("a", Predicates.blocks("botania:livingrock")
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where("b", Predicates.blocks("botania:glimmering_stripped_livingwood_log"))
            .where("c", Predicates.blocks("botania:mana_glass"))
            .where("d", Predicates.blocks("botania:livingwood_planks_slab"))
            .where("e", Predicates.blocks("botania:livingwood_planks_stairs"))
            .where("f", Predicates.blocks("minecraft:grass_block"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where("h", Predicates.any())
            .build())
        .workableCasingModel(
            "botania:block/livingrock",
            "gtceu:block/multiblock/hpca"
        )
}) 

 