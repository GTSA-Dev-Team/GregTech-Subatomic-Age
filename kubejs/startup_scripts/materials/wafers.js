GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('impure_trichlorosilane')
        .color(0xfeffcb)
        .liquid()
        .formula('(SiHCl3)(SiCl4)(SiH2Cl2)(SiCl2H2)(H2)')

    event.create('trichlorosilane')
        .color(0xffffde)
        .liquid()
        .formula('SiHCl3')

    event.create('silicon_tetrachloride')
        .color(0xffffe3)
        .liquid()
        .formula('SiCl4')

    event.create('dichlorosilane')
        .color(0xfeff8f)
        .liquid()
        .components('gtceu:silicon', '2x gtceu:hydrogen', '2x gtceu:chlorine')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)

    event.create('metallurgical_grade_silicon')
        .color(0x474747)
        .dust()
        .formula('Si')

    event.create('polysilicon')
        .color(0x3d3d3d)
        .liquid()
        .formula('Si')

    event.create('wafer_treatment_acid')
        .color(0x00702a)
        .liquid()
        .components('1x gtceu:hydrofluoric_acid', '1x gtceu:hydrochloric_acid')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
})