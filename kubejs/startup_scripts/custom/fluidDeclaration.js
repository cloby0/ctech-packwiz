StartupEvents.registry('fluid', event => {
  // Basic "thick" (looks like lava) fluid with red tint
  event.create('cum')
    .thickTexture(0xFFFFFF)
    .bucketColor(0xFFFFFF)
    .stillTexture('kubejs:block/cum_still')
    .flowingTexture('kubejs:block/cum_flow')
    .displayName('Cum')
  
  event.create('formula')
    .thinTexture(0xee23ab)
    .bucketColor(0xee23ab)
    .displayName('Formula')
})