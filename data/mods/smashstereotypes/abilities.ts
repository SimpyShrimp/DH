export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	disperal: {
		shortDesc: "Boosts Bullet Seed, Seed Bomb, Seed Flare, Apple Acid, and Grav Apple by 1.2x. Leech Seed deals 20% more damage and heals 30% more HP each turn.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.name === 'Bullet Seed' || move.name === 'Seed Bomb' || move.name === 'Seed Flare' || move.name === 'Grav Apple' || move.name === 'Apple Acid') {
				return this.chainModify(1.2);
			}
		},
		onTryHealPriority: 1,
		onTryHeal(damage, target, source, effect) {
			let heals = {
				drain: 1,
				leechseed: 1,
				ingrain: 1,
				aquaring: 1,
				strengthsap: 1
			};
			if (heals[effect.id]) {
				return Math.ceil((damage * 1.3) - 0.5);
			}
		},
		id: "disperal",
		name: "Disperal",
	},
	ecopy: {
		onStart(pokemon) {
			this.field.setTerrain('electricterrain');
			
			if (pokemon.side.foe.active.some(
				foeActive => foeActive && this.isAdjacent(pokemon, foeActive) && foeActive.ability === 'noability'
			)) {
				this.effectData.gaveUp = true;
			}
		},
		onUpdate(pokemon) {
			if (!pokemon.isStarted || this.effectData.gaveUp) return;
			const possibleTargets = pokemon.side.foe.active.filter(foeActive => foeActive && this.isAdjacent(pokemon, foeActive));
			while (possibleTargets.length) {
				let rand = 0;
				if (possibleTargets.length > 1) rand = this.random(possibleTargets.length);
				const target = possibleTargets[rand];
				const ability = target.getAbility();
				const additionalBannedAbilities = [
					// Zen Mode included here for compatability with Gen 5-6
					'noability', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 
					'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'zenmode',
					'magicmissile', 'pillage', 'ecopy', 'lemegeton', 'modeshift', 
				];
				if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) {
					possibleTargets.splice(rand, 1);
					continue;
				}
				this.add('-ability', pokemon, ability, '[from] ability: E-Copy', '[of] ' + target);
				pokemon.setAbility(ability);
				return;
			}
		},
		name: "E-Copy",
		shortDesc: "Sets Electric Terrain, and then copies the foe's Ability.",
	},
};
