ServerEvents.blockLootTables(event => {
    event.modify("minecraft:grass", table => {
        table.addPool(pool => {
            pool.setUniformRolls(1, 1);
            pool.addItem('gtsac:grass_fibre', 1, 1).randomChance(0.3);
        });
    })

    event.modify('minecraft:stone', table => {
        table.clearPools();
        table.addPool(pool => {
            pool.setUniformRolls(1, 1);
            pool.addItem('minecraft:cobblestone', 1, 1)
                .addCondition({
                    condition: "minecraft:inverted",
                    predicate: {
                        items: ["gtceu:flint_hammer"]
                    },
                    term: {
                        condition: "minecraft:match_tool",
                        predicate: {
                            items: ["gtceu:flint_hammer"]
                        }
                    }
                });
        });

        table.addPool(pool => {
            pool.setUniformRolls(1, 1);
            pool.addItem('gtsac:stone_pebble', 1, 1)
                .addCondition({
                    condition: "minecraft:match_tool",
                    predicate: {
                        items: ["gtceu:flint_hammer"]
                    }
                });
        });
    });
});