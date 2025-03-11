StartupEvents.registry('item', event => {
	// 助锻紫晶
	event.create('ametrine_crystal')
		.rarity('epic')

	//神铸晶
	event.create('crystal_tiered')
		.rarity('epic')

	// 神器碎片
	event.create('shenqi_shard')
		.rarity('epic')
		.tag('kubejs:shenqi_shard')

	// 神器零件
	event.create('shenqi_ingot')
		.rarity('uncommon')
		.tag('kubejs:shenqi_shard')

	// 神金
	event.create('sheng_jin')
		.maxStackSize(1)
		.rarity('uncommon')
		.tag('kubejs:sheng_jin')

	// 闪耀之星
	event.create('shining_star')
		.rarity('uncommon')
		.maxStackSize(1)

	// 无限支配之剑剑柄
	event.create('infinity_sword_a')
		.maxStackSize(1)
		.rarity('uncommon')

	// 无限支配之剑剑身
	event.create('infinity_sword_b')
		.maxStackSize(1)
		.rarity('uncommon')

	// 救赎之心碎片
	event.create('jiushu_heart_shard')

	// 救赎之心
	event.create('jiushu_heart')
		.rarity('epic')

	// 崩解牌
	event.create('disintegration_tablet')
		.maxStackSize(1)
		.rarity('epic')

	// 幽冥尘
	event.create('spectral_silt')

	// 天赋强化石
	event.create('strong_fossil')
		.rarity('epic')

	// 血泪
	event.create('bloody_tear')
		.maxStackSize(16)

	// 灵魂之骨
	event.create('soul_bone')
		.rarity('epic')

	// 技能之瓶
	event.create('skill_bottle')

	// 十连抽卡券
	event.create('shi_lian')
		.maxStackSize(10)
		.rarity('uncommon')

	// 远古之魂
	event.create('boss_rush')
		.maxStackSize(1)
		.rarity('uncommon')

	// 眼球召唤
	event.create('yan_qiu')
		.maxStackSize(1)
		.rarity('common')

	// 黑石傀儡召唤
	event.create('hei_shi')
		.maxStackSize(1)
		.rarity('common')

	// 虚无之刺
	event.create('xu_wu')
		.maxStackSize(1)
		.rarity('epic')

	// 难度切换器
	event.create('difficulty_changer')
		.rarity('epic')
		
	// 永恒之星
	event.create('yong_hen_star')
		.rarity('epic')
		.maxStackSize(1)

	// 红包
	event.create('red_packet')
		.rarity('epic')

	// 鞭炮
	event.create('firecracker')
		.rarity('epic')

	// 饺子
	event.create('chinese_dumpling')
		.food((food) => {
			food.hunger(2).saturation(0.5)
		})
		.rarity('epic')

	// 清理扫帚
	event.create('sao_di')
		.rarity('epic')

	// boss罗盘-夜巫妖
	event.create('boss_compass1')
		.maxStackSize(1)
		.rarity('epic')

	// boss罗盘-地狱之手
	event.create('boss_compass2')
		.maxStackSize(1)
		.rarity('epic')

	// boss罗盘-黑曜石之柱
	event.create('boss_compass3')
		.maxStackSize(1)
		.rarity('epic')

	// boss罗盘-虚空之花
	event.create('boss_compass4')
		.maxStackSize(1)
		.rarity('epic')

	// boss罗盘-远古英雄
	event.create('boss_compass5')
		.maxStackSize(1)
		.rarity('epic')

	// boss罗盘-莫德凯撒
	event.create('boss_compass6')
		.maxStackSize(1)
		.rarity('epic')

	// boss罗盘-亚托克斯
	event.create('boss_compass7')
		.maxStackSize(1)
		.rarity('epic')

	// 灵感菇
	event.create('gu')
		.food((food) => {
			food.hunger(4).saturation(0.5).alwaysEdible(true)
				.effect('minecraft:slow_falling', 100, 0, 1.0)
				.effect('minecraft:levitation', 100, 0, 1.0)
		})

	// 异界金币
	event.create('gold_coin')
		.rarity('uncommon')

	// 矿工任务奖励袋(初级)
	event.create('miner_quests')

	// 渔夫任务奖励袋(初级)
	event.create('fisherman_quests')

	// 农民任务奖励袋(初级)
	event.create('farmer_quests')

	// 新手礼包
	event.create('starter_bag')
})
