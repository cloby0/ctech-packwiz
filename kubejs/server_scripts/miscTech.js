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
  event.remove({output: 'immersive_aircraft:boiler'})
  event.shaped('immersive_aircraft:boiler', [
    ' A ', 
    'ACA', // arg 2: the shape (array of strings)
    'ABA'  
  ], {
    A: '#forge:plates/copper', 
    B: 'create:blaze_burner',  //arg 3: the mapping object
    C: 'create:fluid_tank'   
  })
  event.replaceInput(
    { id: 'immersive_aircraft:engine' },
    'minecraft:blast_furnace',
    'create:precision_mechanism'
  )
  event.remove({output: 'immersive_aircraft:propeller'})
  event.replaceInput(
    { input: 'immersive_aircraft:propeller' },
    'immersive_aircraft:propeller',
    'create:propeller'
  )
  event.remove({output: '#thermal:rockwool'})
  event.smelting('#forge:slag', 'immersiveengineering:slag_glass')
  event.shaped(
    Item.of('thermal:white_rockwool', 3), // arg 1: output
    [
      ' S ',
      'SWS', // arg 2: the shape (array of strings)
      ' S '
    ],
    {
      S: '#forge:string',
      W: '#forge:slag'
    }
  )
  event.shapeless(
    Item.of('thermal:white_rockwool', 3), // arg 1: output
    [
      '#forge:slag',
      'minecraft:white_wool'
    ]
  )
});