// Boss击杀广播和特殊处理
EntityEvents.death(event => {
    let { entity, server } = event

    if (!bossList.includes(entity.type)) return
    server.tell(Text.translate('infinity.msg.death.boss', Text.translate('entity.' + entity.type.replace(':','.'))).darkPurple())

    const killList = [
        'minecraft:marker',
        'minecraft:end_crystal',
        'minecraft:area_effect_cloud'
    ]

    if (entity.type === 'minecraft:ender_dragon') {
        event.level.getEntities().filter(e => killList.includes(e.type)).forEach(e => e.kill())
    }
})
  
// 七星剑特殊击杀效果
EntityEvents.death(event => {
    let { entity, source } = event
    let player = source.player
    if (!player || player.isFake()) return
  
    let held = player.mainHandItem
    if (!held || held.id !== 'kubejs:qixing_sword') return

    addEffect(player, 'minecraft:absorption', 10, 4)
    const headRewards = {
        'minecraft:creeper': 'minecraft:creeper_head',
        'minecraft:zombie': 'minecraft:zombie_head',
        'minecraft:skeleton': 'minecraft:skeleton_skull',
        'minecraft:wither_skeleton': 'minecraft:wither_skeleton_skull',
        'minecraft:ender_dragon': 'minecraft:dragon_head',
        'minecraft:piglin': 'minecraft:piglin_head'
    }
  
    if (Math.random() > 0.5) return

    let headItem = headRewards[entity.type]
    if (headItem) {
        player.give(headItem)
    } else if (entity.player) {
        player.give(Item.of('minecraft:player_head', `{SkullOwner:"${entity.name.string}"}`))
    }
})
  