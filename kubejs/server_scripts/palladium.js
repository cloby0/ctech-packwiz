ServerEvents.recipes(event => {
event.remove({ output: 'palladium:vibranium_flux_capacitor' });
event.remove({ output: 'palladium:quartz_flux_capacitor' });
event.remove({ output: 'palladium:lead_flux_capacitor' });

event.remove({ output: 'palladium:lead_circuit' })
event.remove({ output: 'palladium:vibranium_circuit' })
event.remove({ output: 'palladium:quartz_circuit' })


event.replaceInput(
    { input: 'palladium:quartz_circuit' },
    'palladium:quartz_circuit',
    'mekanism:basic_control_circuit'
  );

event.remove({ output: 'heroes:compound_alx' })
event.remove({ output: 'heroes:compound_alx_vial' })
event.remove({ output: 'heroes:formula_vial' })

event.recipes.create.filling('heroes:formula_vial', [Fluid.of('kubejs:formula', 250), 'minecraft:glass_bottle'])
event.recipes.create.emptying('minecraft:glass_bottle', [Fluid.of('kubejs:formula', 250), 'heroes:formula_vial'])

event.recipes.create.mixing(Fluid.of('kubejs:formula', 1000), [
  Fluid.of('createbb:liquid_blue_stuff', 750),
  Fluid.of('create_enchantment_industry:experience', 250)
]).superheated()

//event.remove({ output: 'heroes:erasure_pill' })
});