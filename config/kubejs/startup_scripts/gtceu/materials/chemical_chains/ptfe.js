GTCEuStartupEvents.registry('gtceu:material', event =>{
    event.create('hydroxyl_radical')
        .color(0x499AE6)
        .liquid()
        .components('1x gtceu:hydrogen', '1x gtceu:oxygen')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)



    event.create('chlorodifluoromethane')
        .color(0xB0FFD6)
        .liquid()
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)

    event.create('fluorinated_graphite')
        .color(0x4F4F4F)
        .dust()
        .components('1x gtceu:graphite', '1x gtceu:fluorine')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('dichloromethane')
        .color(0xFDC2FF)
        .liquid()
        .components('1x gtceu:carbon', '2x gtceu:hydrogen', '2x gtceu:chlorine')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)

    event.create('carbon_tetrachloride')
        .color(0x46C255)
        .liquid()
        .components('1x gtceu:carbon', '4x gtceu:chlorine')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)

     event.create('chlorinated_methane_mixture')
     .color(0xCF94D1)
     .liquid()
     .components('gtceu:chloromethane', 'gtceu:dichloromethane', 'gtceu:chloroform', 'gtceu:carbon_tetrachloride')
     .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

})