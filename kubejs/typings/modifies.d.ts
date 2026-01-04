declare namespace Special {
    interface GTCEuCustomRecipeBuilder<Name extends string = string> extends Internal.GTRecipeSchema$GTRecipeJS {
        readonly recipeType: Name;

        duration(duration: number|string): this
        data(data: Internal.CompoundTag_): this
        recipeConditions(recipeConditions: Internal.RecipeCondition_[]): this
        inputs(inputs: {[key in any]: any}): this
        tickInputs(tickInputs: {[key in any]: any}): this
        outputs(outputs: {[key in any]: any}): this
        tickOutputs(tickOutputs: {[key in any]: any}): this
        inputChanceLogics(inputChanceLogics: {[key in string]: string}): this
        outputChanceLogics(outputChanceLogics: {[key in string]: string}): this
        tickInputChanceLogics(tickInputChanceLogics: {[key in string]: string}): this
        tickOutputChanceLogics(tickOutputChanceLogics: {[key in string]: string}): this
        category(category: string): this
    }
}

type SAItemIdentifier = `${string}:${string}` | `${number}x ${string}:${string}`;
type SAFluidIdentifier = `${string}:${string}` | `${string}:${string} ${number}`;
type SAIOEnergyStack = number;

type SAInputItem = InputItem_ | SAItemIdentifier | SAItemIdentifier[];
type SAInputFluid = GTRecipeComponents$FluidIngredientJS_ | SAFluidIdentifier | SAFluidIdentifier[];

type SAOutputFluid = Internal.FluidStackJS_ | SAFluidIdentifier | SAFluidIdentifier[];
type SAOutputItem = Internal.ExtendedOutputItem_ | SAItemIdentifier | SAItemIdentifier[];

type SAIOEnergyStack = IOEnergyStack_ | SAIOEnergyStack;

type SAItem = SAInputItem;
type SAFluid = SAInputFluid;
type SAItemOut = SAOutputItem;
type SAFluidOut = SAOutputFluid;

declare namespace Internal {
    interface GTRecipeSchema$GTRecipeJS {
        inputFluids(...arg0: SAInputFluid[]): this;
        outputFluids(...arg0: SAOutputFluid[]): this;

        itemOutputs(...arg0: SAOutputItem[]): this;
        itemInputs(...arg0: SAInputItem[]): this;

        chancedOutput(arg0: SAOutputItem, arg1: number, arg2: number): this;

        EUt(arg0: SAIOEnergyStack): this;
    }
}