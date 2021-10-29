// priority: 0

onEvent('jei.hide.items', event => {
	// Hide duplicate Refined Storage things that are just different colour variants. You can still see that they can be dyed by looking at the recipes / uses.
	event.hide([
		/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/
	])  

	// Hide bloodmagic items that cannot be crafted
	event.hide('bloodmagic:firefuse')
	event.hide('bloodmagic:plantleech')
	event.hide('bloodmagic:sacrificiallamb')
	event.hide('bloodmagic:soulsnare')
	event.hide('bloodmagic:inversion_pillar_cap')

	// Hide unused items.
	event.hide('immersiveengineering:dust_wood') // Replaced with Mekanism's Sawdust
	event.hide(Item.of('ftblibrary:fluid_container').ignoreNBT())
})

onEvent('jei.hide.fluids', event => {
  // Empty for now.  
})