StartupEvents.registry('block', event => {
	event.create('adamantite_brick')
		.material('metal')
		.hardness(3.0)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.requiresTool(true)
})