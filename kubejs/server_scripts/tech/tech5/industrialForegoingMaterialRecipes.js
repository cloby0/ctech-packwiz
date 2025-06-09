ServerEvents.recipes(event => {
    let raddon = (output, c) => {
        event.recipes.create.mechanical_crafting(output, [
            'AAAAA',
            'ABBBC',
            'ABDBC',
            'ABBBC',
            'CCCCC'
          ], {
            A: "mekanism:ultimate_control_circuit",
            B: "mekanism:structural_glass",
            C: c,
            D: "pneumaticcraft:plastic"
          })
      }
    
    event.remove({ output: 'industrialforegoing:dryrubber' })
    event.remove({ output: 'industrialforegoing:plastic' })
    event.replaceInput(
        { input: 'industrialforegoing:plastic' },
        'industrialforegoing:plastic',
        'pneumaticcraft:plastic'
      )
    raddon(Item.of('industrialforegoing:range_addon0', '{TitaniumAugment:{Range:0.0f}}'), "mekanism:enriched_diamond" )
    raddon(Item.of('industrialforegoing:range_addon1', '{TitaniumAugment:{Range:1.0f}}'), "mekanism:alloy_infused" )
    raddon(Item.of('industrialforegoing:range_addon2', '{TitaniumAugment:{Range:2.0f}}'), "#forge:dusts/refined_obsidian" )
    raddon(Item.of('industrialforegoing:range_addon3', '{TitaniumAugment:{Range:3.0f}}'), "#forge:ingots/refined_glowstone" )
    raddon(Item.of('industrialforegoing:range_addon4', '{TitaniumAugment:{Range:4.0f}}'), "mekanism:alloy_reinforced" )
    raddon(Item.of('industrialforegoing:range_addon5', '{TitaniumAugment:{Range:5.0f}}'), "#forge:ingots/refined_obsidian" )
    raddon(Item.of('industrialforegoing:range_addon6', '{TitaniumAugment:{Range:6.0f}}'), "mekanism:alloy_atomic" )
    raddon(Item.of('industrialforegoing:range_addon7', '{TitaniumAugment:{Range:7.0f}}'), "mekanism:teleportation_core" )
    raddon(Item.of('industrialforegoing:range_addon8', '{TitaniumAugment:{Range:8.0f}}'), "mekanism:pellet_plutonium" )
    raddon(Item.of('industrialforegoing:range_addon9', '{TitaniumAugment:{Range:9.0f}}'), "mekanism:reprocessed_fissile_fragment" )
    raddon(Item.of('industrialforegoing:range_addon10', '{TitaniumAugment:{Range:10.0f}}'), "mekanism:pellet_polonium" )
    raddon(Item.of('industrialforegoing:range_addon11', '{TitaniumAugment:{Range:11.0f}}'), "mekanism:pellet_antimatter" )
});