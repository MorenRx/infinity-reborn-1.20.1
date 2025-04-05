ServerEvents.tags('worldgen/structure', event => {
	structureList.forEach(structure =>
		event.add(structure,structure)
	)
})