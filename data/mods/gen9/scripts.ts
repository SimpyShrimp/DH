export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	side: {
		totalFainted:0,
	},
	init: function() {
		// For Protosynthesis, Quark Drive
		this.pokemon.getBestStat = function(unboosted?: boolean, unmodified?: boolean): StatIDExceptHP {
			let statName: StatIDExceptHP = 'atk';
			let bestStat = 0;
			const stats: StatIDExceptHP[] = ['atk', 'def', 'spa', 'spd', 'spe'];
			for (const i of stats) {
				if (this.getStat(i, unboosted, unmodified) > bestStat) {
					statName = i;
					bestStat = this.getStat(i, unboosted, unmodified);
				}
			}
			return statName;
		};
		// For Supreme Overlord, Last Respects, counting fainted pokemon.
		this.faintMessages = function(lastFirst = false) {
			if (this.ended) return;
			const length = this.faintQueue.length;
			if (!length) return false;
			if (lastFirst) {
				this.faintQueue.unshift(this.faintQueue[this.faintQueue.length - 1]);
				this.faintQueue.pop();
			}
			let faintData;
			while (this.faintQueue.length) {
				faintData = this.faintQueue.shift()!;
				const pokemon: Pokemon = faintData.target;
				if (!pokemon.fainted &&
						this.runEvent('BeforeFaint', pokemon, faintData.source, faintData.effect)) {
					this.add('faint', pokemon);
					pokemon.side.pokemonLeft--;
					// Modified Code Here
					if (!pokemon.side.totalFainted) pokemon.side.totalFainted = 0;
					if (pokemon.side.totalFainted < 100) pokemon.side.totalFainted++;
					//
					this.runEvent('Faint', pokemon, faintData.source, faintData.effect);
					this.singleEvent('End', pokemon.getAbility(), pokemon.abilityData, pokemon);
					pokemon.clearVolatile(false);
					pokemon.fainted = true;
					pokemon.illusion = null;
					pokemon.isActive = false;
					pokemon.isStarted = false;
					pokemon.side.faintedThisTurn = pokemon;
				}
			}

			if (this.gen <= 1) {
				// in gen 1, fainting skips the rest of the turn
				// residuals don't exist in gen 1
				this.queue.clear();
			} else if (this.gen <= 3 && this.gameType === 'singles') {
				// in gen 3 or earlier, fainting in singles skips to residuals
				for (const pokemon of this.getAllActive()) {
					if (this.gen <= 2) {
						// in gen 2, fainting skips moves only
						this.queue.cancelMove(pokemon);
					} else {
						// in gen 3, fainting skips all moves and switches
						this.queue.cancelAction(pokemon);
					}
				}
			}

			let team1PokemonLeft = this.sides[0].pokemonLeft;
			let team2PokemonLeft = this.sides[1].pokemonLeft;
			const team3PokemonLeft = this.gameType === 'free-for-all' && this.sides[2]!.pokemonLeft;
			const team4PokemonLeft = this.gameType === 'free-for-all' && this.sides[3]!.pokemonLeft;
			if (this.gameType === 'multi') {
				team1PokemonLeft = this.sides.reduce((total, side) => total + (side.n % 2 === 0 ? side.pokemonLeft : 0), 0);
				team2PokemonLeft = this.sides.reduce((total, side) => total + (side.n % 2 === 1 ? side.pokemonLeft : 0), 0);
			}
			if (!team1PokemonLeft && !team2PokemonLeft && !team3PokemonLeft && !team4PokemonLeft) {
				this.win(faintData && this.gen > 4 ? faintData.target.side : null);
				return true;
			}
			if (!team2PokemonLeft && !team3PokemonLeft && !team4PokemonLeft) {
				this.win(this.sides[0]);
				return true;
			}
			if (!team1PokemonLeft && !team3PokemonLeft && !team4PokemonLeft) {
				this.win(this.sides[1]);
				return true;
			}
			if (!team1PokemonLeft && !team2PokemonLeft && !team4PokemonLeft) {
				this.win(this.sides[2]);
				return true;
			}
			if (!team1PokemonLeft && !team2PokemonLeft && !team3PokemonLeft) {
				this.win(this.sides[3]);
				return true;
			}

			if (faintData) {
				this.runEvent('AfterFaint', faintData.target, faintData.source, faintData.effect, length);
			}
			return false;
		};
	},
};