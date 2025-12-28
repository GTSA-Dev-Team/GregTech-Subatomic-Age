ServerEvents.recipes(event => {
    event.shaped('gtceu:heavy_drilling_rig', [
    'CPC',
    'VHV',
    'MDM',
], { P: "gtceu:lv_pump", C: "#gtceu:circuits/lv", V: "gtceu:lv_conveyor_module", H: "gtceu:lv_miner", M: "gtceu:lv_electric_motor", D: "gtceu:steel_drill_head"})
    event.recipes.gtceu.heavy_drilling_rig('crude_ore_slurry')
        .chancedInput('gtceu:steel_drill_head', 2000, 0)
        .inputFluids('gtceu:drilling_fluid 4000')
        .outputFluidsRanged('gtsac:crude_ore_slurry', 500, 1000)
        .duration(15*20)
        .EUt(64)
})