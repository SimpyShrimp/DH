export const Pokedex: {[speciesid: string]: SpeciesData} = {
/*Gen 7 Metamons*/
 	altaria: {
		num: 334,
		name: "Altaria",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 125, atk: 95, def: 65, spa: 95, spd: 65, spe: 75},
		abilities: {0: "Cloud Nine", 1: "Fluffy", H: "Drizzle"},
		heightm: 1.1,
		weightkg: 20.6,
		color: "Blue",
		prevo: "Swablu",
		evoLevel: 35,
		eggGroups: ["Flying", "Dragon"],
    },
	ampharos: {
		num: 181,
		name: "Ampharos",
		types: ["Electric", "Fairy"],
		baseStats: {hp: 90, atk: 70, def: 95, spa: 110, spd: 95, spe: 50},
		abilities: {0: "Static", H: "Thick Fat"},
		heightm: 1.4,
		weightkg: 61.5,
		color: "Yellow",
		prevo: "Flaaffy",
		evoLevel: 30,
		eggGroups: ["Monster", "Field"],
	},
	archeops: {
		num: 567,
		name: "Archeops",
		types: ["Ground", "Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 99, atk: 121, def: 71, spa: 133, spd: 123, spe: 113},
		abilities: {0: "Defeatist"},
		heightm: 1.4,
		weightkg: 32,
		color: "Yellow",
		prevo: "Archen",
		evoLevel: 37,
		eggGroups: ["Flying", "Water 3"],
	},
	aurorus: {
		num: 699,
		name: "Aurorus",
		types: ["Rock", "Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 180, atk: 120, def: 95, spa: 65, spd: 55, spe: 65},
		abilities: {0: "Sap Sipper", 1: "Pressure", H: "Snow Warning"},
		heightm: 2.7,
		weightkg: 225,
		color: "Blue",
		prevo: "Amaura",
		evoLevel: 39,
		evoCondition: "at night",
		eggGroups: ["Monster"],
	},
	avalugg: {
		num: 713,
		name: "Avalugg",
		types: ["Ice"],
		baseStats: {hp: 103, atk: 112, def: 140, spa: 44, spd: 73, spe: 48},
		abilities: {0: "Sturdy", 1: "Heatproof", H: "Fortress"},
		heightm: 2,
		weightkg: 505,
		color: "Blue",
		prevo: "Bergmite",
		evoLevel: 37,
		eggGroups: ["Monster", "Mineral"],
	},
	banette: {
		num: 354,
		name: "Banette",
		types: ["Ghost", "Dark"],
		baseStats: {hp: 88, atk: 120, def: 80, spa: 72, spd: 76, spe: 84},
		abilities: {0: "Insomnia", 1: "Intimidate", H: "Unnerve"},
		heightm: 1.1,
		weightkg: 12.5,
		color: "Black",
		prevo: "Shuppet",
		evoLevel: 37,
		eggGroups: ["Amorphous"],
    },
	bastiodongen7: {
		num: 411,
		name: "Bastiodon-Gen 7",
		types: ["Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 47, def: 148, spa: 47, spd: 148, spe: 45},
		abilities: {0: "Filter", H: "Sand Stream"},
		heightm: 1.3,
		weightkg: 149.5,
		color: "Gray",
		prevo: "Shieldon",
		evoLevel: 30,
		eggGroups: ["Monster"],
	},
	bronzong: {
		num: 437,
		name: "Bronzong",
		types: ["Steel", "Ghost"],
		gender: "N",
		baseStats: {hp: 70, atk: 70, def: 85, spa: 125, spd: 125, spe: 55},
		abilities: {0: "Heatproof", 1: "Heavy Metal", H: "Analytic"},
		heightm: 1.3,
		weightkg: 187,
		color: "Green",
		prevo: "Bronzor",
		evoLevel: 33,
		eggGroups: ["Mineral"],
	},
	decidueye: {
		num: 724,
		name: "Decidueye",
		types: ["Grass", "Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 81, atk: 100, def: 80, spa: 82, spd: 81, spe: 110},
		abilities: {0: "Overgrow", H: "Infiltrator-Gen 7"},
		heightm: 1.6,
		weightkg: 36.6,
		color: "Brown",
		prevo: "Dartrix",
		evoLevel: 34,
		eggGroups: ["Flying"],
	},
	delphox: {
		num: 655,
		name: "Delphox",
		types: ["Fire", "Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 75, atk: 69, def: 72, spa: 114, spd: 100, spe: 104},
		abilities: {0: "Blaze", H: "Regenerator"},
		heightm: 1.5,
		weightkg: 39,
		color: "Red",
		prevo: "Braixen",
		evoLevel: 36,
		eggGroups: ["Field"],
	},
	drampa: {
		num: 780,
		name: "Drampa",
		types: ["Normal", "Dragon"],
		baseStats: {hp: 101, atk: 74, def: 109, spa: 120, spd: 53, spe: 53},
		abilities: {0: "Berserk-Gen 7", H: "Scrappy"},
		heightm: 3,
		weightkg: 185,
		color: "White",
		eggGroups: ["Monster", "Dragon"],
	},
	electrode: {
		num: 101,
		name: "Electrode",
		types: ["Electric", "Dark"],
		gender: "N",
		baseStats: {hp: 50, atk: 90, def: 50, spa: 90, spd: 50, spe: 150},
		abilities: {0: "Soundproof", 1: "Aftermath", H: "Bulletproof"},
		heightm: 1.2,
		weightkg: 66.6,
		color: "Red",
		prevo: "Voltorb",
		evoLevel: 30,
		eggGroups: ["Mineral"],
	},
	exeggutor: {
		num: 103,
		name: "Exeggutor",
		types: ["Grass", "Psychic"],
		baseStats: {hp: 115, atk: 85, def: 65, spa: 120, spd: 65, spe: 60},
		abilities: {0: "Harvest", 1: "Adaptability", H: "Drought"},
		heightm: 2,
		weightkg: 120,
		color: "Yellow",
		prevo: "Exeggcute",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Grass"],
	},
	golemalola: {
		num: 76,
		name: "Golem-Alola",
		baseSpecies: "Golem",
		forme: "Alola",
		types: ["Rock", "Electric"],
		baseStats: {hp: 73, atk: 82, def: 101, spa: 101, spd: 65, spe: 60},
		abilities: {0: "Magnet Pull", H: "Galvanize"},
		heightm: 1.7,
		weightkg: 316,
		color: "Gray",
		prevo: "Graveler-Alola",
		evoType: "trade",
		eggGroups: ["Mineral"],
	},
	linoone: {
		num: 264,
		name: "Linoone",
		types: ["Normal"],
		baseStats: {hp: 90, atk: 92, def: 52, spa: 88, spd: 78, spe: 115},
		abilities: {0: "Technician", 1: "Quick Feet", H: "Gluttony"},
		heightm: 0.5,
		weightkg: 32.5,
		color: "White",
		prevo: "Zigzagoon",
		evoLevel: 20,
		eggGroups: ["Field"],
	},
	mawile: {
		num: 303,
		name: "Mawile",
		types: ["Steel", "Bug"],
		baseStats: {hp: 63, atk: 112, def: 66, spa: 83, spd: 119, spe: 7},
		abilities: {0: "Sheer Force", H: "Bulletproof"},
		heightm: 0.6,
		weightkg: 11.5,
		color: "Black",
		eggGroups: ["Field", "Fairy"],
	},
	medicham: {
		num: 308,
		name: "Medicham",
		types: ["Fighting", "Psychic"],
		baseStats: {hp: 65, atk: 110, def: 80, spa: 95, spd: 80, spe: 80},
		abilities: {0: "Pure Power-Gen 7"},
		heightm: 1.3,
		weightkg: 31.5,
		color: "Red",
		prevo: "Meditite",
		evoLevel: 37,
		eggGroups: ["Human-Like"],
	},
	mothim: {
		num: 414,
		name: "Mothim",
		types: ["Bug", "Psychic"],
		gender: "M",
		baseStats: {hp: 72, atk: 101, def: 64, spa: 111, spd: 64, spe: 98},
		abilities: {0: "Tinted Lens", H: "Swarm"},
		heightm: 0.9,
		weightkg: 23.3,
		color: "Yellow",
		prevo: "Burmy",
		evoLevel: 20,
		eggGroups: ["Bug"],
	},
	necrozmagen7: {
		num: 800,
		name: "Necrozma-Gen 7",
		types: ["Psychic", "Dark"],
		gender: "N",
		baseStats: {hp: 101, atk: 103, def: 103, spa: 103, spd: 103, spe: 87},
		abilities: {0: "Prism Armor", H: "Beast Boost"},
		heightm: 2.4,
		weightkg: 230,
		color: "Black",
		tags: ["Restricted Legendary"],
		eggGroups: ["Undiscovered"],
	},
	pheromosa: {
		num: 795,
		name: "Pheromosa",
		types: ["Bug", "Fighting"],
		gender: "N",
		baseStats: {hp: 71, atk: 122, def: 37, spa: 122, spd: 37, spe: 121},
		abilities: {0: "Wonder Skin", H: "Limber"},
		heightm: 1.8,
		weightkg: 25,
		color: "White",
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
	},
	rapidash: {
		num: 78,
		name: "Rapidash",
		types: ["Fire", "Ground"],
		baseStats: {hp: 85, atk: 100, def: 70, spa: 80, spd: 60, spe: 110},
		abilities: {0: "Flame Body", 1: "Rattled", H: "Dazzling"},
		heightm: 1.7,
		weightkg: 95,
		color: "Yellow",
		prevo: "Ponyta",
		evoLevel: 40,
		eggGroups: ["Field"],
	},
	rotomfrost: {
		num: 479,
		name: "Rotom-Frost",
		baseSpecies: "Rotom",
		forme: "Frost",
		types: ["Electric", "Ice"],
		gender: "N",
		baseStats: {hp: 65, atk: 50, def: 104, spa: 111, spd: 104, spe: 91},
		abilities: {0: "Levitate", H: "Download"},
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		eggGroups: ["Amorphous"],
		changesFrom: "Rotom",
	},
	salazzlegen7: {
		num: 758,
		name: "Salazzle-Gen 7",
		types: ["Poison", "Water"],
		gender: "F",
		baseStats: {hp: 81, atk: 82, def: 101, spa: 109, spd: 63, spe: 109},
		abilities: {0: "Flash Fire", 1: "Corrosion", H: "Light Runner"},
		heightm: 1.2,
		weightkg: 22.2,
		color: "Black",
		prevo: "Salandit",
		evoLevel: 33,
		eggGroups: ["Monster", "Dragon"],
	},
	scolipede: {
		num: 545,
		name: "Scolipede",
		types: ["Bug", "Poison"],
		baseStats: {hp: 77, atk: 113, def: 70, spa: 50, spd: 70, spe: 120},
		abilities: {0: "Poison Point", 1: "Merciless", H: "Mold Breaker"},
		heightm: 2.5,
		weightkg: 200.5,
		color: "Red",
		prevo: "Whirlipede",
		evoLevel: 30,
		eggGroups: ["Bug"],
	},
	smeargle: {
		num: 235,
		name: "Smeargle",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 85, atk: 100, def: 85, spa: 100, spd: 85, spe: 100},
		abilities: {0: "Trace", 1: "Technician", H: "Protean"},
		heightm: 1.2,
		weightkg: 58,
		color: "White",
		eggGroups: ["Field"],
	},
	swampert: {
		num: 260,
		name: "Swampert",
		types: ["Water", "Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 103, atk: 105, def: 95, spa: 65, spd: 108, spe: 58},
		abilities: {0: "Torrent", H: "Water Absorb"},
		heightm: 1.5,
		weightkg: 81.9,
		color: "Blue",
		prevo: "Marshtomp",
		evoLevel: 36,
		eggGroups: ["Monster", "Water 1"],
	},
	swellow: {
		num: 277,
		name: "Swellow",
		types: ["Normal", "Flying"],
		baseStats: {hp: 100, atk: 100, def: 90, spa: 80, spd: 90, spe: 40},
		abilities: {0: "Guts", H: "Scrappy"},
		heightm: 0.7,
		weightkg: 19.8,
		color: "Blue",
		prevo: "Taillow",
		evoLevel: 22,
		eggGroups: ["Flying"],
	},
	throh: {
		num: 538,
		name: "Throh",
		types: ["Fighting"],
		gender: "M",
		baseStats: {hp: 120, atk: 100, def: 85, spa: 50, spd: 85, spe: 40},
		abilities: {0: "Persistence", 1: "Guts", H: "Mold Breaker"},
		heightm: 1.3,
		weightkg: 55.5,
		color: "Red",
		eggGroups: ["Human-Like"],
	},
	turtonator: {
		num: 776,
		name: "Turtonator",
		types: ["Fire", "Dragon"],
		baseStats: {hp: 65, atk: 105, def: 180, spa: 85, spd: 95, spe: 25},
		abilities: {0: "Fortress", 1: "Shell Armor", H: "Sturdy"},
		heightm: 2,
		weightkg: 212,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
	},
	typenull: {
		num: 772,
		name: "Type: Null",
		types: ["Ground"],
		gender: "N",
		baseStats: {hp: 80, atk: 85, def: 105, spa: 85, spd: 85, spe: 80},
		abilities: {0: "Chimera", H: "Pressure"},
		heightm: 1.9,
		weightkg: 120.5,
		color: "Gray",
		tags: ["Sub-Legendary"],
		evos: ["Silvally"],
		eggGroups: ["Undiscovered"],
	},
	tyrantrum: {
		num: 697,
		name: "Tyrantrum",
		types: ["Rock", "Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 82, atk: 115, def: 89, spa: 69, spd: 61, spe: 104},
		abilities: {0: "Rock Head", 1: "Reckless", H: "No Guard"},
		heightm: 2.5,
		weightkg: 270,
		color: "Red",
		prevo: "Tyrunt",
		evoLevel: 39,
		evoCondition: "during the day",
		eggGroups: ["Monster", "Dragon"],
	},
	whimsicottgen7: {
		num: 547,
		name: "Whimsicott-Gen 7",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 70, atk: 57, def: 115, spa: 77, spd: 95, spe: 116},
		abilities: {0: "Prankster", 1: "Infiltrator-Gen 7", H: "Chlorophyll"},
		heightm: 0.7,
		weightkg: 6.6,
		color: "Green",
		prevo: "Cottonee",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Fairy", "Grass"],
	},
	zoroark: {
		num: 571,
		name: "Zoroark",
		types: ["Dark", "Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 110, def: 70, spa: 120, spd: 70, spe: 110},
		abilities: {0: "Illusion"},
		heightm: 1.6,
		weightkg: 81.1,
		color: "Gray",
		prevo: "Zorua",
		evoLevel: 30,
		eggGroups: ["Field"],
	},
/*Gen 8 MetaMons*/
	whimsicott: {
		num: 547,
		name: "Whimsicott",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 60, atk: 67, def: 115, spa: 97, spd: 95, spe: 116},
		abilities: {0: "Prankster", 1: "Infiltrator", H: "Cotton Down"},
		heightm: 0.7,
		weightkg: 6.6,
		color: "Green",
		prevo: "Cottonee",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Fairy", "Grass"],
	},
	salazzle: {
		num: 758,
		name: "Salazzle",
		types: ["Poison", "Flying"],
		gender: "F",
		baseStats: {hp: 78, atk: 84, def: 65, spa: 111, spd: 65, spe: 127},
		abilities: {0: "Corrosion", 1: "Oblivious", H: "Multiscale"},
		heightm: 1.2,
		weightkg: 22.2,
		color: "Black",
		evoLevel: 33,
		eggGroups: ["Monster", "Dragon"],
	},
	kingler: {
		num: 99,
		name: "Kingler",
		types: ["Water"],
		baseStats: {hp: 90, atk: 125, def: 70, spa: 95, spd: 70, spe: 80},
		abilities: {0: "Hyper Cutter", 1: "Sheer Force", H: "Swift Swim"},
		heightm: 1.3,
		weightkg: 60,
		color: "Red",
		evoLevel: 28,
		eggGroups: ["Water 3"],
	},
	ariados: {
		num: 168,
		name: "Ariados",
		types: ["Bug", "Dragon"],
		baseStats: {hp: 70, atk: 95, def: 70, spa: 95, spd: 70, spe: 101},
		abilities: {0: "Swarm", 1: "Insomnia", H: "Dragon's Maw"},
		heightm: 1.1,
		weightkg: 33.5,
		color: "Red",
		evoLevel: 22,
		eggGroups: ["Bug"],
	},
	sandslash: {
		num: 28,
		name: "Sandslash",
		types: ["Ground"],
		baseStats: {hp: 85, atk: 120, def: 80, spa: 35, spd: 95, spe: 65},
		abilities: {0: "Unnerve", 1: "Immunity", H: "Iron Barbs"},
		heightm: 1,
		weightkg: 29.5,
		color: "Yellow",
		prevo: "Sandshrew",
		evoLevel: 22,
		eggGroups: ["Field"],
	},
	bastiodon: {
		num: 411,
		name: "Bastiodon",
		types: ["Ground", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 72, def: 168, spa: 47, spd: 138, spe: 30},
		abilities: {0: "Sturdy", H: "Bulletproof"},
		heightm: 1.3,
		weightkg: 149.5,
		color: "Gray",
		prevo: "Shieldon",
		evoLevel: 30,
		eggGroups: ["Monster"],
	},
	slowbrogalar: {
		num: 80,
		name: "Slowbro-Galar",
		baseSpecies: "Slowbro",
		forme: "Galar",
		types: ["Poison"],
		baseStats: {hp: 100, atk: 130, def: 95, spa: 90, spd: 95, spe: 30},
		abilities: {0: "Quick Draw", 1: "Analytic", H: "Regenerator"},
		heightm: 1.6,
		weightkg: 70.5,
		color: "Pink",
		prevo: "Slowpoke-Galar",
		evoType: "useItem",
		evoItem: "Galarica Cuff",
		eggGroups: ["Monster", "Water 1"],
	},
	sableye: {
		num: 302,
		name: "Sableye",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 85, atk: 70, def: 100, spa: 60, spd: 80, spe: 30},
		abilities: {0: "Magic Guard", H: "Prankster"},
		heightm: 0.5,
		weightkg: 11,
		color: "Purple",
		eggGroups: ["Human-Like"],
	},
	grapploct: {
		num: 853,
		name: "Grapploct",
		types: ["Fighting", "Water"],
		baseStats: {hp: 100, atk: 118, def: 90, spa: 60, spd: 90, spe: 42},
		abilities: {0: "Limber", 1: "Abyssal Boost", H: "Technician"},
		heightm: 1.6,
		weightkg: 39,
		color: "Blue",
		prevo: "Clobbopus",
		evoType: "levelMove",
		evoMove: "Taunt",
		eggGroups: ["Water 1", "Human-Like"],
	},
	tauros: {
		num: 128,
		name: "Tauros",
		types: ["Normal"],
		gender: "M",
		baseStats: {hp: 80, atk: 100, def: 70, spa: 100, spd: 70, spe: 100},
		abilities: {0: "Sheer Force", H: "Adaptability"},
		heightm: 1.4,
		weightkg: 88.4,
		color: "Brown",
		eggGroups: ["Field"],
	},
	arcanine: {
		num: 59,
		name: "Arcanine",
		types: ["Fire", "Ground"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 100, atk: 110, def: 80, spa: 85, spd: 80, spe: 100},
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Justified"},
		heightm: 1.9,
		weightkg: 155,
		color: "Brown",
		prevo: "Growlithe",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	eelektross: {
		num: 604,
		name: "Eelektross",
		types: ["Electric"],
		baseStats: {hp: 85, atk: 115, def: 80, spa: 105, spd: 80, spe: 75},
		abilities: {0: "Levitate", H: "Type Suction"},
		heightm: 2.1,
		weightkg: 80.5,
		color: "Blue",
		prevo: "Eelektrik",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Amorphous"],
	},
	perrserker: {
		num: 863,
		name: "Perrserker",
		types: ["Steel", "Ghost"],
		baseStats: {hp: 85, atk: 110, def: 70, spa: 60, spd: 100, spe: 65},
		abilities: {0: "Unnerve", 1: "Tough Claws", H: "Steely Spirit"},
		heightm: 0.8,
		weightkg: 28,
		color: "Brown",
		prevo: "Meowth-Galar",
		evoLevel: 28,
		eggGroups: ["Field"],
	},
	tsareena: {
		num: 763,
		name: "Tsareena",
		types: ["Grass", "Ghost"],
		gender: "F",
		baseStats: {hp: 72, atk: 120, def: 98, spa: 50, spd: 98, spe: 72},
		abilities: {0: "Leaf Guard", 1: "Queenly Majesty", H: "Sweet Veil"},
		heightm: 1.2,
		weightkg: 21.4,
		color: "Purple",
		prevo: "Steenee",
		evoType: "levelMove",
		evoMove: "Stomp",
		eggGroups: ["Grass"],
	},
	sylveon: {
		num: 700,
		name: "Sylveon",
		types: ["Fairy", "Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 95, atk: 65, def: 65, spa: 110, spd: 130, spe: 60},
		abilities: {0: "Galvanize", 1: "Surge Surfer", H: "Pixilate"},
		heightm: 1,
		weightkg: 23.5,
		color: "Pink",
		prevo: "Eevee",
		evoType: "levelExtra",
		evoCondition: "with a Fairy-type move and two levels of Affection",
		eggGroups: ["Field"],
	},
	mantine: {
		num: 226,
		name: "Mantine",
		types: ["Water", "Fairy"],
		baseStats: {hp: 95, atk: 55, def: 95, spa: 80, spd: 100, spe: 50},
		abilities: {0: "Water Absorb", 1: "Immunity", H: "Water Veil"},
		heightm: 2.1,
		weightkg: 220,
		color: "Purple",
		prevo: "Mantyke",
		evoType: "levelExtra",
		evoCondition: "with a Remoraid in party",
		eggGroups: ["Water 1"],
		canHatch: true,
	},
	persianalola: {
		num: 53,
		name: "Persian-Alola",
		baseSpecies: "Persian",
		forme: "Alola",
		types: ["Dark", "Ice"],
		baseStats: {hp: 95, atk: 85, def: 80, spa: 75, spd: 65, spe: 115},
		abilities: {0: "Fur Coat", 1: "Technician", H: "Rattled"},
		heightm: 1.1,
		weightkg: 33,
		color: "Blue",
		prevo: "Meowth-Alola",
		evoType: "levelFriendship",
		eggGroups: ["Field"],
	},
	druddigon: {
		num: 621,
		name: "Druddigon",
		types: ["Dragon", "Steel"],
		baseStats: {hp: 87, atk: 120, def: 100, spa: 60, spd: 100, spe: 38},
		abilities: {0: "Rough Skin", 1: "Unnerve", H: "Mold Breaker"},
		heightm: 1.6,
		weightkg: 139,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
	},
	duraludon: {
		num: 884,
		name: "Duraludon",
		types: ["Steel", "Dark"],
		baseStats: {hp: 80, atk: 70, def: 95, spa: 115, spd: 80, spe: 80},
		abilities: {0: "Sturdy", 1: "Magnet Pull", H: "Stalwart"},
		heightm: 1.8,
		weightkg: 40,
		color: "White",
		eggGroups: ["Mineral", "Dragon"],
		canGigantamax: "G-Max Depletion",
	},
	stunfisk: {
		num: 618,
		name: "Stunfisk",
		types: ["Ground", "Electric"],
		baseStats: {hp: 109, atk: 66, def: 84, spa: 101, spd: 109, spe: 32},
		abilities: {0: "Static", 1: "Dauntless Shield", H: "Electric Surge"},
		heightm: 0.7,
		weightkg: 11,
		color: "Brown",
		eggGroups: ["Water 1", "Amorphous"],
		otherFormes: ["Stunfisk-Galar"],
		formeOrder: ["Stunfisk", "Stunfisk-Galar"],
	},
	houndoom: {
		num: 229,
		name: "Houndoom",
		types: ["Dark", "Fire"],
		baseStats: {hp: 115, atk: 90, def: 100, spa: 70, spd: 80, spe: 75},
		abilities: {0: "Flash Fire", H: "Tough Claws"},
		heightm: 1.4,
		weightkg: 35,
		color: "Black",
		prevo: "Houndour",
		evoLevel: 24,
		eggGroups: ["Field"],
		otherFormes: ["Houndoom-Mega"],
		formeOrder: ["Houndoom", "Houndoom-Mega"],
	},
	emolga: {
		num: 587,
		name: "Emolga",
		types: ["Electric", "Flying"],
		baseStats: {hp: 99, atk: 110, def: 60, spa: 60, spd: 70, spe: 105},
		abilities: {0: "Volt Absorb"},
		heightm: 0.4,
		weightkg: 5,
		color: "White",
		eggGroups: ["Field"],
	},
	espeon: {
		num: 196,
		name: "Espeon",
		types: ["Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 85, atk: 60, def: 70, spa: 110, spd: 95, spe: 110},
		abilities: {0: "Competitive", H: "Magic Bounce"},
		heightm: 0.9,
		weightkg: 26.5,
		color: "Purple",
		prevo: "Eevee",
		evoType: "levelFriendship",
		evoCondition: "during the day",
		eggGroups: ["Field"],
	},
	toxicroak: {
		num: 454,
		name: "Toxicroak",
		types: ["Poison", "Dark"],
		baseStats: {hp: 83, atk: 95, def: 75, spa: 66, spd: 75, spe: 100},
		abilities: {0: "No Guard", H: "Dry Skin"},
		heightm: 1.3,
		weightkg: 44.4,
		color: "Blue",
		prevo: "Croagunk",
		evoLevel: 37,
		eggGroups: ["Human-Like"],
	},
	eldegoss: {
		num: 830,
		name: "Eldegoss",
		types: ["Grass", "Fighting"],
		baseStats: {hp: 95, atk: 50, def: 85, spa: 80, spd: 120, spe: 70},
		abilities: {0: "Cotton Down", 1: "Regenerator", H: "Unaware"},
		heightm: 0.5,
		weightkg: 2.5,
		color: "Green",
		prevo: "Gossifleur",
		evoLevel: 20,
		eggGroups: ["Grass"],
	},
	abomasnow: {
		num: 460,
		name: "Abomasnow",
		types: ["Ground", "Ice"],
		baseStats: {hp: 70, atk: 92, def: 70, spa: 92, spd: 65, spe: 80},
		abilities: {0: "Snow Warning", H: "Soundproof"},
		heightm: 2.2,
		weightkg: 135.5,
		color: "White",
		prevo: "Snover",
		evoLevel: 40,
		eggGroups: ["Monster", "Grass"],
	},
	granbull: {
		num: 210,
		name: "Granbull",
		types: ["Fairy", "Normal"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 80, atk: 110, def: 80, spa: 60, spd: 100, spe: 65},
		abilities: {0: "Intimidate", H: "Poison Heal"},
		heightm: 1.4,
		weightkg: 48.7,
		color: "Purple",
		prevo: "Snubbull",
		evoLevel: 23,
		eggGroups: ["Field", "Fairy"],
	},
	guzzlord: {
		num: 799,
		name: "Guzzlord",
		types: ["Poison", "Dragon"],
		gender: "N",
		baseStats: {hp: 223, atk: 103, def: 59, spa: 97, spd: 61, spe: 47},
		abilities: {0: "Beast Boost", 1: "Gluttony", H: "Poison Touch"},
		heightm: 5.5,
		weightkg: 888,
		color: "Black",
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
	},
	necrozma: {
		num: 800,
		name: "Necrozma",
		types: ["Psychic", "Steel"],
		gender: "N",
		baseStats: {hp: 87, atk: 97, def: 96, spa: 97, spd: 94, spe: 79},
		abilities: {0: "Prism Armor"},
		heightm: 2.4,
		weightkg: 230,
		color: "Black",
		tags: ["Restricted Legendary"],
		eggGroups: ["Undiscovered"],
	},
	entei: {
		num: 244,
		name: "Entei",
		types: ["Fire", "Flying"],
		gender: "N",
		baseStats: {hp: 115, atk: 85, def: 85, spa: 95, spd: 75, spe: 85},
		abilities: {0: "Magic Guard"},
		heightm: 2.1,
		weightkg: 198,
		color: "Brown",
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
	},
	xatu: {
		num: 178,
		name: "Xatu",
		types: ["Dark", "Flying"],
		baseStats: {hp: 95, atk: 75, def: 95, spa: 95, spd: 75, spe: 95},
		abilities: {0: "Synchronize", 1: "Early Bird", H: "Magic Bounce"},
		heightm: 1.5,
		weightkg: 15,
		color: "Green",
		prevo: "Natu",
		evoLevel: 25,
		eggGroups: ["Flying"],
	},
	jellicent: {
		num: 593,
		name: "Jellicent",
		types: ["Water", "Ghost"],
		baseStats: {hp: 120, atk: 60, def: 70, spa: 95, spd: 75, spe: 80},
		abilities: {0: "Liquid Ooze", H: "Pillage"},
		heightm: 2.2,
		weightkg: 135,
		color: "White",
		evoLevel: 40,
		eggGroups: ["Amorphous"],
	},
	gigalith: {
		num: 526,
		name: "Gigalith",
		types: ["Rock", "Steel"],
		baseStats: {hp: 100, atk: 135, def: 125, spa: 95, spd: 55, spe: 45},
		abilities: {0: "Solid Rock", 1: "Sturdy", H: "Sand Stream"},
		heightm: 1.7,
		weightkg: 260,
		color: "Blue",
		prevo: "Boldore",
		evoType: "trade",
		eggGroups: ["Mineral"],
	},
	florges: {
		num: 671,
		name: "Florges",
		baseForme: "Red",
		types: ["Fairy"],
		gender: "F",
		baseStats: {hp: 88, atk: 135, def: 86, spa: 62, spd: 114, spe: 45},
		abilities: {0: "Flower Veil", H: "Grassy Surge"},
		heightm: 1.1,
		weightkg: 10,
		color: "White",
		prevo: "Floette",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		eggGroups: ["Fairy"],
		cosmeticFormes: ["Florges-Blue", "Florges-Orange", "Florges-White", "Florges-Yellow"],
		formeOrder: ["Florges", "Florges-Blue", "Florges-Orange", "Florges-White", "Florges-Yellow"],
	},
	sunflora: {
		num: 192,
		name: "Sunflora",
		types: ["Grass", "Poison"],
		baseStats: {hp: 90, atk: 70, def: 75, spa: 115, spd: 105, spe: 40},
		abilities: {0: "Poison Point", 1: "Flower Veil", H: "Solar Power"},
		heightm: 0.8,
		weightkg: 8.5,
		color: "Yellow",
		prevo: "Sunkern",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Grass"],
	},
	frogadier: {
		num: 657,
		name: "Frogadier",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 67, atk: 91, def: 63, spa: 89, spd: 73, spe: 97},
		abilities: {0: "Torrent", H: "Protean"},
		heightm: 0.6,
		weightkg: 10.9,
		color: "Blue",
		prevo: "Froakie",
		evoLevel: 16,
		evos: ["Greninja"],
		eggGroups: ["Water 1"],
	},
	articuno: {
		num: 144,
		name: "Articuno",
		types: ["Ice", "Dragon"],
		gender: "N",
		baseStats: {hp: 90, atk: 75, def: 100, spa: 105, spd: 115, spe: 85},
		abilities: {0: "Pressure", H: "Slush Rush"},
		heightm: 1.7,
		weightkg: 55.4,
		color: "Blue",
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
		otherFormes: ["Articuno-Galar"],
		formeOrder: ["Articuno", "Articuno-Galar"],
	},
	passimian: {
		num: 766,
		name: "Passimian",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 100, atk: 120, def: 90, spa: 40, spd: 70, spe: 95},
		abilities: {0: "Sand Rush", H: "Defiant"},
		heightm: 2,
		weightkg: 82.8,
		color: "White",
		eggGroups: ["Field"],
	},
/*Gen 9 MetaMons*/
	veluza: {
		num: 976,
		name: "Veluza",
		types: ["Water", "Psychic"],
		baseStats: {hp: 90, atk: 90, def: 95, spa: 90, spd: 95, spe: 70},
		abilities: {0: "Mold Breaker", 1: "Sharpness", H: "Regenerator"},
		heightm: 2.5,
		weightkg: 90,
		color: "Gray",
		eggGroups: ["Water 2"],
	},
	bellossom: {
		num: 182,
		name: "Bellossom",
		types: ["Grass", "Electric"],
		baseStats: {hp: 75, atk: 70, def: 90, spa: 85, spd: 110, spe: 70},
		abilities: {0: "Flower Veil", 1: "Healer", H: "Flash Fire"},
		heightm: 0.4,
		weightkg: 5.8,
		color: "Green",
		prevo: "Gloom",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Grass"],
	},
	camerupt: {
		num: 323,
		name: "Camerupt",
		types: ["Fire", "Ground"],
		baseStats: {hp: 80, atk: 100, def: 100, spa: 105, spd: 95, spe: 40},
		abilities: {0: "Earth Eater", 1: "Solid Rock", H: "Solar Power"},
		heightm: 1.9,
		weightkg: 220,
		color: "Red",
		prevo: "Numel",
		evoLevel: 33,
		eggGroups: ["Field"],
	},
	dragalge: {
		num: 691,
		name: "Dragalge",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 125, atk: 63, def: 75, spa: 97, spd: 75, spe: 60},
		abilities: {0: "Adaptability", H: "Competitive"},
		heightm: 1.8,
		weightkg: 81.5,
		color: "Brown",
		prevo: "Skrelp",
		evoLevel: 48,
		eggGroups: ["Water 1", "Dragon"],
	},
	lapras: {
		num: 131,
		name: "Lapras",
		types: ["Water", "Ice"],
		baseStats: {hp: 130, atk: 85, def: 70, spa: 85, spd: 80, spe: 60},
		abilities: {0: "Water Absorb", 1: "Shell Armor", H: "Multiscale"},
		heightm: 2.5,
		weightkg: 220,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
	},
	boltund: {
		num: 836,
		name: "Boltund",
		types: ["Electric", "Ghost"],
		baseStats: {hp: 89, atk: 100, def: 60, spa: 100, spd: 60, spe: 121},
		abilities: {0: "Strong Jaw", H: "Competitive"},
		heightm: 1,
		weightkg: 34,
		color: "Yellow",
		prevo: "Yamper",
		evoLevel: 25,
		eggGroups: ["Field"],
	},
	sudowoodo: {
		num: 185,
		name: "Sudowoodo",
		types: ["Dark"],
		baseStats: {hp: 80, atk: 130, def: 60, spa: 60, spd: 120, spe: 85},
		abilities: {0: "Sturdy", H: "Poison Heal"},
		heightm: 1.2,
		weightkg: 38,
		color: "Brown",
		prevo: "Bonsly",
		evoType: "levelMove",
		evoMove: "Mimic",
		eggGroups: ["Mineral"],
	},
	mesprit: {
		num: 481,
		name: "Mesprit",
		types: ["Psychic", "Fighting"],
		gender: "N",
		baseStats: {hp: 80, atk: 120, def: 105, spa: 90, spd: 95, spe: 90},
		abilities: {0: "Levitate"},
		heightm: 0.3,
		weightkg: 0.3,
		color: "Pink",
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered"],
	},
	froslass: {
		num: 478,
		name: "Froslass",
		types: ["Ghost"],
		gender: "F",
		baseStats: {hp: 70, atk: 90, def: 90, spa: 85, spd: 70, spe: 110},
		abilities: {0: "Refrigerate", H: "Perish Body"},
		heightm: 1.3,
		weightkg: 26.6,
		color: "White",
		prevo: "Snorunt",
		evoType: "useItem",
		evoItem: "Dawn Stone",
		eggGroups: ["Fairy", "Mineral"],
	},
};
