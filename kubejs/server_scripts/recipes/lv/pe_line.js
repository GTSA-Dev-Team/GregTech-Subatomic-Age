ServerEvents.recipes(event => {
    event.remove({
        type: "gtceu:chemical_reactor",
        output: Fluid.of("gtceu:polyethylene")
    })

    event.remove({
        type: "gtceu:distillery",
        output: Fluid.of("gtceu:ammonia", 100)
    })

    event.remove({
        output: Fluid.of("gtceu:ethanol", 600),
        input: Fluid.of("gtceu:biomass", 1000)
    })

    event.recipes.gtceu.distillery('ethanol_biomass_distillation')
        .inputFluids(Fluid.of("gtceu:biomass", 1000))
        .circuit(1)
        .outputFluids(Fluid.of("gtceu:ethanol", 600))
        .itemOutputs("gtceu:wood_dust")
        .duration(20 * 10)
        .EUt(32)

    event.shaped('gtceu:polymerization_tank', [
        'RRR',
        'PHP',
        'ECE'
    ], {
        R: 'gtceu:steel_rotor',
        P: 'gtceu:lv_electric_pump',
        H: 'gtceu:lv_machine_hull',
        E: '#gtceu:circuits/lv',
        C: 'gtceu:tin_single_cable'
    })

    event.recipes.gtceu.distillery('ammonia_synthesis')
        .circuit(5)
        .inputFluids("gtceu:fermented_biomass 1000")
        .outputFluids("gtceu:ammonia 100")
        .itemOutputs("gtceu:fertilizer")
        .duration(10 * 2.5)
        .EUt(32)

    event.recipes.gtceu.fixed_bed_reactor('benzaldehyde_synthesis')
        .notConsumable("gtceu:cobalt_catalyst")
        .perTick(true).inputFluids([ "gtceu:toluene 10", "gtceu:air 10" ])
        .perTick(false).outputFluids("gtceu:benzaldehyde 1000", "minecraft:water 1000")
        .duration(20 * 5)
        .EUt(32)

    event.recipes.gtceu.fixed_bed_reactor('aniline_synthesis')
        .notConsumable("gtceu:platinum_catalyst")
        .perTick(true).inputFluids([ "gtceu:benzaldehyde 10", "gtceu:ammonia 10", "gtceu:hydrogen 20" ])
        .perTick(false).outputFluids("gtceu:aniline 1000", "minecraft:water 1000")
        .duration(20 * 5)
        .EUt(32)

    event.recipes.gtceu.cstr('benzylideneimine_synthesis')
        .inputFluids([ "gtceu:benzaldehyde 50", "gtceu:aniline 50" ])
        .outputFluids([ "gtceu:benzylideneimine 75", "minecraft:water 25" ])
        .duration(5)
        .EUt(32)

    event.recipes.gtceu.mixer('benzylideneimine_ethanol_solution_mixing')
        .inputFluids([ "gtceu:ethanol 50", "gtceu:benzylideneimine 100" ])
        .outputFluids("gtceu:benzylideneimine_ethanol_solution 150")
        .duration(20 * 5)
        .EUt(32)

    event.recipes.gtceu.cstr('inactive_dichlorido_bis_n_benzylideneaniline_iron_ii_synthesis')
        .inputFluids([ "gtceu:iron_ii_chloride 50", "gtceu:benzylideneimine_ethanol_solution 150" ])
        .outputFluids("gtceu:ethanol 50", "gtceu:inactive_dichlorido_bis_n_benzylideneaniline_iron_ii 150")
        .duration(5)
        .EUt(32)

    event.recipes.gtceu.rotary_kiln('dichlorido_bis_n_benzylideneaniline_iron_ii_catalyst')
        .inputFluids("gtceu:inactive_dichlorido_bis_n_benzylideneaniline_iron_ii 2000", "gtceu:methane 1000")
        .itemOutputs("gtceu:dichlorido_bis_n_benzylideneaniline_iron_ii_catalyst_dust")
        .duration(20 * 60)
        .EUt(128)

    event.recipes.gtceu.polymerization_tank('ethylene_polimerization')
        .notConsumable("gtceu:dichlorido_bis_n_benzylideneaniline_iron_ii_catalyst_dust")
        .inputFluids("gtceu:air 1000", "gtceu:ethylene 144")
        .outputFluids("gtceu:polyethylene 144")
        .duration(20 * 8)
        .EUt(32)

    event.recipes.gtceu.polymerization_tank('ethylene_polimerization_oxygen')
        .notConsumable("gtceu:dichlorido_bis_n_benzylideneaniline_iron_ii_catalyst_dust")
        .inputFluids("gtceu:oxygen 1000", "gtceu:ethylene 144")
        .outputFluids("gtceu:polyethylene 216")
        .duration(20 * 8)
        .EUt(32)

    event.recipes.gtceu.chemical_reactor('iron_ii_chloride_synthesis')
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .itemInputs("gtceu:iron_dust")
        .outputFluids([ "gtceu:iron_ii_chloride 1000", "gtceu:hydrogen 2000" ])
        .circuit(2)
        .duration(20 * 30)
        .EUt(32)
})