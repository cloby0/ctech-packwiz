ServerEvents.recipes(event => {
    event.remove({ output: 'industrialforegoing:latex_processing_unit' })
    event.remove({ output: 'industrialforegoing:fluid_extractor' })
    
    event.replaceInput({ mod: 'industrialforegoing' }, "#forge:gears/iron", '#forge:circuits/basic')
    event.replaceInput({ mod: 'industrialforegoing' }, "#forge:gears/gold", '#forge:circuits/advanced')
    event.replaceInput({ mod: 'industrialforegoing' }, "#forge:gears/diamond", '#forge:circuits/ultimate')

    event.recipes.create.sequenced_assembly([
		Item.of('industrialforegoing:machine_frame_simple'), // this is the item that will appear in JEI as the result
	], 'industrialforegoing:machine_frame_pity', [ // 'industrialforegoing:machine_frame_pity' is the input
		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('industrialforegoing:incomplete_simple_machine_frame', ['industrialforegoing:incomplete_simple_machine_frame', 'pneumaticcraft:plastic']),
		event.recipes.createDeploying('industrialforegoing:incomplete_simple_machine_frame', ['industrialforegoing:incomplete_simple_machine_frame', "#forge:ingots/refined_obsidian"  ]), 
		event.recipes.createDeploying('industrialforegoing:incomplete_simple_machine_frame', ['industrialforegoing:incomplete_simple_machine_frame', "mekanism:alloy_atomic"]),
        event.recipes.createFilling('industrialforegoing:incomplete_simple_machine_frame', ['industrialforegoing:incomplete_simple_machine_frame', Fluid.of('immersiveengineering:redstone_acid', 250)]),
	]).transitionalItem('industrialforegoing:incomplete_simple_machine_frame').loops(2)
    
    event.recipes.create.sequenced_assembly([
		Item.of('industrialforegoing:machine_frame_advanced'), // this is the item that will appear in JEI as the result
	], 'industrialforegoing:machine_frame_simple', [ // 'industrialforegoing:machine_frame_pity' is the input
		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('industrialforegoing:incomplete_advanced_machine_frame', ['industrialforegoing:incomplete_advanced_machine_frame', 'pneumaticcraft:plastic']),
		event.recipes.createDeploying('industrialforegoing:incomplete_advanced_machine_frame', ['industrialforegoing:incomplete_advanced_machine_frame', "#forge:ingots/refined_obsidian"]),
		event.recipes.createDeploying('industrialforegoing:incomplete_advanced_machine_frame', ['industrialforegoing:incomplete_advanced_machine_frame', "mekanism:teleportation_core"]),
        event.recipes.createFilling('industrialforegoing:incomplete_simple_machine_frame', ['industrialforegoing:incomplete_advanced_machine_frame', Fluid.of('industrialforegoing:pink_slime', 250)]),
	]).transitionalItem('industrialforegoing:incomplete_advanced_machine_frame').loops(2)
    
    event.recipes.create.sequenced_assembly([
		Item.of('industrialforegoing:machine_frame_supreme'), // this is the item that will appear in JEI as the result
	], 'industrialforegoing:machine_frame_advanced', [ // 'industrialforegoing:machine_frame_pity' is the input
		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('industrialforegoing:incomplete_supreme_machine_frame', ['industrialforegoing:incomplete_supreme_machine_frame', 'pneumaticcraft:plastic']),
		event.recipes.createDeploying('industrialforegoing:incomplete_supreme_machine_frame', ['industrialforegoing:incomplete_supreme_machine_frame', "mekanism:pellet_antimatter"]),
		event.recipes.createDeploying('industrialforegoing:incomplete_supreme_machine_frame', ['industrialforegoing:incomplete_supreme_machine_frame', "mekanism:pellet_polonium"]),
      event.recipes.createFilling('industrialforegoing:incomplete_supreme_machine_frame', ['industrialforegoing:incomplete_supreme_machine_frame', Fluid.of('industrialforegoing:ether_gas', 125)]),
	]).transitionalItem('industrialforegoing:incomplete_supreme_machine_frame').loops(2)

    event.remove({ id: 'industrialforegoing:machine_frame_pity' })
    event.shaped('industrialforegoing:machine_frame_pity', [
        'CBC',
        'BAB',
        'CBC'
      ], {
        A: 'mekanism:steel_casing',
        B: '#forge:ingots/refined_obsidian',
        C: 'pneumaticcraft:plastic'
      })

    event.recipes.create.mixing('industrialforegoing:laser_lens0', [
        '#forge:glass_panes/colorless',
        '#forge:glass_panes/colorless',
        '#forge:glass_panes/colorless',
        '#forge:glass_panes/colorless',
        Fluid.of('thermal:latex', 4000)
      ]).heated()
    
    event.remove({ output: "industrialforegoing:conveyor" })
    event.remove({ output: "industrialforegoing:conveyor_extraction_upgrade" })
    event.remove({ output: "industrialforegoing:conveyor_insertion_upgrade" })
    event.remove({ output: "industrialforegoing:conveyor_detection_upgrade" })
    event.remove({ output: "industrialforegoing:conveyor_bouncing_upgrade" })
    event.remove({ output: "industrialforegoing:conveyor_dropping_upgrade" })
    event.remove({ output: "industrialforegoing:conveyor_blinking_upgrade" })
    event.remove({ output: "industrialforegoing:conveyor_splitting_upgrade" })

    event.shaped(
      Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:0L,Selected:"POOR",Special:0b}'), // arg 1: output
      [
        'ABA',
        'DCD', // arg 2: the shape (array of strings)
        'ABA'
      ],
      {
        A: 'pneumaticcraft:plastic',
        B: '#forge:circuits/ultimate',  //arg 3: the mapping object
        C: 'dankstorage:dank_7',
        D: 'kubejs:cumium_ingot'
      }
    )
});