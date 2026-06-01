//priority: 10

GTCEuStartupEvents.registry('gtceu:material', gtsa => {
    gtsa.create("polyvinylidene_fluoride")
    .polymer()
    .liquid(new GTFluidBuilder())
    .fluidPipeProperties(1443, 110, true, true, false, false)
    .color(0x98B5AE).secondaryColor(0xFFFFFF)
    .iconSet("dull")
    .components('2x carbon', '2x hydrogen', '2x oxygen')
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.DISABLE_DECOMPOSITION)
})