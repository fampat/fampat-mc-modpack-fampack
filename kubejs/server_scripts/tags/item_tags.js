// priority: 80
onEvent('item.tags', event => {
  // Farmer's Delight Knife Compat
  var knives = [
    'mysticalworld:amethyst_knife',
    'mysticalworld:cactus_knife',
    'mysticalworld:copper_knife',
    'mysticalworld:lead_knife',
    'mysticalworld:quicksilver_knife',
    'mysticalworld:silver_knife',
    'mysticalworld:tin_knife',
    'mysticalworld:stone_knife',
    'mysticalworld:wood_knife',
    'mysticalworld:diamond_knife',
    'mysticalworld:gold_knife',
    'mysticalworld:iron_knife'
  ]

  event.get('farmersdelight:tools/knives').add(knives)
  event.get('forge:tools/knives').add(knives)

  // Other Tools
  event.get('forge:tools/hammer').add([
    'immersiveengineering:hammer',
    '#betterendforge:hammers'
  ])
  
  event.add('forge:tools/spindle', 'mysticalworld:spindle')

  // Missing #forge:seed item tags.
  event.get('forge:seeds').add([
    'betterendforge:amber_root_seed',
    'betterendforge:blossom_berry_seed',
    'betterendforge:blue_vine_seed',
    'betterendforge:bulb_vine_seed',
    'betterendforge:chorus_mushroom_seed',
    'betterendforge:end_lily_seed',
    'betterendforge:end_lotus_seed',
    'betterendforge:glowing_pillar_seed',
    'betterendforge:lanceleaf_seed',
    'betterendforge:lumecorn_seed',
    'betterendforge:shadow_berry', // This is the seed item, despite the ID.
    'mysticalworld:aubergine_seeds'
  ])

  // Missing Glass Panes Tags
  event.get('forge:glass_panes').add([
    'atum:white_stained_crystal_glass_pane',
    'atum:orange_stained_crystal_glass_pane',
    'atum:magenta_stained_crystal_glass_pane',
    'atum:light_blue_stained_crystal_glass_pane',
    'atum:yellow_stained_crystal_glass_pane',
    'atum:lime_stained_crystal_glass_pane',
    'atum:pink_stained_crystal_glass_pane',
    'atum:pink_stained_crystal_glass_pane',
    'atum:gray_stained_crystal_glass_pane',
    'atum:light_gray_stained_crystal_glass_pane',
    'atum:cyan_stained_crystal_glass_pane',
    'atum:purple_stained_crystal_glass_pane',
    'atum:blue_stained_crystal_glass_pane',
    'atum:brown_stained_crystal_glass_pane',
    'atum:green_stained_crystal_glass_pane',
    'atum:red_stained_crystal_glass_pane',
    'atum:black_stained_crystal_glass_pane',
    'atum:white_stained_palm_framed_crystal_glass_pane',
    'atum:orange_stained_palm_framed_crystal_glass_pane',
    'atum:magenta_stained_palm_framed_crystal_glass_pane',
    'atum:light_blue_stained_palm_framed_crystal_glass_pane',
    'atum:yellow_stained_palm_framed_crystal_glass_pane',
    'atum:lime_stained_palm_framed_crystal_glass_pane',
    'atum:pink_stained_palm_framed_crystal_glass_pane',
    'atum:pink_stained_palm_framed_crystal_glass_pane',
    'atum:gray_stained_palm_framed_crystal_glass_pane',
    'atum:light_gray_stained_palm_framed_crystal_glass_pane',
    'atum:cyan_stained_palm_framed_crystal_glass_pane',
    'atum:purple_stained_palm_framed_crystal_glass_pane',
    'atum:blue_stained_palm_framed_crystal_glass_pane',
    'atum:brown_stained_palm_framed_crystal_glass_pane',
    'atum:green_stained_palm_framed_crystal_glass_pane',
    'atum:red_stained_palm_framed_crystal_glass_pane',
    'atum:black_stained_palm_framed_crystal_glass_pane',
    'atum:white_stained_deadwood_framed_crystal_glass_pane',
    'atum:orange_stained_deadwood_framed_crystal_glass_pane',
    'atum:magenta_stained_deadwood_framed_crystal_glass_pane',
    'atum:light_blue_stained_deadwood_framed_crystal_glass_pane',
    'atum:yellow_stained_deadwood_framed_crystal_glass_pane',
    'atum:lime_stained_deadwood_framed_crystal_glass_pane',
    'atum:pink_stained_deadwood_framed_crystal_glass_pane',
    'atum:pink_stained_deadwood_framed_crystal_glass_pane',
    'atum:gray_stained_deadwood_framed_crystal_glass_pane',
    'atum:light_gray_stained_deadwood_framed_crystal_glass_pane',
    'atum:cyan_stained_deadwood_framed_crystal_glass_pane',
    'atum:purple_stained_deadwood_framed_crystal_glass_pane',
    'atum:blue_stained_deadwood_framed_crystal_glass_pane',
    'atum:brown_stained_deadwood_framed_crystal_glass_pane',
    'atum:green_stained_deadwood_framed_crystal_glass_pane',
    'atum:red_stained_deadwood_framed_crystal_glass_pane',
    'atum:black_stained_deadwood_framed_crystal_glass_pane'
  ])

  // Missing #forge:sapling item tags.
  var saplings = [
    'quark:yellow_blossom_sapling',
    'quark:lavender_blossom_sapling',
    'quark:pink_blossom_sapling',
    'quark:blue_blossom_sapling',
    'quark:orange_blossom_sapling',
    'quark:red_blossom_sapling',
    'betterendforge:dragon_tree_sapling',
    'betterendforge:helix_tree_sapling',
    'betterendforge:lacugrove_sapling',
    'betterendforge:lucernia_sapling',
    'betterendforge:mossy_glowshroom_sapling',
    'betterendforge:pythadendron_sapling',
    'betterendforge:tenanea_sapling',
    'betterendforge:umbrella_tree_sapling',
    'biomesoplenty:origin_sapling',
    'biomesoplenty:flowering_oak_sapling',
    'biomesoplenty:rainbow_birch_sapling',
    'biomesoplenty:yellow_autumn_sapling',
    'biomesoplenty:orange_autumn_sapling',
    'biomesoplenty:maple_sapling',
    'biomesoplenty:fir_sapling',
    'biomesoplenty:redwood_sapling',
    'biomesoplenty:white_cherry_sapling',
    'biomesoplenty:pink_cherry_sapling',
    'biomesoplenty:mahogany_sapling',
    'biomesoplenty:jacaranda_sapling',
    'biomesoplenty:palm_sapling',
    'biomesoplenty:willow_sapling',
    'biomesoplenty:dead_sapling',
    'biomesoplenty:magic_sapling',
    'biomesoplenty:umbran_sapling',
    'biomesoplenty:hellbark_sapling',
    'twilightforest:rainboak_sapling',
    'twilightforest:twilight_oak_sapling',
    'twilightforest:canopy_sapling',
    'twilightforest:mangrove_sapling',
    'twilightforest:darkwood_sapling',
    'twilightforest:hollow_oak_sapling',
    'twilightforest:time_sapling',
    'twilightforest:transformation_sapling',
    'twilightforest:mining_sapling',
    'twilightforest:sorting_sapling'
  ]

  event.get('forge:sapling').add(saplings)
 
  // Missing Wall Tags
  var woodenWalls = [
    'absentbydesign:wall_stripped_acacia_log',
    'absentbydesign:wall_stripped_birch_log',
    'absentbydesign:wall_stripped_dark_oak_log',
    'absentbydesign:wall_stripped_jungle_log',
    'absentbydesign:wall_stripped_oak_log',
    'absentbydesign:wall_stripped_spruce_log',
    'absentbydesign:wall_stripped_crimson',
    'absentbydesign:wall_stripped_warped',
    'absentbydesign:wall_acacia_log',
    'absentbydesign:wall_birch_log',
    'absentbydesign:wall_dark_oak_log',
    'absentbydesign:wall_jungle_log',
    'absentbydesign:wall_oak_log',
    'absentbydesign:wall_spruce_log',
    'absentbydesign:wall_crimson',
    'absentbydesign:wall_warped',
    'absentbydesign:wall_mushroom_stem',
    'absentbydesign:wall_red_mushroom',
    'absentbydesign:wall_brown_mushroom',
    'absentbydesign:wall_mushroom_polished'
  ]

  var stoneWalls = [
    'absentbydesign:wall_andesite_smooth',
    'absentbydesign:wall_diorite_smooth',
    'absentbydesign:wall_granite_smooth',
    'absentbydesign:wall_end_stone',
    'absentbydesign:wall_purpur',
    'absentbydesign:wall_quartz',
    'absentbydesign:wall_sandstone_red_smooth',
    'absentbydesign:wall_sandstone_smooth',
    'absentbydesign:wall_stone',
    'absentbydesign:wall_stone_slab',
    'absentbydesign:wall_stonebrick_carved',
    'absentbydesign:wall_stonebrick_cracked',
    'absentbydesign:wall_obsidian',
    'absentbydesign:wall_prismarine_bricks',
    'absentbydesign:wall_dark_prismarine',
    'absentbydesign:wall_crying_obsidian',
    'absentbydesign:wall_basalt',
    'absentbydesign:wall_polished_basalt',
    'absentbydesign:wall_quartz_bricks',
    'absentbydesign:wall_lodestone',
    'betterendforge:flavolite_wall',
    'betterendforge:flavolite_bricks_wall',
    'betterendforge:violecite_wall',
    'betterendforge:violecite_bricks_wall',
    'betterendforge:sulphuric_rock_wall',
    'betterendforge:sulphuric_rock_bricks_wall',
    'bloodmagic:dungeon_brick_wall',
    'bloodmagic:dungeon_polished_wall'
  ]

  var glassWalls = [
    'absentbydesign:wall_glass',
    'absentbydesign:wall_glass_white',
    'absentbydesign:wall_glass_orange',
    'absentbydesign:wall_glass_magenta',
    'absentbydesign:wall_glass_purple',
    'absentbydesign:wall_glass_blue',
    'absentbydesign:wall_glass_brown',
    'absentbydesign:wall_glass_red',
    'absentbydesign:wall_glass_black',
    'absentbydesign:wall_glass_cyan',
    'absentbydesign:wall_glass_light_gray',
    'absentbydesign:wall_glass_gray',
    'absentbydesign:wall_glass_pink',
    'absentbydesign:wall_glass_lime',
    'absentbydesign:wall_glass_light_blue',
    'absentbydesign:wall_glass_yellow',
    'absentbydesign:wall_glass_green'
  ]

  var miscWalls = [
    'absentbydesign:wall_magma',
    'absentbydesign:wall_glowstone',
    'absentbydesign:wall_sea_lantern'
  ]

  event.get('minecraft:walls')
       .add(woodenWalls)
       .add(stoneWalls)
       .add(glassWalls)
       .add(miscWalls)

  // Missing Stair Tags
  var woodenStairs = [
    'absentbydesign:stairs_red_mushroom',
    'absentbydesign:stairs_brown_mushroom',
    'absentbydesign:stairs_mushroom_stem',
    'absentbydesign:stairs_mushroom_polished',
    'astralsorcery:infused_wood_stairs',
    'immersiveengineering:stairs_treated_wood_horizontal',
    'immersiveengineering:stairs_treated_wood_vertical',
    'immersiveengineering:stairs_treated_wood_packaged'
  ]

  var stoneStairs = [
    'absentbydesign:stairs_end_stone',
    'absentbydesign:stairs_netherrack',
    'absentbydesign:stairs_bricks_cracked',
    'absentbydesign:stairs_obsidian',
    'absentbydesign:stairs_basalt',
    'absentbydesign:stairs_polished_basalt',
    'absentbydesign:stairs_crying_obsidian',
    'absentbydesign:stairs_lodestone',
    'absentbydesign:stairs_quartz_bricks',
    'astralsorcery:marble_stairs',
    'astralsorcery:black_marble_stairs',
    'betterendforge:dragon_bone_stairs',
    'betterendforge:flavolite_stairs',
    'betterendforge:flavolite_bricks_stairs',
    'betterendforge:violecite_stairs',
    'betterendforge:violecite_bricks_stairs',
    'betterendforge:sulphuric_rock_stairs',
    'betterendforge:sulphuric_rock_bricks_stairs'
  ]

  var concreteStairs = [
    'absentbydesign:stairs_concrete_black',
    'absentbydesign:stairs_concrete_blue',
    'absentbydesign:stairs_concrete_brown',
    'absentbydesign:stairs_concrete_cyan',
    'absentbydesign:stairs_concrete_gray',
    'absentbydesign:stairs_concrete_green',
    'absentbydesign:stairs_concrete_light_blue',
    'absentbydesign:stairs_concrete_lime',
    'absentbydesign:stairs_concrete_magenta',
    'absentbydesign:stairs_concrete_orange',
    'absentbydesign:stairs_concrete_pink',
    'absentbydesign:stairs_concrete_purple',
    'absentbydesign:stairs_concrete_red',
    'absentbydesign:stairs_concrete_silver',
    'absentbydesign:stairs_concrete_white',
    'absentbydesign:stairs_concrete_yellow',
    'immersiveengineering:stairs_concrete',
    'immersiveengineering:stairs_concrete_tile',
    'immersiveengineering:stairs_concrete_leaded'
  ]

  var woolStairs = [
    'absentbydesign:stairs_wool_black',
    'absentbydesign:stairs_wool_blue',
    'absentbydesign:stairs_wool_brown',
    'absentbydesign:stairs_wool_cyan',
    'absentbydesign:stairs_wool_gray',
    'absentbydesign:stairs_wool_green',
    'absentbydesign:stairs_wool_light_blue',
    'absentbydesign:stairs_wool_lime',
    'absentbydesign:stairs_wool_magenta',
    'absentbydesign:stairs_wool_orange',
    'absentbydesign:stairs_wool_pink',
    'absentbydesign:stairs_wool_purple',
    'absentbydesign:stairs_wool_red',
    'absentbydesign:stairs_wool_silver',
    'absentbydesign:stairs_wool_white',
    'absentbydesign:stairs_wool_yellow'
  ]
  
  var terracottaStairs = [
    'absentbydesign:stairs_terracotta_black',
    'absentbydesign:stairs_terracotta_blue',
    'absentbydesign:stairs_terracotta_brown',
    'absentbydesign:stairs_terracotta_cyan',
    'absentbydesign:stairs_terracotta_gray',
    'absentbydesign:stairs_terracotta_green',
    'absentbydesign:stairs_terracotta_light_blue',
    'absentbydesign:stairs_terracotta_lime',
    'absentbydesign:stairs_terracotta_magenta',
    'absentbydesign:stairs_terracotta_orange',
    'absentbydesign:stairs_terracotta_pink',
    'absentbydesign:stairs_terracotta_purple',
    'absentbydesign:stairs_terracotta_red',
    'absentbydesign:stairs_terracotta_light_gray',
    'absentbydesign:stairs_terracotta_white',
    'absentbydesign:stairs_terracotta_yellow'
  ]

  var glassStairs = [
    'absentbydesign:stairs_glass',
    'absentbydesign:stairs_glass_black',
    'absentbydesign:stairs_glass_blue',
    'absentbydesign:stairs_glass_brown',
    'absentbydesign:stairs_glass_cyan',
    'absentbydesign:stairs_glass_gray',
    'absentbydesign:stairs_glass_green',
    'absentbydesign:stairs_glass_light_blue',
    'absentbydesign:stairs_glass_lime',
    'absentbydesign:stairs_glass_magenta',
    'absentbydesign:stairs_glass_orange',
    'absentbydesign:stairs_glass_pink',
    'absentbydesign:stairs_glass_purple',
    'absentbydesign:stairs_glass_red',
    'absentbydesign:stairs_glass_light_gray',
    'absentbydesign:stairs_glass_white',
    'absentbydesign:stairs_glass_yellow'
  ]

  var miscStairs = [
    'absentbydesign:stairs_coarse_dirt',
    'absentbydesign:stairs_snow',
    'absentbydesign:stairs_magma',
    'absentbydesign:stairs_glowstone',
    'absentbydesign:stairs_sea_lantern',
    'immersivepetroleum:asphalt_stairs'
  ]

  event.get('minecraft:stairs')
       .add(woodenStairs)
       .add(stoneStairs)
       .add(concreteStairs)
       .add(woolStairs)
       .add(terracottaStairs)
       .add(glassStairs)
       .add(miscStairs)

  event.get('minecraft:wooden_stairs')
       .add(woodenStairs)

  // Missing Slab Tags
  var woodenSlabs = [
    'absentbydesign:slab_mushroom_stem',
    'absentbydesign:slab_red_mushroom',
    'absentbydesign:slab_brown_mushroom',
    'absentbydesign:slab_mushroom_polished',
    'astralsorcery:infused_wood_slab',
    'betterendforge:neon_cactus_slab',
    'immersiveengineering:slab_treated_wood_horizontal',
    'immersiveengineering:slab_treated_wood_vertical',
    'immersiveengineering:slab_treated_wood_packaged'
  ]

  var stoneSlabs = [
    'absentbydesign:slab_end_stone',
    'absentbydesign:slab_netherrack',
    'absentbydesign:slab_bricks_cracked',
    'absentbydesign:slab_obsidian',
    'absentbydesign:slab_basalt',
    'absentbydesign:slab_polished_basalt',
    'absentbydesign:slab_crying_obsidian',
    'absentbydesign:slab_lodestone',
    'absentbydesign:slab_quartz_bricks',
    'astralsorcery:marble_slab',
    'astralsorcery:black_marble_slab'
  ]

  var concreteSlabs = [
    'absentbydesign:slab_concrete_black',
    'absentbydesign:slab_concrete_blue',
    'absentbydesign:slab_concrete_brown',
    'absentbydesign:slab_concrete_cyan',
    'absentbydesign:slab_concrete_gray',
    'absentbydesign:slab_concrete_green',
    'absentbydesign:slab_concrete_light_blue',
    'absentbydesign:slab_concrete_lime',
    'absentbydesign:slab_concrete_magenta',
    'absentbydesign:slab_concrete_orange',
    'absentbydesign:slab_concrete_pink',
    'absentbydesign:slab_concrete_purple',
    'absentbydesign:slab_concrete_red',
    'absentbydesign:slab_concrete_silver',
    'absentbydesign:slab_concrete_white',
    'absentbydesign:slab_concrete_yellow',
    'immersiveengineering:slab_hempcrete',
    'immersiveengineering:slab_concrete',
    'immersiveengineering:slab_concrete_tile',
    'immersiveengineering:slab_concrete_leaded',
  ]

  var woolSlabs = [
    'absentbydesign:slab_wool_black',
    'absentbydesign:slab_wool_blue',
    'absentbydesign:slab_wool_brown',
    'absentbydesign:slab_wool_cyan',
    'absentbydesign:slab_wool_gray',
    'absentbydesign:slab_wool_green',
    'absentbydesign:slab_wool_light_blue',
    'absentbydesign:slab_wool_lime',
    'absentbydesign:slab_wool_magenta',
    'absentbydesign:slab_wool_orange',
    'absentbydesign:slab_wool_pink',
    'absentbydesign:slab_wool_purple',
    'absentbydesign:slab_wool_red',
    'absentbydesign:slab_wool_silver',
    'absentbydesign:slab_wool_white',
    'absentbydesign:slab_wool_yellow'
  ]

  var terracottaSlabs = [
    'absentbydesign:slab_terracotta_black',
    'absentbydesign:slab_terracotta_blue',
    'absentbydesign:slab_terracotta_brown',
    'absentbydesign:slab_terracotta_cyan',
    'absentbydesign:slab_terracotta_gray',
    'absentbydesign:slab_terracotta_green',
    'absentbydesign:slab_terracotta_light_blue',
    'absentbydesign:slab_terracotta_lime',
    'absentbydesign:slab_terracotta_magenta',
    'absentbydesign:slab_terracotta_orange',
    'absentbydesign:slab_terracotta_pink',
    'absentbydesign:slab_terracotta_purple',
    'absentbydesign:slab_terracotta_red',
    'absentbydesign:slab_terracotta_light_gray',
    'absentbydesign:slab_terracotta_white',
    'absentbydesign:slab_terracotta_yellow'
  ]

  var glassSlabs = [
    'absentbydesign:slab_glass',
    'absentbydesign:slab_glass_black',
    'absentbydesign:slab_glass_blue',
    'absentbydesign:slab_glass_brown',
    'absentbydesign:slab_glass_cyan',
    'absentbydesign:slab_glass_gray',
    'absentbydesign:slab_glass_green',
    'absentbydesign:slab_glass_light_blue',
    'absentbydesign:slab_glass_lime',
    'absentbydesign:slab_glass_magenta',
    'absentbydesign:slab_glass_orange',
    'absentbydesign:slab_glass_pink',
    'absentbydesign:slab_glass_purple',
    'absentbydesign:slab_glass_red',
    'absentbydesign:slab_glass_light_gray',
    'absentbydesign:slab_glass_white',
    'absentbydesign:slab_glass_yellow',
    'immersiveengineering:slab_insulating_glass'
  ]

  var miscSlabs = [
    'absentbydesign:slab_snow',
    'absentbydesign:slab_coarse_dirt',
    'absentbydesign:slab_magma',
    'absentbydesign:slab_glowstone',
    'absentbydesign:slab_sea_lantern',
    'betterendforge:dragon_bone_slab',
    'immersivepetroleum:asphalt_slab'
  ]

  event.get('minecraft:slabs')
       .add(woodenSlabs)
       .add(stoneSlabs)
       .add(concreteSlabs)
       .add(woolSlabs)
       .add(terracottaSlabs)
       .add(glassSlabs)
       .add(miscSlabs)

  event.get('minecraft:wooden_slabs')
       .add(woodenSlabs)

  var orangeSandstones = [
    'biomesoplenty:orange_sandstone',
    'biomesoplenty:smooth_orange_sandstone',
    'biomesoplenty:cut_orange_sandstone',
    'biomesoplenty:chiseled_orange_sandstone'
  ]

  event.get('forge:sandstone/orange')
       .add(orangeSandstones)

  var whiteSandstones = [
    'biomesoplenty:white_sandstone',
    'biomesoplenty:smooth_white_sandstone',
    'biomesoplenty:cut_white_sandstone',
    'biomesoplenty:chiseled_white_sandstone'
  ]

  event.get('forge:sandstone/white')
       .add(whiteSandstones)

  var blackSandstones = [
    'biomesoplenty:black_sandstone',
    'biomesoplenty:smooth_black_sandstone',
    'biomesoplenty:cut_black_sandstone',
    'biomesoplenty:chiseled_black_sandstone'
  ]

  event.get('forge:sandstone/black')
       .add(blackSandstones)

  var soulSandstones = [
    'quark:soul_sandstone',
    'quark:soul_sandstone_bricks',
    'quark:smooth_soul_sandstone',
    'quark:cut_soul_sandstone',
    'quark:chiseled_soul_sandstone'
  ]

  event.get('forge:sandstone/soul')
       .add(soulSandstones)

  event.add('forge:sandstone/colorless', 'quark:sandstone_bricks')
  event.add('forge:sandstone/red', 'quark:red_sandstone_bricks')

  // Missing Create Crushed Ore Tags (for JAOPCA compatibility in recipes)
  event.add('create:crushed_ores/iron', 'create:crushed_iron_ore')
  event.add('create:crushed_ores/gold', 'create:crushed_gold_ore')
  event.add('create:crushed_ores/copper', 'create:crushed_copper_ore')
  event.add('create:crushed_ores/zinc', 'create:crushed_zinc_ore')
  event.add('create:crushed_ores/brass', 'create:crushed_brass')
  event.add('create:crushed_ores/osmium', 'create:crushed_osmium_ore')
  event.add('create:crushed_ores/silver', 'create:crushed_silver_ore')
  event.add('create:crushed_ores/tin', 'create:crushed_tin_ore')
  event.add('create:crushed_ores/lead', 'create:crushed_lead_ore')
  event.add('create:crushed_ores/quicksilver', 'create:crushed_quicksilver_ore')
  event.add('create:crushed_ores/aluminum', 'create:crushed_aluminum_ore')
  event.add('create:crushed_ores/bauxite', 'create:crushed_aluminum_ore')
  event.add('create:crushed_ores/uranium', 'create:crushed_uranium_ore')
  event.add('create:crushed_ores/nickel', 'create:crushed_nickel_ore')

  // Missing Mud Brick Tags
  event.add('forge:ingots/mud_brick', 'biomesoplenty:mud_brick')
  event.add('engineersdecor:brick_ingots', 'biomesoplenty:mud_brick')

  // Beacon Payment Items
  var beaconPaymentItems = [
    'betterendforge:thallasium_ingot',
    'betterendforge:terminite_ingot',
    'betterendforge:aeternium_ingot',
    'create:brass_ingot',
    'create:zinc_ingot',
    'immersiveengineering:ingot_aluminum',
    'immersiveengineering:ingot_silver',
    'immersiveengineering:ingot_nickel',
    'immersiveengineering:ingot_constantan',
    'immersiveengineering:ingot_electrum',
    'mysticalworld:quicksilver_ingot',
    'twilightforest:ironwood_ingot',
    'twilightforest:fiery_ingot',
    'twilightforest:knightmetal_ingot'
  ]

  event.get('minecraft:beacon_payment_items')
       .add(beaconPaymentItems)

  // Curios Glasses
  event.get('curios:glasses').add([
    'artifacts:night_vision_goggles'
  ])

  // Curios Charms
  event.get('curios:charm').add([
    'twilightforest:charm_of_life_1',
    'twilightforest:charm_of_life_2',
    'twilightforest:charm_of_keeping_1',
    'twilightforest:charm_of_keeping_2',
    'twilightforest:charm_of_keeping_3'
  ]);

  // Gems
  event.get('forge:gems').add([
    'betterendforge:amber_gem',
    'blue_skies:moonstone_shard',
    'blue_skies:moonstone',
    'blue_skies:pearl'
  ])

  // Ingots
  event.get('forge:ingots').add([
    'biomesoplenty:mud_brick'
  ])

  // Leathers
  event.get('forge:leather').add([
    'blue_skies:fox_pelt',
    'mysticalworld:pelt',
    'nethers_delight:hoglin_hide'
  ])

  // IE Dust as dye like Mekanisms
  event.add('forge:dyes/yellow', 'immersiveengineering:dust_sulfur')

  // BetterEnd Missing Tags:
  event.add('forge:gems/amber', 'betterendforge:amber_gem')
  event.add('forge:storage_blocks/amber', 'betterendforge:amber_block')

  // Blue Skies Missing Tags (more in food_tags.js)
  event.add('forge:gems/moonstone_shard', '#blue_skies:gems/moonstone_shard')
  event.add('forge:gems/pearl', 'blue_skies:pearl')
  event.add('forge:ingots/falsite', '#blue_skies:ingots/falsite')
  event.add('forge:ingots/horizonite', '#blue_skies:ingots/horizonite')
  event.add('forge:ingots/ventium', '#blue_skies:ingots/ventium')

  // Misc Missing Item Tags
  event.add('forge:seeds/aubergine', 'mysticalworld:aubergine_seeds')
  event.add('forge:dusts/obsidian', 'create:powdered_obsidian')
  event.add('forge:dragon_scales', 'quark:dragon_scale')
  event.add('forge:chests/ender', 'enderstorage:ender_chest')
  event.add('forge:dusts/sulfur', 'betterendforge:crystalline_sulphur')
  event.add('forge:furnace', '#betterendforge:furnaces')
  event.add('forge:dusts/ender', 'betterendforge:ender_dust')
})
