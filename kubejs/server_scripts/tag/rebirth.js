ServerEvents.tags('item', event => {
	rebirthWeapons.forEach(weapons => {
		event.add('kubejs:rebirthable', weapons)
	})
	
	rebirthArmors.forEach(armors => {
		event.add('kubejs:rebirthable', armors)
	})
})