ServerEvents.recipes(event => {
    //replaces some stuff with copper casings
    event.replaceInput(
        {output: 'create:fluid_tank'},
        'minecraft:barrel',
        'create:copper_casing'
    );
    event.replaceInput(
        {output: 'create:fluid_tank'},
        'minecraft:copper_block',
        'create:copper_casing'
    );

    //removes some steel recipes
    event.remove({id: "ad_astra/alloying/steel_ingot_from_all"})
    event.remove({id: "create_tank_defenses/steel_mixing"})

    //new precision mechanism
    event.remove({output: "create:precision_mechanism" });
    event.recipes.create.sequenced_assembly([
		Item.of('create:precision_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('create:golden_sheet').withChance(8.0), // the rest of these items will be part of the scrap
		Item.of('create:andesite_alloy').withChance(8.0),
		Item.of('create:cogwheel').withChance(5.0),
		Item.of('create:shaft').withChance(2.0),
		Item.of('create:crushed_gold_ore').withChance(2.0),
		Item.of('2x minecraft:gold_nugget').withChance(2.0),
		'minecraft:iron_ingot',
		'minecraft:clock'
	], 'create:golden_sheet', [ // 'create:golden_sheet' is the input
		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:nuggets/steel'])
	]).transitionalItem('create:incomplete_precision_mechanism').loops(5)

    //coke brick
    event.replaceInput({id: "immersiveengineering:crafting/cokebrick"},
        '#forge:ingots/brick',
        'create:andesite_alloy'
    )
    event.replaceInput({id: "immersiveengineering:crafting/cokebrick"},
        '#forge:sandstone',
        'create:andesite_casing'
    )

    //blast brick
    event.replaceInput({id: "immersiveengineering:crafting/blastbrick"},
        'minecraft:nether_brick',
        'create:cinder_flour'
    )
    event.replaceInput({id: "immersiveengineering:crafting/blastbrick"},
        'minecraft:magma_block',
        'create:brass_casing'
    )

    //makes casings stack
    event.replaceInput({output: "create:copper_casing"},
        '#forge:stripped_logs',
        'create:andesite_casing'
    )

    event.replaceInput({output: "create:brass_casing"},
        '#forge:stripped_logs',
        'create:copper_casing'
    )

    event.replaceInput({output: "create_tank_defenses:steel_casing"},
        '#minecraft:logs',
        'create:brass_casing'
    )
})