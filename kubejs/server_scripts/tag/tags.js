ServerEvents.tags('item', event => {
	event.add('card_package', [
		'collectorsalbum:common_repacked_card_package',
		'collectorsalbum:uncommon_repacked_card_package',
		'collectorsalbum:rare_repacked_card_package',
		'collectorsalbum:epic_repacked_card_package',
		'collectorsalbum:legendary_repacked_card_package',
		'collectorsalbum:mythical_repacked_card_package'
	])
	
	event.removeAll('c:hidden_from_recipe_viewers')
	event.removeAll('twilightforest:portal/activator')
	event.add('twilightforest:portal/activator', ['gobber2:gobber2_ingot'])
	
	event.add('utilities:item',
		Ingredient.of('@utilities').getItemIds()
	)
})