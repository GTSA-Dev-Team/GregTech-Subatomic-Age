ServerEvents.recipes(gtsa => {
    function Casing(casing, plate, frame) {
        gtsa.recipes.gtceu.assembler(casing)
            .itemInputs(`6x gtceu:${plate}_plate`, `gtceu:${frame}_frame`)
            .itemOutputs(`2x gtsac:${casing}_casing`)
            .circuit(6)
            .duration(2.5*20)
            .EUt(16)
    }

    Casing('pressure_resistant', 'niobium_nitride', 'hy_100')
})