ServerEvents.recipes(event => {
    event.replaceInput({ input: 'ae2:logic_processor' }, 'ae2:logic_processor', '#forge:circuits/advanced')
    event.replaceInput({ input: 'ae2:calculation_processor' }, 'ae2:calculation_processor', '#forge:circuits/advanced')
    event.replaceInput({ input: 'ae2:engineering_processor' }, 'ae2:engineering_processor', '#forge:circuits/advanced')
    event.remove({output: 'ae2:silicon'})
    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [],
        "energy": 51200,
        "input": {
            "item": 'ae2:certus_quartz_dust'
        },
        "results": [
            {
                "item": 'ae2:silicon'
            }
        ],
        "time": 100
    })

    event.remove({ type: 'ae2:inscriber'})
    event.remove({ output: 'ae2:inscriber'})
    event.recipes.create.deploying('ae2:printed_calculation_processor', ['#forge:gems/certus_quartz', 'ae2:calculation_processor_press']).keepHeldItem()
    event.recipes.create.deploying('ae2:printed_engineering_processor', ['minecraft:diamond', 'ae2:engineering_processor_press']).keepHeldItem()
    event.recipes.create.deploying('ae2:printed_logic_processor', ['minecraft:gold_ingot', 'ae2:logic_processor_press']).keepHeldItem()
    event.recipes.create.deploying('ae2:printed_silicon', ['ae2:silicon', 'ae2:silicon_press']).keepHeldItem()

    event.recipes.create.compacting('ae2:calculation_processor', ['ae2:printed_calculation_processor', 'ae2:printed_silicon', 'minecraft:redstone']).heated()
    event.recipes.create.compacting('ae2:engineering_processor', ['ae2:printed_engineering_processor', 'ae2:printed_silicon', 'minecraft:redstone']).heated()
    event.recipes.create.compacting('ae2:logic_processor', ['ae2:printed_logic_processor', 'ae2:printed_silicon', 'minecraft:redstone']).heated()

    event.recipes.create.deploying('ae2:calculation_processor_press', ['minecraft:iron_block', 'ae2:calculation_processor_press'])
    event.recipes.create.deploying('ae2:engineering_processor_press', ['minecraft:iron_block', 'ae2:engineering_processor_press'])
    event.recipes.create.deploying('ae2:logic_processor_press', ['minecraft:iron_block', 'ae2:logic_processor_press'])
});