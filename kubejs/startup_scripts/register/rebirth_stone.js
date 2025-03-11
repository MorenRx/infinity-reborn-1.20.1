StartupEvents.registry('item', event => {
	// Ⅰ阶武器转生石-蚀骨
	event.create('upgrade_poison')
		.rarity('epic')
		.maxStackSize(16)

	// Ⅰ阶武器转生石-凛冽
	event.create('upgrade_frost')
		.rarity('epic')
		.maxStackSize(16)

	// Ⅰ阶武器转生石-灼炎
	event.create('upgrade_fire')
		.rarity('epic')
		.maxStackSize(16)

	// Ⅲ阶武器转生石-元素
	event.create('upgrade_yuan')
		.rarity('epic')
		.maxStackSize(16)

	// Ⅱ阶武器转生石-强袭
	event.create('upgrade_crit')
		.rarity('epic')
		.maxStackSize(16)

	// Ⅱ阶武器转生石-吸血
	event.create('upgrade_lifesteal')
		.rarity('epic')
		.maxStackSize(16)

	// Ⅵ阶武器转生石-重刃
	event.create('upgrade_ren')
		.rarity('epic')
		.maxStackSize(16)

	// Ⅰ阶护甲转生石-生命
	event.create('upgrade_life')
		.rarity('epic')
		.maxStackSize(16)

	// Ⅱ阶护甲转生石-护佑
	event.create('upgrade_defence')
		.rarity('epic')
		.maxStackSize(16)

	// 重塑核心
	event.create('upgrade_liuren')
		.rarity('epic')
		.maxStackSize(16)

	// 纳米核心
	event.create('upgrade_nami')
		.rarity('epic')
		.maxStackSize(16)
})