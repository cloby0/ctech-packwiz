ServerEvents.recipes(event => {
//changes imbuement chamber recipe
    event.remove({output: "ars_nouveau:imbuement_chamber"})
    event.shaped(
    Item.of('ars_nouveau:imbuement_chamber', 1), // arg 1: output
    [
        'ABA',
        'ACA', // arg 2: the shape (array of strings)
        'ABA'
    ],
    {
        A: 'ars_nouveau:archwood_planks',
        B: 'aether:ambrosium_block',  //arg 3: the mapping object
        C: 'embers:alchemy_tablet'
    }
    )
//book recipe
    event.recipes.ars_nouveau.imbuement(
        "witherstormmod:command_block_book",
        "kubejs:ars_book",
        15000,
        [
            "ars_nouveau:wilden_tribute"
        ])
//arcane core recipe
    event.remove({output:"ars_nouveau:arcane_core"})
    event.recipes.ars_nouveau.imbuement(
        "aether:altar",
        "ars_nouveau:arcane_core",
        7500,
        [
            "ars_nouveau:wilden_tribute",
            "aether:sun_altar",
            "ars_elemental:advanced_prism",
            "ars_elemental:advanced_prism"
        ]);
//adds an arcane essence recpie
    event.recipes.ars_nouveau.imbuement(
        '#forge:dusts/amethyst',
        'irons_spellbooks:arcane_essence',
        500,
        [

        ])
//changes apparatus recipe
    event.replaceInput(
            {output:"ars_nouveau:enchanting_apparatus"},
            "minecraft:diamond",
            "embers:alchemy_tablet"
        )
//changes arcane pedestal
    event.replaceInput(
            {output:"ars_nouveau:arcane_pedestal"},
            "ars_nouveau:source_gem",
            "embers:alchemy_tablet"
        )
//updates source gem recipe
    event.remove({output:"ars_nouveau:source_gem",type:"ars_nouveau:imbuement"})
    event.recipes.ars_nouveau.imbuement(
        "#forge:gems/zanite",
        "ars_nouveau:source_gem",
        500,
        [

        ])
//all changes from gold to ambrosium
    event.replaceInput(
        {input: "minecraft:gold_ingot",mod: "ars_nouveau"},
        "minecraft:gold_ingot",
        "aether:ambrosium_block"
    )
    event.replaceInput(
        {input: "minecraft:gold_nugget",mod: "ars_nouveau"},
        "minecraft:gold_nugget",
        "aether:ambrosium_shard"
    )
//changes redstone block in spell turret
    event.replaceInput(
        {output:"ars_nouveau:basic_spell_turret"},
        "minecraft:redstone_block",
        "aether_redux:refined_sentrite"
    )
//updates sourcestone recipe
    event.replaceInput(
        {input:"#forge:stone",output:"ars_nouveau:sourcestone"},
        "#forge:stone",
        "aether:holystone")

//updates brilliant fiber
    event.remove({output:"naturesaura:gold_fiber"})
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'aether:golden_gummy_swet',
            'aether:golden_gummy_swet',
            'aether:golden_oak_leaves',
            'aether:golden_oak_leaves'
        ], // input items
        "deep_aether:golden_grass_seeds", // reagent
        "naturesaura:gold_fiber", // output
        2000 // source cost
    )

//updates primordial core
    event.remove({output:"biomancy:primordial_core"})
    event.recipes.ars_nouveau.enchanting_apparatus(
      [
          'ars_elemental:anima_essence',
          'evilcraft:dark_gem',
          '#c:foods/raw_meat',
          '#c:foods/raw_meat'
      ], // input items
      "biomancy:meat_core", // reagent
      "biomancy:primordial_core", // output
      2000 // source cost
  )
    event.shaped(
        Item.of('biomancy:meat_core', 1), // arg 1: output
        [
            'AAA',
            'ABA', // arg 2: the shape (array of strings)
            'AAA'
        ],
        {
            A: '#c:foods/raw_meat',
            B: "ars_nouveau:source_gem"
        }
    )
//updates novice spell book recipe
    event.remove({output: 'ars_nouveau:novice_spell_book'})
    event.shapeless(
    Item.of('ars_nouveau:novice_spell_book', 1), // output item with count
    [
      'irons_spellbooks:iron_spell_book',
      'minecraft:iron_shovel',
      'minecraft:iron_pickaxe',
      'minecraft:iron_axe',
      'minecraft:iron_sword'
    ]
  )
//updates scroll forge recipe
    event.remove({output: 'irons_spellbooks:scroll_forge'})
    event.shaped(
        Item.of('irons_spellbooks:scroll_forge', 1), // output item with count
        [
        'AAA',
        'DBE',
        'CFC'
        ],
        {
        A: 'minecraft:polished_deepslate',
        B: 'ars_nouveau:scribes_table',
        C: 'irons_spellbooks:arcane_essence',
        D: 'minecraft:feather',
        E: 'irons_spellbooks:common_ink',
        F: 'minecraft:crying_obsidian'
        }
    )
})