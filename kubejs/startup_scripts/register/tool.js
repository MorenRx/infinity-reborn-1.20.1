StartupEvents.registry('item', event => {
	// 燧石工具
	event.create('crude_pickaxe', 'pickaxe').tier('stone')
	event.create('crude_axe', 'axe').tier('stone')
	event.create('crude_spade', 'shovel').tier('stone')
	
	// 直镐
	event.create('kreska', 'pickaxe')
		.rarity('epic')
		.tier('kreska')

	// 自然之灵
	event.create('nature_spirit', 'pickaxe')
		.rarity('uncommon')
		.tier('nature')
})