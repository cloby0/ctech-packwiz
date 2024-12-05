/*
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    
    event.register(Commands.literal('deathban') // The name of the command
      .requires(s => s.hasPermission(2)) // Check if the player has operator privileges
      .then(Commands.argument('target', Arguments.PLAYER.create(event))
        .executes(c => fly(Arguments.PLAYER.getResult(c, 'target'))) // Toggle flight for the player included in the `target` argument
      )
    )
  })

EntityEvents.death(e => {
    if(e.entity.type == "minecraft:player") {
        let banTimer = 0

        if(e.entity.persistentData.timeSinceDeath > 0) {
            //If the player was killed recently
            banTimer = 30000
        } else {
            //If the player was not killed recently
            banTimer = 10000
        }
        calculateTimeSinceLastDeath(e.entity)
        e.entity.ban("banner","you died lol",banTimer)
    }
})

PlayerEvents.tick(e => {
    if(e.player.persistentData.timeSinceDeath > 0) {
        e.player.persistentData.timeSinceDeath -= 1
    }
})

function calculateTimeSinceLastDeath(player) {
    //The duration since the player was last killed
    player.persistentData.timeSinceDeath = 100
}
*/