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
    Circuit('quantum_wetware', '_processor', "zpm", 'Heisenberg would be Proud!', '6')
    Circuit('quantum_wetware', '_processor_assembly', "uv", 'Heisenberg would be Proud!', '6')
    Circuit('quantum_wetware', '_processor_computer', "uhv", 'Heisenberg would be Proud!', '6')
    Mainframe('quantum_wetware', "uev", 'Heisenberg would be Proud!', '6')
 

    Unit('exaprocessor', 'Massive CPU', '7')
    Circuit('exaprocessor', '', "uv", 'And You know what else is MASSIVE?', 'c')
    Circuit('exaprocessor', '_assembly', "uhv", 'And You know what else is MASSIVE?', 'c')
    Circuit('exaprocessor', '_computer', "uev", 'And You know what else is MASSIVE?', 'c')
    Mainframe('exaprocessor', "uiv", 'And You know what else is MASSIVE?', 'c')

    Unit('sub_planck_scale', 'Really Small CPU', '7')
    Circuit('sub_planck_scale', '_processor', "uhv", 'Let me get my glasses...', 'd')
    Circuit('sub_planck_scale', '_processor_assembly', "uev", 'Let me get my glasses...', 'd')
    Circuit('sub_planck_scale', '_processor_computer', "uiv", 'Let me get my glasses...', 'd')
    Mainframe('sub_planck_scale', "uxv", 'Let me get my glasses...', 'd')

    Unit('temporally_paradoxical', 'Temporal CPU', '7')
    Circuit('temporally_paradoxical', '_processor', "uev", 'Was, Is, and Will Be.', 'd')
    Circuit('temporally_paradoxical', '_processor_assembly', "uiv", 'Was, Is, and Will Be.', 'd')
    Circuit('temporally_paradoxical', '_processor_computer', "uxv", 'Was, Is, and Will Be.', 'd')
    Mainframe('temporally_paradoxical', "opv", 'Was, Is, and Will Be.', 'd')

    Unit('technologically_superior', 'The Best CPU', '7')
    Circuit('technologically_superior', '_processor', "uiv", '§lThe Best Processor', '8')
    Circuit('technologically_superior', '_processor_assembly', "uxv", '§lThe Best Processor Assembly', '8')
    Circuit('technologically_superior', '_processor_computer', "opv", '§lThe Best Supercomputer', '8')
    Mainframe('technologically_superior', "max", '§lThe Definition of Perfection', '8')

   
   
   
   
   
   
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