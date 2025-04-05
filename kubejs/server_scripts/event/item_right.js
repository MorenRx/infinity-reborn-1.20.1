ItemEvents.rightClicked(event => {
	let player = event.player
    if (!player) return

    let item = event.item?.id
    if (item && rightClickEventInHand[item]) {
        rightClickEventInHand[item](event);
    }
})

const rightClickEventInHand = {
	// 上善若水
	'kubejs:ruoshui_sword': function(event) {
		let { player } = event
		if (player.crouching) {
			player.heal(player.maxHealth / 2)
			player.addItemCooldown('kubejs:ruoshui_sword', 15 * 20)
		} else {
			addEffect(player, 'minecraft:water_breathing', 15, 1)
			player.addItemCooldown('kubejs:ruoshui_sword', 20 * 20)
		}
	},
	// 野草
	'kubejs:yecao_sword': function(event) {
		let { player } = event
		addEffect(player, 'minecraft:regeneration', 5, 5)
		addEffect(player, 'minecraft:resistance', 2, 5)
		player.addItemCooldown('kubejs:yecao_sword', 10 * 20)
	},
	// 石剑?
	'kubejs:putong_stone_sword': function(event) {
		let { player } = event
		addEffect(player, 'minecraft:resistance', 30, 5)
		player.addItemCooldown('kubejs:putong_stone_sword', 10 * 60 * 20)
	},
	// 中子灭杀
	'kubejs:zhongzi': function(event) {
		let { player, server } = event
		server.runCommandSilent(`/kill @e[type=!minecraft:player]`)
		player.addItemCooldown('kubejs:zhongzi', 20 * 60 * 20)
	},
	// 四象开天
	'kubejs:sixiang_kaitian': function(event) {
		let { player } = event
		player.level.spawnLightning(
			player.x + getRandomInt(-10, 10),
			player.y, 
			player.z + getRandomInt(-10, 10),
			false
		)
		player.addItemCooldown('kubejs:sixiang_kaitian', 10)
	},
	// 镜心的头
	'kubejs:jing__xin': function(event) {
		let { player } = event
		summon(player, 'minecraft:wither')
		player.addItemCooldown('kubejs:jing__xin', 5 * 20)
	},
	// 琉璃星夜溯流光
	'kubejs:x_nuohua': function(event) {
		let { player } = event
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
	    player.addItemCooldown('kubejs:x_nuohua', 2 * 60 * 20)
	},
	// 凝血巨镰
	'kubejs:lce_tang': function(event) {
		let { player } = event
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
			player.addItemCooldown('kubejs:lce_tang', 15 * 20)
		}
	},
	// 护摩之杖
	'kubejs:ailinghan': function(event) {
		let { player } = event
		let loss = player.maxHealth * 0.3
		
		if (player.health <= loss) {
			// 提示: 生命值不足
			player.setStatusMessage(Text.translate('item.kubejs.ailinghan.tip.health'))
		} else {
			player.heal(-loss)
			addEffect(player, 'minecraft:strength', 9, 10)
			player.addItemCooldown('kubejs:ailinghan', 16 * 20)
		}
	},
	// 直镐
	'kubejs:kreska': function(event) {
		let { player, server } = event
		addEffect(player, 'minecraft:speed', 2, 2)
		let playerName = player.profile.name
		server.runCommandSilent(`execute at ${playerName} run particle minecraft:portal ${player.x} ${player.y + 1} ${player.z} 0 0.5 0.5 0.5 50`)
		server.runCommandSilent(`execute at ${playerName} run tp ${playerName} \^ \^1 \^10`)
		server.runCommandSilent(`execute at ${playerName} run particle minecraft:portal ${player.x} ${player.y + 1} ${player.z} 0 0.5 0.5 0.5 50`)
		player.playSound('minecraft:entity.enderman.teleport')
		player.addItemCooldown('kubejs:kreska', 5 * 20)
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
	}
}

const rightClickEventMainHand = {
	'kubejs:sao_di': function(event) {
		let player = event.player
		if (player.op) {
			clearLag(event.server);
			player.addItemCooldown('kubejs:sao_di', 100)
		} else {
			player.tell([Text.lightPurple('[扫地机器人]'), "你没有权限这样做"]);
		}
	},
	'kubejs:moon_clock': function(event) {
		switch (event.level.getMoonPhase()) {
			case 0:
				event.server.runCommandSilent(`time add 4d`)
				event.player.mainHandItem.count -= 1
				break;
			case 1:
				event.server.runCommandSilent(`time add 3d`)
				event.player.mainHandItem.count -= 1
				break;
			case 2:
				event.server.runCommandSilent(`time add 2d`)
				event.player.mainHandItem.count -= 1
				break;
			case 3:
				event.server.runCommandSilent(`time add 1d`)
				event.player.mainHandItem.count -= 1
				break;
			case 4:
				break;
			case 5:
				event.server.runCommandSilent(`time add 7d`)
				event.player.mainHandItem.count -= 1
				break;
			case 6:
				event.server.runCommandSilent(`time add 6d`)
				event.player.mainHandItem.count -= 1
				break;
			case 7:
				event.server.runCommandSilent(`time add 5d`)
				event.player.mainHandItem.count -= 1
				break;
			}
		},
	'spectrum:crescent_clock': function(event) {
		let player = event.player
		switch (event.level.getMoonPhase()) {
			case 0:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是满月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是满月`)
				break;
			case 1:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是亏凸月","color":"deepskyblue","bold":true}`)
				break;
			case 2:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是下弦月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是下弦月`)
				break;
			case 3:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是残月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是残月`)
				break;
			case 4:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是新月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是新月`)
				break;
			case 5:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是蛾眉月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是蛾眉月`)
				break;
			case 6:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是上弦月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是上弦月`)
				break;
			case 7:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是盈凸月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是盈凸月`)
				break;
		}
	},
	'kubejs:yong_hen_star': function(event) {
		let player = event.player
		if (player.getHeldItem(OFF_HAND) != null) {
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"你无法在副手持有物品时使用该物品","color":"red","bold":true}`)
		} else if (player.stages.has('difficulty_yonghen')) {
			player.stages.remove('difficulty_easy')
			player.stages.remove('difficulty_normal')
			player.stages.remove('difficulty_hard')
			player.stages.remove('difficulty_impossible')
			player.stages.remove('difficulty_impossibleplus')
			player.stages.remove('difficulty_yonghen')
			player.stages.add('difficulty_easy')
			player.playSound('minecraft:entity.ender_dragon.ambient')
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：旅途","color":"green","bold":true}`)
		} else if (!player.stages.has('lb')) {
			player.stages.remove('difficulty_easy')
			player.stages.remove('difficulty_normal')
			player.stages.remove('difficulty_hard')
			player.stages.remove('difficulty_impossible')
			player.stages.remove('difficulty_impossibleplus')
			player.stages.remove('difficulty_yonghen')
			player.stages.add('difficulty_yonghen')
			player.playSound('minecraft:entity.ender_dragon.growl')
			let yonghen = [
				Item.of('mcda:spelunker_armor_helmet'),
				Item.of('mcda:spelunker_armor_chestplate'),
				Item.of('mcda:spelunker_armor_leggings'),
				Item.of('mcda:spelunker_armor_boots'),
				Item.of('inmis:frayed_backpack', '{Inventory:[{Slot:0,Stack:{Count:1b,id:"toms_storage:ts.inventory_connector"}},{Slot:1,Stack:{Count:1b,id:"toms_storage:ts.crafting_terminal"}},{Slot:2,Stack:{Count:3b,id:"expandedstorage:diamond_barrel"}},{Slot:3,Stack:{Count:1b,id:"mcdw:sword_iron_sword_var",tag:{Damage:0,swa3:{}}}},{Slot:4,Stack:{Count:16b,id:"things:recall_potion"}},{Slot:5,Stack:{Count:1b,id:"things:socks",tag:{}}},{Slot:6,Stack:{Count:1b,id:"waystones:warp_stone",tag:{Damage:0}}},{Slot:7,Stack:{Count:1b,id:"extraalchemy:potion_bag",tag:{}}},{Slot:8,Stack:{Count:8b,id:"minecraft:golden_apple"}}]}')
			]
			for (let index = 0; index < yonghen.length; index++) {
				player.give(yonghen[index])
			}
			player.stages.add('lb')
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：永恒","color":"aqua","bold":true}`)
		} else {
			player.stages.remove('difficulty_easy')
			player.stages.remove('difficulty_normal')
			player.stages.remove('difficulty_hard')
			player.stages.remove('difficulty_impossible')
			player.stages.remove('difficulty_impossibleplus')
			player.stages.remove('difficulty_yonghen')
			player.stages.add('difficulty_yonghen')
			player.playSound('minecraft:entity.ender_dragon.growl')
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：永恒","color":"aqua","bold":true}`)
		}
	},
	'kubejs:skill_bottle': function(event) {
		let player = event.player
		event.server.runCommandSilent(`execute as ${player.id} run playerex refund ${player.profile.name} 1`)
		player.mainHandItem.count -= 1
	},
	'kubejs:bloody_tear': function(event) {
		let player = event.player
		player.addItemCooldown('kubejs:bloody_tear', 100)
		event.server.runCommand(`/enhancedcelestials setLunarEvent enhancedcelestials-super_blood_moon`)
		player.mainHandItem.count -= 1
	},
	'kubejs:jiushu_heart': function(event) {
		let player = event.player
		let lmd = player.fullNBT.IMDifficulty
		if (player.getHeldItem(OFF_HAND) != null) {
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"你无法在副手持有物品时使用该物品","color":"white"}`)
		} else if (player.stages.has('difficulty_yonghen') && lmd < 50) {
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"永恒模式50难度以下无法降低难度","color":"white"}`)
			player.mainHandItem.count -= 1
		} else {
			if (player.stages.has('difficulty_yonghen')) {
				event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add -2`)
				if (lmd <= 50) {
					event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} set 50`)
					player.mainHandItem.count -= 1
				} else {
					player.mainHandItem.count -= 1
				}
			}
			if (!player.stages.has('difficulty_yonghen')) {
				event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add -2`)
				if (lmd <= 0) {
					event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} set 0`)
					player.mainHandItem.count -= 1
				} else {
					player.mainHandItem.count -= 1
				}
			}
		}
	},
	'kubejs:paolude_jy': function(event) {
		let player = event.player
		if (player.crouching) {
			player.give(Item.of('kubejs:nature_spirit', "{Damage:0,Unbreakable:1b}"))
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"恭喜你发现了真隐藏彩蛋","color":"green"}`)
			player.mainHandItem.count -= 1
		} else {
			event.server.runCommandSilent(`tellraw ${player.profile.name} [{"text":"点我领取丰厚奖励","clickEvent":{"action":"open_url","value":"https://www.bilibili.com/video/BV1GJ411x7h7/"}}]`)
		}
	},
	'kubejs:difficulty_changer': function(event) {
		let player = event.player
		if (player.getHeldItem(OFF_HAND) != null) {
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"你无法在副手持有物品时使用该物品","color":"red","bold":true}`)
		} else {
			if (player.stages.has('difficulty_easy')) {
				player.stages.remove('difficulty_easy')
				player.stages.remove('difficulty_normal')
				player.stages.remove('difficulty_hard')
				player.stages.remove('difficulty_impossible')
				player.stages.remove('difficulty_yonghen')
				player.stages.add('difficulty_normal')
				player.playSound('minecraft:entity.arrow.hit_player')
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：经典","color":"yellow","bold":true}`)
			} else if (player.stages.has('difficulty_normal')) {
				player.stages.remove('difficulty_easy')
				player.stages.remove('difficulty_normal')
				player.stages.remove('difficulty_hard')
				player.stages.remove('difficulty_impossible')
				player.stages.remove('difficulty_yonghen')
				player.stages.add('difficulty_hard')
				player.playSound('minecraft:entity.arrow.hit_player')
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：专家","color":"red","bold":true}`)
			} else if (player.stages.has('difficulty_hard')) {
				player.stages.remove('difficulty_easy')
				player.stages.remove('difficulty_normal')
				player.stages.remove('difficulty_hard')
				player.stages.remove('difficulty_impossible')
				player.stages.remove('difficulty_yonghen')
				player.stages.add('difficulty_impossible')
				player.playSound('minecraft:entity.arrow.hit_player')
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：大师","color":"dark_red","bold":true}`)
			} else if (player.stages.has('difficulty_impossible')) {
				player.stages.remove('difficulty_easy')
				player.stages.remove('difficulty_normal')
				player.stages.remove('difficulty_hard')
				player.stages.remove('difficulty_impossible')
				player.stages.remove('difficulty_impossibleplus')
				player.stages.remove('difficulty_yonghen')
				player.stages.add('difficulty_impossibleplus')
				player.playSound('minecraft:entity.arrow.hit_player')
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：死亡","color":"dark_red","bold":true}`)
			} else if (player.stages.has('difficulty_yonghen')) {
				player.stages.remove('difficulty_easy')
				player.stages.remove('difficulty_normal')
				player.stages.remove('difficulty_hard')
				player.stages.remove('difficulty_impossible')
				player.stages.remove('difficulty_impossibleplus')
				player.stages.remove('difficulty_yonghen')
				player.stages.add('difficulty_easy')
				player.playSound('minecraft:entity.arrow.hit_player')
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：旅途","color":"green","bold":true}`)
			} else {
				player.stages.remove('difficulty_easy')
				player.stages.remove('difficulty_normal')
				player.stages.remove('difficulty_hard')
				player.stages.remove('difficulty_impossible')
				player.stages.remove('difficulty_impossibleplus')
				player.stages.remove('difficulty_yonghen')
				player.stages.add('difficulty_easy')
				player.playSound('minecraft:entity.arrow.hit_player')
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：旅途","color":"green","bold":true}`)
			}
		}
	}
}