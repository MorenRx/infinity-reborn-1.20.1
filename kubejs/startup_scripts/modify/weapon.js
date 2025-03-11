ItemEvents.modification(event => {
	event.modify("minecraft:netherite_sword", item => {
		modifyWeapon(item, 9, 2.0)
	})
	
	event.modify("additionaladditions:gilded_netherite_sword", item => {
		modifyWeapon(item, 11, 2.1)
	})
	
	event.modify("dragonloot:dragon_trident", item => {
		modifyWeapon(item, 20, 1.3)
	})

	event.modify("twilightforest:block_and_chain", item => {
		modifyWeapon(item, 12.5, 2.2)
	})

	event.modify("mythicmetals:metallurgium_sword", item => {
		modifyWeapon(item, 13.5, 2.2)
	})

	event.modify("twilightforest:diamond_minotaur_axe", item => {
		modifyWeapon(item, 14, 1.2)
	})

	event.modify("twilightforest:giant_sword", item => {
		modifyWeapon(item, 18, 0.7)
	})

	event.modify("twilightforest:knightmetal_sword", item => {
		modifyWeapon(item, 9, 1.8)
	})

	event.modify("twilightforest:fiery_sword", item => {
		modifyWeapon(item, 11, 2.0)
	})

	event.modify("twilightforest:knightmetal_axe", item => {
		modifyWeapon(item, 12.5, 1.1)
	})

	event.modify("twilightforest:ice_sword", item => {
		modifyWeapon(item, 9.5, 2.0)
	})
	
	event.modify('twilightforest:glass_sword', item => {
		modifyAttackDamage(item, 28)
	})

	event.modify("mythicmetals:hallowed_sword", item => {
		modifyWeapon(item, 9, 1.8)
	})

	event.modify("mythicmetals:white_aegis_sword", item => {
		modifyWeapon(item, 10, 1.9)
	})

	event.modify("mythicmetals:red_aegis_sword", item => {
		modifyWeapon(item, 14.5, 1.3)
	})

	event.modify("mythicmetals:palladium_sword", item => {
		modifyWeapon(item, 10, 1.9)
	})

	event.modify("mythicmetals:stormyx_sword", item => {
		modifyWeapon(item, 10.5, 1.9)
	})

	event.modify("piercingpaxels:netherite_paxel", item => {
		modifyWeapon(item, 13, 1.8)
	})

	event.modify("mcdw:sword_obsidian_claymore", item => {
		modifyAttackSpeed(item, 0.8)
	})
	
	event.modify("gobber2:gobber2_sword", item => {
		modifyAttackDamage(item, 8)
	})
	
	event.modify('botania:terra_sword', item => {
		modifyWeapon(item, 25, 100)
	})
})
