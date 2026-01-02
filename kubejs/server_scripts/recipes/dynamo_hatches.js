ServerEvents.recipes(event => {

    Object.keys(numToTierMap).forEach(key => {
        const name = numToTierMap[key];
        const hasHigherAmpHatches = key >= 4 ? true : false;
        const energyHatchID = "gtceu:" + name + "_energy_output_hatch"

        event.remove({
            output: energyHatchID,
            type: "minecraft:crafting_shaped"
        })

        if (hasHigherAmpHatches) {
            event.remove({
                output: energyHatchID + "_4a"
            })
            event.remove({
                output: energyHatchID + "_16a"
            })
            event.remove({
                output: `gtceu:${name}_substation_output_hatch_64a`
            })
        }
        if (key > 9) return;

        event.recipes.gtceu.assembler(`${name}_dynamo_hatch_4a_recipe`)
            .itemInputs([ `gtceu:${name}_transformer_4a`, `gtceu:${name}_energy_output_hatch`, `2x gtceu:${voltageToWireMap[key]}_quadruple_wire`, `2x gtceu:${voltageToMaterial[key]}_plate` ])
            .itemOutputs(`gtceu:${name}_energy_output_hatch_4a`)
            .duration(5 * 20)
            .EUt(GTValues.VA[key])

        event.recipes.gtceu.assembler(`${name}_dynamo_hatch_16a_recipe`)
            .itemInputs([ `gtceu:${name}_transformer_16a`, `gtceu:${name}_energy_output_hatch_4a`, `2x gtceu:${voltageToWireMap[key]}_octal_wire`, `4x gtceu:${voltageToMaterial[key]}_plate` ])
            .itemOutputs(`gtceu:${name}_energy_output_hatch_16a`)
            .duration(10 * 20)
            .EUt(GTValues.VA[key])
    })
})