ServerEvents.recipes(event => {
    event.replaceInput(
        { mod: 'computercraft' },
        '#createbigcannons:stone',
        '#forge:plates/steel'
      )
    event.replaceInput(
        { mod: 'computercraft' },
        'minecraft:gold_ingot',
        '#forge:plates/brass'
      )
    event.replaceInput(
        { mod: 'computercraft' },
        'minecraft:redstone',
        '#forge:circuits/basic'
      )
    event.replaceInput(
        { mod: 'computercraft' },
        'minecraft:golden_apple',
        '#forge:circuits/advanced'
      )
});