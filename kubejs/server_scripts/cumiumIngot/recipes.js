ServerEvents.recipes(event => {  
  //cum
  event.recipes.create.mixing(Fluid.of('kubejs:cum', 1000), [
    'minecraft:bone_meal',
    'mekanism:salt',
    Fluid.of('create_enchantment_industry:experience', 250),
    Fluid.of('industrialforegoing:ether_gas', 750)
  ]).heated()
  
  //cum + handwavium alloy -> inert cumium alloy
  event.recipes.create.filling('kubejs:inert_cumium_alloy', [Fluid.of('kubejs:cum', 1000), 'kubejs:handwavium_alloy'])

  //inert cumium alloy -> unstable cumium alloy
  event.shapeless("kubejs:unstable_cumium_alloy", [ // arg 1: output
  "kubejs:bio_book",
  "kubejs:terra_book",
  "kubejs:ars_book", 	//arg 2: the array of inputs
  "kubejs:inert_cumium_alloy"
  ])

  //unstable cumium alloy -> refined cumium alloy
  event.recipes.ars_nouveau.imbuement(
    "kubejs:unstable_cumium_alloy", // input item
    "kubejs:refined_cumium_alloy", // output
    1000, // source cost
    [
      "kubejs:aether_coin",
      "kubejs:nether_coin",
      "kubejs:overworld_coin",
      "kubejs:twilight_coin",
      "kubejs:space_coin",
      "kubejs:end_coin"
])

  //refined cumium alloy -> unforged cumium alloy
  event.recipes.create.mixing('kubejs:unforged_cumium_alloy', [
    'draconicevolution:draconium_ingot',
    'biomancy:breeding_stimulant',
    'kubejs:refined_cumium_alloy',
    Fluid.of('kubejs:cum', 1000)
  ]).superheated()
  
  //unforged cumium alloy -> cumium ingot
  event.custom({
        "type": "create:sequenced_assembly",
      
        "ingredient": {
          "item": "kubejs:unforged_cumium_alloy"
        },
      
        "transitionalItem": {
          "item": "kubejs:unforged_cumium_alloy"
        },
      
        "sequence": [
          {
            "type": "create:pressing",
            "ingredients": [
              {
                "item": "kubejs:unforged_cumium_alloy"
              },
            ],
            "results": [
              {
                "item": "kubejs:unforged_cumium_alloy"
              }
            ]
          }
        ],
        "results": [
          {
            "item": "kubejs:cumium_ingot"
          }
        ],
      "loops": 20});

  let coining = (output, a, b, c) => {
    event.shaped(output, [
      'CBC',
      'BAB',
      'CBC'
    ], {
      A: a,
      B: b,
      C: c
    })
  }
  event.shapeless(
  Item.of('kubejs:wonder_jewel', 1),
  [
    'deep_aether:slider_eye',
    'deep_aether:medal_of_honor',
    'deep_aether:sun_core',
    'deep_aether:aerwhale_saddle'
    ])

  event.shaped(
    Item.of('kubejs:cave_geode', 1), // arg 1: output
  [
    'FAF',
    'BCD', // arg 2: the shape (array of strings)
    'FEF'
  ],
  {
    A: 'alexscaves:resistor_shield',
    B: 'alexscaves:tectonic_shard',
    C: 'alexscaves:immortal_embryo',
    D: 'alexscaves:shadow_silk',
    E: 'alexscaves:radiant_essence',
    F: 'minecraft:deepslate'
  }
)

  coining('kubejs:unfinished_aether_coin', 'kubejs:wonder_jewel', 'aether:regeneration_stone',  'aether_redux:blue_swet_jelly');
  event.custom({
    "type": "aether:enchanting",
    "category": "enchanting_blocks",
    "cookingtime": 1500,
    "experience": 0.35,
    "ingredient": {
      "item": "kubejs:unfinished_aether_coin"
    },
    "result": "kubejs:aether_coin"
  });

  coining('kubejs:unfinished_nether_coin', 'minecraft:nether_star', 'minecraft:netherite_block',  'minecraft:netherrack');
  event.recipes.create.pressing('kubejs:nether_coin', 'kubejs:unfinished_nether_coin');

  coining('kubejs:unfinished_overworld_coin', 'kubejs:cave_geode', '#forge:ores_in_ground/stone',  'minecraft:moss_block');
  event.smelting('kubejs:overworld_coin', 'kubejs:unfinished_overworld_coin');

  coining('kubejs:unfinished_twilight_coin', 'twilightforest:ur_ghast_trophy', 'twilightforest:fiery_block',  'twilightforest:steeleaf_ingot');
  event.recipes.create.filling('kubejs:twilight_coin', [Fluid.of('minecraft:water', 1000), 'kubejs:unfinished_twilight_coin'])

  coining('kubejs:unfinished_space_coin', 'ad_astra:calorite_plate', 'ad_astra:ice_shard',  'ad_astra:permafrost');
  event.recipes.create.pressing('kubejs:space_coin', 'kubejs:unfinished_space_coin');

  coining('kubejs:unfinished_end_coin', 'minecraft:dragon_egg', '#forge:ingots/azure_silver',  'minecraft:purpur_block');
  event.recipes.create.deploying('kubejs:end_coin', ['kubejs:unfinished_end_coin', 'minecraft:end_stone'])

  event.shapeless("kubejs:handwavium_alloy", [ // arg 1: output
  "mekanism:alloy_atomic",
  'mekanism:pellet_antimatter',
  "#forge:ingots/enderium",
  "#forge:ingots/lumium", 	//arg 2: the array of inputs
  "#forge:ingots/signalum"
  ])



//RECIPES TO USE ***WITH*** THE CUMIUM INGOT

  event.remove({id: "industrialforegoing:dissolution_chamber/infinity_nuke"})
  coining(Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'), 'kubejs:cumium_ingot', 'witherstormmod:formidibomb',  'alexscaves:nuclear_bomb');

  event.replaceInput(
    { id: 'apotheosis:augmenting_table' },
    'minecraft:nether_star',
    'kubejs:cumium_ingot'
  )

  event.replaceInput(
    { input: 'draconicevolution:draconium_ingot' },
    'draconicevolution:draconium_ingot',
    'kubejs:cumium_ingot'
  )
  event.replaceInput(
    { input: 'draconicevolution:draconium_nugget' },
    'draconicevolution:draconium_nugget',
    'kubejs:cumium_nugget'
  )
  event.replaceInput(
    { input: 'draconicevolution:draconium_block' },
    'draconicevolution:draconium_block',
    'kubejs:cumium_block'
  )
  
  event.shaped(Item.of('esotericreforging:esoteric_reforging_table', 1),
  [
    ' C ',
    'BAB',
    'DDD'
  ],
  {
    A: 'apotheosis:reforging_table',
    B: 'apotheosis:mythic_material',
    C: '#forge:ingots/cumium',
    D: 'rechiseled:netherite_block_bricks'
  }
)


});