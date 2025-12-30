ItemEvents.tooltip(event => {

    function tooltipGTMulti(item, desc, modifiers) {
        event.addAdvanced(`gtceu:${item}`, (item, advanced, text) => {
            text.add(1, Text.of(desc))
            text.add(2, Text.of(modifiers))
        })
    }

    tooltipGTMulti('heavy_drilling_rig', "Drills into The Earth's §4crust§r, extracting §9basic resources §rin the process.", "Modifiers: §aSubtick Parallels§r, §cBatch Mode§r")
})
