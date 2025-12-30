GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('Ferrochromium')
        .color(0xFFE8E8)
        .dust()                 
        .components('1x gtceu:hematite', '1x gtceu:chromium')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)

    event.create('ferromanganese')
        .color(0x8F833C)
        .dust()
        .components('1x gtceu:iron', '1x gtceu:manganese')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)

    event.create('high_carbon_stainless_steel')
        .color(0xFFD966)
        .liquid(1924)
        .formula('Fe7Cr2MnC?')

    event.create('clean_stainless_steel')
        .color(0xFFEBA3)
        .liquid(2645)
        .formula('Fe7Cr2MnC')

    event.create('ultra_low_carbon_stainless_steel')
        .color(0xFFF6CF)
        .liquid(2532)
        .formula('Fe7Cr2Mn2')

    event.create('manganese_oxide')
        .color(0x333333)
        .dust()
        .components('1x gtceu:manganese', '1x gtceu:oxygen')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)

    event.create('chemically_final_molten_stainless_steel')
        .color(0xFFFAE0)
        .liquid(2485)
        .formula('Fe7Cr2Mn')

    event.create('iron_oxide')
        .color(0x000000)
        .dust()
        .components('1x gtceu:iron', '1x gtceu:oxygen')
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)

     event.create('oxide_slag')
        .color(0x6B6B6B)
        .dust()
        .components('1x gtceu:iron_oxide', '1x gtceu:silicon_dioxide', '1x gtceu:manganese_oxide')
    
})