// priority: 10

events.listen('recipes', function (event) {
  // Alchemy
  event.recipes.bloodmagic.alchemytable(
    'minecraft:diamond',
    [
      '#forge:gems/ruby',
      '#forge:gems/ruby',
      '#forge:gems/ruby',
      '#forge:gems/ruby',
      '#forge:gems/ruby',
      '#forge:gems/ruby'
    ]
  ).syphon(800).ticks(160).upgradeLevel(3)
})
