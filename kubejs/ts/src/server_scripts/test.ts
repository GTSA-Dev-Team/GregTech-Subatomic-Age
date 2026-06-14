import { GTMachines, GTRecipeTypes } from "@pts/com/gregtechceu/gtceu/common/data";
import { RecipeJS, RecipesEventJS } from "@pts/dev/latvian/mods/kubejs/recipe";
import { ServerEvents } from "@pts/globals";
import { ResourceLocation } from "@pts/net/minecraft/resources";
import { Items, ItemStack } from "@pts/net/minecraft/world/item";

ServerEvents.recipes((event: RecipesEventJS) => {
    GTRecipeTypes.ALLOY_SMELTER_RECIPES.recipeBuilder(ResourceLocation.fromNamespaceAndPath("gtsac", "test_recipe_question_mark"))
        .inputItems(new ItemStack(Items.STICK))
        .outputItems(new ItemStack(Items.STICK))
        .save(() => null)
    
})