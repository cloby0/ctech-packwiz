ServerEvents.recipes(event => {
    event.recipes.bloodmagic.altar('kubejs:bio_book', 'witherstormmod:command_block_book').upgradeLevel(4).altarSyphon(80000)
    event.remove({ output: 'biomancy:primordial_core'});

    event.recipes.bloodmagic.altar('biomancy:primordial_core', 'biomancy:meat_core').upgradeLevel(1).altarSyphon(1000)

    event.shaped('biomancy:meat_core', [// arg 1: output
      'AAA', 
      'ABA', // arg 2: the shape (array of strings)
      'AAA'  
    ], {
      A: '#biomancy:raw_meats', 
      B: 'bloodmagic:blankslate',
    }
  )
});