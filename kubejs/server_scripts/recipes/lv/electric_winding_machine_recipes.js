ServerEvents.recipes(event => {
     event.shaped('gtceu:electric_winding_machine', [
     'CRC',
     'VHP',
     'CRC',
 ], { R: "gtceu:lv_robot_arm", C: "#gtceu:circuits/lv", V: "gtceu:steel_rod", H: "gtceu:lv_assembler", P: "gtceu:lv_electric_piston"})
    
    const tiers = new Map([
        ['lv', 0],
        ['mv', 1],
        ['hv', 2],
        ['ev', 3],
        ['iv', 4],
        ['luv', 5],
        ['zpm', 6] ,
        ['uv', 7],      
    ]);

    const coil_mats = ['cupronickel', 'kanthal', 'nichrome', 'rtm_alloy', 'hssg', 'naquadah', 'trinium', 'tritanium'];
    
    const voltToFineWire = {
        'lv': 'gtceu:fine_steel_wire',
        'mv': 'gtceu:fine_aluminium_wire',
        'hv': 'gtceu:fine_black_steel_wire',
        'ev': 'gtceu:fine_platinum_wire',
        'iv': 'gtceu:fine_iridium_wire',
        'luv': 'gtceu:fine_osmiridium_wire',
        'zpm': 'gtceu:fine_europium_wire',
        'uv': 'gtceu:fine_tritanium_wire'
    }

    const tierLvToUv = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv']

    const tierToMagRodMap = {
    'ulv': 'gtceu:magnetic_iron_rod',
    'lv': 'gtceu:magnetic_steel_rod',
    'mv': 'gtceu:magnetic_steel_rod',
    'hv': 'gtceu:magnetic_steel_rod',
    'ev': 'gtceu:magnetic_neodymium_rod',
    'iv': 'gtceu:magnetic_neodymium_rod',
    'luv': 'gtceu:magnetic_samarium_rod',
    'zpm': 'gtceu:magnetic_samarium_rod',
    'uv': 'gtceu:magnetic_samarium_rod',
    }

   function Coil(wire, foil, frame, fluid, voltage) {
        event.recipes.gtceu.electric_winding_machine(`${wire}_coil_block`)
            .itemInputs(`8x gtceu:${wire}_double_wire`, `8x gtceu:${foil}_foil`, `gtceu:${frame}_frame`)
            .inputFluids(`gtceu:${fluid} 288`)
            .itemOutputs(`gtceu:${wire}_coil_block`)
            .duration(30*20 + 200 * tiers.get(voltage) )
            .EUt(0.94 * 32 * (4 ** tiers.get(voltage)))
   }

   
   coil_mats.forEach((mat) => {
    event.remove({
        output: `gtceu:${mat}_coil_block`
    })
   })

   

   Coil('cupronickel', 'bronze', 'steel', 'tin_alloy', 'lv')
   Coil('kanthal', 'aluminium', 'steel', 'copper', 'mv')
   Coil('nichrome', 'stainless_steel', 'steel', 'aluminium', 'hv')
   Coil('rtm_alloy', 'vanadium_steel', 'steel', 'nichrome', 'ev')
   Coil('hssg', 'tungsten_carbide', 'steel', 'tungsten', 'iv')
   Coil('naquadah', 'osmium', 'steel', 'tungsten_steel', 'luv')
   Coil('trinium', 'enriched_naquadah', 'steel', 'naquadah', 'zpm')
   Coil('tritanium', 'naquadria', 'steel', 'trinium', 'uv')

   tierLvToUv.forEach(voltage => {
    event.remove({
        output: `gtceu:${voltage}_voltage_coil`
    })
    event.recipes.gtceu.electric_winding_machine(`${voltage}_voltage_coil`)
        .itemInputs(tierToMagRodMap[voltage])
        .itemInputs(`16x ${voltToFineWire[voltage]}`)
        .inputFluids(`gtceu:soldering_alloy 288`)
        .itemOutputs(`gtceu:${voltage}_voltage_coil`)
        .duration(20 * 10 * (tiers.get(voltage) + 1))
        .EUt(0.94 * 32 * (4**tiers.get(voltage)))
   })

   
   
})