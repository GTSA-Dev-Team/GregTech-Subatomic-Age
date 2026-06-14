StartupEvents.registry('item', event => {
    event.create('gtceu:silicon_chunks').texture('gtceu:item/wafers/silicon_chunks')
    event.create('gtceu:silicon_seed_crystal').texture('gtceu:item/wafers/silicon_seed_crystal')
    event.create('gtceu:quartz_crucible').texture('gtceu:item/wafers/quartz_crucible')
    event.create('gtceu:raw_silicon_wafer').texture('gtceu:item/wafers/raw_silicon_wafer')
})

GTCEuStartupEvents.registry('gtceu:material', (event) => {
    GTMaterials.Silicon.addFlags(GTMaterialFlags.GENERATE_ROD)
})