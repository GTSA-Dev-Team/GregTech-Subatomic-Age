GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('energy_output_hatch_4a', 'custom')
        .tiers([ 0, 1, 2, 3 ])
        .machine((holder, tier, tankScaling) => new $GTCEuEnergyHatchPartMachine(holder, tier, $IO.OUT, 4, tankScaling))
        .definition((tier, builder) => {
            builder.tier(tier)
                .langValue(GTValues.VNF[tier] + " 4A Dynamo Hatch")
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.OUTPUT_ENERGY)
                .modelProperty($GTMachineModelProperties.IS_FORMED)
                .tooltips(Component.translatable("gtceu.universal.tooltip.voltage_out",
                        $GTCEuFormattingUtil.formatNumbers(GTValues.V[tier]), GTValues.VNF[tier]),
                        Component.translatable("gtceu.universal.tooltip.amperage_out", 4),
                        Component.translatable("gtceu.universal.tooltip.energy_storage_capacity",
                                $GTCEuFormattingUtil
                                        .formatNumbers($GTCEuEnergyHatchPartMachine.getHatchEnergyCapacity(tier, 4))),
                        Component.translatable("gtceu.machine.energy_hatch.output_hi_amp.tooltip"))
                .model(GTMachineModels.createOverlayTieredHullMachineModel(new ResourceLocation("gtceu", "block/machine/part/energy_output_hatch_4a")))
        })
    event.create('energy_output_hatch_16a', 'custom')
        .tiers([ 0, 1, 2, 3 ])
        .machine((holder, tier, tankScaling) => new $GTCEuEnergyHatchPartMachine(holder, tier, $IO.OUT, 16, tankScaling))
        .definition((tier, builder) => {
            builder.tier(tier)
                .langValue(GTValues.VNF[tier] + " 16A Dynamo Hatch")
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.OUTPUT_ENERGY)
                .modelProperty($GTMachineModelProperties.IS_FORMED)
                .tooltips(Component.translatable("gtceu.universal.tooltip.voltage_out",
                        $GTCEuFormattingUtil.formatNumbers(GTValues.V[tier]), GTValues.VNF[tier]),
                        Component.translatable("gtceu.universal.tooltip.amperage_out", 16),
                        Component.translatable("gtceu.universal.tooltip.energy_storage_capacity",
                                $GTCEuFormattingUtil
                                        .formatNumbers($GTCEuEnergyHatchPartMachine.getHatchEnergyCapacity(tier, 16))),
                        Component.translatable("gtceu.machine.energy_hatch.output_hi_amp.tooltip"))
                .model(GTMachineModels.createOverlayTieredHullMachineModel(new ResourceLocation("gtceu", "block/machine/part/energy_output_hatch_16a")))
        })
    event.create('rotor_holder', 'custom')
        .tiers([0, 1, 2])
        .machine((holder, tier, tankScaling) => new $GTCEuRotorHolderPartMachine(holder, tier))
        .definition((tier, builder) => {
                builder.tier(tier)
                        .langValue(GTValues.VNF[tier] + " Rotor Holder")
                        .rotationState(RotationState.ALL)
                        .abilities(PartAbility.ROTOR_HOLDER)
                        .modelPropertyBool($GTMachineModelProperties.IS_FORMED, false)
                        .modelPropertyBool($GTMachineModelProperties.HAS_ROTOR, false)
                        .modelPropertyBool($GTMachineModelProperties.IS_ROTOR_SPINNING, false)
                        .modelPropertyBool($GTMachineModelProperties.IS_EMISSIVE_ROTOR, false)
                        .model(GTMachineModels.createRotorHolderModel())
                        .tooltips(Component.translatable("gtceu.part_sharing.disabled"))
        })
})