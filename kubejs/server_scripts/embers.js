ServerEvents.recipes(event => {
    //ember bore recipe
    event.replaceInput(
        {output: 'embers:ember_bore'},
        'minecraft:iron_ingot',
        '#forge:ingots/andesite_alloy'
    );

    //wrench recipe
    event.replaceInput(
        {output: 'create:wrench'},
        '#forge:plates/gold',
        '#forge:plates/dawnstone'
    );

    //ancient codex recipe
    event.remove({output: 'embers:ancient_codex'});
    event.shapeless(
        Item.of('embers:ancient_codex', 1),
    [
        'minecraft:paper',
        'embers:caminite_plate'
    ]);

    //geologic separator thing
    event.replaceInput(
        {output: 'embers:geologic_separator'},
        'embers:caminite_brick',
        '#forge:ingots/dawnstone'
    );

    //fluid vessel with copper casing
    event.remove({output: 'embers:fluid_vessel'})
    event.shaped(
        Item.of('embers:fluid_vessel', 1),
        [
            'B B',
            'PCP',
            'BIB'
        ],
        {
            B: "#forge:ingots/caminite_brick",
            P: "#forge:plates/iron",
            C: "create:copper_casing",
            I: "#forge:ingots/iron"
        }
    )
    //change the redstone in some pipe stuff
    event.replaceInput(
        {output: 'embers:item_extractor'},
        'minecraft:redstone',
        'embers:ember_grit'
    )
    event.replaceInput(
        {output: 'embers:fluid_extractor'},
        'minecraft:redstone',
        'embers:ember_grit'
    )
    //replace input thing
    event.replaceInput(
        {output: 'create:mechanical_press'},
        'minecraft:iron_block',
        '#forge:storage_blocks/dawnstone'
    )
})