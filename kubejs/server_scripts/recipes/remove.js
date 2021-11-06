// priority: 100

events.listen('recipes', function (event) {
  var idRemove = [
    // Mob Grinding Utils
    'mob_grinding_utils:jumbo_tank',                // OP-Tank must go
    'mob_grinding_utils:recipe_jumbotank',          // OP-Tank must go
    'mob_grinding_utils:recipe_jumbotank_reset',    // OP-Tank must go
    'mob_grinding_utils:recipe_jumbo_tank_reset',   // OP-Tank must go

    // Abnormals Delight
    'abnormals_delight:environmental/cooking/squid_ink_risotto', // Squid Ink Risotto has been removed from Environmental

    // Create
    'create:compat/atmospheric/milling/hot_monkey_brush', // Fix erroring recipe.
    'create:compat/upgrade_aquatic/milling/searocket_pink', // Fix erroring recipe.
    'create:compat/upgrade_aquatic/milling/searocket_white', // Fix erroring recipe.
    'create:compat/atmospheric/cutting/driftwood_log', // Fix erroring recipe.
    'create:compat/atmospheric/cutting/stripped_driftwood_log', // Fix erroring recipe.

    // Create Crafts & Additions
    'createaddition:compat/immersiveengineering/lapis_sheet_metal_press', // Duplicate recipe.

    // Decorative Blocks
    'decorative_blocks:chain', // Replaced with a different recipe.
    'decorative_blocks:dirt_from_rocky_dirt', // Removed entirely, no neat way to uncraft with the new recipe.
    'decorative_blocks:rocky_dirt', // Replaced with a different recipe.

    // Immersive Engineering
    'immersiveengineering:crusher/nether_wart', // Default recipe leads to dupe exploit.

    // Industrial Foregoing
    'industrialforegoing:black_hole_controller', // Replaced with a different recipe to fix Ender Chest issues.
    
    // TF Door missing texture
    'twilightforest:wood/twilight_oak_door',
    'twilightforest:wood/mine_door',

    // Mekanism - Combiner (remove all ore to prevent infinite ore exploits)
    'jaopca:mekanism.dust_to_ore.aluminum',
    'jaopca:mekanism.dust_to_ore.nickel',
    'jaopca:mekanism.dust_to_ore.amber',
    'jaopca:mekanism.dust_to_ore.silver',
    'jaopca:mekanism.dust_to_ore.zinc',
    'jaopca:mekanism.dust_to_ore.amethyst',
    'jaopca:mekanism.dust_to_ore.moonstone',
    'jaopca:mekanism.dust_to_ore.arcane_crystal',
    'jaopca:mekanism.dust_to_ore.quicksilver',
    'jaopca:mekanism.dust_to_ore.biotite',
    'jaopca:mekanism.dust_to_ore.fluorite',
    'jaopca:mekanism.dust_to_ore.nebu',
    'jaopca:mekanism.dust_to_ore.thallasium',
    'mekanism:processing/copper/ore/from_dust',
    'mekanism:processing/lead/ore/from_dust',
    'mekanism:processing/gold/ore/from_dust',
    'mekanism:processing/gold/ore/nether_from_dust',
    'mekanism:processing/iron/ore/from_dust',
    'mekanism:processing/osmium/ore/from_dust',
    'mekanism:processing/tin/ore/from_dust',
    'mekanism:processing/uranium/ore/from_dust',
    'mekanism:processing/coal/to_ore',
    'mekanism:processing/diamond/to_ore',
    'mekanism:processing/emerald/to_ore',
    'mekanism:processing/fluorite/to_ore',
    'mekanism:processing/lapis_lazuli/to_ore',
    'mekanism:processing/netherite/dust_to_ancient_debris',
    'mekanism:processing/redstone/to_ore',
    'mekanism:processing/quartz/to_ore',

    // Minecraft
    'minecraft:dark_prismarine', // Replaced with a different recipe.
    'minecraft:slime_block', // Removed but re-added later in another script to avoid being hit by the replaceInput of slime balls.
  ]

  idRemove.forEach(function (remove) {
    event.remove({id: remove})
  })
})
