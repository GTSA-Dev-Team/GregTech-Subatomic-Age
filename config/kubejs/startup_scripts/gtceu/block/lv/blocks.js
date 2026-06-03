StartupEvents.registry('block', event => {
    event.create('gtceu:rotary_kiln_bricks', 'gtceu:active')
        .bloom('gtceu:block/casings/rotary_kiln/rotary_kiln_bricks')
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
})