// priority: 10

events.listen('recipes', function (event) {
  // Mekanism Sawmill:
  const planks_per_log_mekanism = 6
  const sawdust_chance_normal = 0.25

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

  // BetterEnd
  betterEndWoodTypes.forEach(function(element) {
    event.recipes.mekanism.sawing(Item.of(`betterendforge:${element}_planks`, planks_per_log_mekanism), `#betterendforge:${element}_logs`, Item.of('mekanism:sawdust').chance(sawdust_chance_normal))
    event.recipes.mekanism.sawing(Item.of(`betterendforge:${element}_planks`, 2), `betterendforge:${element}_door`)
    event.recipes.mekanism.sawing(Item.of(`betterendforge:${element}_planks`, 2), `betterendforge:${element}_gate`, Item.of('minecraft:stick', 4).chance(1))
    event.recipes.mekanism.sawing(Item.of(`betterendforge:${element}_planks`, 2), `betterendforge:${element}_pressure_plate`)
    event.recipes.mekanism.sawing(Item.of(`betterendforge:${element}_planks`, 3), `betterendforge:${element}_trapdoor`)
  })
})
