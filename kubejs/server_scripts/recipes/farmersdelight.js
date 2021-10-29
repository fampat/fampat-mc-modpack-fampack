// priority: 10

events.listen('recipes', function (event) {
  // Cutting Board Axe Stripping
  const axeStripping = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: "farmersdelight:tool",
        tool: "axe"
      },
      result: [
        Item.of(output).toResultJson(),
        Item.of("farmersdelight:tree_bark").toResultJson()
      ],
      sound: "minecraft:item.axe.strip"
    })
  }

  // Cutting Board Axe Chopping
  const axeChopping = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: "farmersdelight:tool",
        tool: "axe"
      },
      result: [
        Item.of(output).toResultJson()
      ]
    })
  }

  // Cutting Board Knife Cutting
  const knifeCutting = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        input
      ],
      tool: {
        "tag": "forge:tools/knives"
      },
      result: output
    })
  }

  // Cooking Pot Recipes
  const cookingPot = (output, input, container) => {
    event.custom({
      type: "farmersdelight:cooking",
      ingredients: input,
      result: output,
      container: container,
      cookingtime: 200
    })
  }

  // BetterEnd - Log Stripping
  const betterEndWoodTypes = [
    'dragon_tree',
    'end_lotus',
    'helix_tree',
    'jellyshroom',
    'lacugrove',
    'lucernia',
    'mossy_glowshroom',
    'pythadendron',
    'tenanea',
    'umbrella_tree'
  ]

  betterEndWoodTypes.forEach(function(element) {
    axeStripping(`betterendforge:${element}_stripped_log`, `betterendforge:${element}_log`)
    axeStripping(`betterendforge:${element}_stripped_bark`, `betterendforge:${element}_bark`)

    axeChopping(`betterendforge:${element}_planks`, `betterendforge:${element}_door`)
    axeChopping(`betterendforge:${element}_planks`, `betterendforge:${element}_sign`)
    axeChopping(`betterendforge:${element}_planks`, `betterendforge:${element}_trapdoor`)
  })

  // Biomes 'o' Plenty - Log Stripping
  const biomesOPlentyWoodTypes = [
    'fir',
    'redwood',
    'cherry',
    'mahogany',
    'jacaranda',
    'palm',
    'willow',
    'dead',
    'magic',
    'umbran',
    'hellbark'
  ]

  biomesOPlentyWoodTypes.forEach(function(element) {
    axeStripping('biomesoplenty:stripped_'.concat(element).concat('_log'), 'biomesoplenty:'.concat(element).concat('_log'))
    axeStripping('biomesoplenty:stripped_'.concat(element).concat('_wood'), 'biomesoplenty:'.concat(element).concat('_wood'))
    
    axeChopping('biomesoplenty:'.concat(element).concat('_planks'), 'biomesoplenty:'.concat(element).concat('_door'))
    axeChopping('biomesoplenty:'.concat(element).concat('_planks'), 'biomesoplenty:'.concat(element).concat('_trapdoor'))
  })

  // Mystical World
  knifeCutting([Item.of('mysticalworld:sliced_carrot', 4)], Ingredient.of('#forge:crops/carrot'))

  // ----- Cooking Pot Recipes -----
  cookingPot(Item.of('mysticalworld:stewed_eggplant'), [Ingredient.of('#forge:crops/eggplant'), Ingredient.of('#forge:mushrooms'), Ingredient.of('#forge:vegetables/onion')], Item.of('minecraft:bowl'))

})
