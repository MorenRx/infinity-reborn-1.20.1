let first = true

ItemEvents.tooltip(event => {
	if (!first) return
	first = false
	
	event.addAdvanced('*', (item, advanced, text) => {
		for (let index = 1; index <= 32; index++) {
            let tooltipText = getTooltipTranslation(`item.${item.id.replace(':','.')}.tooltip.${index}`);
            if (!tooltipText) break
			text.add(index, tooltipText)
        }
	})
	
	Object.entries(tieredText).forEach(([key, value]) => {
		let tieredItems = Ingredient.of(`#${key}`).getItemIds()
		event.addAdvanced(tieredItems, (item, advanced, text) => {
			text.add(1, item.hasTag('kubejs:rebirthable') ? (value.string + Text.translate('infinity.rebirth.rebirthable').string) : value)
		})
	})
})
