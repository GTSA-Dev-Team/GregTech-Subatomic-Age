GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('latex')
        .color(0xfcdf6c)
        .dust()         
        .components('5x carbon', '8x hydrogen')

    event.create('raw_latex')
        .color(0xFAE689)
        .dust()         
        .components('gtceu:latex')

    event.create('iron_iii_sulfate')
        .color(0xbf7b24)
        .dust()
        .formula("Fe2(SO4)3")

    event.create('red_mud')
        .color(0x992906)
        .fluid()
        .formula("?")

    event.create('primitive_brick')
        .color(0x966e56)
        .dust()
        .components('3x gtceu:clay', '2x gtceu:flint', '3x gtceu:quartz_sand')
})


GTCEuStartupEvents.registry('gtceu:material', event => {
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_FOIL)
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)

    addFluid(GTMaterials.SodiumHydroxide, $GTCEuFluidStorageKeys.LIQUID)
    addFluid(GTMaterials.SiliconDioxide, $GTCEuFluidStorageKeys.LIQUID)
})

const addFluid = (mat, key) => {
    let prop = new $GTCEuFluidProperty();
    prop.getStorage().enqueueRegistration(key, new $GTCEuFluidBuilder());
    mat.setProperty(PropertyKey.FLUID, prop);
}