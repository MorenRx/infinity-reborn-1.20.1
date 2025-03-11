ItemEvents.toolTierRegistry(event => {
    event.add('kubejs:nature', tier => {
        tier.uses = 7777
        tier.speed = 20.0
        tier.attackDamageBonus = 16.0
        tier.level = 7
        tier.enchantmentValue = 30
    })
    
    event.add('kubejs:shenqi', tier => {
        tier.enchantmentValue = 30
        tier.repairIngredient = '#kubejs:shenqi_shard'
    })
    
    event.add('kubejs:kreska', tier => {
        tier.uses = 3000
        tier.speed = 22.0
        tier.attackDamageBonus = 9.0
        tier.level = 5
        tier.enchantmentValue = 30
        tier.repairIngredient = 'minecraft:netherite_ingot'
    })
    
    event.add('kubejs:infinity', tier => {
        tier.enchantmentValue = 30
        tier.repairIngredient = '#kubejs:sheng_jin'
    })
})