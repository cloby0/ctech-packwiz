ServerEvents.recipes(event => {
    //steel casing
    event.shaped(
        Item.of("mekanism:steel_casing", 1),
        [
            "SGS",
            "GPG",
            "SGS"
        ],
        {
            S: "#forge:ingot/steel",
            G: "#forge:glass",
            P: "mekanism:pure_osmium_ingot"
        }
    )
    
    //advanced AE machine rebalances
    event.remove("advanced_ae:reaction_chamber")
    event.shaped(
        Item.of("advanced_ae:reaction_chamber", 1),
        [
            "FEF",
            "FSF",
            "GBG"
        ],
        {
            F: "ae2:fluix_dust",
            E: "ae2:condenser",
            S: "mekanism:steel_casing",
            G: "minecraft:glowstone_dust",
            B: "minecraft:bucket"
        }
    )

})