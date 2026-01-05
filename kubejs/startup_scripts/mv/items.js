StartupEvents.registry('item', event => {
    event.create('gtceu:silicon_rods').texture('gtceu:item/wafers/silicon_rods')
    event.create('gtceu:silicon_chunks').texture('gtceu:item/wafers/silicon_chunks')
    event.create('gtceu:silicon_seed_crystal').texture('gtceu:item/wafers/silicon_seed_crystal')
    event.create('gtceu:quartz_crucible').texture('gtceu:item/wafers/quartz_crucible')
    event.create('gtceu:raw_silicon_wafer').texture('gtceu:item/wafers/raw_silicon_wafer')

    const createExposedWafers = (waferList) => {
        waferList.forEach(wafer => {
            event.create(`gtceu:exposed_${wafer}`).texture(`gtceu:item/wafers/exposed_${wafer}`).tag('forge:exposed_wafer')
        })
    }

    createExposedWafers([
        "ram_wafer",
        "simple_soc_wafer",
        "lpic_wafer",
        "cpu_wafer",
        "ulpic_wafer",
        "ilc_wafer"
    ])
})