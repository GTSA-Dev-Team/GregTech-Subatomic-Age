
GTCEuStartupEvents.registry('gtceu:material', gtsa => {
    simpleGas(gtsa, 'vinylidene_fluoride', 0x9FBDB2, ['2x carbon', '2x hydrogen', '2x oxygen'])
    simpleGas(gtsa, '1_1_difluoroethane', 0x919AC2, ['2x carbon', '4x hydrogen', '2x fluorine'])
    simpleGas(gtsa, 'purified_vinylidene_fluoride', 0xADCCC1, 'vinylidene_fluoride')
    simpleDust(gtsa, 'ammonium_perfluorooctanoate', 0xA1A1C4, ['7x carbon', '15x fluorine', 'carbon', 'oxygen', 'oxygen', 'nitrogen', '4x hydrogen'])
    simpleDust(gtsa, 'impure_polyvinylidene_fluoride_latex', 0x6D8781, ['polyvinylidene_fluoride', '4x water'])
    simpleDust(gtsa, 'polyvinylidene_fluoride_latex', 0x6D8781, ['polyvinylidene_fluoride', '3x water'])
})