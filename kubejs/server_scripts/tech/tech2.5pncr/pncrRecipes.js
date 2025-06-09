ServerEvents.recipes(event => {
    event.remove({ output: 'pneumaticcraft:printed_circuit_board' })
    event.shaped('mekanism:basic_control_circuit', [
        ' B ', 
        'ACA',
        ' B '  
    ], {
        A: 'pneumaticcraft:capacitor', 
        B: 'pneumaticcraft:transistor',
        C: 'pneumaticcraft:unassembled_pcb'   
        }
    )
    event.replaceInput(
      { input: 'pneumaticcraft:printed_circuit_board' },
      'pneumaticcraft:printed_circuit_board',
      'mekanism:basic_control_circuit'
    )
    event.forEachRecipe({mod: 'pneumaticcraft', type: "pneumaticcraft:crafting_shaped_pressurizable"}, r => {
            let json_recipe = r.json.toString()
            if (json_recipe.includes("pneumaticcraft:printed_circuit_board")) {
                json_recipe = json_recipe.replaceAll("pneumaticcraft:printed_circuit_board", "mekanism:basic_control_circuit")
                event.custom(json_recipe).id(r.getOrCreateId())
            }
          })
    
    event.forEachRecipe({mod: 'pneumaticcraft', type: "pneumaticcraft:crafting_shaped_no_mirror"}, r => {
            let json_recipe = r.json.toString()
            if (json_recipe.includes("pneumaticcraft:printed_circuit_board")) {
                json_recipe = json_recipe.replaceAll("pneumaticcraft:printed_circuit_board", "mekanism:basic_control_circuit")
                event.custom(json_recipe).id(r.getOrCreateId())
            }
          })
    
    event.remove({ id: 'pneumaticcraft:assembly/solar_cell' })
    event.replaceInput(
          { input: 'pneumaticcraft:solar_cell' },
          'pneumaticcraft:solar_cell',
          'mekanismgenerators:solar_panel'
        )
    event.custom({
        "type": "pneumaticcraft:assembly_drill",
        "input": {
          "item": "pneumaticcraft:solar_wafer"
        },
        "program": "drill",
        "result": {
          "item": "mekanismgenerators:solar_panel"
        }
      })

    //------------------------------
    event.remove({ type: 'pneumaticcraft:explosion_crafting' })
    event.recipes.create.compacting('pneumaticcraft:ingot_iron_compressed', 'alltheores:steel_block').heated()
    event.remove({ id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot' })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "tag": "forge:ingots/steel"
          }
        ],
        "pressure": 2.0,
        "results": [
          {
            "item": "pneumaticcraft:ingot_iron_compressed"
          }
        ]
      })
    event.remove({ id: 'pneumaticcraft:pressure_chamber/compressed_iron_block' })
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "tag": "forge:storage_blocks/steel"
          }
        ],
        "pressure": 2.0,
        "results": [
          {
            "item": "pneumaticcraft:compressed_iron_block"
          }
        ]
      })
});