ServerEvents.recipes(event =>{
//gold powder recipe
    event.remove({output:"naturesaura:gold_powder"})
    event.recipes.ars_nouveau.crush(
        "naturesaura:gold_leaf",
        [
            Item.of("naturesaura:gold_powder").withChance(1.0)
        ]
    )
//wooden stand recipe
    event.remove({id:"natureaura:wood_stand"})
    event.shaped(
        Item.of("naturesaura:wood_stand",1),
        [
            " G ",
            " W ",
            " R "
        ],
        {
            G:"naturesaura:gold_leaf",
            W:"#minecraft:logs",
            R:"twilightforest:liveroot"
        }
    )
    
})

