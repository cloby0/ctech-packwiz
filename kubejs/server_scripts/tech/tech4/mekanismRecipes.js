ServerEvents.recipes(event => {
    event.custom({
      "type": "immersiveengineering:arc_furnace",
      "additives": [
          {
              "item": 'minecraft:redstone'
          },
          {
              "item": 'minecraft:glowstone_dust'
          }
      ],
      "energy": 51200,
      "input": {
          "item": 'alltheores:osmium_block'
      },
      "results": [
          {
              "item": 'mekanism:pure_osmium_ingot'
          }
      ],
      "time": 100
  })
  event.remove({output: 'mekanism:basic_control_circuit'})
  event.custom({
    "type":"mekanism:metallurgic_infusing",
    "chemicalInput":
        {"amount":20,"tag":"mekanism:redstone"},
    "itemInput":
        {"ingredient":
          {"tag":"forge:silicon"}
        },
        "output":
        {"amount":2,"item":"mekanism:basic_control_circuit"
        }
      }
    )
  event.custom({
    "type":"mekanism:metallurgic_infusing",
    "chemicalInput":
        {"amount":20,"tag":"mekanism:redstone"},
    "itemInput":
        {"ingredient":
          {"amount":4,"tag":"forge:ingots/osmium"}
        },
        "output":
        {"item":"mekanism:pure_osmium_ingot"
        }
      }
    )
  event.custom({
      "type": "immersiveengineering:arc_furnace",
      "additives": [
          {
              "item": 'ae2:calculation_processor'
          },
          {
              "item": 'ae2:engineering_processor'
          },
          {
              "item": 'ae2:logic_processor'
          },
          {
              "item": 'minecraft:copper_ingot'
          }
      ],
      "energy": 102400,
      "input": {
          "item": 'ae2:printed_silicon'
      },
      "results":[
        {
          "item":"mekanism:basic_control_circuit",
          "count":4
        }
      ],
      "time": 200
  });

    event.shapeless(
        Item.of('mekanism:pure_osmium_nugget', 9), // arg 1: output
        [
          'mekanism:pure_osmium_ingot'
        ]
      )
    event.shapeless( 
      Item.of('mekanism:pure_osmium_ingot', 9), // arg 1: output
        [
          'mekanism:pure_osmium_block'
        ]
      )

    event.shapeless(
        Item.of('mekanism:pure_osmium_block'), // arg 1: output
        [
          'mekanism:pure_osmium_ingot',
          'mekanism:pure_osmium_ingot',
          'mekanism:pure_osmium_ingot',
          'mekanism:pure_osmium_ingot',
          'mekanism:pure_osmium_ingot',
          'mekanism:pure_osmium_ingot',
          'mekanism:pure_osmium_ingot',
          'mekanism:pure_osmium_ingot',
          'mekanism:pure_osmium_ingot',
        ]
      )
    event.shapeless( 
      Item.of('mekanism:pure_osmium_ingot'), // arg 1: output
        [
          'mekanism:pure_osmium_nugget',
          'mekanism:pure_osmium_nugget',
          'mekanism:pure_osmium_nugget',
          'mekanism:pure_osmium_nugget',
          'mekanism:pure_osmium_nugget',
          'mekanism:pure_osmium_nugget',
          'mekanism:pure_osmium_nugget',
          'mekanism:pure_osmium_nugget',
          'mekanism:pure_osmium_nugget',
        ]
      )
    event.replaceInput({ mod: 'mekanism'}, '#forge:ingots/osmium', 'mekanism:pure_osmium_ingot')
    event.replaceInput({ mod: 'mekanismgenerators'}, '#forge:ingots/osmium', 'mekanism:pure_osmium_ingot')
    event.replaceInput({ mod: 'megacells'}, '#forge:ingots/osmium', 'mekanism:pure_osmium_ingot')

    event.replaceInput({ output: 'alltheores:osmium_gear'}, 'mekanism:pure_osmium_ingot', '#forge:ingots/osmium')
    event.replaceInput({ output: 'alltheores:osmium_nugget'}, 'mekanism:pure_osmium_ingot', '#forge:ingots/osmium')
    event.replaceInput({ output: 'alltheores:osmium_block'}, 'mekanism:pure_osmium_ingot', '#forge:ingots/osmium')
    
    event.forEachRecipe({mod: 'mekanism', type: "mekanism:mek_data"}, r => {
      let json_recipe = r.json.toString()
      if (json_recipe.includes("forge:ingots/osmium")) {
          json_recipe = json_recipe.replaceAll("forge:ingots/osmium", "forge:ingots/pure_osmium")
          event.custom(json_recipe).id(r.getOrCreateId())
      }
    })
    event.forEachRecipe({mod: 'mekanismgenerators', type: "mekanism:mek_data"}, r => {
      let json_recipe = r.json.toString()
      if (json_recipe.includes("forge:ingots/osmium")) {
          json_recipe = json_recipe.replaceAll("forge:ingots/osmium", "forge:ingots/pure_osmium")
          event.custom(json_recipe).id(r.getOrCreateId())
      }
    })

    event.replaceInput(
    { output: 'mekanism:metallurgic_infuser' },
    'mekanism:pure_osmium_ingot',
    'mekanism:pure_osmium_block'
    )
    event.replaceInput(
    { output: 'mekanism:metallurgic_infuser' },
    'minecraft:iron_ingot',
    'alltheores:steel_ingot'
    )
    
    let pipez = (output, moves) => {
      event.shaped(output, [
        '   ',
        'BAB',
        '   '
      ], {
        A: "mekanism:basic_control_circuit",
        B: moves
      })
    }
    

    event.remove({ output: 'mekanism:basic_universal_cable' })
    event.remove({ output: 'mekanism:advanced_universal_cable' })
    event.remove({ output: 'mekanism:elite_universal_cable' })
    event.remove({ output: 'mekanism:ultimate_universal_cable' })
    event.remove({ output: 'pipez:energy_pipe' })

    pipez('32x pipez:energy_pipe', "#forge:ingots/steel")

    event.remove({ output: 'mekanism:basic_mechanical_pipe' })
    event.remove({ output: 'mekanism:advanced_mechanical_pipe' })
    event.remove({ output: 'mekanism:elite_mechanical_pipe' })
    event.remove({ output: 'mekanism:ultimate_mechanical_pipe' })
    event.remove({ output: 'pipez:fluid_pipe' })

    pipez('32x pipez:fluid_pipe', "#forge:ingots/copper")

    event.remove({ output: 'mekanism:basic_pressurized_tube' })
    event.remove({ output: 'mekanism:advanced_pressurized_tube' })
    event.remove({ output: 'mekanism:elite_pressurized_tube' })
    event.remove({ output: 'mekanism:ultimate_pressurized_tube' })
    event.remove({ output: 'pipez:gas_pipe' })

    pipez('32x pipez:gas_pipe', "#forge:ingots/pure_osmium")

    event.remove({ output: 'mekanism:basic_logistical_transporter' })
    event.remove({ output: 'mekanism:advanced_logistical_transporter' })
    event.remove({ output: 'mekanism:elite_logistical_transporter' })
    event.remove({ output: 'mekanism:ultimate_logistical_transporter' })
    event.remove({ output: 'mekanism:restrictive_transporter' })
    event.remove({ output: 'mekanism:diversion_transporter' })
    event.remove({ output: 'pipez:item_pipe' })

    pipez('32x pipez:item_pipe', "pneumaticcraft:plastic")

});