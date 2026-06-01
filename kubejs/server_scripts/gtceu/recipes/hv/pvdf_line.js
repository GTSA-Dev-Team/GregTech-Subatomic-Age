ServerEvents.recipes(gtsa => {
    gtsa.recipes.gtceu.rotary_kiln("vdf_pyrolysis")
    .inputFluids('gtceu:1_1_difluoroethane 1000')
    .outputFluids('gtceu:vinylidene_fluoride 1000', 'gtceu:hydrochloric_acid 1000')
    .EUt(480)
    .duration(4*20)
})