GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('latex')
        .color(0xfcdf6c)
        .dust()         
        .fluid()        
        .formula("(C5H8)n")

    event.create('iron_iii_sulfate')
        .color(0xbf7b24)
        .dust()
        .formula("Fe2(SO4)3")

    event.create('sodium_alluminate')
        .color(0xfcfce3)
        .dust()
        .formula("NaAlO2")

    event.create('red_mud')
        .color(0x992906)
        .fluid()
        .formula("?")

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


GTCEuStartupEvents.registry('gtceu:material', event => {
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_FOIL)
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)

    addFluid(GTMaterials.SodiumHydroxide, $GTCEuFluidStorageKeys.LIQUID)
})

const addFluid = (mat, key) => {
    let prop = new $GTCEuFluidProperty();
    prop.getStorage().enqueueRegistration(key, new $GTCEuFluidBuilder());
    mat.setProperty(PropertyKey.FLUID, prop);
}