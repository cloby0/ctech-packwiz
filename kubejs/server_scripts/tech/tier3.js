ServerEvents.recipes(event => {
    //new thermal part recipes
    event.remove({ id: 'thermal:rf_coil' })
    event.remove({ id: 'thermal:redstone_servo' })
    event.remove({ type: 'ae2:inscriber'})
    event.remove({ type: 'expatternprovider:circuit_cutter'})

    event.shaped(
        Item.of('thermal:rf_coil', 4),
        [
            'C B',
            ' A ',
            'B C'
        ],
        {
            A: 'immersiveengineering:component_electronic_adv',
            B: '#forge:plates/brass',
            C: 'minecraft:redstone'
        }
    )
    event.shaped(
        Item.of('thermal:redstone_servo', 4),
        [
            'BAB',
            ' C ',
            'BBB'
        ],
        {
            A: 'immersiveengineering:component_electronic_adv',
            B: 'alltheores:steel_plate',
            C: 'immersiveengineering:rs_engineering'
        }
    )

    //changes thermal casing
    event.remove({ output: "thermal:machine_frame"})
    event.shaped(
        Item.of('thermal:machine_frame'),
        [
            'CBD',
            'BAB',
            'DBC'
        ],
        {
            A: 'immersiveengineering:component_electronic_adv',
            B: 'alltheores:iron_plate',
            C: 'thermal:rf_coil',
            D: 'thermal:redstone_servo'
        }
    )

    //certus silicon
    event.remove({ output: "ae2:silicon"})
    event.custom({
        "type": "thermal:smelter",
        "ingredient": {
            "item": "ae2:certus_quartz_dust"
        },
        "result": [
            {
            "item": "ae2:silicon",
            "count": 1
            },
        ]
    })
    event.custom({
        "type": "thermal:press",
        "ingredients": [
            {
            "item": "ae2:silicon"
            },
            {
            "item": "ae2:silicon_press"
            }
        ],
        "result": [
            {
            "item": "ae2:printed_silicon",
            "count": 1
            }
        ],
        "energy": 2400
    })

    //enderium recipes
    event.remove({ id: "thermal:fire_charge/enderium_ingot_2"}),
    event.remove({ id: "thermal:enderium_dust_2"}),
    event.remove({ id: "thermal/machines/smelter/smelter_alloy_enderium"})
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
            "value": [
                {
                "tag": "forge:ingots/invar"
                },
                {
                "tag": "forge:dusts/invar"
                }
            ],
            "count": 3
            },
            {
            "tag": "forge:dusts/diamond",
            "count": 1
            },
            {
            "value": [
                {
                "tag": "forge:ender_pearls"
                },
                {
                "tag": "forge:dusts/ender_pearl"
                }
            ],
            "count": 2
            }
        ],
        "result": [
            {
            "item": "alltheores:enderium_ingot",
            "count": 2
            }
        ],
        "energy": 16000
    })

    event.custom({
        "type": "thermal:press",
        "ingredients": [
            {
            "tag": "forge:ingots/enderium"
            },
            {
            "item": "ae2:engineering_processor_press"
            }
        ],
        "result": [
            {
            "item": "ae2:printed_engineering_processor",
            "count": 1
            }
        ],
        "energy": 2400
    })

    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
            "item": "ae2:printed_engineering_processor"
            },
            {
            "item": "ae2:printed_silicon"
            },
            {
            "item": "minecraft:redstone"
            }
        ],
        "result": [
            {
            "item": "ae2:engineering_processor",
            "count": 1
            }
        ],
        "energy": 2400
    })

    event.replaceInput(
        { input: 'ae2:engineering_processor' }, // Arg 1: the filter
        'ae2:engineering_processor',            // Arg 2: the item to replace
        'mekanism:advanced_control_circuit'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    //lumium recipes
    event.remove({ id: "thermal:fire_charge/lumium_ingot_4"})
    event.remove({ id: "alltheores:lumium_dust_from_alloy_blending"})
    event.remove({ id: "thermal:lumium_dust_4"})
    event.remove({ id: "thermal/machines/smelter/smelter_alloy_lumium"})
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
            "value": [
                {
                "tag": "forge:ingots/tin"
                },
                {
                "tag": "forge:dusts/tin"
                }
            ],
            "count": 3
            },
            {
            "value": [
                {
                "tag": "forge:ingots/electrum"
                },
                {
                "tag": "forge:dusts/electrum"
                }
            ],
            "count": 1
            },
            {
            "tag": "forge:dusts/glowstone",
            "count": 2
            }
        ],
        "result": [
            {
            "item": "alltheores:lumium_ingot",
            "count": 4
            }
        ],
        "energy": 12000
    })

    event.replaceInput(
        { input: 'ae2:calculation_processor' }, // Arg 1: the filter
        'ae2:calculation_processor',            // Arg 2: the item to replace
        'mekanism:advanced_control_circuit'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
            "tag": "forge:ingots/lumium"
            },
            {
            "item": "ae2:calculation_processor_press"
            }
        ],
        "result": [
            {
            "item": "ae2:printed_calculation_processor",
            "count": 1
            }
        ],
        "energy": 2400
    })

    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
            "item": "ae2:printed_calculation_processor"
            },
            {
            "item": "ae2:printed_silicon"
            },
            {
            "item": "minecraft:redstone"
            }
        ],
        "result": [
            {
            "item": "ae2:calculation_processor",
            "count": 1
            }
        ],
        "energy": 2400
    })

    //signalum recipes
    event.remove({ id: "alltheores:signalum_dust_from_alloy_blending"})
    event.remove({ id: "thermal_signalum_dust_4"})
    event.remove({ id: "thermal:fire_charge/signalum_ingot_4"})
    event.remove({ id: "thermal/machines/smelter/smelter_alloy_signalum"})
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
            "value": [
                {
                "tag": "forge:ingots/copper"
                },
                {
                "tag": "forge:dusts/copper"
                }
            ],
            "count": 3
            },
            {
            "value": [
                {
                "tag": "forge:ingots/constanstan"
                },
                {
                "tag": "forge:dusts/constanstan"
                }
            ],
            "count": 1
            },
            {
            "tag": "forge:dusts/redstone",
            "count": 4
            }
        ],
        "result": [
            {
            "item": "alltheores:signalum_ingot",
            "count": 4
            }
        ],
        "energy": 12000
    })

    event.custom({
        "type": "thermal:press",
        "ingredients": [
            {
            "tag": "forge:ingots/signalum"
            },
            {
            "item": "ae2:logic_processor_press"
            }
        ],
        "result": [
            {
            "item": "ae2:printed_logic_processor",
            "count": 1
            }
        ],
        "energy": 2400
    })

    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
            "item": "ae2:printed_logic_processor"
            },
            {
            "item": "ae2:printed_silicon"
            },
            {
            "item": "minecraft:redstone"
            }
        ],
        "result": [
            {
            "item": "ae2:logic_processor",
            "count": 1
            }
        ],
        "energy": 2400
    })

    event.replaceInput(
        { input: 'ae2:logic_processor' },
        'ae2:logic_processor',
        'mekanism:advanced_control_circuit'
    )

    //changes two last circuits
    event.replaceInput(
        { input: 'megacells:accumulation_processor' },
        'megacells:accumulation_processor',
        'mekanism:elite_control_circuit'
    )

    event.replaceInput(
        { input: 'advanced_ae:quantum_processor' },
        'advanced_ae:quantum_processor',
        'mekanism:ultimate_control_circuit'
    )
})