ServerEvents.recipes(event => {
  event.replaceInput(
    { id: 'waterframes:remote' },
    'minecraft:redstone',
    'mekanism:basic_control_circuit'
  )
  event.replaceInput(
    { mod: 'waterframes' },
    'waterframes:remote',
    'mekanism:basic_control_circuit'
  )
  event.remove({output: '#thermal:rockwool'})
  event.smelting('#forge:slag', 'immersiveengineering:slag_glass')
  event.shaped(
    Item.of('thermal:white_rockwool', 3),
    [
      ' S ',
      'SWS',
      ' S '
    ],
    {
      S: '#forge:string',
      W: '#forge:slag'
    }
  )
  event.shapeless(
    Item.of('thermal:white_rockwool', 3),
    [
      '#forge:slag',
      'minecraft:white_wool'
    ]
  )
});