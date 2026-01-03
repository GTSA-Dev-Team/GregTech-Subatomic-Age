ServerEvents.recipes(event => {
    const generateCatalystBed = (bases) => {
        bases.forEach(base => {
            event.recipes.gtceu.extruder(`unrefined_${base}_catalyst_bed`)
                .itemInputs(`3x gtceu:${base}_dust`)
                .notConsumable("gtceu:bottle_extruder_mold")
                .itemOutputs(`gtceu:unrefined_${base}_catalyst_bed`)
                .duration(20 * 30)
                .EUt(32)
            event.recipes.gtceu.rotary_kiln(`${base}_catalyst_bed`)
                .itemInputs(`gtceu:unrefined_${base}_catalyst_bed`)
                .inputFluids('gtceu:methane 1000')
                .itemOutputs(`gtceu:${base}_catalyst_bed`)
                .duration(20 * 60)
                .EUt(64)
        })
    }

    generateCatalystBed([ "alumina", "carbon", "fluorinated_graphite" ])

    const generateCatalys = (baseToMaterialMap) => {
        baseToMaterialMap.forEach(el => {
            event.shapeless(`gtceu:${el.material}_catalyst`, [ `gtceu:${el.base}_catalyst_bed`, `gtceu:${el.material}_dust` ])
        })
    }

    generateCatalys([
        { material: "cobalt", base: "alumina" },
        { material: "platinum", base: "carbon" },
        { material: "antimony_trifluoride", base: "fluorinated_graphite"}
    ])
})