ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'thermal:machine_frame' },
        'thermal:machine_frame',
        'mekanism:steel_casing'
      )
      event.remove({ output: 'thermal:machine_frame' })
});