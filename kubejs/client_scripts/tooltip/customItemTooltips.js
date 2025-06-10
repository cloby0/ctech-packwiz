/* 
colors: 
black
darkBlue
darkGreen
darkAqua
darkRed
darkPurple
gold
darkGray
darkGray
blue
green
aqua
red
lightPurple
yellow
*/
ItemEvents.tooltip(tooltip => {
  tooltip.addAdvanced('kubejs:handwavium_alloy', (item, advanced, text) =>{
    text.add(1, Text.darkGray('Just holding it makes you feel smarter..'))
  })

  tooltip.addAdvanced('kubejs:cumium_ingot', (item, advanced, text) =>{
    text.add(1, Text.darkGray('Incomprehensively powerful..'))
    text.add(2, Text.darkGray('Still though, super gross..'))
  })
  
  tooltip.addAdvanced('kubejs:ars_book', (item, advanced, text) =>{
    text.add(1, Text.darkPurple('Written in \"Java\"?'))
    text.add(2, Text.darkGray('Whatever that means..'))
  })
  tooltip.add([
    'kubejs:bio_book', 
  ], Text.darkRed("Written in blood. Ew."))
  
  tooltip.add([
    'kubejs:terra_book', 
  ], Text.darkGreen("Written in Elvish..."))
  
  tooltip.addAdvanced('kubejs:unfinished_aether_coin', (item, advanced, text) =>{
    text.add(1, Text.darkGray('\"The sky is falling!\"'))
    text.add(2, Text.darkGray('The Aether'))
  })
  
  tooltip.addAdvanced('kubejs:unfinished_nether_coin', (item, advanced, text) =>{
    text.add(1, Text.darkGray('Smells like sulfur..'))
    text.add(2, Text.darkGray('The Nether'))
  })

  tooltip.addAdvanced('kubejs:unfinished_overworld_coin', (item, advanced, text) =>{
    text.add(1, Text.darkGray('Careful not to touch the core!'))
    text.add(2, Text.darkGray('The Overworld'))
  })
  
  tooltip.addAdvanced('kubejs:unfinished_twilight_coin', (item, advanced, text) =>{
    text.add(1, Text.darkGray('Just add water!'))
    text.add(2, Text.darkGray('The Twilight Forest'))
  })

  tooltip.addAdvanced('kubejs:unfinished_space_coin', (item, advanced, text) =>{
    text.add(1, Text.darkGray('It looks around nervously..'))
    text.add(2, Text.darkGray('Space'))
  })

  tooltip.addAdvanced('kubejs:unfinished_end_coin', (item, advanced, text) =>{
    text.add(1, Text.darkGray('It has a familiar glow..'))
    text.add(2, Text.darkGray('The End'))
  })

  tooltip.addAdvanced('kubejs:aether_coin', (item, advanced, text) =>{
    text.add(1, Text.darkAqua('The holy fall to your hand.'))
    text.add(2, Text.darkGray('The Aether'))
  })
  
  tooltip.addAdvanced('kubejs:nether_coin', (item, advanced, text) =>{
    text.add(1, Text.darkRed('The damned fall to your hand.'))
    text.add(2, Text.darkGray('The Nether'))
  })

  tooltip.addAdvanced('kubejs:overworld_coin', (item, advanced, text) =>{
    text.add(1, Text.green('The worldly fall to your hand.'))
    text.add(2, Text.darkGray('The Overworld'))
  })
  
  tooltip.addAdvanced('kubejs:twilight_coin', (item, advanced, text) =>{
    text.add(1, Text.darkGreen('The forest-dwellers fall to your hand.'))
    text.add(2, Text.darkGray('The Twilight Forest'))
  })

  tooltip.addAdvanced('kubejs:space_coin', (item, advanced, text) =>{
    text.add(1, Text.gold('The cosmic fall to your hand.'))
    text.add(2, Text.darkGray('Space'))
  })

  tooltip.addAdvanced('kubejs:end_coin', (item, advanced, text) =>{
    text.add(1, Text.lightPurple('The Ender fall to your hand.'))
    text.add(2, Text.darkGray('The End'))
  })

  tooltip.addAdvanced('kubejs:wonder_jewel', (item, advanced, text) =>{
    text.add(1, Text.darkGray('When you look at yourself in the reflection,'))
    text.add(2, Text.darkGray('you see a swarming mass of eyes and wheels.'))
  })
});