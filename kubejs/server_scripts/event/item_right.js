ItemEvents.rightClicked(event => {
	let { player, item, hand } = event
	let handler = itemRightHandlers[item.id]

    if (!handler) return
	handler(event)

	// player.swing(hand)不生效,没办法副手挥动
	if (hand == 'main_hand') player.swing()
})

const itemRightHandlers = {
	// 上善若水
	'kubejs:ruoshui_sword': function(event) {
		let { player, item } = event
		if (player.crouching) {
			player.heal(player.maxHealth / 2)
			player.addItemCooldown(item.id, 15 * 20)
		} else {
			addEffect(player, 'minecraft:water_breathing', 15, 1)
			player.addItemCooldown(item.id, 20 * 20)
		}
	},
	// 野草
	'kubejs:yecao_sword': function(event) {
		let { player, item } = event
		addEffect(player, 'minecraft:regeneration', 5, 5)
		addEffect(player, 'minecraft:resistance', 2, 5)
		player.addItemCooldown(item.id, 10 * 20)
	},
	// 石剑?
	'kubejs:putong_stone_sword': function(event) {
		let { player, item } = event
		addEffect(player, 'minecraft:resistance', 30, 5)
		player.addItemCooldown(item.id, 10 * 60 * 20)
	},
	// 中子灭杀
	'kubejs:zhongzi': function(event) {
		let { player, server, item } = event
		server.runCommandSilent(`/kill @e[type=!minecraft:player]`)
		player.addItemCooldown(item.id, 20 * 60 * 20)
	},
	// 四象开天
	'kubejs:sixiang_kaitian': function(event) {
		let { player, item } = event
		player.level.spawnLightning(
			player.x + getRandomInt(-10, 10),
			player.y, 
			player.z + getRandomInt(-10, 10),
			false
		)
		player.addItemCooldown(item.id, 10)
	},
	// 镜心的头
	'kubejs:jing__xin': function(event) {
		let { player, item } = event
		summon(player, 'minecraft:wither')
		player.addItemCooldown(item.id, 5 * 20)
	},
	// 琉璃星夜溯流光
	'kubejs:x_nuohua': function(event) {
		let { player, item } = event
	    const rewards = [
	        'spectrum:colorful_shooting_star',
	        'spectrum:glistering_shooting_star',
	        'spectrum:fiery_shooting_star',
	        'spectrum:pristine_shooting_star',
	        'spectrum:gemstone_shooting_star'
	    ]
	    let reward = Math.random() > 0.5 
	        ? rewards[Math.floor(Math.random() * rewards.length)] 
	        : '5x spectrum:star_fragment'
	
	    player.give(reward)
	    player.addItemCooldown(item.id, 2 * 60 * 20)
	},
	// 凝血巨镰
	'kubejs:lce_tang': function(event) {
		let { player, item } = event
		if (player.crouching) {
			if (player.health <= 5) {
				// 提示: 生命值不足
				player.setStatusMessage(Text.translate('item.kubejs.lce_tang.tip.health'))
			} else {
				player.heal(-5)
				addEffect(player, 'minecraft:speed', 30, 2)
				addEffect(player, 'minecraft:strength', 30, 3)
			}
		} else {
			addEffect(player, 'minecraft:regeneration', 10, 2)
			player.addItemCooldown(item.id, 15 * 20)
		}
	},
	// 护摩之杖
	'kubejs:ailinghan': function(event) {
		let { player, item } = event
		let loss = player.maxHealth * 0.3
		
		if (player.health <= loss) {
			// 提示: 生命值不足
			player.setStatusMessage(Text.translate('item.kubejs.ailinghan.tip.health'))
		} else {
			player.heal(-loss)
			addEffect(player, 'minecraft:strength', 9, 10)
			player.addItemCooldown(item.id, 16 * 20)
		}
	},
	// 直镐
	'kubejs:kreska': function(event) {
		let { player, server, item } = event
		addEffect(player, 'minecraft:speed', 2, 2)
		let playerName = player.profile.name
		let particleCommand = `execute at ${playerName} run particle minecraft:portal ${player.x} ${player.y + 1} ${player.z} 0 0.5 0.5 0.5 50`
		server.runCommandSilent(particleCommand)
		server.runCommandSilent(`execute at ${playerName} run tp ${playerName} \^ \^1 \^10`)
		server.runCommandSilent(particleCommand)
		player.playSound('minecraft:entity.enderman.teleport')
		player.addItemCooldown(item.id, 5 * 20)
	},
	// BossRush
	'kubejs:boss_rush': function(event) {
		let { player, server, item } = event
		bossList.forEach(entityType => {
			summon(player, entityType,10)
		})
		
		if (!server.singlePlayer) item.shrink(1)
	},
	// 十连抽卡券
	'kubejs:shi_lian': function(event) {
		let { player, item } = event
		let cards = Ingredient.of('@collectorsalbum').getItemIds();
		for (let index = 0; index < 10; index++) {
			player.give(cards[Math.random() * cards.length]);
		}
		item.shrink(1)
	},
	// Boss罗盘-夜巫妖
	'kubejs:boss_compass1': function(event) {
		if (findStructure(event, 'bosses_of_mass_destruction:lich_tower')) event.item.shrink(1)
	},
	// Boss罗盘-地狱之手
	'kubejs:boss_compass2': function(event) {
		if (findStructure(event, 'bosses_of_mass_destruction:gauntlet_arena')) event.item.shrink(1)
	},
	// Boss罗盘-黑曜石之柱
	'kubejs:boss_compass3': function(event) {
		if (findStructure(event, 'bosses_of_mass_destruction:obsidilith_arena')) event.item.shrink(1)
	},
	// Boss罗盘-虚空之花
	'kubejs:boss_compass4': function(event) {
		if (findStructure(event, 'bosses_of_mass_destruction:void_blossom')) event.item.shrink(1)
	},
	// Boss罗盘-远古英雄
	'kubejs:boss_compass5': function(event) {
		if (findStructure(event, 'soulsweapons:champions_graves')) event.item.shrink(1)
	},
	// Boss罗盘-莫德凯撒
	'kubejs:boss_compass6': function(event) {
		if (findStructure(event, 'soulsweapons:cathedral_of_resurrection')) event.item.shrink(1)
	},
	// Boss罗盘-亚托克斯
	'kubejs:boss_compass7': function(event) {
		if (findStructure(event, 'soulsweapons:decaying_kingdom')) event.item.shrink(1)
	},
	// 眼球召唤
	'kubejs:yan_qiu': function(event) {
		let { player, item } = event
		if (player.level.dimension === 'minecraft:the_end') {
			summon(player, 'adventurez:the_eye')
			item.shrink(1)
		} else {
			// 提示: 需要在末地使用
			player.setStatusMessage(Text.translate('item.kubejs.yan_qiu.tip.dimension'));
		}
	},
	// 黑石傀儡召唤
	'kubejs:hei_shi': function(event) {
		let { player, item } = event
		if (player.level.dimension === 'minecraft:the_nether') {
			summon(player, 'adventurez:stone_golem')
			item.shrink(1)
		} else {
			// 提示: 需要在地狱使用
			player.setStatusMessage(Text.translate('item.kubejs.hei_shi.tip.dimension'));
		}
	},
	// 清理扫帚
	'kubejs:sao_di': function(event) {
		let { player, server, item } = event

		let title = Text.of('[').append(Text.translate('item.kubejs.sao_di')).append('] ').gold()
		
		if (!player.op) {
			player.tell(title.copy().append(Text.translate('item.kubejs.sao_di.msg.failed.permissions').red()))
			return
		}

		const wliteList = [
			'botania:terra_pick',
			'twilightforest:pink_castle_rune_brick',
			'twilightforest:yellow_castle_rune_brick',
			'twilightforest:blue_castle_rune_brick',
			'twilightforest:violet_castle_rune_brick',
			'soulsweapons:crimson_obsidian',
			'minecraft:honeycomb_block',
			'bosses_of_mass_destruction:charged_ender_pearl',
			'adventurez:prime_eye',
			'twilightforest:naga_trophy',
			'twilightforest:lich_trophy',
			'twilightforest:minoshroom_trophy',
			'twilightforest:hydra_trophy',
			'twilightforest:knight_phantom_trophy',
			'twilightforest:ur_ghast_trophy',
			'twilightforest:alpha_yeti_trophy',
			'twilightforest:snow_queen_trophy',
			'kubejs:spectral_silt',
			'botania:mana_tablet',
			'botania:mana_ring',
			'botania:mana_ring_greater'
		]

		let items = player.level.getEntities().filter(e => e.type === 'minecraft:item' && !wliteList.includes(e.item.id))
		items.forEach(e => e.kill())

		if (items.isEmpty()) {
			player.tell(title.copy().append(Text.translate('item.kubejs.sao_di.msg.failed.none').red()))
		} else {
			server.tell(title.copy().append(Text.translate('item.kubejs.sao_di.msg.count', player.profile.name, items.length.toFixed(0)).yellow()))
		}
		
		player.addItemCooldown(item.id, 5 * 20)
	},
	// 月相时钟
	'spectrum:crescent_clock': function(event) {
		let { player } = event
		player.setStatusMessage(Text.translate(
			'item.spectrum.crescent_clock.tip.moon', 
			Text.translate(`item.spectrum.crescent_clock.tip.moon.${player.level.getMoonPhase() + 1}`)
		).blue().bold(true))
	},
	// 跟着凑热闹的Jy
	'kubejs:paolude_jy': function(event) {
		let { player, item } = event
		if (player.crouching) {
			player.give(Item.of('kubejs:nature_spirit', "{Damage:0,Unbreakable:1b}"))
			player.setStatusMessage(Text.translate('item.kubejs.paolude_jy.tip.reward'))
			item.shrink(1)
		} else {
			player.tell(Text.translate("item.kubejs.paolude_jy.msg.joke").underlined(true).clickOpenUrl('https://www.bilibili.com/video/BV1GJ411x7h7/'))
		}
	},
	// 难度切换器
	'kubejs:difficulty_changer': function(event) {
		let { player } = event
		let difficulty = player.persistentData.getByte('difficulty')
		if (difficulty >= 5) {
			player.setStatusMessage(Text.translate('infinity.difficulty.failed.switch').red().bold(true))
			return
		}
		difficulty = (difficulty === 4) ? 0 : ++difficulty

		player.persistentData.putByte('difficulty', difficulty)
		
		player.playSound('minecraft:entity.arrow.hit_player')
		player.setStatusMessage(Text.translate(
			'infinity.difficulty.current',
			Text.translate(`infinity.difficulty.${difficultyList[difficulty].name}`)
		).color(difficultyList[difficulty].color).bold(true))
	},
	// 永恒之星
	'kubejs:yong_hen_star': function(event) {
		let { player } = event
		let difficulty = player.persistentData.getByte('difficulty')
		let sound
		
		if (difficulty === 5) {
			difficulty = 1
			sound = 'minecraft:entity.ender_dragon.ambient'
		} else {
			difficulty = 5
			sound = 'minecraft:entity.ender_dragon.growl'
		}

		player.persistentData.putByte('difficulty', difficulty)

		player.playSound(sound)
		player.setStatusMessage(Text.translate(
			'infinity.difficulty.current',
			Text.translate(`infinity.difficulty.${difficultyList[difficulty].name}`)
		).color(difficultyList[difficulty].color).bold(true))
	},
	// 救赎之心
	'kubejs:jiushu_heart': function(event) {
		let { player, server, item } = event
		let difficulty = player.persistentData.getByte('difficulty')
		let imd = player.nbt.IMDifficulty
		let minImd = difficultyList[difficulty].minImd
		const delta = 2

		if (imd <= minImd) {
			player.setStatusMessage(Text.translate(
				'item.kubejs.jiushu_heart.tip.failed', 
				Text.translate(`infinity.difficulty.${difficultyList[difficulty].name}`),
				minImd.toFixed(0)
			).white())
			return
		} else if (imd <= minImd + delta) {
			imd = minImd
		} else {
			imd -= delta
		}

		server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} set ${imd}`)
		item.shrink(1)
	},
	// 新手礼包
	'kubejs:starter_bag': function(event) {
		let { player, item } = event
		starterKit.forEach(kitItem =>
			player.give(kitItem)
		)
		item.shrink(1)
	},
	// 矿工任务奖励袋(初级)
	'kubejs:miner_quests': function(event) {
		let { player, item } = event
		for (let index = 0; index < 10; index++) {
			player.give(questLootMiner[Math.random() * questLootMiner.length]) 
		}
		player.give('30x numismatic-overhaul:silver_coin')
		item.shrink(1)
	}
}