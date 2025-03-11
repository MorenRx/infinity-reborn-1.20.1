const rebirthWeapons = [
	// 品质1
	[
		'mcdw:sword_obsidian_claymore',
		'mcdw:sword_dark_katana',
		'mcdw:sword_sinister',
		'mcdw:sword_frost_slayer',
		'mcdw:hammer_suns_grace',
		'mcdw:spear_whispering_spear',
		'mcdw:scythe_skull_scythe',
		'mcdw:glaive_grave_bane',
		'mcdw:scythe_soul_scythe',
		'mcdw:sword_masters_katana',
		'gobber2:gobber2_sword_nether',
		'soulsweapons:crucible_sword',
		'soulsweapons:leviathan_axe',
		'soulsweapons:moonlight_shortsword',
		'soulsweapons:moonlight_greatsword',
		'soulsweapons:pure_moonlight_greatsword',
		'soulsweapons:skofnung',
		'soulsweapons:lich_bane',
		'soulsweapons:featherlight',
		'soulsweapons:comet_spear',
		'soulsweapons:dragonslayer_swordspear',
		'soulsweapons:shadow_assassin_scythe',
		'soulsweapons:darkin_scythe',
		'soulsweapons:rageblade',
		'soulsweapons:nightfall',
		'soulsweapons:bloodthirster',
		'soulsweapons:darkin_blade',
		'gateofbabylon:nether_gobber_waraxe',
		'gateofbabylon:terra_waraxe',
		'gateofbabylon:nether_gobber_katana',
		'gateofbabylon:terra_katana',
		'gateofbabylon:nether_gobber_haladie',
		'gateofbabylon:terra_haladie',
		'gateofbabylon:nether_gobber_dagger',
		'gateofbabylon:terra_dagger',
		'gateofbabylon:nether_gobber_spear',
		'gateofbabylon:terra_spear',
		'gateofbabylon:nether_gobber_broadsword',
		'gateofbabylon:terra_broadsword',
		'gateofbabylon:nether_gobber_rapier',
		'gateofbabylon:terra_rapier'
	],
	// 品质2
	[
		'mcdw:sword_the_starless_night',
		'mcdw:dagger_swift_striker',
		'mcdw:dagger_the_beginning',
		'mcdw:dagger_the_end',
		'dragonloot:dragon_trident',
		'dragonloot:dragon_sword',
		'spectrum:bedrock_sword',
		'gobber2:gobber2_sword_sniper',
		'gobber2:gobber2_sword_end',
		'kubejs:lce_tang',
		'kubejs:ruoshui_sword',
		'kubejs:yecao_sword',
		'kubejs:nature_spirit',
		'soulsweapons:mjolnir',
		'gateofbabylon:end_gobber_dagger',
		'gateofbabylon:end_gobber_spear',
		'gateofbabylon:end_gobber_broadsword',
		'gateofbabylon:end_gobber_rapier',
		'gateofbabylon:end_gobber_haladie',
		'gateofbabylon:end_gobber_waraxe',
		'gateofbabylon:end_gobber_katana',
		'botania:terra_sword'
	],
	// 品质3
	[
		'kubejs:jian_li',
		'kubejs:putong_stone_sword',
		'kubejs:qixing_sword',
		'kubejs:sixiang_kaitian',
		'kubejs:ailinghan',
		'kubejs:mu_jian_seven',
		'kubejs:mu_jian',
		'kubejs:yuan_mu_jian_one',
		'kubejs:yuan_mu_jian_seven',
		'kubejs:yuan_mu_jian'
	]
]

const rebirthArmors = [
	// 品质1
	[
		'mcda:blue_mystery_armor_helmet',
		'mcda:blue_mystery_armor_chestplate',
		'mcda:blue_mystery_armor_leggings',
		'mcda:blue_mystery_armor_boots',

		'mcda:white_mystery_armor_helmet',
		'mcda:white_mystery_armor_chestplate',
		'mcda:white_mystery_armor_leggings',
		'mcda:white_mystery_armor_boots',

		'mcda:purple_mystery_armor_helmet',
		'mcda:purple_mystery_armor_chestplate',
		'mcda:purple_mystery_armor_leggings',
		'mcda:purple_mystery_armor_boots',

		'mcda:red_mystery_armor_helmet',
		'mcda:red_mystery_armor_chestplate',
		'mcda:red_mystery_armor_leggings',
		'mcda:red_mystery_armor_boots',

		'mcda:green_mystery_armor_helmet',
		'mcda:green_mystery_armor_chestplate',
		'mcda:green_mystery_armor_leggings',
		'mcda:green_mystery_armor_boots',

		'mcda:gourdian_armor_helmet',
		'mcda:gourdian_armor_chestplate',
		'mcda:gourdian_armor_leggings',
		'mcda:gourdian_armor_boots',

		'mythicmetals:metallurgium_helmet',
		'mythicmetals:metallurgium_chestplate',
		'mythicmetals:metallurgium_leggings',
		'mythicmetals:metallurgium_boots'
	],
	// 品质2
	[
		'mcda:sturdy_shulker_armor_helmet',
		'mcda:sturdy_shulker_armor_chestplate',
		'mcda:sturdy_shulker_armor_leggings',
		'mcda:sturdy_shulker_armor_boots',
		
		'gobber2:gobber2_helmet_nether',
		'gobber2:gobber2_chestplate_nether',
		'gobber2:gobber2_leggings_nether',
		'gobber2:gobber2_boots_nether',
		
		'gobber2:gobber2_helmet_end',
		'gobber2:gobber2_chestplate_end',
		'gobber2:gobber2_leggings_end',
		'gobber2:gobber2_boots_end',
		
		'gobber2:gobber2_helmet_dragon',
		'gobber2:gobber2_chestplate_dragon',
		'gobber2:gobber2_leggings_dragon',
		'gobber2:gobber2_boots_dragon',
		
		'spectrum:bedrock_helmet',
		'spectrum:bedrock_chestplate',
		'spectrum:bedrock_leggings',
		'spectrum:bedrock_boots',
		
		'dragonloot:dragon_helmet',
		'dragonloot:dragon_chestplate',
		'dragonloot:dragon_leggings',
		'dragonloot:dragon_boots',
		'dragonloot:upgraded_dragon_chestplate'
	]
]

const rebirthStoneWeapon = [
	// 品质1
    [
        { id: "kubejs:upgrade_frost", nbt: '{swa3:{COLD:{bonusDmg:13f,freezeDur:13f,slowDur:13f}}}' },
        { id: "kubejs:upgrade_poison", nbt: '{swa3:{POISON:{bonusDmg:14f,dur:14f}}}' },
		{ id: "kubejs:upgrade_fire", nbt: '{swa3:{FIRE:{bonusDmg:15f,dur:15f}}}' }
    ],
	// 品质2
    [
        { id: "kubejs:upgrade_crit", nbt: '{swa3:{CRIT:{critChance:1f}}}' },
		{ id: "kubejs:upgrade_lifesteal", nbt: '{swa3:{LIFESTEAL:{lifesteal:25f}}}' }
    ],
	// 品质3
    [
        { id: "kubejs:upgrade_yuan", nbt: '{swa3:{COLD:{bonusDmg:15f,freezeDur:15f,slowDur:15f},POISON:{bonusDmg:15f,dur:15f},FIRE:{bonusDmg:15f,dur:15f}}}' },
		{ id: "kubejs:upgrade_ren", nbt: '{swa3:{CRIT:{critChance:1f},LIFESTEAL:{lifesteal:30f}}}' },
        { id: "kubejs:upgrade_liuren", nbt: '{swa3:{COLD:{bonusDmg:20f,freezeDur:20f,slowDur:20f},POISON:{bonusDmg:20f,dur:20f},FIRE:{bonusDmg:20f,dur:20f},CRIT:{critChance:2f},LIFESTEAL:{lifesteal:50f}}}' }
    ]
]

const rebirthStoneArmor = [
	// 品质1
	[
		{ id: "kubejs:upgrade_life", nbt: '{saa1:{MAX_HEALTH:{bonusMaxHP:10f}}}'}
	],
	// 品质2
	[
		{ id: "kubejs:upgrade_defence", nbt: '{saa1:{DMG_REDUCTION:{dmgReduc:15f}}}'},
		{ id: "kubejs:upgrade_nami", nbt: '{saa1:{DMG_REDUCTION:{dmgReduc:20f},MAX_HEALTH:{bonusMaxHP:20f}}}'}
	]
]