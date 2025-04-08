PlayerEvents.loggedIn(event => {
    let { player, server } = event

    server.scheduleInTicks(20, (callback) => {
        if (player.persistentData.getBoolean('firstJoin')) return
		
        player.inventory.clear()
        player.give(Item.of('emerald_tools:copper_sword', '{Unbreakable:1b}'))
		player.give(Item.of('emerald_tools:copper_treeaxe', '{Unbreakable:1b}'))
		player.give(Item.of('emerald_tools:copper_pickaxe', '{Unbreakable:1b}'))
		player.give(Item.of('kubejs:difficulty_changer', '{RepairCost:1}'))
		player.give(Item.of('20x kubejs:chinese_dumpling'))
		player.give(Item.of('2x kubejs:firecracker'))
		player.give(Item.of('5x kubejs:red_packet'))
		player.give(Item.of('10x kubejs:shi_lian'))
		player.give("kubejs:starter_bag")
		player.give('dankstorage:dank_2')
		player.tell(`§e如果游玩过程中发现BUG请加群§c373164219`)
		player.tell(`§e==================================`)
	
		let playerName = player.profile.name
		if (exclItems.hasOwnProperty(playerName)) {
			exclItems[playerName].forEach(item => {
				player.give(item)
			})
		}
        player.persistentData.putBoolean('firstJoin', true)
    })
})

PlayerEvents.loggedIn(event => {
    let { player } = event
	let difficulty = player.persistentData.getByte('difficulty')
	if (difficulty < 0 || difficulty >= difficultyList.length)
		player.persistentData.putByte('difficulty', 1)
})