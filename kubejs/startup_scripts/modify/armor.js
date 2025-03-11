ItemEvents.modification(event => {
	event.modify("mythicmetals:metallurgium_helmet", item => {
		item.armorProtection = 7.2
		item.armorToughness = 5
		item.armorKnockbackResistance = 2.5
		item.maxDamage = 1030
		item.fireResistant = true
	})
	event.modify("mythicmetals:metallurgium_chestplate", item => {
		item.armorProtection = 10.5
		item.armorToughness = 5
		item.armorKnockbackResistance = 2.5
		item.maxDamage = 1380
		item.fireResistant = true
	})
	event.modify("mythicmetals:metallurgium_leggings", item => {
		item.armorProtection = 9.3
		item.armorToughness = 5
		item.armorKnockbackResistance = 2.5
		item.maxDamage = 1170
		item.fireResistant = true
	})
	event.modify("mythicmetals:metallurgium_boots", item => {
		item.armorProtection = 6
		item.armorToughness = 5
		item.armorKnockbackResistance = 2.5
		item.maxDamage = 920
		item.fireResistant = true
	})

	event.modify('additionaladditions:gilded_netherite_helmet', item => {
		item.armorProtection = 5.5
		item.armorToughness = 3.5
		item.armorKnockbackResistance = 0.5
		item.maxDamage = 1000
		item.fireResistant = true
	})
	event.modify('additionaladditions:gilded_netherite_chestplate', item => {
		item.armorProtection = 8.5
		item.armorToughness = 3.5
		item.armorKnockbackResistance = 0.5
		item.maxDamage = 1280
		item.fireResistant = true
	})
	event.modify('additionaladditions:gilded_netherite_leggings', item => {
		item.armorProtection = 7.5
		item.armorToughness = 3.5
		item.armorKnockbackResistance = 0.5
		item.maxDamage = 1170
		item.fireResistant = true
	})
	event.modify('additionaladditions:gilded_netherite_boots', item => {
		item.armorProtection = 4.5
		item.armorToughness = 3.5
		item.armorKnockbackResistance = 0.5
		item.maxDamage = 840
		item.fireResistant = true
	})

	event.modify('adventurez:stone_golem_helmet', item => {
		item.armorProtection = 10
		item.armorToughness = 5
		item.armorKnockbackResistance = 1
		item.maxDamage = 1450
		item.fireResistant = true
	})
	event.modify('adventurez:stone_golem_chestplate', item => {
		item.armorProtection = 16
		item.armorToughness = 5
		item.armorKnockbackResistance = 1
		item.maxDamage = 1880
		item.fireResistant = true
	})
	event.modify('adventurez:stone_golem_leggings', item => {
		item.armorProtection = 14
		item.armorToughness = 5
		item.armorKnockbackResistance = 1
		item.maxDamage = 1720
		item.fireResistant = true
	})
	event.modify('adventurez:stone_golem_boots', item => {
		item.armorProtection = 8
		item.armorToughness = 5
		item.armorKnockbackResistance = 1
		item.maxDamage = 1340
		item.fireResistant = true
	})

	event.modify('minecraft:netherite_helmet', item => {
		item.armorProtection = 5
		item.maxDamage = 950
	})
	event.modify('minecraft:netherite_chestplate', item => {
		item.armorProtection = 8
		item.maxDamage = 1200
	})
	event.modify('minecraft:netherite_leggings', item => {
		item.armorProtection = 7
		item.maxDamage = 1100
	})
	event.modify('minecraft:netherite_boots', item => {
		item.armorProtection = 4
		item.maxDamage = 800
	})

	event.modify('twilightforest:fiery_helmet', item => {
		item.armorToughness = 2.5
		item.maxDamage = 850
		item.fireResistant = true
	})
	event.modify('twilightforest:fiery_chestplate', item => {
		item.armorToughness = 2.5
		item.armorToughness = 5
		item.maxDamage = 1180
		item.fireResistant = true
	})
	event.modify('twilightforest:fiery_leggings', item => {
		item.armorToughness = 2.5
		item.maxDamage = 1060
		item.fireResistant = true
	})
	event.modify('twilightforest:fiery_boots', item => {
		item.armorToughness = 2.5
		item.maxDamage = 700
		item.fireResistant = true
	})

	event.modify('twilightforest:phantom_helmet', item => {
		item.armorProtection = 6
		item.armorToughness = 3.5
		item.maxDamage = 980
		item.fireResistant = true
	})
	event.modify('twilightforest:phantom_chestplate', item => {
		item.armorProtection = 10
		item.armorToughness = 3.5
		item.maxDamage = 1280
		item.fireResistant = true
	})

	event.modify('soulsweapons:chaos_helmet', item => {
		item.armorProtection = 8
		item.armorToughness = 5
		item.maxDamage = 1100
	})
	event.modify('soulsweapons:arkenplate', item => {
		item.armorProtection = 12
		item.armorToughness = 5
		item.maxDamage = 1400
	})
	
	event.modify('mythicmetals:stormyx_helmet', item => {
		item.armorProtection = 5
		item.armorToughness = 2.5
	})
	event.modify('mythicmetals:stormyx_chestplate', item => {
		item.armorProtection = 8
		item.armorToughness = 2.5
	})
	event.modify('mythicmetals:stormyx_leggings', item => {
		item.armorProtection = 7
		item.armorToughness = 2.5
	})
	event.modify('mythicmetals:stormyx_boots', item => {
		item.armorProtection = 4
		item.armorToughness = 2.5
	})
	
	event.modify('twilightforest:knightmetal_helmet', item => {
		item.armorProtection = 4
		item.armorToughness = 2.5
	})
	event.modify('twilightforest:knightmetal_chestplate', item => {
		item.armorProtection = 9
		item.armorToughness = 2.5
	})
	event.modify('twilightforest:knightmetal_leggings', item => {
		item.armorProtection = 7
		item.armorToughness = 2.5
	})
	event.modify('twilightforest:knightmetal_boots', item => {
		item.armorProtection = 4
		item.armorToughness = 2.5
	})

	event.modify('mythicmetals:palladium_helmet', item => {
		item.armorProtection = 5
	})
	event.modify('mythicmetals:palladium_chestplate', item => {
		item.armorProtection = 8
	})
	event.modify('mythicmetals:palladium_leggings', item => {
		item.armorProtection = 7
	})
	event.modify('mythicmetals:palladium_boots', item => {
		item.armorProtection = 4
	})
})