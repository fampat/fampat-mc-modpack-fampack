// priority: 10

events.listen('recipes', function (event) {

  // Pure Daisy Support Function
  const pureDaisy = (output, input) => {
    event.custom({
      "type": 'botania:pure_daisy',
      "input": {
          "type": "block",
          "block": input
      },
      "output": {
          "name": output
      }
    })
  }

  // Alchemy Catalyst
  const alchemy = (output, input, mana, group) => {
    event.custom({
      "type": 'botania:mana_infusion',
      "input": input.toJson(),
      "output": output.toResultJson(),
      "mana": mana,
      "group": group,
      "catalyst": {
        "type": "block",
        "block": "botania:alchemy_catalyst"
      }
    })
  }

  // Conjuration Catalyst
  const conjuration = (output, input, mana) => {
    event.custom({
      "type": 'botania:mana_infusion',
      "input": input.toJson(),
      "output": output.toResultJson(),
      "mana": mana,
      "catalyst": {
        "type": "block",
        "block": "botania:conjuration_catalyst"
      }
    })
  }

  // Mana Infusion (without catalyst)
  const infusion = (output, input, mana) => {
    event.custom({
      "type": 'botania:mana_infusion',
      "input": input.toJson(),
      "output": output.toResultJson(),
      "mana": mana
    })
  }

  // Pure Daisy Recipes
  // ------------------
  pureDaisy('betterendforge:dense_emerald_ice', 'betterendforge:emerald_ice')
  pureDaisy('betterendforge:ancient_emerald_ice', 'betterendforge:dense_emerald_ice')

  // Alchemy Infusion Recipes
  // ------------------------

  // End Log Cycle (BetterEnd and Endergetic Expansion)
  // Some of these logs, at least Lucernia, are not otherwise obtainable because the trees generate with only bark blocks.
  alchemy(Item.of('betterendforge:end_lotus_log'), Ingredient.of('betterendforge:lacugrove_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:lacugrove_log'), Ingredient.of('betterendforge:mossy_glowshroom_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:mossy_glowshroom_log'), Ingredient.of('betterendforge:jellyshroom_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:jellyshroom_log'), Ingredient.of('betterendforge:umbrella_tree_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:umbrella_tree_log'), Ingredient.of('endergetic:poise_stem'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:pythadendron_log'), Ingredient.of('betterendforge:dragon_tree_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:dragon_tree_log'), Ingredient.of('betterendforge:tenanea_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:tenanea_log'), Ingredient.of('betterendforge:helix_tree_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:helix_tree_log'), Ingredient.of('betterendforge:lucernia_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:lucernia_log'), Ingredient.of('betterendforge:end_lotus_log'), 40, 'botania:log_cycle')

  // Cherry Sapling Cycle
  alchemy(Item.of('biomesoplenty:white_cherry_sapling'), Ingredient.of('biomesoplenty:pink_cherry_sapling'), 120, 'botania:sapling_cycle')

  // End Sapling Cycle (BetterEnd and Endergetic Expansion)
  alchemy(Item.of('betterendforge:end_lotus_seed'), Ingredient.of('betterendforge:lacugrove_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:lacugrove_sapling'), Ingredient.of('betterendforge:mossy_glowshroom_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:mossy_glowshroom_sapling'), Ingredient.of('betterendforge:small_jellyshroom'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:small_jellyshroom'), Ingredient.of('betterendforge:umbrella_tree_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:pythadendron_sapling'), Ingredient.of('betterendforge:dragon_tree_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:dragon_tree_sapling'), Ingredient.of('betterendforge:tenanea_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:tenanea_sapling'), Ingredient.of('betterendforge:helix_tree_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:helix_tree_sapling'), Ingredient.of('betterendforge:lucernia_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:lucernia_sapling'), Ingredient.of('betterendforge:end_lotus_seed'), 120, 'botania:sapling_cycle')

  alchemy(Item.of('biomesoplenty:sprout'), Ingredient.of('mysticalworld:assorted_seeds'), 120, 'botania:shrub_cycle')

  // Conjuration Infusion Recipes
  // ----------------------------

  // Atum Plants:
  conjuration(Item.of('atum:oasis_grass', 2), Ingredient.of('atum:oasis_grass'), 800)
  conjuration(Item.of('atum:dry_grass', 2), Ingredient.of('atum:dry_grass'), 800)
  conjuration(Item.of('atum:tall_dry_grass', 2), Ingredient.of('atum:tall_dry_grass'), 800)


  // BetterEnd Plants:
  // Excludes water plants, bushes, sky plants, wall plants, vines and ceiling plants.
  // Excludes Shadow Berry and Blossom Berry from the mod's "plants" category because they are edible.
  conjuration(Item.of('betterendforge:umbrella_moss', 2), Ingredient.of('betterendforge:umbrella_moss'), 800)
  conjuration(Item.of('betterendforge:umbrella_moss_tall', 2), Ingredient.of('betterendforge:umbrella_moss_tall'), 800)
  conjuration(Item.of('betterendforge:creeping_moss', 2), Ingredient.of('betterendforge:creeping_moss'), 800)
  conjuration(Item.of('betterendforge:chorus_grass', 2), Ingredient.of('betterendforge:chorus_grass'), 800)
  conjuration(Item.of('betterendforge:crystal_grass', 2), Ingredient.of('betterendforge:crystal_grass'), 800)
  conjuration(Item.of('betterendforge:amber_grass', 2), Ingredient.of('betterendforge:amber_grass'), 800)
  conjuration(Item.of('betterendforge:shadow_plant', 2), Ingredient.of('betterendforge:shadow_plant'), 800)
  conjuration(Item.of('betterendforge:murkweed', 2), Ingredient.of('betterendforge:murkweed'), 800)
  conjuration(Item.of('betterendforge:needlegrass', 2), Ingredient.of('betterendforge:needlegrass'), 800)
  conjuration(Item.of('betterendforge:bushy_grass', 2), Ingredient.of('betterendforge:bushy_grass'), 800)
  conjuration(Item.of('betterendforge:twisted_umbrella_moss', 2), Ingredient.of('betterendforge:twisted_umbrella_moss'), 800)
  conjuration(Item.of('betterendforge:twisted_umbrella_moss_tall', 2), Ingredient.of('betterendforge:twisted_umbrella_moss_tall'), 800)
  conjuration(Item.of('betterendforge:jungle_grass', 2), Ingredient.of('betterendforge:jungle_grass'), 800)
  conjuration(Item.of('betterendforge:blooming_cooksonia', 2), Ingredient.of('betterendforge:blooming_cooksonia'), 800)
  conjuration(Item.of('betterendforge:salteago', 2), Ingredient.of('betterendforge:salteago'), 800)
  conjuration(Item.of('betterendforge:vaiolush_fern', 2), Ingredient.of('betterendforge:vaiolush_fern'), 800)
  conjuration(Item.of('betterendforge:fracturn', 2), Ingredient.of('betterendforge:fracturn'), 800)
  conjuration(Item.of('betterendforge:small_amaranita_mushroom', 2), Ingredient.of('betterendforge:small_amaranita_mushroom'), 800)
  conjuration(Item.of('betterendforge:globulagus', 2), Ingredient.of('betterendforge:globulagus'), 800)
  conjuration(Item.of('betterendforge:clawfern', 2), Ingredient.of('betterendforge:clawfern'), 800)
  conjuration(Item.of('betterendforge:aeridium', 2), Ingredient.of('betterendforge:aeridium'), 800)
  conjuration(Item.of('betterendforge:lamellarium', 2), Ingredient.of('betterendforge:lamellarium'), 800)
  conjuration(Item.of('betterendforge:bolux_mushroom', 2), Ingredient.of('betterendforge:bolux_mushroom'), 800)
  conjuration(Item.of('betterendforge:orango', 2), Ingredient.of('betterendforge:orango'), 800)
  conjuration(Item.of('betterendforge:lutebus', 2), Ingredient.of('betterendforge:lutebus'), 800)
  conjuration(Item.of('betterendforge:cave_grass', 2), Ingredient.of('betterendforge:cave_grass'), 800)

  // BoP Plants:
  conjuration(Item.of('biomesoplenty:sprout', 2), Ingredient.of('biomesoplenty:sprout'), 800)
  conjuration(Item.of('biomesoplenty:bush', 2), Ingredient.of('biomesoplenty:bush'), 800)
  conjuration(Item.of('biomesoplenty:dune_grass', 2), Ingredient.of('biomesoplenty:dune_grass'), 800)
  conjuration(Item.of('biomesoplenty:desert_grass', 2), Ingredient.of('biomesoplenty:desert_grass'), 800)
  conjuration(Item.of('biomesoplenty:dead_grass', 2), Ingredient.of('biomesoplenty:dead_grass'), 800)

  // Minecraft Plants:
  conjuration(Item.of('minecraft:nether_sprouts', 2), Ingredient.of('minecraft:nether_sprouts'), 800)
})