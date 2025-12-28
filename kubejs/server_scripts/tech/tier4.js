ServerEvents.recipes(event => {
    //steel casing
    event.remove({output: 'mekanism:steel_casing'});
    event.shaped(
        Item.of("mekanism:steel_casing", 1),
        [
            "SGS",
            "GPG",
            "SGS"
        ],
        {
            S: "#forge:ingots/pure_osmium",
            G: "#forge:glass",
            P: "mekanism:basic_control_circuit"
        }
    );

    event.forEachRecipe({mod: 'pneumaticcraft', type: "pneumaticcraft:crafting_shaped_pressurizable"}, r => {
      let json_recipe = r.json.toString()
      if (json_recipe.includes("pneumaticcraft:printed_circuit_board")) {
        json_recipe = json_recipe.replaceAll("pneumaticcraft:printed_circuit_board", "mekanism:basic_control_circuit")
        event.custom(json_recipe).id(r.getOrCreateId())
      }
    });
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
    );
    //supreme machine frame
    event.remove({output: "industrialforegoing:machine_frame_supreme"});
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
  "inputFluid": "{Amount:500,FluidName:\"mekanismgenerators:fusion_fuel\"}",
  "output": {
    "count": 1,
    "item": "industrialforegoing:machine_frame_supreme"
  },
  "processingTime": 300
    });

    event.replaceInput({input:"industrialforegoing:machine_frame_supreme"}, "industrialforegoing:plastic", "mekanism:pellet_antimatter");

})
