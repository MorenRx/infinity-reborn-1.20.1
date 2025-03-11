StartupEvents.registry('block', event => {
	// 精金锻炉砖
	event.create('adamantite_brick')
		.material('metal')
		.hardness(3.0)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.requiresTool(true)
	
	// 特殊处理的黑曜石
	event.create('special_obsidian')
		.material('stone')
		.hardness(75.0)
		.resistance(1200.0)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_diamond_tool')
		.requiresTool(true)
	
})