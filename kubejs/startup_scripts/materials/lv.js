GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('sodium_alluminate')
        .color(0xfcfce3)
        .dust()
        .formula("NaAlO2")  

    event.create('aluminium_hydroxide')
        .color(0x0c015c)
        .dust()
        .formula("Al(OH)3")

    event.create('alumina')
        .color(0xcfcfcf)
        .dust()
        .fluid()
        .formula("Al2O3")

    event.create('cryolite')
        .color(0x007ccc)
        .fluid()
        .formula("Na3AlF6")

    event.create('alumina_cryolite_mixture')
        .color(0x99d6fc)
        .fluid()
        .formula("(Na3AlF6)(Al2O3)")

    event.create('hexafluoroaluminic_acid')
        .color(0x6ca9ff)
        .fluid()
        .formula("H3AlF6")
})