ServerEvents.recipes(event => {
    //light engineering blocks andesite casing
    event.replaceInput({output: "immersiveengineering:light_engineering"},
        'immersiveengineering:sheetmetal_iron',
        'create:andesite_casing'
    )

    //heavy engineering blocks brass casing
    event.replaceInput({output: "immersiveengineering:heavy_engineering"},
        'immersiveengineering:sheetmetal_steel',
        'create:brass_casing'
    )

    //redstone engineering block
    event.remove({id: "immersiveengineering:crafting/rs_engineering"})
    event.shapeless(
        Item.of('immersiveengineering:rs_engineering', 2), // arg 1: output
        [
            "immersiveengineering:light_engineering",
            "immersiveengineering:heavy_engineering",
            "create_tank_defenses:steel_casing",
            "create:precision_mechanism",
            "#forge:dusts/redstone"
        ]
    )

    //adds electrode blueprint recipe
    event.shaped(
        Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'),
        [
            'AAA',
            'BBB',
            'CCC'
        ],
        {
            A: 'immersiveengineering:graphite_electrode',
            B: 'minecraft:blue_dye',
            C: 'forge:paper'
        }
    )
    event.remove({id: "immersiveengineering/blueprint/component_electronic_adv"})
    event.custom({
        "type":"immersiveengineering:blueprint","category":"components","inputs":
        [
            {"tag":"forge:plates/plastic"},
            {"base_ingredient":
                {"item":"immersiveengineering:electron_tube"},"count":2},
                {"item":"create:precision_mechanism"}
        ],
                "result":{
                    "item":"immersiveengineering:component_electronic_adv"
                }}
            )
})