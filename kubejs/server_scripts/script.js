// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
    // Explenaition: https://mods.latvian.dev/books/kubejs/page/recipeeventjs
     event.remove({id: 'ironchest:diamond_to_crystal_chest_upgrade'})
     event.remove({id: 'ironchest:crystal_chest'})
     event.remove({id: 'ironchest:trapped_crystal_chest'})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})