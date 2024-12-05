ServerEvents.recipes(event => {
    /*
    let pressdeploy = (recipe) => {
        event.recipes.create.deploying(recipe.result, [recipe.base_ingredient, recipe.mold])
    }
    event.forEachRecipe({mod: 'immersiveengineering', type: "immersiveengineering:metal_press"}, r => {
        let json_recipe = r.json.asKJS();
        pressdeploy(json_recipe);
        console.log(json_recipe, json_recipe.result, json_recipe.input.base_ingredient, json_recipe.mold);
        });
    */
    event.replaceOutput({}, 'immersiveengineering:dust_coke', 'mekanism:dust_coal')
    event.replaceOutput({}, 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur')
    event.replaceInput({}, 'immersiveengineering:dust_coke', 'mekanism:dust_coal')
    event.replaceInput({}, 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur')

    event.remove({id: 'immersiveengineering:alloybrick'})
    event.remove({output: 'immersiveengineering:reinforced_crate'})
    event.remove({output: 'immersiveengineering:crate'})

    event.remove({
        type: "immersiveengineering:alloy"
    })
    event.remove({
        output: '#forge:wires',
        input: '#immersiveengineering:toolbox/tools'
    })
    event.remove({
        output: '#forge:plates',
        input: '#immersiveengineering:toolbox/tools'
    })
    event.remove({
        output: '#forge:dusts',
        input: '#immersiveengineering:toolbox/tools'
    })
    event.remove({
        output: '#forge:rods/all_metal',
        input: '#forge:ingots',
        type: "minecraft:crafting_shaped"
    })

    event.remove({
        output: 'immersiveengineering:thermoelectric_generator'
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "A": {
                "item": 'immersiveengineering:sheetmetal_steel'
            },
            "B": {
                "item": 'immersiveengineering:coil_lv'
            },
            "C": {
                "item": 'immersiveengineering:coil_mv'
            },
            "D": {
                "item": 'minecraft:netherite_ingot'
            }

        },
        "pattern": [
            "ABBCA",
            "BACBC",
            "BCDBC",
            "BCBAC",
            "ABCCA"
        ],
        "result": {
            "item": 'immersiveengineering:thermoelectric_generator'
        }
    })
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 3000,
        "input": {"item": 'minecraft:ender_pearl'},
        "result": {"item": 'ae2:ender_dust'},
        "secondaries": []
    })
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 3000,
        "input": {"item": 'ae2:sky_stone_block'},
        "result": {"item": 'ae2:sky_dust'},
        "secondaries": []
    })
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 3000,
        "input": {"item": 'minecraft:obsidian'},
        "result": {"count": 5, "item": 'create:powdered_obsidian'},
        "secondaries": []
    })
    event.custom({
        "type": "create:pressing",
        "ingredients": [{
            "item": "forge:ingots/aluminum"
        }],
        "results": [{
            "item": 'immersiveengineering:plate_steel'
        }]
    })
});