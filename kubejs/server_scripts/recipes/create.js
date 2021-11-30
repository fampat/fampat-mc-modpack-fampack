// priority: 10

events.listen('recipes', function (event) {
  // Add a recipe to both crushing wheels and millstone.
  const crushAndMill = (output, input) => {
    event.recipes.create.crushing(output, input)
    event.recipes.create.milling(output, input)
  }

  // BetterEnd
  crushAndMill([Item.of('betterendforge:endstone_dust', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:end_stones')
  event.recipes.create.crushing([Item.of('betterendforge:ender_shard', 2), Item.of('betterendforge:ender_shard').withChance(0.25), Item.of('minecraft:cobblestone').withChance(0.12)], '#forge:ores/ender')
  crushAndMill(Item.of('minecraft:blue_dye', 2), 'betterendforge:blue_vine_seed')
  crushAndMill(Item.of('minecraft:cyan_dye', 2), 'betterendforge:creeping_moss')
  crushAndMill(Item.of('minecraft:cyan_dye', 2), 'betterendforge:cyan_moss')
  crushAndMill([Item.of('minecraft:yellow_dye', 2), Item.of('minecraft:cyan_dye').withChance(0.05)], 'betterendforge:umbrella_moss')
  crushAndMill([Item.of('minecraft:yellow_dye', 4), Item.of('minecraft:cyan_dye').withChance(0.05)], 'betterendforge:umbrella_moss_tall')
  crushAndMill(Item.of('minecraft:black_dye', 2), 'betterendforge:shadow_plant')
  crushAndMill(Item.of('minecraft:purple_dye', 2), 'betterendforge:purple_polypore')
  crushAndMill(Item.of('minecraft:gray_dye', 2), 'betterendforge:tail_moss')
  crushAndMill(Item.of('minecraft:magenta_dye', 2), 'betterendforge:bushy_grass')
  crushAndMill([Item.of('minecraft:pink_dye', 2), Item.of('minecraft:light_blue_dye').withChance(0.05)], 'betterendforge:twisted_moss')
  crushAndMill(Item.of('minecraft:white_dye', 2), 'betterendforge:hydralux_petal')
  crushAndMill([Item.of('minecraft:purple_dye', 2), Item.of('minecraft:cyan_dye').withChance(0.05)], 'betterendforge:twisted_umbrella_moss')
  crushAndMill([Item.of('minecraft:purple_dye', 4), Item.of('minecraft:cyan_dye').withChance(0.05)], 'betterendforge:twisted_umbrella_moss_tall')
  crushAndMill(Item.of('minecraft:red_dye', 2), 'betterendforge:charnia_red')
  crushAndMill(Item.of('minecraft:purple_dye', 2), 'betterendforge:charnia_purple')
  crushAndMill(Item.of('minecraft:orange_dye', 2), 'betterendforge:charnia_orange')
  crushAndMill(Item.of('minecraft:light_blue_dye', 2), 'betterendforge:charnia_light_blue')
  crushAndMill(Item.of('minecraft:cyan_dye', 2), 'betterendforge:charnia_cyan')
  crushAndMill(Item.of('minecraft:green_dye', 2), 'betterendforge:charnia_green')

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
    event.recipes.create.cutting(`betterendforge:${element}_stripped_log`, `betterendforge:${element}_log`)
    event.recipes.create.cutting(`betterendforge:${element}_stripped_bark`, `betterendforge:${element}_bark`)
    event.recipes.create.cutting(`betterendforge:${element}_log`, `betterendforge:${element}_bark`)
    event.recipes.create.cutting(Item.of(`betterendforge:${element}_planks`, 6), `betterendforge:${element}_stripped_log`)
    event.recipes.create.cutting(Item.of(`betterendforge:${element}_planks`, 6), `betterendforge:${element}_stripped_bark`)
  })

  event.recipes.create.mixing('betterendforge:aeternium_ingot', ['#forge:ingots/terminite', '#forge:ingots/netherite']).heated()
  event.recipes.create.mixing('betterendforge:terminite_ingot', ['#forge:ingots/iron', 'betterendforge:ender_dust']).heated()
  event.recipes.create.mixing('betterendforge:terminite_ingot', ['#forge:ingots/thallasium', 'betterendforge:ender_dust']).heated()

  // These two are currently missing from the Create integration for BetterEnd. TODO: Remove here once added there.
  event.recipes.create.pressing('betterendforge:rutiscus_path', 'betterendforge:rutiscus')
  event.recipes.create.pressing('betterendforge:sangnum_path', 'betterendforge:sangnum')

  // Blue Skies
  crushAndMill('blue_skies:crystal_sand', 'create:dolomite')
  crushAndMill('blue_skies:midnight_sand', 'quark:cobbled_deepslate')

  // BoP
  crushAndMill('biomesoplenty:white_sand', 'quark:marble')
  crushAndMill('biomesoplenty:black_sand', 'minecraft:basalt')
  crushAndMill([Item.of('biomesoplenty:white_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/white')
  crushAndMill([Item.of('biomesoplenty:black_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/black')
  crushAndMill([Item.of('biomesoplenty:orange_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/orange')

  // Decorative Blocks
  crushAndMill('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt')

  // Farmer's Delight
  crushAndMill([Item.of('farmersdelight:rice', 9), Item.of('farmersdelight:straw', 9)], 'farmersdelight:rice_bale')

  event.recipes.create.mixing('farmersdelight:pie_crust', [
    {fluid: 'minecraft:milk', amount: 250},
    'create:wheat_flour',
    'create:wheat_flour',
    'create:wheat_flour'
  ])

  // Mekanism
  event.recipes.create.splashing([Item.of('mekanism:nugget_copper', 10), Item.of('mekanism:nugget_copper', 5).withChance(0.5)], 'create:crushed_copper_ore')

  // Minecraft
  // Sandstone crushing was already in, but this gives parity with Immersive Engineering (ie. 2 sand instead of 1, and chance for saltpeter)
  crushAndMill([Item.of('minecraft:sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/colorless')
  crushAndMill([Item.of('minecraft:red_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/red')
  // The original Nether Wart block crushing was terribly underpowered. Now gives back exactly what was put in.
  crushAndMill(Item.of('minecraft:nether_wart', 4), 'minecraft:nether_wart_block')

  // Quark
  crushAndMill([Item.of('minecraft:sugar', 18), Item.of('minecraft:sugar', 2).withChance(0.5), Item.of('minecraft:sugar', 2).withChance(0.25), Item.of('minecraft:sugar', 2).withChance(0.1)], 'quark:sugar_cane_block')
})
