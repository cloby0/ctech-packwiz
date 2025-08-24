ServerEvents.recipes(event => {
    //steel casing
    event.shaped(
        Item.of("mekanism:steel_casing", 1),
        [
            "SGS",
            "GPG",
            "SGS"
        ],
        {
            S: "#forge:ingot/steel",
            G: "#forge:glass",
            P: "mekanism:pure_osmium_ingot"
        }
    )
    
    //advanced AE machine rebalances
    event.remove("advanced_ae:reaction_chamber")
    event.shaped(
        Item.of("advanced_ae:reaction_chamber", 1),
        [
            "FEF",
            "FSF",
            "GBG"
        ],
        {
            F: "ae2:fluix_dust",
            E: "ae2:condenser",
            S: "mekanism:steel_casing",
            G: "minecraft:glowstone_dust",
            B: "minecraft:bucket"
        }
    )
    //supreme machine frame
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": "mekanism:pellet_polonium"
    },
    {
      "tag": "industrialforegoing:machine_frame/advanced"
    },
    {
      "item": "mekanism:pellet_polonium"
    },
    {
      "item": "mekanism:pellet_plutonium"
    },
    {
      "item": "mekanism:pellet_plutonium"
    },
    {
      "item": "mekanism:pellet_antimatter"
    },
    {
      "item": "mekanism:ultimate_control_circuit"
    },
    {
      "item": "mekanism:pellet_antimatter"
    }
  ],
  "inputFluid": "{Amount:500,FluidName:\"mekanism:antimatter\"}",
  "output": {
    "count": 1,
    "item": "industrialforegoing:machine_frame_supreme"
  },
  "processingTime": 300
    })

    event.replaceInput({input:"industrialforegoing:machine_frame_supreme"}, "industrialforegoing:plastic", "mekanism:pellet_antimatter" )

})