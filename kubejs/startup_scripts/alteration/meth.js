ItemEvents.modification(event => {
    event.modify('createbb:white_stuff', item => {
      item.foodProperties = food => {
        food
        .alwaysEdible()
          .effect('minecraft:speed', 2400, 0, 1)
          .effect('minecraft:haste', 2400, 0, 1)
          .effect('parcool:inexhaustible', 2400, 0, 1)
          .effect('farmersdelight:nourishment', 2400, 0, 1)
          .effect('minecraft:weakness', 2400, 0, 1)
          .effect('minecraft:wither', 2400, 2, 0.6)
      }
    })
    event.modify('createbb:blue_stuff', item => {
      item.foodProperties = food => {
        food
        .alwaysEdible()
          .effect('minecraft:speed', 2600, 1, 1)
          .effect('minecraft:haste', 2600, 1, 1)
          .effect('parcool:inexhaustible', 2600, 0, 1)
          .effect('farmersdelight:nourishment', 2600, 0, 1)
          .effect('minecraft:weakness', 2400, 0, 1)
          .effect('minecraft:poison', 2400, 2, 0.5)
      }
    })
  });