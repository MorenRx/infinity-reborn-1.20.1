
function modifyWeapon(item, attackDamage, attackSpeed) {
	modifyAttackDamage(item, attackDamage)
	modifyAttackSpeed(item, attackSpeed)
}

function modifyAttackDamage(item, attackDamage) {
	let BaseAttackDamageUUID = $ItemModifiers.damage()
	item.removeAttribute("minecraft:generic.attack_damage", BaseAttackDamageUUID)
    item.addAttribute("minecraft:generic.attack_damage", BaseAttackDamageUUID, "KubeJS", attackDamage, "addition")
}

function modifyAttackSpeed(item, attackSpeed) {
	let BaseAttackSpeedUUID = $ItemModifiers.speed()
	item.removeAttribute("minecraft:generic.attack_speed", BaseAttackSpeedUUID)
	item.addAttribute("minecraft:generic.attack_speed", BaseAttackSpeedUUID, "KubeJS", attackSpeed - 4, "addition")
}