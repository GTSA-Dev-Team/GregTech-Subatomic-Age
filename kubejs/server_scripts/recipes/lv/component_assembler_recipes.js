ServerEvents.recipes(event => {
     event.shaped('gtceu:component_assembler', [
         'RCR',
         'VHP',
         'RCR',
     ], { R: "gtceu:lv_robot_arm", C: "#gtceu:circuits/lv", V: "gtceu:lv_conveyor_module", H: "gtceu:lv_assembler", P: "gtceu:lv_electric_piston"})

    const rubbers = {
        "rubber": 144,
        "silicone_rubber": 72,
        "styrene_butadiene_rubber": 36
    }

    function Motor(input1, input2, input3, input4, tier) {
        event.recipes.gtceu.component_assembler(`${tier}_electric_motor`)
            .itemInputs(`2x gtceu:${input1}_double_cable`, `2x gtceu:${input2}_rod`, `gtceu:magnetic_${input3}_rod`, `4x gtceu:${input4}_double_wire`)
            .inputFluids('gtceu:soldering_alloy 72')
            .itemOutputs(`gtceu:${tier}_electric_motor`)
            .chancedOutput(`gtceu:${tier}_electric_motor`, 1000, 0)
            .duration(15*20)
            .EUt(120)
    }
    
    function Piston(input1, input2, tier) {
        event.recipes.gtceu.component_assembler(`${tier}_electric_piston`)
            .itemInputs(`2x gtceu:${input1}_rod`, `2x gtceu:${input2}_single_cable`, `3x gtceu:${input1}_plate`, `gtceu:small_${input1}_gear`, `gtceu:${tier}_electric_motor`)
            .inputFluids('gtceu:soldering_alloy 72')
            .itemOutputs(`gtceu:${tier}_electric_piston`)
            .chancedOutput(`gtceu:${tier}_electric_piston`, 1000, 0)
            .duration(15*20)
            .EUt(120)
    }

    function Pump(input1, input2, input3, tier) {
        for (const rubber in rubbers) {
            event.recipes.gtceu.component_assembler(`${tier}_electric_pump_${rubber}`)
                .itemInputs(`gtceu:${input1}_single_cable`, `gtceu:${input2}_normal_fluid_pipe`, `gtceu:${input3}_screw`, `gtceu:${input3}_rotor`, `gtceu:${tier}_electric_motor`)
                .inputFluids('gtceu:soldering_alloy 72', `gtceu:${rubber} ${rubbers[rubber]}`)
                .itemOutputs(`gtceu:${tier}_electric_pump`)
                .chancedOutput(`gtceu:${tier}_electric_pump`, 1000, 0)
                .duration(15*20)
                .EUt(120)
        }
    }

    function Conveyor(input1, tier) {
        for (const rubber in rubbers) {
            event.recipes.gtceu.component_assembler(`${tier}_conveyor_module_${rubber}`)
                .itemInputs(`gtceu:${input1}_single_cable`, `2x gtceu:${tier}_electric_motor`)
                .inputFluids('gtceu:soldering_alloy 72', `gtceu:${rubber} ${6 * rubbers[rubber]}`)
                .itemOutputs(`gtceu:${tier}_conveyor_module`)
                .chancedOutput(`gtceu:${tier}_conveyor_module`, 1000, 0)
                .duration(15*20)
                .EUt(120)
        }
    }

    function RobotArm(input1, input2, tier) {
        event.recipes.gtceu.component_assembler(`${tier}_robot_arm`)
            .itemInputs(`3x gtceu:${input1}_single_cable`, `2x gtceu:${input2}_rod`, `2x gtceu:${tier}_electric_motor`, `gtceu:${tier}_electric_piston`, `#gtceu:circuits/${tier}`)
            .inputFluids('gtceu:soldering_alloy 72')
            .itemOutputs(`gtceu:${tier}_robot_arm`)
            .chancedOutput(`gtceu:${tier}_robot_arm`, 1000, 0)
            .duration(15*20)
            .EUt(120)
    }

    function Emitter(input1, input2, input3, tier) {
        event.recipes.gtceu.component_assembler(`${tier}_emitter`)
            .itemInputs(`4x gtceu:${input1}_rod`, `2x gtceu:${input2}_single_cable`, input3, `2x #gtceu:circuits/${tier}`)
            .inputFluids('gtceu:soldering_alloy 72')
            .itemOutputs(`gtceu:${tier}_emitter`)
            .chancedOutput(`gtceu:${tier}_emitter`, 1000, 0)
            .duration(15*20)
            .EUt(120)
    }

    function Sensor(input1, input2, input3, tier) {
        event.recipes.gtceu.component_assembler(`${tier}_sensor`)
            .itemInputs(`1x gtceu:${input1}_rod`, `4x gtceu:${input2}_plate`, input3, `#gtceu:circuits/${tier}`)
            .inputFluids('gtceu:soldering_alloy 72')
            .itemOutputs(`gtceu:${tier}_sensor`)
            .chancedOutput(`gtceu:${tier}_sensor`, 1000, 0)
            .duration(15*20)
            .EUt(120)
    }   

    function FieldGen(input1, input2, input3, tier) {
        event.recipes.gtceu.component_assembler(`${tier}_field_generator`)
            .itemInputs(input1, `2x gtceu:double_${input2}_plate`, `4x gtceu:${input3}_quadruple_wire`, `2x #gtceu:circuits/${tier}`)
            .inputFluids('gtceu:soldering_alloy 72')
            .itemOutputs(`gtceu:${tier}_field_generator`)
            .chancedOutput(`gtceu:${tier}_field_generator`, 1000, 0)
            .duration(15*20)
            .EUt(120)
    }   

    const voltages = ['mv', 'hv', 'ev', 'iv']
    const components = ['electric_motor', 'electric_piston', 'electric_pump', 'conveyor_module', 'robot_arm', 'emitter', 'sensor', 'field_generator']
    voltages.forEach((tier) => {
        components.forEach((component) => {
            event.remove({
                output: `gtceu:${tier}_${component}`
            })
        })
    })

    
    Motor('copper', 'aluminium', 'steel', 'cupronickel', 'mv')
    Motor('silver', 'stainless_steel', 'steel', 'electrum', 'hv')
    Motor('aluminium', 'titanium', 'neodymium', 'kanthal', 'ev')
    Motor('tungsten', 'tungsten_steel', 'neodymium', 'graphene', 'iv')

    Piston('aluminium', 'copper', 'mv')
    Piston('stainless_steel', 'silver', 'hv')
    Piston('titanium', 'aluminium', 'ev')
    Piston('tungsten_steel', 'tungsten', 'iv')

    Pump('copper', 'steel', 'bronze', 'mv')
    Pump('gold', 'stainless_steel', 'steel', 'hv')
    Pump('aluminium', 'titanium', 'stainless_steel', 'ev')
    Pump('tungsten', 'tungsten_steel', 'tungsten_steel', 'iv')

    Conveyor('copper', 'mv')
    Conveyor('gold', 'hv')
    Conveyor('aluminium', 'ev')
    Conveyor('tungsten', 'iv')

    RobotArm('copper', 'aluminium', 'mv')
    RobotArm('gold', 'stainless_steel', 'hv')
    RobotArm('aluminium', 'titanium', 'ev')
    RobotArm('tungsten', 'tungsten_steel', 'iv')
    
    Emitter('gold', 'copper', 'gtceu:flawless_emerald_gem', 'mv')
    Emitter('chromium', 'gold', 'minecraft:ender_eye', 'hv')
    Emitter('platinum', 'aluminium', 'gtceu:quantum_eye', 'ev')
    Emitter('iridium', 'tungsten', 'gtceu:quantum_star', 'iv')

    Sensor('gold', 'aluminium', 'gtceu:flawless_emerald_gem', 'mv')
    Sensor('chromium', 'stainless_steel', 'minecraft:ender_eye', 'hv')
    Sensor('platinum', 'titanium', 'gtceu:quantum_eye', 'ev')
    Sensor('iridium', 'tungsten_steel', 'gtceu:quantum_star', 'iv')

    FieldGen('minecraft:ender_eye', 'aluminium', 'magnesium_diboride', 'mv')
    FieldGen('gtceu:quantum_eye', 'stainless_steel', 'mercury_barium_calcium_cuprate', 'hv')
    FieldGen('minecraft:nether_star', 'titanium', 'uranium_triplatinum', 'ev')
    FieldGen('gtceu:quantum_star', 'tungsten_steel', 'samarium_iron_arsenic_oxide', 'iv')
})