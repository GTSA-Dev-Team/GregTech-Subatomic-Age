GTCEuStartupEvents.registry('gtceu:material', event => {
    
    //Crust drill materials
    event.create('crude_ore_slurry')
        .color(0x423838)
        .liquid()
        .formula('???')

    event.create('clean_ore_slurry')
        .color(0x695858)
        .liquid()
        .formula('??')

    event.create('refined_ore_slurry')
        .color(0xA37A7A)
        .liquid()
        .formula('?')

    event.create('low_density_crust_sludge')
        .color(0x8A6A6A)
        .dust()                
        .components('gtceu:vanadium_magnetite', 'gtceu:galena', 'gtceu:gold', 'gtceu:refined_ore_slurry')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('high_density_crust_sludge')
        .color(0x6E5D5D)
        .dust()
        .components('gtceu:cobaltite', 'gtceu:sphalerite', 'gtceu:chromite', 'gtceu:refined_ore_slurry')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('crust_waste')
        .color(0x4A4141)
        .liquid()
        .components('gtceu:trona', 'gtceu:lepidolite', 'gtceu:water')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    //Mantle drill materials

    event.create('magnesium_rich_oxide_mixture')
        .color(0xA0ADAD)
        .liquid(3157)
        .components('gtceu:olivine', 'gtceu:crude_ore_slurry')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('neutralized_inane_oxide_mixture')
        .color(0xADC4C4)
        .liquid(2933)
        .components('gtceu:crust_waste', 'gtceu:clean_ore_slurry')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('dissolved_inane_oxide_mixture')
        .color(0xDAF2F2)
        .liquid(2732)
        .components('gtceu:magnesia', 'gtceu:bauxite', 'gtceu:silicon_dioxide', 'gtceu:iron_oxide')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('inchoate_mantle_slurry')
        .color(0x4A1106)
        .liquid(3234)
        .formula('*?*?*?*')

    event.create('purified_mantle_slurry')
        .color(0x70200F)
        .liquid(3123)
        .formula('???')

    event.create('impurity_bristled_valuable_oxide_slurry')
        .color(0x175452)
        .liquid(2937)
        .formula('(???)**O**')

    event.create('leached_valuable_oxide_slurry')
        .color(0x1F6966)
        .liquid(2582)
        .formula('(???)**O**')

    event.create('partially_reduced_valuable_oxide_slurry')
        .color(0x348C88)
        .liquid(2359)
        .formula('(???)*O*')

    event.create('carbon_reduced_valuable_oxide_slurry')
        .color(0x50B5B0)
        .liquid(2043)
        .components('gtceu:tantalite', 'gtceu:tricalcium_phosphate', 'gtceu:pyrolusite', 'gtceu:wulfenite')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('hydrogen_reduced_valuable_oxide_slurry')
        .color(0x50B55F)
        .liquid(2857)
        .components('gtceu:scheelite', 'gtceu:pitchblende', 'gtceu:tungstate', 'gtceu:uraninite')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('sparse_valuable_oxide_slurry')
        .color(0x64E89D)
        .liquid(2749)
        .components('gtceu:ilmenite', 'gtceu:monazite')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('unrefined_sulfuric_mineral_slurry')
        .color(0x76782B)
        .liquid(2816)
        .formula('(???)**S**O')

    event.create('sulfuric_mineral_froth')
        .color(0x8E9137)
        .liquid(2539)
        .formula('(???)*S*O')

    event.create('desulfurized_sulfuric_mineral_froth')
        .color(0xBCBF41)
        .liquid(2391)
        .formula('(???)O')

    event.create('reduced_sulfuric_mineral_froth')
        .color(0xDBDE43)
        .liquid(2084)
        .components('gtceu:pyrite', 'gtceu:cinnabar', 'gtceu:stibnite', 'gtceu:barite', 'gtceu:molybdenite', 'gtceu:cooperite')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('native_element_slurry')
        .color(0x092E00)
        .liquid(3067)
        .formula('E**')

    event.create('dirty_magnetic_element_slurry')
        .color(0x002E28)
        .liquid(2934)
        .formula('mE**')

    event.create('low_purity_magnetic_element_concentrate')
        .color(0x005C4E)
        .dust()
        .formula('mE*')

    event.create('high_purity_magnetic_element_concentrate')
        .color(0x00947A)
        .dust()
        .formula('~mE~')

    event.create('dirty_heavy_element_slurry')
        .color(0x1F2E00)
        .liquid(2881)
        .formula('hE**')

    event.create('low_purity_heavy_element_concentrate')
        .color(0x3F5C00)
        .dust()
        .formula('hE**')

    event.create('high_purity_heavy_element_concentrate')
        .color(0x547A00)
        .dust()
        .formula('~hE~')

    event.create('strongly_bonded_carbide_fluoride_slurry')
        .color(0x402400)
        .liquid(3023)
        .formula('**C?F?**')

    event.create('partially_dissolved_carbide_fluoride_slurry')
        .color(0x703C00)
        .liquid(2874)
        .formula('*C?F?*')

    event.create('dissolved_fluoride_slurry')
        .color(0xA15600)
        .liquid(2713)
        .formula('F?')

    event.create('dry_fluoride_slurry')
        .color(0xD17000)
        .liquid(2394)
        .formula('~F?~')

    event.create('mantle_waste')
        .color(0x421E1E)
        .liquid(2048)
        .formula('?M?')

    event.create('sodium_ethyl_xanthate')
        .color(0xD18400)
        .dust()

    
})