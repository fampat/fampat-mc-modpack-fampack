events.listen('worldgen.remove', function (event) {
  event.removeOres(ore => {
    ore.blocks = ['chisel:marble/raw', 'chisel:limestone/raw', 'chisel:basalt/raw']
  })
})
