StartupEvents.registry('fluid', event => {
  // Basic "thick" (looks like lava) fluid with red tint
  event.create('cum')
    .thickTexture(0xFFFFFF)
    .bucketColor(0xFFFFFF)
    .stillTexture('kubejs:block/cum_still')
    .flowingTexture('kubejs:block/cum_flow')
    .displayName('Cum')
})