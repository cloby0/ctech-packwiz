ServerEvents.recipes(event => {
    //change alternator to be tier 2
    event.remove({ output: "createaddition:alternator"})
    event.recipes.create.mechanical_crafting('createaddition:alternator', [
      '  A  ',
      ' BCB ',
      'BCDCB',
      ' BEB '
   ], {
     A: 'create:andesite_alloy',
     B: '#forge:plates/steel',
     C: '#forge:wires/copper',
     D: '#forge:rods/iron',
     E: 'createaddition:capacitor'
      })
    
    //vault recipe -- credit to m-tech
    event.remove({ output: 'create:item_vault' })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": 'minecraft:barrel'
        },
        "loops": 1,
        "results": [
            {
                "item": 'create:item_vault'
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_vault"
                    },
                    {
                        "item": 'create:iron_sheet'
                    }
                ],
                "results": [
                    {
                        "item": "create:incomplete_vault"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_vault"
                    },
                    {
                        "item": 'create:iron_sheet'
                    }
                ],
                "results": [
                    {
                        "item": "create:incomplete_vault"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_vault"
                    },
                    {
                        "item": 'create:sturdy_sheet'
                    }
                ],
                "results": [
                    {
                        "item": "create:incomplete_vault"
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": "create:incomplete_vault"
        }
    })

    event.remove({ output: "create:sturdy_sheet" })
    //sturdy sheet
    event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {
          "item": '#forge:ingots/cast_iron'
      },
      "loops": 2,
      "results": [
          {
              "item": "create:sturdy_sheet"
          }
      ],
      "sequence": [
          {
              "type": "create:deploying",
              "ingredients": [
                  {
                      "item": "create:unprocessed_obsidian_sheet"
                  },
                  {
                      "item": "create:powdered_obsidian"
                  }
              ],
              "results": [
                  {
                      "item": "create:unprocessed_obsidian_sheet"
                  }
              ]
          },
          {
              "type": "create:filling",
              "ingredients": [
                  {
                      "item": "create:unprocessed_obsidian_sheet"
                  },
                  {
                      "amount": 1000,
                      "fluid": "minecraft:lava",
                      "nbt": {}
                  }
              ],
              "results": [
                  {
                      "item": "create:unprocessed_obsidian_sheet"
                  }
              ]
          },
          {
              "type": "create:pressing",
              "ingredients": [
                  {
                      "item": "create:unprocessed_obsidian_sheet"
                  }
              ],
              "results": [
                  {
                      "item": "create:unprocessed_obsidian_sheet"
                  }
              ]
          }
      ],
      "transitionalItem": {
          "item": "create:unprocessed_obsidian_sheet"
      }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": 'minecraft:barrel'
        },
        "loops": 1,
        "results": [
            {
                "item": 'create:item_vault'
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_vault"
                    },
                    {
                        "item": 'create:iron_sheet'
                    }
                ],
                "results": [
                    {
                        "item": "create:incomplete_vault"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_vault"
                    },
                    {
                        "item": 'create:iron_sheet'
                    }
                ],
                "results": [
                    {
                        "item": "create:incomplete_vault"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_vault"
                    },
                    {
                        "item": 'create:sturdy_sheet'
                    }
                ],
                "results": [
                    {
                        "item": "create:incomplete_vault"
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": "create:incomplete_vault"
        }
    })
    event.recipes.create.compacting('alltheores:steel_ingot', ['#forge:ingots/iron', '#minecraft:coals']).superheated()
  })