ServerEvents.recipes(event => {
  event.remove({type: "alchemistry:dissolver"})

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": "forge:dusts/iron"
            }
          }
        ],
        "recipe": {
          "type": "alchemistry:dissolver",
          "group": "alchemistry:dissolver",
          "input": {
            "count": 1,
            "ingredient": {
              "tag": "forge:dusts/iron"
            }
          },
          "output": {
            "groups": [
              {
                "probability": 100.0,
                "results": [
                  {
                    "count": 16,
                    "item": "chemlib:iron"
                  }
                ]
              }
            ],
            "rolls": 1,
            "weighted": false
          }
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": "forge:silicon"
            }
          }
        ],
        "recipe": {
          "type": "alchemistry:dissolver",
          "group": "alchemistry:dissolver",
          "input": {
            "count": 1,
            "ingredient": {
              "tag": "forge:silicon"
            }
          },
          "output": {
            "groups": [
              {
                "probability": 100.0,
                "results": [
                  {
                    "count": 16,
                    "item": "chemlib:silicon"
                  }
                ]
              }
            ],
            "rolls": 1,
            "weighted": false
          }
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": "forge:dusts/aluminum"
            }
          }
        ],
        "recipe": {
          "type": "alchemistry:dissolver",
          "group": "alchemistry:dissolver",
          "input": {
            "count": 1,
            "ingredient": {
              "tag": "forge:dusts/aluminum"
            }
          },
          "output": {
            "groups": [
              {
                "probability": 100.0,
                "results": [
                  {
                    "count": 16,
                    "item": "chemlib:aluminum"
                  }
                ]
              }
            ],
            "rolls": 1,
            "weighted": false
          }
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": "forge:dusts/gold"
            }
          }
        ],
        "recipe": {
          "type": "alchemistry:dissolver",
          "group": "alchemistry:dissolver",
          "input": {
            "count": 1,
            "ingredient": {
              "tag": "forge:dusts/gold"
            }
          },
          "output": {
            "groups": [
              {
                "probability": 100.0,
                "results": [
                  {
                    "count": 16,
                    "item": "chemlib:gold"
                  }
                ]
              }
            ],
            "rolls": 1,
            "weighted": false
          }
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": "forge:dusts/tungsten"
            }
          }
        ],
        "recipe": {
          "type": "alchemistry:dissolver",
          "group": "alchemistry:dissolver",
          "input": {
            "count": 1,
            "ingredient": {
              "tag": "forge:dusts/tungsten"
            }
          },
          "output": {
            "groups": [
              {
                "probability": 100.0,
                "results": [
                  {
                    "count": 16,
                    "item": "chemlib:tungsten"
                  }
                ]
              }
            ],
            "rolls": 1,
            "weighted": false
          }
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": "forge:dusts/copper"
            }
          }
        ],
        "recipe": {
          "type": "alchemistry:dissolver",
          "group": "alchemistry:dissolver",
          "input": {
            "count": 1,
            "ingredient": {
              "tag": "forge:dusts/copper"
            }
          },
          "output": {
            "groups": [
              {
                "probability": 100.0,
                "results": [
                  {
                    "count": 16,
                    "item": "chemlib:copper"
                  }
                ]
              }
            ],
            "rolls": 1,
            "weighted": false
          }
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "type": "forge:not",
            "value": {
              "type": "forge:tag_empty",
              "tag": "forge:dusts/zinc"
            }
          }
        ],
        "recipe": {
          "type": "alchemistry:dissolver",
          "group": "alchemistry:dissolver",
          "input": {
            "count": 1,
            "ingredient": {
              "tag": "forge:dusts/zinc"
            }
          },
          "output": {
            "groups": [
              {
                "probability": 100.0,
                "results": [
                  {
                    "count": 16,
                    "item": "chemlib:zinc"
                  }
                ]
              }
            ],
            "rolls": 1,
            "weighted": false
          }
        }
      }
    ]
  })
})