StartupEvents.registry('item', event => {
	// 木剑+7
	event.create('mu_jian_seven', 'sword')
		.tier('wood')
		.attackDamageBonus(3)
		.maxStackSize(1)
		.speedBaseline(-2)
		.maxDamage(200)
		.rarity('uncommon')

	// 木剑+13
	event.create('mu_jian', 'sword')
		.tier('wood')
		.attackDamageBonus(6)
		.maxStackSize(1)
		.speedBaseline(-2)
		.maxDamage(200)
		.rarity('uncommon')

	// 原木剑
	event.create('yuan_mu_jian_one', 'sword')
		.tier('wood')
		.attackDamageBonus(1)
		.maxStackSize(1)
		.speedBaseline(-2)
		.maxDamage(100)
		.rarity('common')

	// 原木剑+7
	event.create('yuan_mu_jian_seven', 'sword')
		.tier('wood')
		.attackDamageBonus(4)
		.maxStackSize(1)
		.speedBaseline(-2)
		.maxDamage(200)
		.rarity('common')

	// 原木剑+13
	event.create('yuan_mu_jian', 'sword')
		.tier('wood')
		.attackDamageBonus(7)
		.maxStackSize(1)
		.speedBaseline(-2)
		.maxDamage(200)
		.rarity('uncommon')

	// 七星剑
	event.create('qixing_sword', 'sword')
		.tier('shenqi')
		.attackDamageBonus(32)
		.maxStackSize(1)
		.speedBaseline(-1.1)
		.maxDamage(9999)
		.rarity('uncommon')

	// 上善若水
	event.create('ruoshui_sword', 'sword')
		.tier('shenqi')
		.attackDamageBonus(15)
		.maxStackSize(1)
		.speedBaseline(-1.6)
		.maxDamage(9999)
		.rarity('uncommon')

	// 野草
	event.create('yecao_sword', 'sword')
		.tier('shenqi')
		.attackDamageBonus(13)
		.maxStackSize(1)
		.speedBaseline(-1.6)
		.maxDamage(9999)
		.rarity('uncommon')

	// 石剑？
	event.create('putong_stone_sword', 'sword')
		.attackDamageBonus(1)
		.maxStackSize(1)
		.speedBaseline(-2.2)
		.maxDamage(9999)
		.rarity('uncommon')

	// 四相开天
	event.create('sixiang_kaitian', 'sword')
		.tier('shenqi')
		.attackDamageBonus(32)
		.maxStackSize(1)
		.speedBaseline(-1.5)
		.maxDamage(9999)
		.rarity('uncommon')

	// 凝血巨镰
	event.create('lce_tang', 'sword')
		.tier('shenqi')
		.attackDamageBonus(27)
		.maxStackSize(1)
		.speedBaseline(-2.4)
		.maxDamage(9999)
		.rarity('uncommon')


	// 护摩之杖
	event.create('ailinghan', 'sword')
		.tier('shenqi')
		.rarity('uncommon')
		.attackDamageBonus(22)
		.maxStackSize(1)
		.speedBaseline(-2.8)
		.maxDamage(9999)

	// lisj145246之剑
	event.create('jian_li', 'sword')
		.rarity('uncommon')
		.attackDamageBonus(42)
		.maxStackSize(1)
		.speedBaseline(-2.6)
		.maxDamage(9999)

	// 无限之剑
	event.create('infinity_sword', 'sword')
		.tier('infinity')
		.rarity('uncommon')
		.attackDamageBonus(662)
		.maxStackSize(1)
		.speedBaseline(-2)
		.maxDamage(1000000)

	// 风雪手杖
	event.create('snowstormcane', 'sword')
		.attackDamageBonus(3)
		.maxStackSize(1)
		.speedBaseline(-1.1)
		.maxDamage(1000)
})