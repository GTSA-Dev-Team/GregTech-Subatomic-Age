ServerEvents.recipes(event => {
    event.remove({
        output: Fluid.of('gtceu:polytetrafluoroethylene'),
    })

    event.remove({
        output: Fluid.of('gtceu:tetrafluoroethylene')
    })
    
    event.remove({
        output: Fluid.of('gtceu:chloroform')
    })

    event.recipes.gtceu.large_chemical_reactor('tfe_lcr')
        .inputFluids('gtceu:hydrofluoric_acid 4000', 'gtceu:methane 2000', 'gtceu:chlorine 12000')
        .outputFluids('gtceu:tetrafluoroethylene 1000', 'gtceu:hydrochloric_acid 12000')
        .circuit(24)
        .duration(27*20)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.polymerization_tank('ptfe')
        .inputFluids('gtceu:tetrafluoroethylene 144', 'gtceu:hydrogen_peroxide 1000')
        .outputFluids('gtceu:polytetrafluoroethylene 216', 'gtceu:hydroxyl_radical 2000')
        .duration(45*20)
        .EUt(480)

    event.recipes.gtceu.rotary_kiln('tfe')
        .inputFluids('gtceu:chlorodifluoromethane 2000')
        .outputFluids('gtceu:tetrafluoroethylene 1000', 'gtceu:hydrochloric_acid 2000')
        .duration(6*20)
        .EUt(480)

    event.recipes.gtceu.fixed_bed_reactor('chlorodifluoromethane')
        .inputFluids('gtceu:hydrofluoric_acid 2000', 'gtceu:chloroform 1000')
        .notConsumable('gtceu:antimony_trifluoride_catalyst')
        .outputFluids('gtceu:chlorodifluoromethane 2000', 'gtceu:hydrochloric_acid 2000')
        .duration(12*20)
        .EUt(480)

    event.recipes.gtceu.distillation_tower('chloromixture_distiling')
        .inputFluids('gtceu:chlorinated_methane_mixture 1000')
        .outputFluids('gtceu:carbon_tetrachloride 200', 'gtceu:chloroform 400', 'gtceu:dichloromethane 250', 'gtceu:chloromethane 150')
        .duration(18*20)
        .EUt(480)

    event.recipes.gtceu.cstr('chloromixture_making')
        .inputFluids('gtceu:methane 1000', 'gtceu:chlorine 2000')
        .outputFluids('gtceu:chlorinated_methane_mixture 1000', 'gtceu:hydrochloric_acid 1000')
        .duration(14*20)
        .EUt(120)
})