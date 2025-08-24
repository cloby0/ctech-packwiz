ServerEvents.recipes(event => {

  //replace all usage of polymer place with plastic
event.remove({ output: 'alexscaves:polymer_plate' })
event.replaceInput(
  { input: 'alexscaves:polymer_plate' },
  'alexscaves:polymer_plate',
  '#forge:ingots/plasteel'
)
  //-----------------------------
event.remove({ id: 'mekanism:enriching/hdpe_sheet'})
event.custom({"type":"mekanism:enriching",
              "input":{"amount":3,
              "ingredient":{"item":"mekanism:hdpe_pellet"}},
              "output":{"item":"pneumaticcraft:plastic"}}),
  //replace all usage of hdpe with plastic
event.replaceOutput(
  { output: 'mekanism:hdpe_sheet' },
  'mekanism:hdpe_sheet',
  'pneumaticcraft:plastic'
)
event.replaceInput(
    { input: 'mekanism:hdpe_sheet' },
    'mekanism:hdpe_sheet',
    'pneumaticcraft:plastic'
  )
//-----------------------------
  event.recipes.create.crushing('rats:raw_plastic', 'pneumaticcraft:plastic')
//-----------------------------
event.remove({ output: '#alltheores:ore_hammers' })
event.remove({ input: '#alltheores:ore_hammers' })
//-----------------------------

event.replaceInput(
    { output: 'witherstormmod:super_tnt' },
    'minecraft:gunpowder',
    'createbigcannons:packed_gunpowder'
  )
event.remove({ output: 'alexscaves:nuclear_bomb' })
event.shaped('alexscaves:nuclear_bomb', [
    'ABA', 
    'DCD',
    'ABA'  
  ], {
    A: '#forge:storage_blocks/lead', 
    B: 'alexscaves:fissile_core',
    C: 'witherstormmod:super_tnt',   
    D: '#forge:ingots/uranium'
  }
)

event.remove({ output: 'witherstormmod:formidibomb' })
event.shaped('witherstormmod:formidibomb', [
    'GRG',
    'RBR',
    'GRG'
  ], {
    G: 'createbigcannons:packed_gunpowder', 
    R: '#forge:ingots/refined_obsidian',
    B: 'alexscaves:nuclear_bomb'  
  }
)

event.shaped('alexscaves:fissile_core', [
    '   ', 
    'ABA',
    'CAC'  
  ], {
    A: '#forge:pellets/plutonium', 
    B: '#forge:ingots/uranium',
    C: '#forge:plates/lead'
  }
)

event.shapeless("silentcompat:plasteel_ingot", [
  "#forge:ingots/steel",
  "pneumaticcraft:plastic"
  ])
event.recipes.create.deploying('silentcompat:plasteel_ingot', ['#forge:ingots/steel', "pneumaticcraft:plastic"])



event.remove({ output: 'industrialforegoing:straw' });
event.recipes.create.cutting('industrialforegoing:straw', 'mekanism:hdpe_stick');

event.custom({
	"type":"createaddition:charging",
	"input": {
      	"item": "silentcompat:plasteel_ingot",
		"count": 1
	},
	"result": {
		"item": "silentcompat:arcmetal_ingot",
		"count": 1
	},
	"energy": 10000,
	"maxChargeRate": 200
});
  event.custom({
    "type": "create:haunting",
    "ingredients": [
      {
        "item": "silentcompat:plasteel_ingot"
      }
    ],
    "results": [
      {
        "item": "silentcompat:voidmetal_ingot"
      }
    ]
  });

  event.recipes.create.compacting('silentcompat:solarmetal_block', ['silentcompat:plasteel_block', 'silentgear:nether_star_fragment']).superheated()

event.remove({ id: 'alexscaves:uranium_from_shard'})
event.remove({ id: 'alexscaves:uranium_from_block'})
event.replaceInput(
  {mod: 'alexscaves'},
  '#forge:raw_materials/uranium',
  '#forge:ingots/uranium'
)
//cognition changes
event.remove("experienceobelisk:cognitive_flux")
event.shapeless(
  Item.of("experienceobelisk:cognitive_flux", 4),
  [
    "minecraft:quartz",
    "minecraft:lapis_lazuli",
    "#minecraft:soul_fire_base_blocks",
    "#forge:dusts/steel",
    "irons_spellbooks:arcane_essence"
  ]
)
//changes recipes that allow progression skips
event.remove({input:"superbwarfare:hammer", output:"#forge:dusts"})
event.remove({input:"superbwarfare:hammer", output:"#forge:plates"})
event.remove({input:"immersiveengineering:hammer", output:"#forge:dusts"})
event.remove({input:"immersiveengineering:hammer", output:"#forge:plates"})
event.remove({type: "ad_astra:compressing"})
});

