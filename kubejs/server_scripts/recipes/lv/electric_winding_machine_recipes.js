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



   
   
})