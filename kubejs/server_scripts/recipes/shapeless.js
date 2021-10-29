// priority: 10

events.listen('recipes', function (event) {
  // Shapeless Damage Recipe (returns a selected ingredient with 1 durability less, such as with a Spindle)
  const shapelessDamage = (result, ingredients, damageItem) => {
    event.custom({
      type: 'mysticalworld:shapeless_damage_recipe',
      ingredients: ingredients,
      result: Item.of(result).toResultJson(),
      damage_item: Ingredient.of(damageItem).toJson(),
      damage_amount: 1
    })
  }

  // BoP
  event.shapeless(Item.of('biomesoplenty:orange_sand', 2), ['#forge:sand/colorless', '#forge:sand/red'])
  
  // Create
  event.shapeless(Item.of('create:brass_sheet', 1), ['create:brass_ingot', '#forge:tools/hammer'])
  event.shapeless(Item.of('create:iron_sheet', 1), ['minecraft:iron_ingot', '#forge:tools/hammer'])
  event.shapeless(Item.of('create:golden_sheet', 1), ['minecraft:gold_ingot', '#forge:tools/hammer'])
  event.shapeless(Item.of('create:copper_sheet', 1), ['#forge:ingots/copper', '#forge:tools/hammer'])

  // Farmer's Delight
  event.shapeless('farmersdelight:organic_compost', [
    'minecraft:dirt', 
    'farmersdelight:straw',
    'farmersdelight:straw',
    'minecraft:bone_meal',
    'minecraft:bone_meal',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood'
  ])

  // Immersive Engineering
  shapelessDamage(Item.of('immersiveengineering:hemp_fiber', 2), [Ingredient.of('#forge:crops/hemp').toJson(), Ingredient.of('#forge:tools/spindle').toJson()], 'mysticalworld:spindle')
  event.shapeless(Item.of('immersiveengineering:ingot_silver', 9), '#forge:storage_blocks/silver')
  event.shapeless(Item.of('immersiveengineering:nugget_silver', 9), '#forge:ingots/silver')

  // Minecraft
  // No idea why this recipe was gone, guessing some mod removed it in error.
  event.shapeless(Item.of('minecraft:trapped_chest', 1), ['#forge:chests/wooden', 'minecraft:tripwire_hook'])

  // Quark
  event.shapeless(Item.of('quark:cobbled_deepslate', 2), ['minecraft:basalt', 'minecraft:cobblestone'])
})
