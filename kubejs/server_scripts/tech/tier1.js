ServerEvents.recipes(event => {
    //replaces some stuff with copper casings
    event.replaceInput(
        {output: 'create:fluid_tank'},
        'minecraft:barrel',
        'create:copper_casing'
    );
    event.replaceInput(
        {output: 'create:steam_engine'},
        'minecraft:copper_block',
        'create:copper_casing'
    );

    //removes some steel recipes
    event.remove({id: "ad_astra/alloying/steel_ingot_from_all"})
    event.remove({id: "create_tank_defenses/steel_mixing"})
    event.remove({ type: "create:mixing", output: "alltheores:steel_ingot"})

    //new precision mechanism
    event.remove({output: "create:precision_mechanism" });
    event.recipes.create.sequenced_assembly([
		Item.of('create:precision_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('alltheores:gold_plate').withChance(8.0), // the rest of these items will be part of the scrap
		Item.of('create:andesite_alloy').withChance(8.0),
		Item.of('create:cogwheel').withChance(5.0),
		Item.of('create:shaft').withChance(2.0),
		Item.of('create:crushed_gold_ore').withChance(2.0),
		Item.of('2x minecraft:gold_nugget').withChance(2.0),
		'minecraft:iron_ingot',
		'minecraft:clock'
	], 'embers:archaic_circuit', [ // 'embers:archaic_circuit' is the input
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
    event.replaceInput({id: "immersiveengineering:crafting/cokebrick"},
        'minecraft:clay_ball',
        'embers:caminite_blend'
    )

    //blast brick
    event.replaceInput({id: "immersiveengineering:crafting/blastbrick"},
        'minecraft:nether_brick',
        'create:cinder_flour'
    )
    event.replaceInput({id: "immersiveengineering:crafting/blastbrick"},
        '#forge:ingots/brick',
        'embers:caminite_brick'
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
    event.remove({ id: "create:item_application/copper_casing_from_wood"})

    event.replaceInput({output: "create:brass_casing"},
        '#forge:stripped_logs',
        'create:copper_casing'
    )
    event.remove({ id: "create:item_application/brass_casing_from_wood"})

    event.replaceInput({output: "create_tank_defenses:steel_casing"},
        '#minecraft:logs',
        'create:brass_casing'
    )

    //nerfs early wires
    event.remove({ type: "createaddition:rolling", output: "#forge:wires"})
    event.remove({ type: "create:sawing", output: "#forge:wires"})


    //changes/nerfs alternators
    event.replaceInput({ output: "createaddition:alternator"}, "#forge:rods/iron", "create_tank_defenses:steel_casing")
    event.replaceInput({ output: "createaddition:alternator"}, "createaddition:copper_spool", "immersiveengineering:wirecoil_copper")

    //pitiful machine frame
    event.replaceInput({output:"industrialforegoing:machine_frame_pity"}, "minecraft:redstone_block", "create:precision_mechanism")
    event.replaceInput({output:"industrialforegoing:machine_frame_pity"}, "minecraft:iron_ingot", "#forge:ingots/steel")
    event.replaceInput({output:"industrialforegoing:machine_frame_pity"}, "#minecraft:logs", "create:brass_casing")
    event.replaceInput({input:"industrialforegoing:machine_frame_pity"}, "industrialforegoing:plastic", "#forge:plates/brass")
})
