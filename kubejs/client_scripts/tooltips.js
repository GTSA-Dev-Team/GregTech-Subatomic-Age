ItemEvents.tooltip(event => {

    const modsMap = {
        'subtick': ' §aSubtick Parallels§r',
        'batch': ' §cBatch Mode§r',
        'parallel': ' §5Parallel Hatches§r'
    };

    function tooltipGTMulti(item, desc, addInfo, modifiers) {
        const mappedMods = modifiers.map(e => modsMap[e]).join(',')
       
        if(addInfo == '') {
            if(modifiers.length == 0) {
                event.addAdvanced(`gtceu:${item}`, (item, advanced, text) => {
                    text.add(1, Text.of(desc))
                })
            }
            else {
                event.addAdvanced(`gtceu:${item}`, (item, advanced, text) => {
                    text.add(1, Text.of(desc))
                    text.add(2, Text.of(`Modifiers:${mappedMods}`))
                })
            }
        }
        else {
            if(modifiers.length == 0) {
                event.addAdvanced(`gtceu:${item}`, (item, advanced, text) => {
                    text.add(1, Text.of(desc))
                    text.add(2, Text.of(addInfo))
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
    }

    function tooltipSAMulti(item, desc, addInfo, modifiers) {
    const mappedMods = modifiers.map(e => modsMap[e]).join(',')
   
    if(addInfo == '') {
        if(modifiers.length == 0) {
            event.addAdvanced(`gtsac:${item}`, (item, advanced, text) => {
                text.add(1, Text.of(desc))
            })
        }
        else {
            event.addAdvanced(`gtsac:${item}`, (item, advanced, text) => {
                text.add(1, Text.of(desc))
                text.add(2, Text.of(`Modifiers:${mappedMods}`))
            })
        }
    }
    else {
        if(modifiers.length == 0) {
            event.addAdvanced(`gtsac:${item}`, (item, advanced, text) => {
                text.add(1, Text.of(desc))
                text.add(2, Text.of(addInfo))
            })
        }
        else {
            event.addAdvanced(`gtsac:${item}`, (item, advanced, text) => {
                text.add(1, Text.of(desc))
                text.add(2, Text.of(addInfo))
                text.add(3, Text.of(`Modifiers:${mappedMods}`))
            })
        }
    }
}

    tooltipGTMulti('heavy_drilling_rig', "Drills into The Earth's §4crust§r, extracting §9basic resources §rin the process.", "", ['subtick', 'batch'])
    tooltipGTMulti('electric_arc_furnace', 'Using high temperature §eElectric Arcs§r, this machine is able to melt and combine metals into §dstronger materials.', 'For every tier of coils above §6Cupronickel gains §b+2 Parallels§r', ['subtick', 'batch'])
    tooltipGTMulti('component_assembler', '§4The Peak§r of §7Low voltage Technology§r. This Amalgam is able to precisely assemble §bHigher Tier Compoents§r.', 'Has a small chance of producing an §eAdditional Component§r per craft', ['subtick', 'batch'])
    tooltipGTMulti('electric_winding_machine', 'Tightly winds wires around a rod, making §5Sturdy§r §6Coils§r, suitable for §1Industrial Use§r.', '', ['subtick', 'batch'])
    tooltipGTMulti('vacuum_pressure_vessel', 'This fancy machine can §aEfficiently§r create a §9Tightly Sealed§f Vacuum inside it, allowing various §4Industrial§r and §5Chemical§r processes to occur.', '', ['subtick', 'batch'])
    tooltipGTMulti('electric_steel_kiln', 'Need more §8Steel§r\? This §4Behemoth§r can alloy §4Mass Amounts§r of it §aQuickly§r and §bEfficiently§r.', '', ['subtick', 'batch'])
    tooltipGTMulti('mud_pump', 'Uses §1Primitive Methods§r to extract §7Clay§r and §cMud§r out of §2The Ground§r.', '', [])
    tooltipGTMulti('coagulation_tank', '§bRapidly Mixes§r chemicals into §1Water§r, causing them to form §5Small Clumps §fand making their extraction easier in §4Later Processing§r.', '', [])
    tooltipGTMulti('primitive_oven', 'Your first (and simplest) §bMultiblock!§r Uses §8Burnable Fuel§r to §cFire Bricks§r.', '', [])
    tooltipSAMulti('clarifier', 'Separates §2Solid Particles§r from §1Liquids§r via §4Sedimentation§r.', '', ['subtick', 'batch'])
    tooltipGTMulti('filtration_unit', 'Passes §1Liquids§r through a §bFiltration Medium§r, ridding them of §4Unwanted Particles§r.', '', ['subtick', 'batch'])
    tooltipSAMulti('neutralization_tank', 'Mixes §1Chemicals§r together, resulting in a §bLower pH Solution§r.', '', ['subtick', 'batch'])
    tooltipGTMulti('rotary_kiln', 'Heats materials to §6High Temperatures§r in a §eRotating Cylindrical Furnace§r, causing §1Chemical§r and §2Physical§r §cTransformations§r.', '', ['subtick', 'batch'])
    tooltipGTMulti('polymerization_tank', 'Provides a §1Controlled Environment§r inside it, allowing for monomer §6Polymerization§r to happen.', '', ['subtick', 'batch'])
})
