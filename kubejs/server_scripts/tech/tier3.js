ServerEvents.recipes(event => {

  event.shapeless("mekanism:pure_osmium_ingot", [
    "9x mekanism:pure_osmium_nugget"
  ])
  event.shapeless(
    Item.of('mekanism:pure_osmium_nugget', 9), [
    "mekanism:pure_osmium_ingot"
  ])

  event.shapeless("mekanism:pure_osmium_block", [
    "9x mekanism:pure_osmium_ingot"
  ])
  event.shapeless(
    Item.of('mekanism:pure_osmium_ingot', 9), [
    "mekanism:pure_osmium_block"
  ])

    //new thermal part recipes
    event.remove({ id: 'thermal:rf_coil' })
    event.remove({ id: 'thermal:redstone_servo' })
    event.remove({ type: 'ae2:inscriber'})
    event.remove({ type: 'expatternprovider:circuit_cutter'})
    event.remove({ output: 'mekanism:basic_control_circuit'})
    event.replaceOutput({id: "pneumaticcraft:printed_circuit_board"}, 
        "pneumaticcraft:printed_circuit_board", 
        "mekanism:basic_control_circuit")
    event.replaceInput({input: "pneumaticcraft:printed_circuit_board"}, 
        "pneumaticcraft:printed_circuit_board", 
        "mekanism:basic_control_circuit")
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
            {
            "value": [
                {
                "item": "ae2:calculation_processor"
                },
            ],
            "count": 1
            },
            {
            "value": [
                {
                "item": "ae2:engineering_processor"
                },
            ],
            "count": 1
            },
            {
            "value": [
                {
                "item": "ae2:logic_processor"
                }
            ],
            "count": 1
            }
        ],
        "result": [
            {
            "item": "mekanism:basic_control_circuit",
            "count": 1
            }
        ],
        "energy": 16000
    })
    event.replaceInput(
        {input: "#forge:ingots/osmium", mod: 'mekanism'},
        '#forge:ingots/osmium',
        '#forge:ingots/pure_osmium'
    )
    event.replaceInput(
        {input: "#forge:ingots/osmium", mod: 'mekanismgenerators'},
        '#forge:ingots/osmium',
        '#forge:ingots/pure_osmium'
    )

    event.forEachRecipe({mod: 'mekanism', type: "mekanism:mek_data"}, r => {
        let json_recipe = r.json.toString()
            if (json_recipe.includes("#forge:ingots/osmium")) {
                json_recipe = json_recipe.replaceAll("#forge:ingots/osmium", "#forge:ingots/pure_osmium")
                event.custom(json_recipe).id(r.getOrCreateId())
            }
        })
    event.forEachRecipe({mod: 'mekanismgenerators', type: "mekanism:mek_data"}, r => {
        let json_recipe = r.json.toString()
        if (json_recipe.includes("#forge:ingots/osmium")) {
            json_recipe = json_recipe.replaceAll("#forge:ingots/osmium", "#forge:ingots/pure_osmium")
            event.custom(json_recipe).id(r.getOrCreateId())
        }
    })

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

    //pure osmium
    event.custom({
        "type" : "thermal:smelter",
        "ingredient": [{
            "item": "alltheores:osmium_block"
            },
            {
            "item": "minecraft:redstone"
            },
            {
            "item": "minecraft:glowstone_dust"
            }
        ],
        "result": [
            {
            "item": "mekanism:pure_osmium_ingot",
            "count": 1
            },
        ]
        
    })

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
    event.remove({ id: "thermal:fire_charge/enderium_ingot_2"})
    event.remove({ id: "thermal:enderium_dust_2"})
    event.remove({ id: "thermal:machines/smelter/smelter_alloy_enderium"})
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
        { input: 'ae2:engineering_processor' },
        'ae2:engineering_processor',
        'mekanism:advanced_control_circuit'
    )

    //lumium recipes
    event.remove({ id: "thermal:fire_charge/lumium_ingot_4"})
    event.remove({ id: "alltheores:lumium_dust_from_alloy_blending"})
    event.remove({ id: "thermal:lumium_dust_4"})
    event.remove({ id: "thermal:machines/smelter/smelter_alloy_lumium"})
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
        { input: 'ae2:calculation_processor' },
        'ae2:calculation_processor',
        'mekanism:advanced_control_circuit'
    )

    event.custom({
        "type": "thermal:press",
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
    event.remove({ id: "thermal:machines/smelter/smelter_alloy_signalum"})
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
                "tag": "forge:ingots/constantan"
                },
                {
                "tag": "forge:dusts/constantan"
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

    //advanced machine frame
    event.remove({output: "industrialforegoing:machine_frame_advanced"})
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "tag": "forge:ingots/signalum"
    },
    {
      "tag": "industrialforegoing:machine_frame/simple"
    },
    {
      "tag": "forge:ingots/signalum"
    },
    {
      "tag": "forge:ingots/enderium"
    },
    {
      "tag": "forge:ingots/enderium"
    },
    {
      "tag": "forge:ingots/lumium"
    },
    {
      "item": "mekanism:basic_control_circuit"
    },
    {
      "tag": "forge:ingots/lumium"
    }
  ],
  "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:pink_slime\"}",
  "output": {
    "count": 1,
    "item": "industrialforegoing:machine_frame_advanced"
  },
  "processingTime": 300
    })
    event.replaceInput({input:"industrialforegoing:machine_frame_advanced"}, "industrialforegoing:plastic", "mekanism:basic_control_circuit")
})
