StartupEvents.registry('item', event => {
    function Circuit(theme, type, volt, tooltip, color) {
        switch(theme) {
            case 'technologically_superior':
                event.create(`gtsac:${theme}${type}`)
                    .textureJson({ layer0: `gtsac:item/circuits/${theme}_${type}` })
                    .tag(`gtceu:circuits/${volt}`)
                    .tooltip(`§l§${color}${tooltip}`)
                    .tooltip(`§l§${color}${volt.toUpperCase()}-Tier Circuit`)
            break;

            default:
                event.create(`gtsac:${theme}${type}`)
                    .textureJson({ layer0: `gtsac:item/circuits/${theme}_${type}` })
                    .tag(`gtceu:circuits/${volt}`)
                    .tooltip(`§${color}${tooltip}`)
                    .tooltip(`§${color}${volt.toUpperCase()}-Tier Circuit`)
        }    
    }

    function Mainframe(theme, volt, tooltip, color) {
        switch(theme) {
            case 'technologically_superior':
                event.create(`gtsac:${theme}_mainframe`)
                    .textureJson({ layer0: `gtsac:item/circuits/${theme}_mainframe` })
                    .tag(`gtceu:circuits/${volt}`)
                    .tooltip(`§l§${color}${tooltip}`)
                    .tooltip(`§l§${color}${volt.toUpperCase()}-Tier Circuit`)
            break;

            case 'exaprocessor':
                event.create(`gtsac:${theme}_mainframe`)
                    .textureJson({ layer0: `gtsac:item/circuits/${theme}_mainframe` })
                    .tag(`gtceu:circuits/${volt}`)
                    .tooltip(`§${color}${tooltip}`)
                    .tooltip(`§${color}${volt.toUpperCase()}-Tier Circuit`)
            break;

            default:
                event.create(`gtsac:${theme}_processor_mainframe`)
                    .textureJson({ layer0: `gtsac:item/circuits/${theme}_processor_mainframe` })
                    .tag(`gtceu:circuits/${volt}`)
                    .tooltip(`§${color}${tooltip}`)
                    .tooltip(`§${color}${volt.toUpperCase()}-Tier Circuit`)
        }    
    }

    function Unit(theme, tooltip, color) {
        event.create(`gtsac:${theme}_processing_unit`)
            .textureJson({ layer0: `gtsac:item/circuits/${theme}_processing_unit` })
            .tooltip(`§${color}${tooltip}`)
        event.create(`gtsac:${theme}_circuit_board`)
            .textureJson({ layer0: `gtsac:item/circuits/${theme}_circuit_board` })
            .tooltip(`§${color}${tooltip}`)
    }

    Unit('quantum_wetware', 'Quantum Neuro CPU', '7')
    Circuit('quantum_wetware', '_processor', "zpm", 'Wetware... but quantum!', '6')
    Circuit('quantum_wetware', '_processor_assembly', "uv", 'Wetware... but quantum!', '6')
    Circuit('quantum_wetware', '_processor_computer', "uhv", 'Wetware... but quantum!', '6')
    Mainframe('quantum_wetware', "uev", 'Wetware... but quantum!', '6')
 

    Unit('exaprocessor', 'Massive CPU', '7')
    Circuit('exaprocessor', '', "uv", 'Larger density = More computing power', 'c')
    Circuit('exaprocessor', '_assembly', "uhv", 'Larger density = More computing power', 'c')
    Circuit('exaprocessor', '_computer', "uev", 'Larger density = More computing power', 'c')
    Mainframe('exaprocessor', "uiv", 'Larger density = More computing power', 'c')

    Unit('quark_gluon_stabilized', 'Subatomic CPU', '7')
    Circuit('quark_gluon_stabilized', '_processor', "uhv", 'Quite... §oElementary...', '9')
    Circuit('quark_gluon_stabilized', '_processor_assembly', "uev", 'Quite... §oElementary...', '9')
    Circuit('quark_gluon_stabilized', '_processor_computer', "uiv", 'Quite... §oElementary...', '9')
    Mainframe('quark_gluon_stabilized', "uxv", 'Quite... §oElementary...', '9')

    Unit('sub_planckscale', 'Really Small CPU', '7')
    Circuit('sub_planckscale', '_processor', "uev", 'Wait, you can do that?', 'd')
    Circuit('sub_planckscale', '_processor_assembly', "uiv", 'Wait, you can do that?', 'd')
    Circuit('sub_planckscale', '_processor_computer', "uxv", 'Wait, you can do that?', 'd')
    Mainframe('sub_planckscale', "opv", 'Wait, you can do that?', 'd')

    Unit('technologically_superior', 'The Best CPU', '7')
    Circuit('technologically_superior', '_processor', "uiv", '§lThe Best Processor', '8')
    Circuit('technologically_superior', '_processor_assembly', "uxv", '§lThe Best Processor Assembly', '8')
    Circuit('technologically_superior', '_processor_computer', "opv", '§lThe Best Supercomputer', '8')
    Mainframe('technologically_superior', "max", '§lCan run Vanilla Minecraft at 60 FPS!', '8')

   
   
   
   
   
   
    // Universal Circuits
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv"]
    tiers.forEach((universal_circuit) => {
        event.create(`${universal_circuit}_universal_circuit`)
            .tag(`gtceu:circuits/${universal_circuit}`)
            .tag("gtceu:circuits/universal")
            .displayName(`${universal_circuit.toUpperCase()} Universal Circuit`)
            .tooltip("§7A Universal Circuit")
            .textureJson({ layer0: `kubejs:item/circuits/universal/${universal_circuit}_universal_circuit` })
    })





    })