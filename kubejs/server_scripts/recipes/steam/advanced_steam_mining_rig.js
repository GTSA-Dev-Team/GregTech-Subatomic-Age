ServerEvents.recipes(event => {
    event.recipes.gtceu.advanced_steam_mining_rig('steam_mining_cobble')
        .perTick(true).inputFluids('gtceu:steam 128')
        .perTick(false).itemInputs('32x minecraft:cobblestone')
        .itemOutputs('gtceu:raw_pyrite', 'gtceu:raw_tin', 'gtceu:raw_chalcopyrite', 'gtceu:raw_nickel', 'gtceu:raw_lead')
        .duration(60*20)


    event.recipes.gtceu.advanced_steam_mining_rig('steam_mining_sand')
        .perTick(true).inputFluids('gtceu:steam 128')
        .perTick(false).itemInputs('32x minecraft:sand')
        .itemOutputs('gtceu:raw_redstone', 'gtceu:raw_coal', 'gtceu:raw_lapis')
        .duration(60*20)
})