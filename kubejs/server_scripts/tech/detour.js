ServerEvents.recipes(event => {
    event.custom({
      "type": "immersiveengineering:arc_furnace",
      "additives": [],
      "energy": 102400,
      "input": {
          "item": 'alltheores:steel_block'
      },
      "results":[
        {
          "item":'pneumaticcraft:ingot_iron_compressed',
          "count":1
        }
      ],
      "time": 200
  });
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
            "item": "alltheores:osmium_block"
            },
            {
            "item": "minecraft:redstone"
            },
            {
            "item": "minecraft:glowstone_dust"
            }
        ],
        "pressure": 4.0,
        "results": [
            {
            "item": "mekanism:pure_osmium_ingot"
            }
        ]
  });
  event.replaceOutput({id: "pneumaticcraft:printed_circuit_board"}, 
    "pneumaticcraft:printed_circuit_board", 
    "mekanism:basic_control_circuit")
  event.replaceInput({id: "pneumaticcraft:printed_circuit_board"}, 
    "pneumaticcraft:printed_circuit_board", 
    "mekanism:basic_control_circuit")
  })