let first = true

ItemEvents.tooltip(event => {
	if (!first) return
	first = false
	
	event.addAdvancedToAll((item, advanced, text) => {
		let tooltipKey = `item.${item.id.replace(':','.')}.tooltip.`
		for (let index = 1; index <= 32; index++) {
            let tooltipText = getTooltipTranslation(tooltipKey + index);
            if (tooltipText === null) break
			text.add(index, tooltipText)
        }
	})
	
	Object.entries(tieredText).forEach(([key, value]) => {
		let tieredItems = Ingredient.of(`#${key}`).getItemIds()
		event.addAdvanced(tieredItems, (item, advanced, text) => {
			text.add(1, item.hasTag('kubejs:rebirthable') ? (value.string + Text.translate('infinity.rebirth.rebirthable').string) : value)
		})
	})

	event.addAdvanced('botania:crystal_bow', (item, advanced, text) => {
		if (item.hasNBT() && item.nbt['CustomModelData'] == 1781) {
			text.add(2, "古:你怎么知道我两发抽到了小豆泥隐藏")
			text.add(3, "来自赞助者-xuexiye")
		}
	})
})
