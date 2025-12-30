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

    event.create('red_mud')
        .color(0x992906)
        .fluid()
        .formula("?")
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