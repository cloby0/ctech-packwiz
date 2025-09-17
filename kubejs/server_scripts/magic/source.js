ServerEvents.recipes(event => {
//book recipe
    event.recipes.ars_nouveau.imbuement(
        ["ars_nouveau:wilden_tribute"],
        "witherstormmod:command_block_book",
        "kubejs:ars_book",
        15000,
    []
    )
//arcane core recipe
    event.remove({output:"ars_nouveau:arcane_core"})
    event.recipes.ars_nouveau.imbuement(
        ["ars_nouveau:wilden_tribute","aether:sun_altar","ars_elemental:advanced_prism","ars_elemental:advanced_prism"],
        "aether:altar",
        "ars_nouveau:arcane_core",
        7500,
        []
    )
//adds an arcane essence recpie
    event.recipes.ars_nouveau.imbuement(
        '#forge:dusts/amethyst',
        'irons_spellbooks:arcane_essence',
        500,
        []
    )
//updates source gem recipe
    event.recipes.ars_nouveau.imbuement(
        "#forge:gems/zanite",
        "ars_nouveau:source_gem",
        500,
        []
    )
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

//adds a way to turn iron's blood vials into blood magic life essence (do we wanna keep this?)
    event.recipes.create.filling(
        'irons_spellbooks:blood_vial',
        [
        'minecraft:bottle',
        Fluid.of('bloodmagic:life_essence_fluid', 250)
        ]
    )

    event.recipes.create.emptying(
        [
        Fluid.of('bloodmagic:life_essence_fluid', 250),
        'irons_spellbooks:blood_vial'
        ],
            'minecraft:bottle'
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