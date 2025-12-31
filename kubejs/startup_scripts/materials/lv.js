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

    event.create('benzaldehyde')
        .color(0xf7ffa1)
        .fluid()
        .formula("C7H6O")

    event.create('aniline')
        .color(0xeefa0e)
        .fluid()
        .formula("C6H5NH2")

    event.create('benzylideneimine')
        .color(0xeef0cf)
        .fluid()
        .formula("C13H10N")

    event.create('benzylideneimine_ethanol_solution')
        .color(0xeb927c)
        .fluid()
        .formula("(C13H10N)(C2H5OH)")

    event.create('inactive_dichlorido_bis_n_benzylideneaniline_iron_ii')
        .color(0x453a37)
        .fluid()
        .formula("Fe(C26H20N2Cl2)")

    event.create('dichlorido_bis_n_benzylideneaniline_iron_ii_catalyst')
        .color(0x948581)
        .dust()
        .formula("Fe(C26H20N2Cl2)")
})