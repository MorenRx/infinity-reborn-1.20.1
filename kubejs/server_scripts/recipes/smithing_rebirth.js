// 等待替换实现方式
ServerEvents.recipes(event => {
	for (let weaponTier = 0; weaponTier < rebirthWeapons.length; weaponTier++) {
		for (let weaponRebirthStoneTier = 0; weaponRebirthStoneTier < rebirthStoneWeapon.length; weaponRebirthStoneTier++) {
			if (weaponTier >= weaponRebirthStoneTier) {
                rebirthWeapons[weaponTier].forEach(weapon => {
                    rebirthStoneWeapon[weaponRebirthStoneTier].forEach(rebirthStone => {
                        event.smithing(
                            Item.of(weapon).withNBT(rebirthStone.nbt),
                            "minecraft:netherite_upgrade_smithing_template",
                            Item.of(weapon),
                            rebirthStone.id
                        )
                    })
                })
            }
		}
	}

	for (let armorTier = 0; armorTier < rebirthArmors.length; armorTier++) {
		for (let armorRebirthStoneTier = 0; armorRebirthStoneTier < rebirthStoneArmor.length; armorRebirthStoneTier++) {
			if (armorTier >= armorRebirthStoneTier) {
                rebirthArmors[armorTier].forEach(armor => {
                    rebirthStoneArmor[armorRebirthStoneTier].forEach(rebirthStone => {
                        event.smithing(
                            Item.of(armor).withNBT(rebirthStone.nbt),
                            "minecraft:netherite_upgrade_smithing_template",
                            Item.of(armor),
                            rebirthStone.id
                        )
                    })
                })
            }
		}
	}
})
