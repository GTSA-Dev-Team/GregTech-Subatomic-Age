ServerEvents.recipes(gtsa => {
    gtsa.recipes.gtceu.large_steam_generator('steam')
        .inputFluids('gtceu:steam 10240')
        .outputFluids('gtceu:distilled_water 64')
        .duration(30)
        .EUt(-512)
        
})