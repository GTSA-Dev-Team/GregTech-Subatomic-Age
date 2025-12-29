ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('phenolic_circuit_board')
        .itemInputs('4x gtceu:treated_wood_dust')
        .inputFluids('gtceu:phenol 250')
        .itemOutputs('gtceu:phenolic_circuit_board')
        .duration(7.5*20)
        .EUt(30)

    event.recipes.gtceu.macerator('treated_wood_pulp')
        .itemInputs('gtceu:treated_wood_planks')
        .itemOutputs('1x gtceu:treated_wood_dust')
        .duration(4.9*20)
        .EUt(2)
})