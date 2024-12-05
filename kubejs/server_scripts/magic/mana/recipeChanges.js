ServerEvents.recipes(event => {
    event.replaceInput(
      { id: 'botania:gaia_ingot' }, // Arg 1: the filter
      'botania:terrasteel_ingot',            // Arg 2: the item to replace
      'kubejs:cumium_ingot'         // Arg 3: the item to replace it with
      // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    );

    event.recipes.botania.terra_plate("kubejs:terra_book", 
      ["witherstormmod:command_block_book", 
        "botania:mana_diamond", 
        "botania:mana_pearl"], 
        5000000);
});