// priority: 80
onEvent('block.tags', event => {
  // Additional blocks that can be used to build a conduit frame.
  var supportsConduit = [
    'minecraft:prismarine_bricks',
    'absentbydesign:wall_prismarine_bricks',
    'absentbydesign:gate_prismarine_brick',
    'quark:elder_prismarine',
    'quark:elder_prismarine_slab',
    'quark:elder_prismarine_stairs',
    'quark:elder_prismarine_wall',
    'quark:elder_prismarine_bricks',
    'quark:elder_prismarine_bricks_slab',
    'quark:elder_prismarine_bricks_stairs',
    'quark:dark_elder_prismarine',
    'quark:dark_elder_prismarine_slab',
    'quark:dark_elder_prismarine_stairs',
    'quark:dark_prismarine_vertical_slab',
    'quark:prismarine_vertical_slab',
    'quark:prismarine_brick_vertical_slab',
    'quark:elder_prismarine_vertical_slab',
    'quark:elder_prismarine_bricks_vertical_slab',
    'quark:dark_elder_prismarine_vertical_slab',
  ]

  event.get('forge:supports_conduit').add(supportsConduit)

  // Missing Stair Tags
  var woodenStairs = [
    'astralsorcery:infused_wood_stairs',
    'betterendforge:neon_cactus_stairs',
    'immersiveengineering:stairs_treated_wood_horizontal',
    'immersiveengineering:stairs_treated_wood_vertical',
    'immersiveengineering:stairs_treated_wood_packaged'
  ]

  var stoneStairs = [
    'astralsorcery:marble_stairs',
    'astralsorcery:black_marble_stairs',
    'betterendforge:dragon_bone_stairs',
    'betterendforge:flavolite_stairs',
    'betterendforge:flavolite_bricks_stairs',
    'betterendforge:violecite_stairs',
    'betterendforge:violecite_bricks_stairs',
    'betterendforge:sulphuric_rock_stairs',
    'betterendforge:sulphuric_rock_bricks_stairs',
  ]

  event.get('minecraft:stairs')
       .add(woodenStairs)
       .add(stoneStairs)
       .add([
        'immersiveengineering:stairs_hempcrete',
        'immersiveengineering:stairs_concrete',
        'immersiveengineering:stairs_concrete_tile',
        'immersiveengineering:stairs_concrete_leaded',
        'immersivepetroleum:asphalt_stairs'
       ])

  event.get('minecraft:wooden_stairs')
       .add(woodenStairs)

  // Missing Slab Tags
  var woodenSlabs = [
    'astralsorcery:infused_wood_slab',
    'betterendforge:neon_cactus_slab',
    'immersiveengineering:slab_treated_wood_horizontal',
    'immersiveengineering:slab_treated_wood_vertical',
    'immersiveengineering:slab_treated_wood_packaged'
  ]

  var stoneSlabs = [
    'astralsorcery:marble_slab',
    'astralsorcery:black_marble_slab',
    'betterendforge:dragon_bone_slab',
  ]

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

  event.get('minecraft:slabs')
       .add(woodenSlabs)
       .add(stoneSlabs)
       .add([
        'immersiveengineering:slab_hempcrete',
        'immersiveengineering:slab_concrete',
        'immersiveengineering:slab_concrete_tile',
        'immersiveengineering:slab_concrete_leaded',
        'immersiveengineering:slab_insulating_glass',
        'immersivepetroleum:asphalt_slab'
       ])

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

  // Cardboard Box Blacklist
  event.get('mekanism:cardboard_blacklist').add([
    'waystones:waystone',
    'waystones:mossy_waystone',
    'waystones:sandy_waystone'
  ])

  // Missing Mushroom Block Tags (which mod adds this tag?)
  event.get('forge:mushroom_blocks').add([
    'betterendforge:bolux_mushroom',
    'betterendforge:small_amaranita_mushroom',
    'betterendforge:small_jellyshroom',
    'biomesoplenty:glowshroom',
    'biomesoplenty:toadstool',
    'blue_skies:snowcap_mushroom',
    'minecraft:red_mushroom',
    'quark:glowshroom'
  ])

  // Windowlogging Support (for things that aren't glass panes)
  event.get('windowlogging:window').add([
    'betterendforge:thallasium_bars',
    'betterendforge:terminite_bars',
    'quark:paper_wall',
    'quark:paper_wall_big',
    'quark:paper_wall_sakura',
    'quark:gold_bars',
    'quark:red_crystal_pane',
    'quark:orange_crystal_pane',
    'quark:yellow_crystal_pane',
    'quark:green_crystal_pane',
    'quark:blue_crystal_pane',
    'quark:indigo_crystal_pane',
    'quark:violet_crystal_pane',
    'quark:white_crystal_pane',
    'quark:black_crystal_pane'
  ])

  // Windowlogging
  // Additional Blocks that can have windows added to them:
  event.get('windowlogging:windowable').add([
    '#quark:vertical_slabs'
  ])

  // BetterEnd Missing Tags:
  event.add('forge:storage_blocks/amber', 'betterendforge:amber_block')
})
