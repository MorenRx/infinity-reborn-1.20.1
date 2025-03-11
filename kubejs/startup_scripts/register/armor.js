StartupEvents.registry('item', event => {
	// 白给鞋
	event.create('baigei_boots', 'boots')
		.tier('gold')
		.maxDamage(400)
		.rarity('uncommon')

	// 18星海龟壳
	event.create('huan_lin_ying', 'helmet')
		.tier('turtle')
		.maxDamage(2333)
		.rarity('uncommon')
})