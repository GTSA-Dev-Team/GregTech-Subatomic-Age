ServerEvents.recipes(gtsa => {
    tiers.forEach(tier => {
        if (tier == 'max') return;
        
        gtsa.recipes.gtceu.assembler(`${tier}_universal_circuit`)
        .itemInputs(`#gtceu:circuits/${tier}`)
        .itemOutputs(`gtsac:${tier}_universal_circuit`)
        .duration(20)
        .EUt(24)
        .circuit(32)
    })
})