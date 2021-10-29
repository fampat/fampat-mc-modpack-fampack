// priority: 90
onEvent('item.tags', event => {
  // Fruits
  event.get('forge:fruits').add([
    'betterendforge:blossom_berry',
    'betterendforge:shadow_berry_raw',
    'blue_skies:cherry',
    'blue_skies:scalefruit',
    'blue_skies:crescent_fruit',
    'blue_skies:brewberry',
    'blue_skies:pink_brewberry',
    'blue_skies:black_brewberry',
    'minecraft:sweet_berries'
  ])
  
  // Specific Fruits
  event.add('forge:fruits/cherry', 'blue_skies:cherry')
  event.add('forge:fruits/scalefruit', 'blue_skies:scalefruit')
  event.add('forge:fruits/pine_fruit', 'blue_skies:pine_fruit')
  event.add('forge:fruits/crescent_fruit', 'blue_skies:crescent_fruit')
  event.add('forge:fruits/brewberry', 'blue_skies:brewberry')
  event.add('forge:fruits/brewberry', 'blue_skies:pink_brewberry')
  event.add('forge:fruits/brewberry', 'blue_skies:black_brewberry')
  
  // Vegetables
  event.get('forge:vegetables').add([
    'betterendforge:amber_root_raw',
    'blue_skies:cryo_root',
    'blue_skies:fiery_beans',
    'blue_skies:winter_leaves'
  ])

  // Eggs
  event.get('forge:eggs').add([
    'atum:quail_egg'
  ])

  // Specific Vegetables
  event.add('forge:vegetables/amber_root', 'betterendforge:amber_root_raw')
  event.add('forge:vegetables/cryo_root', 'blue_skies:cryo_root')
  event.add('forge:vegetables/fiery_beans', 'blue_skies:fiery_beans')
  event.add('forge:vegetables/winter_leaves', 'blue_skies:winter_leaves')

  // Ice
  event.get('forge:ice').add([
    'betterendforge:emerald_ice',
    'betterendforge:dense_emerald_ice',
    'betterendforge:ancient_emerald_ice'
  ])

  // Mushrooms
  event.get('forge:mushrooms').add([
    'betterendforge:bolux_mushroom',
    'betterendforge:chorus_mushroom_raw',
    'betterendforge:small_amaranita_mushroom',
    'betterendforge:small_jellyshroom',
    'blue_skies:snowcap_mushroom'
  ])

  // Raw Fishes
  event.get('forge:raw_fishes').add([
    'betterendforge:end_fish_raw',
    'blue_skies:grittle_flatfish',
    'blue_skies:municipal_monkfish',
    'blue_skies:charscale_moki',
    'blue_skies:horizofin_tunid'
  ])

  // Cooked Fishes
  event.get('forge:cooked_fishes').add([
    'betterendforge:end_fish_cooked',
    'blue_skies:cooked_grittle_flatfish',
    'blue_skies:cooked_municipal_monkfish',
    'blue_skies:cooked_charscale_moki',
    'blue_skies:cooked_horizofin_tunid'
  ])
  
  // Raw Venison
  event.get('forge:raw_venison').add([
    'blue_skies:venison',
    'mysticalworld:venison',
    'twilightforest:raw_venison'
  ])

  // Cooked Venison
  event.get('forge:cooked_venison').add([
    'blue_skies:cooked_venison',
    'mysticalworld:cooked_venison',
    'twilightforest:cooked_venison'
  ])
  
  // Proteins
  event.get('mysticalworld:proteins').add([
    'blue_skies:carabeef',
    'blue_skies:cooked_carabeef',
    'blue_skies:monitor_tail',
    'blue_skies:cooked_monitor_tail',
    'blue_skies:bug_guts',
    '#forge:raw_duck',
    '#forge:cooked_duck',
    '#forge:cooked_venison',
    '#forge:raw_venison',
    '#forge:raw_fishes',
    '#forge:cooked_fishes',
    '#forge:eggs',
    '#forge:cooked_eggs',
  ])

  event.get('mysticalworld:sugars').add([
    'abnormals_delight:vanilla_cake_slice' // Example - many more are missing here (TODO).
  ])

  // Wolf Prey
  event.get('farmersdelight:wolf_prey').add([
    'mysticalworld:venison'
  ])
})