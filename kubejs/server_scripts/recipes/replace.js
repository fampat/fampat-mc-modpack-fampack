// priority: 15

events.listen('recipes', function (event) {
  // Prevent recipes from using Ender Chests or Personal Chests when they don't need to.
  event.replaceInput({}, '#forge:chests', '#forge:chests/wooden')

  // Replace specific item inputs with tags for all recipes that use them.
  event.replaceInput({}, 'minecraft:slime_ball', '#forge:slimeballs')
  event.replaceInput({}, 'blue_skies:cherry', '#forge:fruits/cherry')
  event.replaceInput({}, 'minecraft:wheat', '#forge:grain/wheat')
  event.replaceInput({}, 'biomesoplenty:lavender', '#valhelsia:flowers/lavender')
  event.replaceInput({}, 'quark:dragon_scale', '#forge:dragon_scales')
  event.replaceInput({}, 'create:powdered_obsidian', '#forge:dusts/obsidian')

  // Replace specific item inputs with tags for any outputs that match the tag.
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:feather', '#forge:feathers')
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:stick', '#forge:rods/wooden')

  // Replace specific item inputs with tags for specific item outputs.
  event.replaceInput({output:'minecraft:writable_book'}, 'minecraft:feather', '#forge:feathers')
  event.replaceInput({output:'betterendforge:end_stone_smelter'}, '#betterendforge:furnaces', '#forge:furnace')
})