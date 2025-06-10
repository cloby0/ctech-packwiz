// Listen to item registry event
StartupEvents.registry('item', e => {
  e.create('cumium_ingot')
    .displayName("Cumium Ingot")
    .rarity('epic')

  e.create('handwavium_alloy')
    .displayName("Handwavium Alloy")
    .rarity('rare')

  e.create('inert_cumium_alloy')
    .displayName("Inert Cumium Alloy")
    .rarity('rare')

  e.create('unstable_cumium_alloy')
    .displayName("Unstable Cumium Alloy")
    .rarity('rare')

  e.create('refined_cumium_alloy')
    .displayName("Refined Cumium Alloy")
    .rarity('rare')

  e.create('unforged_cumium_alloy')
    .displayName("Unforged Cumium Alloy")
    .rarity('rare')

  e.create('ars_book')
    .displayName("Source Codex")
    .rarity('rare')

  e.create('bio_book')
    .displayName("Catalog of Creation")
    .rarity('rare')

  e.create('terra_book')
    .displayName("Terrestrial Tome")
    .rarity('rare')

  e.create('aether_coin')
    .displayName("Coin of the Firmament")
    .rarity('rare')

  e.create('unfinished_aether_coin')
    .displayName("Shard of the Fallen Sky")
    .rarity('rare')

  e.create('nether_coin')
    .displayName("Coin of the Damned")
    .rarity('rare')

  e.create('unfinished_nether_coin')
    .displayName("Tortured Metal Blend")
    .rarity('rare')

  e.create('overworld_coin')
    .displayName("Coin of the Genesis")
    .rarity('rare')

  e.create('unfinished_overworld_coin')
    .displayName("Miniature Earth")
    .rarity('rare')

  e.create('twilight_coin')
    .displayName("Coin of the Waning Sky")
    .rarity('rare')

  e.create('unfinished_twilight_coin')
    .displayName("Pebbles of Gloam")
    .rarity('rare')

  e.create('space_coin')
    .displayName("Coin of the Cosmos")
    .rarity('rare')

  e.create('unfinished_space_coin')
    .displayName("Eye of the Stars")
    .rarity('rare')

  e.create('end_coin')
    .displayName("Coin of the Zenith")
    .rarity('rare')

  e.create('unfinished_end_coin')
    .displayName("The Last Gemstone")
    .rarity('rare')

  e.create('wonder_jewel')
    .displayName("Wonder Jewel")
    .rarity('rare')

  e.create('cave_geode')
    .displayName("Prismatic Geode")
    .rarity('rare')

  e.create('create:incomplete_vault')

  e.create('industrialforegoing:incomplete_simple_machine_frame')
  e.create('industrialforegoing:incomplete_advanced_machine_frame')
  e.create('industrialforegoing:incomplete_supreme_machine_frame')

  e.create('mekanism:pure_osmium_ingot')
  e.create('mekanism:pure_osmium_nugget')
  e.create('biomancy:meat_core')
});