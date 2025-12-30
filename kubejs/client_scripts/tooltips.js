ItemEvents.tooltip(event => {

    const modsMap = {
        'subtick': ' §aSubtick Parallels§r',
        'batch': ' §cBatch Mode§r',
        'parallel': ' §5Parallel Hatches§r'
    };

    function tooltipGTMulti(item, desc, addInfo, modifiers) {
        const mappedMods = modifiers.map(e => modsMap[e]).join(',')
       
        if(addInfo == '') {
            event.addAdvanced(`gtceu:${item}`, (item, advanced, text) => {
                text.add(1, Text.of(desc))
                text.add(2, Text.of(`Modifiers:${mappedMods}`))
            })
        }
        else {
            event.addAdvanced(`gtceu:${item}`, (item, advanced, text) => {
                text.add(1, Text.of(desc))
                text.add(2, Text.of(addInfo))
                text.add(3, Text.of(`Modifiers:${mappedMods}`))
            })
        }
    }

    tooltipGTMulti('heavy_drilling_rig', "Drills into The Earth's §4crust§r, extracting §9basic resources §7in the process.", "", ['subtick', 'batch'])
    tooltipGTMulti('electric_arc_furnace', 'Using high temperature §eElectric Arcs§r, this machine is able to melt and combine metals into §dstronger materials.', 'For every tier of coils above §6Cupronickel gains §b+2 Parallels§r', ['subtick', 'batch'])
    tooltipGTMulti('component_assembler', '§4The Peak§r of §7Low voltage Technology§r. This Amalgam is able to precisely assemble §bHigher Tier Compoents§r.', 'Has a small chance of producing an §eAdditional Component§r per craft', ['subtick', 'batch'])
    tooltipGTMulti('electric_winding_machine', 'Tightly winds wires around a rod, making §5Sturdy§r §6Coils§r, suitable for §1Industrial Use§r.', '', ['subtick', 'batch'])
    tooltipGTMulti('vacuum_pressure_vessel', 'This fancy machine can §aEfficiently§r create a §9Tightly Sealed§f Vacuum inside it, allowing various §4Industrial§r and §5Chemical§r processes to occur.', '', ['subtick', 'batch'])
})
