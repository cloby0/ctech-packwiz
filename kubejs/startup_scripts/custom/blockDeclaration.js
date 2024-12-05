StartupEvents.registry('block', event => {
  event.create('mekanism:pure_osmium_block') // Create a new block
    .displayName('Pure Osmium Block') // Set a custom name
    .tagItem('forge:storage_blocks/pure_osmium') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .tagItem('forge:storage_blocks') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_diamond_tool') // the tool tier must be at least iron
})