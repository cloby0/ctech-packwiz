ServerEvents.recipes(event => {
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
//updates source gem recipe
    event.remove({output:"ars_nouveau:source_gem",type:"ars_nouveau:imbuement",type:"thermal:press"})
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
        "aether_redux:sentrite"
    )
//updates sourcestone recipe
    event.replaceInput(
        {input:"#forge:stone",output:"ars_nouveau:sourcestone"},
        "#forge:stone",
        "aether:holystone")

//updates brilliant fiber
    event.remove({output:"naturesaura:gold_fiber"})
    event.recipes.ars_nouveau.enchantment_apparatus(
        "deep_aether:golden_grass_seeds",
        "naturesaura:gold_fiber",
        ["aether:golden_gummy_swet","aether:golden_gummy_swet","aether:golden_oak_leaves","aether:golden_oak_leaves"]
        2000
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
});
