ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.imbuement(
        "witherstormmod:command_block_book",
        "kubejs:ars_book",
        15000,
    []
    )

    event.recipes.ars_nouveau.imbuement(
        '#forge:dusts/amethyst',
        'irons_spellbooks:arcane_essence',
        500,
        []
    )

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