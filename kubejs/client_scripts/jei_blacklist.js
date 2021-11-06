events.listen('jei.hide.items', function (event) {
	// Hide duplicate Refined Storage things that are just different colour variants. You can still see that they can be dyed by looking at the recipes / uses.
	event.hide([
		/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/
	])

	// Hide bloodmagic items that cannot be crafted
	event.hide('bloodmagic:inversion_pillar_cap')

	// Hide op tank
	event.hide('mob_grinding_utils:jumbo_tank')

    // TF Oak Door missing texture
    event.hide('twilightforest:twilight_oak_door')

	// Hide unused items.
	event.hide('immersiveengineering:dust_wood') // Replaced with Mekanism's Sawdust
	event.hide(Item.of('ftblibrary:fluid_container').ignoreNBT())
})

events.listen('jei.hide.fuilds', function (event) {
  // Empty for now.  
})