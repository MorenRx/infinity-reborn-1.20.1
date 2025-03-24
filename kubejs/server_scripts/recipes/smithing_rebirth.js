ServerEvents.recipes(event => {
	for (let weaponTier = 0; weaponTier < rebirthWeapons.length; weaponTier++) {
		for (let weaponRebirthStoneTier = 0; weaponRebirthStoneTier < rebirthStoneWeapon.length; weaponRebirthStoneTier++) {
			if (weaponTier >= weaponRebirthStoneTier) {
                rebirthWeapons[weaponTier].forEach(weapon => {
                    rebirthStoneWeapon[weaponRebirthStoneTier].forEach(rebirthStone => {
						event.custom({
							type: "infinitycore:smithing_classic",
							base: { item: weapon },
							addition: { item: rebirthStone.id },
							result: Item.of(weapon).withNBT(rebirthStone.nbt)
						})
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
						event.custom({
							type: "infinitycore:smithing_classic",
							base: { item: armor },
							addition: { item: rebirthStone.id },
							result: Item.of(armor).withNBT(rebirthStone.nbt)
						})
                    })
                })
            }
		}
	}
})