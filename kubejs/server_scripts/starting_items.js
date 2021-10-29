

events.listen('player.logged_in', function (event) {
  if (!event.player.stages.has('starting_items')) {
    // Give the player a custom Akashic Tome with the manuals for several mods.
    event.player.give(Item.of('akashictome:tome', {
		"akashictome:is_morphing":1,
		"akashictome:data":{
			industrialforegoing:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Industrial Foregoing's Manual"},"patchouli:book":"industrialforegoing:industrial_foregoing","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Industrial Foregoing's Manual\"}]}"}}},
			powah:{id:"powah:book",Count:1,tag:{"akashictome:displayName":{text:"Manual (Powah!)"},"akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Manual (Powah!)\"}]}"}}},
			astralsorcery:{id:"astralsorcery:tome",Count:1,tag:{"akashictome:displayName":{text:"Astral Tome"},"akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Astral Tome\"}]}"}}},
			immersiveengineering:{id:"immersiveengineering:manual",Count:1,tag:{"akashictome:displayName":{text:"Engineer's Manual"},"akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Engineer's Manual\"}]}"}}},
			advancedperipherals:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Advanced Peripherals"},"patchouli:book":"advancedperipherals:manual","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Advanced Peripherals\"}]}"}}},
			engineersdecor:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Engineer's Decor"},"patchouli:book":"engineersdecor:engineersdecor_manual","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Engineer's Decor\"}]}"}}},
			mysticalworld:{id:"mysticalworld:encyclopedia",Count:1,tag:{"akashictome:displayName":{text:"Encyclopædia Mysticum"},"akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Encyclopædia Mysticum\"}]}"}}},
			bloodmagic:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Sanguine Scientiem"},"patchouli:book":"bloodmagic:guide","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Sanguine Scientiem\"}]}"}}},
			twilightforest:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Traveller's Logbook [WIP]"},"patchouli:book":"twilightforest:guide","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Traveller's Logbook [WIP]\"}]}"}}},
			thermal:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Thermalpedia"},"patchouli:book":"thermal:guidebook","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Thermalpedia\"}]}"}}}
	}}))

	// Give starting equipment
    event.player.give('minecraft:wooden_pickaxe')
    event.player.give('minecraft:wooden_axe')
    event.player.give('minecraft:wooden_shovel')
    event.player.give('minecraft:wooden_sword')
    event.player.give({ item: 'minecraft:torch', count: 32 })

    // Add the Game Stage, preventing them getting it again.
    event.player.stages.add('starting_items')
  }
})


