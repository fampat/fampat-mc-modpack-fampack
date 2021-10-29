events.listen('jei.information', function (event) {
    const REQUIRES_GRASS = " Requires a Grass Block surface for the spawner to work."
    const REQUIRES_MYCELIUM = " Requires a Mycelium surface for the spawner to work."

    // Mystical World
    var amethystArmour = [
      'mysticalworld:amethyst_helmet',
      'mysticalworld:amethyst_chestplate',
      'mysticalworld:amethyst_leggings',
      'mysticalworld:amethyst_boots'
    ]

	// Thermal
	event.add('thermal:bitumen', ['Byproduct of refining Oil in a Distillation Tower'])
	event.add('mekanism:creative_energy_cube', ['To fill the Cube you have to get 2x Ultimate Induction Providers, 2x filled Ultimate Energy Cubes and an ATM Star.',
	'', 'You must build a multiblock structure in a horizontal line by placing the Creative Cube down with the Providers on either sides and the Ultimate Cubes at the end.',
	'', 'All you have to do now, is to make sure your cubes are filled, after which you can Shift + RClick the Creative Cube with the Star.'])

    event.add(amethystArmour, ["The Serendipity statistic provides a bonus to both Fortune and Looting.", " ", "The Luck statistic provides a bonus while fishing (in the same manner as \"Luck of the Sea\") and a chance to receive better loot in some structures."])

    // Quark Additional Information
    event.add('minecraft:chain', "When right-clicking with Chains onto a boat or minecart, and then onto another, they'll link the two. Linked boats and minecarts will always remain at close distance, which allows you to make trains.")
    event.add('quark:iron_rod', "Pistons pushing an Iron Rod will have it work as a drill of sorts, breaking any blocks in front in the direction the rod is facing. These can break anything the piston can push.")

    var quarkSlimeBlocks = [
      'minecraft:slime_block',
      'quark:red_slime_block',
      'quark:blue_slime_block',
      'quark:cyan_slime_block',
      'quark:magenta_slime_block',
      'quark:yellow_slime_block'
    ]

    event.add(quarkSlimeBlocks, "Slime blocks can be dyed Red and Blue. The primary color blocks (Red, Green, and Blue) can be combined to create secondary colors (Cyan, Magenta, and Yellow).")
    event.add(quarkSlimeBlocks, "While being moved by pistons, two slime blocks will only connect if they're the same color, or if one is made of another (so Red won't connect to Blue, but it'll connect to Magenta). Any color of slime will connect to non-slime blocks around it normally.")  

    // Fampack Additional Information
    event.add('akashictome:tome', "When crafting an Akashic Tome, the recipe with four bookshelves will be filled with the starting manuals and the recipe with one bookshelf will be empty.")
})
