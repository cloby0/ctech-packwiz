ServerEvents.tags('item', event => {
    event.add('forge:ingots', 'kubejs:cumium_ingot')
    event.add('forge:ingots/cumium', 'kubejs:cumium_ingot')

    event.add('forge:ingots', 'mekanism:pure_osmium_ingot')
    event.add('forge:ingots/pure_osmium', 'mekanism:pure_osmium_ingot')

    event.add('forge:nuggets', 'mekanism:pure_osmium_nugget')
    event.add('forge:nuggets/pure_osmium', 'mekanism:pure_osmium_nugget')

    event.add('forge:storage_blocks/pure_osmium')
    event.add('forge:storage_blocks')

    event.add('forge:gems', 'create:rose_quartz')

    event.remove('forge:gems/uranium', 'alexscaves:uranium')
    event.remove('forge:raw_materials/uranium', 'alexscaves:uranium')
    event.add('mekanism:shards/uranium', 'alexscaves:uranium')

    event.remove('minecraft:music_discs', 'supplementaries:pancake')

    event.add('forge:gems/sulfur', 'scguns:sulfur_chunk')

    //for the stones
    event.add('kjs:can_be_cobblegen', '#scguns:rocks')
    event.add('kjs:can_be_cobblegen', '#forge:stone')
    event.add('kjs:can_be_cobblegen', '#forge:cobblestone')
  });