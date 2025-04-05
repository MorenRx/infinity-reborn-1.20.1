const $Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey')

function addEffect(entity, effectID, duration, amplifier) {
    entity.potionEffects.add(effectID, duration * 20, amplifier - 1, true, false)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findStructure(itemEvent, structureId) {
	let { player } = itemEvent
	let pos = player.level.findNearestMapStructure($TagKey.create($Registries.STRUCTURE, structureId), player.blockPosition(), 10000, false)
	let structureName = Text.translate(`structure.${structureId.replace(':', '.')}`).yellow()
	player.tell(pos ? 
		Text.translate('infinity.msg.structure.find.success', structureName, pos.x.toFixed(0), pos.z.toFixed(0)).gold() :
		Text.translate('infinity.msg.structure.find.failure', structureName).red()
	)
    return pos
}

function summon(player, entityId, distance) {
	if (!distance) distance = 5
	let eyePos = player.getEyePosition()
	let lookVec = player.getViewVector(1.0)
	let entity = player.level.createEntity(entityId)
	entity.setPosition(eyePos.get(0) + lookVec.get(0) * distance, player.y, eyePos.get(2) + lookVec.get(2) * distance)
	entity.spawn()
}