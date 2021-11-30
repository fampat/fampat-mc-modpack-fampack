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

    // Biomes 'o' Plenty
    'biomesoplenty:purple_dye_from_lavender', // Redundant.
    'biomesoplenty:mossy_cobblestone_from_willow_vine', // Redundant.
    'biomesoplenty:mossy_stone_bricks_from_willow_vine', // Redundant.

    // Botania
    'botania:pure_daisy/sand', // Replaced with a different recipe.

    // Blood Magic
    'bloodmagic:smelting/ingot_gold', // Duplicate recipe.
    'bloodmagic:arc/ore/dustgold', // Duplicate recipe.
    'bloodmagic:smelting/ingot_iron', // Duplicate recipe.
    'bloodmagic:arc/ore/dustiron', // Duplicate recipe.
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
    'immersiveengineering:crafting/paper_from_sawdust', // Removed since Mekanism method made this redundant.
    'immersiveengineering:crafting/gold_ingot_from_dust_from_blasting', // Duplicate recipe.
    'immersiveengineering:crafting/gold_ingot_from_dust', // Duplicate recipe.
    'immersiveengineering:crafting/iron_ingot_from_dust_from_blasting', // Duplicate recipe.
    'immersiveengineering:crafting/iron_ingot_from_dust', // Duplicate recipe.
    'immersiveengineering:crusher/nether_gold',
    'immersiveengineering:crafting/nugget_silver_to_ingot_silver',
    'immersiveengineering:crafting/ingot_silver_to_storage_silver',
    'immersiveengineering:crafting/storage_silver_to_ingot_silver',
    'immersiveengineering:crafting/ingot_silver_from_dust',
    'immersiveengineering:crafting/ingot_silver_from_dust_from_blasting',
    'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
    'immersiveengineering:crafting/ingot_steel_to_storage_steel',
    'immersiveengineering:crafting/ingot_copper_to_storage_copper',
    'immersiveengineering:crafting/ingot_lead_to_storage_lead',
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
