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