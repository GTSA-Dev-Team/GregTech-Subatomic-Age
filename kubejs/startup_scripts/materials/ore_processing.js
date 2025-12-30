GTCEuStartupEvents.registry('gtceu:material', event => {
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
        .formula('((Fe3O4)V)(PbS)Au?')

    event.create('high_density_crust_sludge')
        .color(0x6E5D5D)
        .dust()
        .formula('(CoAsS)(ZnS)(FeCr2O4)?')

    event.create('crust_waste')
        .color(0x4A4141)
        .liquid()
        .formula('(Na3C2H(H2O2)O6)(KLi3Al4F2O10)(H2O)')
    
})