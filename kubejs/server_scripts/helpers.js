// priority 100000

const numToTierMap = {
    0: "ulv",
    1: "lv",
    2: "mv",
    3: "hv",
    4: "ev",
    5: "iv",
    6: "luv",
    7: "zpm",
    8: "uv",
    9: "uhv",
    10: "uev",
    11: "uiv",
    12: "uxv",
    13: "opv",
    14: "max",
}

const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"]

const voltageToWireMap = {
    0: "red_alloy",
    1: "tin",
    2: "annealed_copper",
    3: "gold",
    4: "aluminium",
    5: "platinum",
    6: "niobium_titanium",
    7: "vanadium_gallium",
    8: "yttrium_barium_cuprate",
    9: "europium"
}

const voltageToCableMap = {
    0: "red_alloy",
    1: "tin",
    2: "copper",
    3: "gold",
    4: "aluminium",
    5: "platinum",
    6: "vanadium_gallium",
    7: "yttrium_barium_cuprate",
    8: "europium",
    9: "red_alloy",
    10: "red_alloy",
    11: "red_alloy",
    12: "red_alloy",
    13: "red_alloy",
}

const voltageToCoilBlockMap = {
    0: "cupronickel",
    1: "cupronickel",
    2: "kanthal",
    3: "nichrome",
    4: "rtm_alloy",
    5: "hssg",
    6: "naquadah",
    7: "trinium",
    8: "tritanium",
    9: "cupronickel",
    10: "cupronickel",
    11: "cupronickel",
    12: "cupronickel",
    13: "cupronickel",
    14: "cupronickel",
}

const voltageToMaterial = {
    0: "wrought_iron",
    1: "steel",
    2: "aluminium",
    3: "stainless_steel",
    4: "titanium",
    5: "tungsten_steel",
    6: "rhodium_plated_palladium",
    7: "naquadah_alloy",
    8: "darmstadtium",
    9: "neutronium"
}

const remove = (event, array) => {
        array.forEach(element => {
            event.remove({
                output: element
            })
        });
    }

const removeGtceu = (event, array) => {
    remove(event, array.map(item => "gtceu:" + item))
}



const circuit = tier => `#gtceu:circuits/${numToTierMap[tier]}`
const hull = tier => GTCraftingComponents.HULL.get(tier)

const cable = tier => `gtceu:${voltageToCableMap[tier]}_single_cable`

const rotor = tier => `#${GTCraftingComponents.ROTOR.get(tier)}`
const glass = tier => GTCraftingComponents.PUMP.get(tier)
const plate = tier => `#${GTCraftingComponents.PLATE.get(tier)}`
const spring = tier => `#${GTCraftingComponents.SPRING.get(tier)}`
const coilBlock = tier => `gtceu:${voltageToCoilBlockMap[tier]}_coil_block`

const motor = tier => GTCraftingComponents.MOTOR.get(tier)
const conveyor = tier => GTCraftingComponents.CONVEYOR.get(tier)
const pump = tier => GTCraftingComponents.PUMP.get(tier)
const piston = tier => GTCraftingComponents.PISTON.get(tier)
const robotArm = tier => GTCraftingComponents.ROBOT_ARM.get(tier)

