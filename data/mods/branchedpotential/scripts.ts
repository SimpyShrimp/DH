export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	init(){ 
		//To construct learnsets for these evolutions, I'm gonna cheat and copy the code Scoopapa made for construction FE fusion learnsets
		//If you delete moves that a prevo learns from a learnset that's constructed via inheriting said moves from a prevo the way Showdown does normally,
		//it just won't work. 
		//But if you construct the learnset artificially ahead of time, like this, you can then remove moves from it that it would inherit at initialization. 
		for (const id in this.dataCache.Pokedex) {//check the dex for fusions
			const fusionEntry = this.dataCache.Pokedex[id];
			if (fusionEntry.inheritMoves) {//if the pokedex entry has a fusion field, it's a fusion
				const learnsetFusionList = [];//list of pokemon whose learnsets need to be fused
				for (let name of fusionEntry.inheritMoves) {
					let prevo = true;
					while (prevo) {//make sure prevos of both fused pokemon are added to the list
						learnsetFusionList.push(name);
						const dexEntry = this.dataCache.Pokedex[this.toID(name)];
						if (dexEntry.prevo) name = dexEntry.prevo;
						else prevo = false;
					}
				}
				if (!this.dataCache.Learnsets[id]) this.dataCache.Learnsets[id] = { learnset: {}};//create a blank learnset entry so we don't need a learnsets file
				for (let name of learnsetFusionList) {					
					const learnset = this.dataCache.Learnsets[this.toID(name)].learnset;//get the learnset of each pokemon in the list
					for (const moveid in learnset) {
						//if (this.dataCache.Moves[moveid].isNonstandard === 'Past') continue; //exclude dexited moves
						this.modData('Learnsets', id).learnset[moveid] = ['8L1'];//hopefully they dont care about compatibility in this mod
					}
				}
			}
		}
		
		//Now, case-by-case learnset revisions: 
		//this.modData('Learnsets', 'poke').learnset.move = ['8L1'];
		//delete this.modData('Learnsets', 'poke').learnset.move;
		this.modData('Learnsets', 'pitchasaur').learnset.aquajet = ['8L1'];
		this.modData('Learnsets', 'pitchasaur').learnset.liquidation = ['8L1'];
		this.modData('Learnsets', 'pitchasaur').learnset.hydropump = ['8L1'];
		this.modData('Learnsets', 'pitchasaur').learnset.waterpulse = ['8L1'];
		delete this.modData('Learnsets', 'pitchasaur').learnset.sludge;
		delete this.modData('Learnsets', 'pitchasaur').learnset.sludgebomb;
		delete this.modData('Learnsets', 'pitchasaur').learnset.venoshock;
		delete this.modData('Learnsets', 'pitchasaur').learnset.mudslap;
		
		this.modData('Learnsets', 'blastonoise').learnset.boomburst = ['8L1'];
		this.modData('Learnsets', 'blastonoise').learnset.clangingscales = ['8L1'];
		this.modData('Learnsets', 'blastonoise').learnset.slackoff = ['8L1'];
		this.modData('Learnsets', 'blastonoise').learnset.stealthrock = ['8L1'];
		this.modData('Learnsets', 'blastonoise').learnset.dazzlinggleam = ['8L1'];
		this.modData('Learnsets', 'blastonoise').learnset.drainingkiss = ['8L1'];
		delete this.modData('Learnsets', 'blastonoise').learnset.darkpulse;
		delete this.modData('Learnsets', 'blastonoise').learnset.aurasphere;
		delete this.modData('Learnsets', 'blastonoise').learnset.poweruppunch;
		delete this.modData('Learnsets', 'blastonoise').learnset.shellsmash;
		delete this.modData('Learnsets', 'blastonoise').learnset.terrainpulse;
		
		this.modData('Learnsets', 'charodile').learnset.earthpower = ['8L1'];
		this.modData('Learnsets', 'charodile').learnset.stealthrock = ['8L1'];
		this.modData('Learnsets', 'charodile').learnset.rockslide = ['8L1'];
		this.modData('Learnsets', 'charodile').learnset.stoneedge = ['8L1'];
		this.modData('Learnsets', 'charodile').learnset.sandattack = ['8L1'];
		this.modData('Learnsets', 'charodile').learnset.mudshot = ['8L1'];
		this.modData('Learnsets', 'charodile').learnset.mudbomb = ['8L1'];
		this.modData('Learnsets', 'charodile').learnset.sandtomb = ['8L1'];
		this.modData('Learnsets', 'charodile').learnset.rockblast = ['8L1'];
		this.modData('Learnsets', 'charodile').learnset.ancientpower = ['8L1'];
		delete this.modData('Learnsets', 'charodile').learnset.airslash;
		delete this.modData('Learnsets', 'charodile').learnset.defog;
		delete this.modData('Learnsets', 'charodile').learnset.fly;
		delete this.modData('Learnsets', 'charodile').learnset.hurricane;
		delete this.modData('Learnsets', 'charodile').learnset.roost;
		delete this.modData('Learnsets', 'charodile').learnset.skydrop;
		delete this.modData('Learnsets', 'charodile').learnset.steelwing;
		delete this.modData('Learnsets', 'charodile').learnset.wingattack;
		delete this.modData('Learnsets', 'charodile').learnset.dualwingbeat;
		delete this.modData('Learnsets', 'charodile').learnset.ominouswind;
		
		this.modData('Learnsets', 'stacragus').learnset.ancientpower = ['8L1'];
		this.modData('Learnsets', 'stacragus').learnset.rockblast = ['8L1'];
		this.modData('Learnsets', 'stacragus').learnset.rockpolish = ['8L1'];
		this.modData('Learnsets', 'stacragus').learnset.rockslide = ['8L1'];
		this.modData('Learnsets', 'stacragus').learnset.rockthrow = ['8L1'];
		this.modData('Learnsets', 'stacragus').learnset.rocktomb = ['8L1'];
		this.modData('Learnsets', 'stacragus').learnset.sandstorm = ['8L1'];
		this.modData('Learnsets', 'stacragus').learnset.shellsmash = ['8L1'];
		this.modData('Learnsets', 'stacragus').learnset.smackdown = ['8L1'];
		this.modData('Learnsets', 'stacragus').learnset.stealthrock = ['8L1'];
		this.modData('Learnsets', 'stacragus').learnset.stoneedge = ['8L1'];
		delete this.modData('Learnsets', 'stacragus').learnset.acrobatics;
		delete this.modData('Learnsets', 'stacragus').learnset.confusion;
		delete this.modData('Learnsets', 'stacragus').learnset.drainingkiss;
		delete this.modData('Learnsets', 'stacragus').learnset.dreameater;
		delete this.modData('Learnsets', 'stacragus').learnset.energyball;
		delete this.modData('Learnsets', 'stacragus').learnset.gigadrain;
		delete this.modData('Learnsets', 'stacragus').learnset.megadrain;
		delete this.modData('Learnsets', 'stacragus').learnset.poisonpowder;
		delete this.modData('Learnsets', 'stacragus').learnset.psychic;
		delete this.modData('Learnsets', 'stacragus').learnset.psywave;
		delete this.modData('Learnsets', 'stacragus').learnset.quiverdance;
		delete this.modData('Learnsets', 'stacragus').learnset.skillswap;
		delete this.modData('Learnsets', 'stacragus').learnset.sleeppowder;
		delete this.modData('Learnsets', 'stacragus').learnset.solarbeam;
		delete this.modData('Learnsets', 'stacragus').learnset.stunspore;
		delete this.modData('Learnsets', 'stacragus').learnset.sweetscent;
		delete this.modData('Learnsets', 'stacragus').learnset.tailwind;
		delete this.modData('Learnsets', 'stacragus').learnset.teleport;
		delete this.modData('Learnsets', 'stacragus').learnset.thief;
		
		this.modData('Learnsets', 'hornetox').learnset.hex = ['8L1'];
		this.modData('Learnsets', 'hornetox').learnset.shadowball = ['8L1'];
		this.modData('Learnsets', 'hornetox').learnset.sludgewave = ['8L1'];
		this.modData('Learnsets', 'hornetox').learnset.banefulbunker = ['8L1'];
		this.modData('Learnsets', 'hornetox').learnset.bugbuzz = ['8L1'];
		this.modData('Learnsets', 'hornetox').learnset.toxicthread = ['8L1'];
		this.modData('Learnsets', 'hornetox').learnset.venomdrench = ['8L1'];
		this.modData('Learnsets', 'hornetox').learnset.nastyplot = ['8L1'];
		this.modData('Learnsets', 'hornetox').learnset.calmmind = ['8L1'];
		this.modData('Learnsets', 'hornetox').learnset.stickyweb = ['8L1'];
		delete this.modData('Learnsets', 'hornetox').learnset.twinneedle;
		delete this.modData('Learnsets', 'hornetox').learnset.pinmissile;
		delete this.modData('Learnsets', 'hornetox').learnset.furyattack;
		delete this.modData('Learnsets', 'hornetox').learnset.focusenergy;
		delete this.modData('Learnsets', 'hornetox').learnset.xscissor;
		delete this.modData('Learnsets', 'hornetox').learnset.brutalswing;
		delete this.modData('Learnsets', 'hornetox').learnset.acrobatics;
		delete this.modData('Learnsets', 'hornetox').learnset.swordsdance;
		delete this.modData('Learnsets', 'hornetox').learnset.fellstinger;
		delete this.modData('Learnsets', 'hornetox').learnset.throatchop;
		delete this.modData('Learnsets', 'hornetox').learnset.swagger;
		
		this.modData('Learnsets', 'banshigen').learnset.shadowball = ['8L1'];
		this.modData('Learnsets', 'banshigen').learnset.psychic = ['8L1'];
		this.modData('Learnsets', 'banshigen').learnset.hypervoice = ['8L1'];
		this.modData('Learnsets', 'banshigen').learnset.darkpulse = ['8L1'];
		this.modData('Learnsets', 'banshigen').learnset.perishsong = ['8L1'];
		this.modData('Learnsets', 'banshigen').learnset.spite = ['8L1'];
		this.modData('Learnsets', 'banshigen').learnset.snarl = ['8L1'];
		this.modData('Learnsets', 'banshigen').learnset.screech = ['8L1'];
		this.modData('Learnsets', 'banshigen').learnset.nastyplot = ['8L1'];
		this.modData('Learnsets', 'banshigen').learnset.disarmingvoice = ['8L1'];
		this.modData('Learnsets', 'banshigen').learnset.echoedvoice = ['8L1'];
		this.modData('Learnsets', 'banshigen').learnset.destinybond = ['8L1'];
		delete this.modData('Learnsets', 'banshigen').learnset.wingattack;
		delete this.modData('Learnsets', 'banshigen').learnset.bravebird;
		delete this.modData('Learnsets', 'banshigen').learnset.airslash;
		delete this.modData('Learnsets', 'banshigen').learnset.hurricane;
		delete this.modData('Learnsets', 'banshigen').learnset.skyattack;
		delete this.modData('Learnsets', 'banshigen').learnset.aerialace;
		delete this.modData('Learnsets', 'banshigen').learnset.aircutter;
		delete this.modData('Learnsets', 'banshigen').learnset.detect;
		delete this.modData('Learnsets', 'banshigen').learnset.pluck;
		delete this.modData('Learnsets', 'banshigen').learnset.twister;
		delete this.modData('Learnsets', 'banshigen').learnset.mirrormove;
		delete this.modData('Learnsets', 'banshigen').learnset.fly;
		
		this.modData("Learnsets", "ratichef").learnset.drainingkiss = ["8L1"];
		this.modData("Learnsets", "ratichef").learnset.healingwish = ["8L1"];
		this.modData("Learnsets", "ratichef").learnset.naturalgift = ["8L1"];
		this.modData("Learnsets", "ratichef").learnset.softboiled = ["8L1"];
		this.modData("Learnsets", "ratichef").learnset.stockpile = ["8L1"];
		this.modData("Learnsets", "ratichef").learnset.stuffcheeks = ["8L1"];
		this.modData("Learnsets", "ratichef").learnset.swallow = ["8L1"];
		this.modData("Learnsets", "ratichef").learnset.teatime = ["8L1"];
		this.modData("Learnsets", "ratichef").learnset.wish = ["8L1"];
		
		this.modData("Learnsets", "ratidam").learnset.aquajet = ["8L1"];
		this.modData("Learnsets", "ratidam").learnset.aquatail = ["8L1"];
		this.modData("Learnsets", "ratidam").learnset.icefang = ["8L1"];
		this.modData("Learnsets", "ratidam").learnset.liquidation = ["8L1"];
		this.modData("Learnsets", "ratidam").learnset.thunderfang = ["8L1"];
		this.modData("Learnsets", "ratidam").learnset.waterfall = ["8L1"];
		this.modData("Learnsets", "ratidam").learnset.woodhammer = ["8L1"];
		
		this.modData("Learnsets", "frigarow").learnset.acrobatics = ["8L1"];
		this.modData("Learnsets", "frigarow").learnset.bodypress = ["8L1"];
		this.modData("Learnsets", "frigarow").learnset.bravebird = ["8L1"];
		this.modData("Learnsets", "frigarow").learnset.closecombat = ["8L1"];
		this.modData("Learnsets", "frigarow").learnset.dualwingbeat = ["8L1"];
		this.modData("Learnsets", "frigarow").learnset.irondefense = ["8L1"];
		this.modData("Learnsets", "frigarow").learnset.knockoff = ["8L1"];
		delete this.modData('Learnsets', 'frigarow').learnset.aerialace;
		delete this.modData('Learnsets', 'frigarow').learnset.astonish;
		delete this.modData('Learnsets', 'frigarow').learnset.falseswipe;
		delete this.modData('Learnsets', 'frigarow').learnset.skyattack;
		delete this.modData('Learnsets', 'frigarow').learnset.swagger;
		delete this.modData('Learnsets', 'frigarow').learnset.takedown;
		delete this.modData('Learnsets', 'frigarow').learnset.quickattack;
		
		this.modData("Learnsets", "storrow").learnset.bravebird = ["8L1"];
		this.modData("Learnsets", "storrow").learnset.playrough = ["8L1"];
		this.modData("Learnsets", "storrow").learnset.swordsdance = ["8L1"];
		delete this.modData('Learnsets', 'storrow').learnset.skyattack;
		delete this.modData('Learnsets', 'storrow').learnset.swagger;
		delete this.modData('Learnsets', 'storrow').learnset.quickattack;
		
		this.modData("Learnsets", "phankyr").learnset.hex = ["8L1"];
		this.modData("Learnsets", "phankyr").learnset.knockoff = ["8L1"];
		this.modData("Learnsets", "phankyr").learnset.phantomforce = ["8L1"];
		this.modData("Learnsets", "phankyr").learnset.poltergeist = ["8L1"];
		this.modData("Learnsets", "phankyr").learnset.shadowball = ["8L1"];
		this.modData("Learnsets", "phankyr").learnset.shadowsneak = ["8L1"];
		this.modData("Learnsets", "phankyr").learnset.taunt = ["8L1"];
		this.modData("Learnsets", "phankyr").learnset.willowisp = ["8L1"];
		
		this.modData("Learnsets", "soroboruo").learnset.dragondance = ["8L1"];
		this.modData("Learnsets", "soroboruo").learnset.dragonpulse = ["8L1"];
		this.modData("Learnsets", "soroboruo").learnset.earthpower = ["8L1"];
		this.modData("Learnsets", "soroboruo").learnset.fireblast = ["8L1"];
		this.modData("Learnsets", "soroboruo").learnset.flamethrower = ["8L1"];
		this.modData("Learnsets", "soroboruo").learnset.nastyplot = ["8L1"];
		this.modData("Learnsets", "soroboruo").learnset.powergem = ["8L1"];
		this.modData("Learnsets", "soroboruo").learnset.surf = ["8L1"];
		
		this.modData("Learnsets", "mountoswine").learnset.auroraveil = ["8L1"];
		delete this.modData('Learnsets', 'mountoswine').learnset.ancientpower;
		delete this.modData('Learnsets', 'mountoswine').learnset.superpower;
		
		this.modData("Learnsets", "lapidour").learnset.cosmicpower = ["8L1"];
		this.modData("Learnsets", "lapidour").learnset.meteorbeam = ["8L1"];
		this.modData("Learnsets", "lapidour").learnset.moonblast = ["8L1"];
		this.modData("Learnsets", "lapidour").learnset.moonlight = ["8L1"];
		this.modData("Learnsets", "lapidour").learnset.powergem = ["8L1"];
		this.modData("Learnsets", "lapidour").learnset.stealthrock = ["8L1"];
		delete this.modData('Learnsets', 'lapidour').learnset.fireblast;
		delete this.modData('Learnsets', 'lapidour').learnset.flamethrower;
		delete this.modData('Learnsets', 'lapidour').learnset.heatwave;
		delete this.modData('Learnsets', 'lapidour').learnset.overheat;
		delete this.modData('Learnsets', 'lapidour').learnset.nastyplot;
		
		this.modData("Learnsets", "lamprecut").learnset.bulkup = ["8L1"];
		this.modData("Learnsets", "lamprecut").learnset.bulletpunch = ["8L1"];
		this.modData("Learnsets", "lamprecut").learnset.icepunch = ["8L1"];
		this.modData("Learnsets", "lamprecut").learnset.plasmafists = ["8L1"];
		this.modData("Learnsets", "lamprecut").learnset.skyuppercut = ["8L1"];
		
		this.modData("Learnsets", "dreadant").learnset.jawlock = ["8L1"];
		this.modData("Learnsets", "dreadant").learnset.knockoff = ["8L1"];
		this.modData("Learnsets", "dreadant").learnset.lunge = ["8L1"];
		this.modData("Learnsets", "dreadant").learnset.megahorn = ["8L1"];
		this.modData("Learnsets", "dreadant").learnset.pursuit = ["8L1"];
		this.modData("Learnsets", "dreadant").learnset.taunt = ["8L1"];
		this.modData("Learnsets", "dreadant").learnset.throatchop = ["8L1"];
		this.modData("Learnsets", "dreadant").learnset.uturn = ["8L1"];
		
		this.modData("Learnsets", "durandurant").learnset.bugbuzz = ["8L1"];
		this.modData("Learnsets", "durandurant").learnset.nastyplot = ["8L1"];
		this.modData("Learnsets", "durandurant").learnset.overdrive = ["8L1"];
		this.modData("Learnsets", "durandurant").learnset.thunderwave = ["8L1"];
		this.modData("Learnsets", "durandurant").learnset.uturn = ["8L1"];
		this.modData("Learnsets", "durandurant").learnset.voltswitch = ["8L1"];
		
		this.modData("Learnsets", "algalisk").learnset.glare = ["8L1"];
		this.modData("Learnsets", "algalisk").learnset.spikes = ["8L1"];
		this.modData("Learnsets", "algalisk").learnset.synthesis = ["8L1"];
		delete this.modData('Learnsets', 'algalisk').learnset.focusblast;
		
		this.modData("Learnsets", "thermalge").learnset.calmmind = ["8L1"];
		this.modData("Learnsets", "thermalge").learnset.firelash = ["8L1"];
		this.modData("Learnsets", "thermalge").learnset.flamethrower = ["8L1"];
		this.modData("Learnsets", "thermalge").learnset.lavaplume = ["8L1"];
		this.modData("Learnsets", "thermalge").learnset.willowisp = ["8L1"];
		
		delete this.modData('Learnsets', 'parelp').learnset.anchorshot;
		delete this.modData('Learnsets', 'parelp').learnset.astonish;
		delete this.modData('Learnsets', 'parelp').learnset.brutalswing;
		delete this.modData('Learnsets', 'parelp').learnset.earthquake;
		delete this.modData('Learnsets', 'parelp').learnset.gigadrain;
		delete this.modData('Learnsets', 'parelp').learnset.gyroball;
		delete this.modData('Learnsets', 'parelp').learnset.heavyslam;
		delete this.modData('Learnsets', 'parelp').learnset.hex;
		delete this.modData('Learnsets', 'parelp').learnset.ironhead;
		delete this.modData('Learnsets', 'parelp').learnset.phantomforce;
		delete this.modData('Learnsets', 'parelp').learnset.poltergeist;
		delete this.modData('Learnsets', 'parelp').learnset.shadowball;
		delete this.modData('Learnsets', 'parelp').learnset.shadowclaw;
		delete this.modData('Learnsets', 'parelp').learnset.steelroller;
		delete this.modData('Learnsets', 'parelp').learnset.whirpool;
		
		this.modData("Learnsets", "alomoguish").learnset.gigadrain = ["8L1"];
		delete this.modData('Learnsets', 'alomoguish').learnset.anchorshot;
		delete this.modData('Learnsets', 'alomoguish').learnset.astonish;
		delete this.modData('Learnsets', 'alomoguish').learnset.brutalswing;
		delete this.modData('Learnsets', 'alomoguish').learnset.earthquake;
		delete this.modData('Learnsets', 'alomoguish').learnset.gyroball;
		delete this.modData('Learnsets', 'alomoguish').learnset.heavyslam;
		delete this.modData('Learnsets', 'alomoguish').learnset.hex;
		delete this.modData('Learnsets', 'alomoguish').learnset.ironhead;
		delete this.modData('Learnsets', 'alomoguish').learnset.phantomforce;
		delete this.modData('Learnsets', 'alomoguish').learnset.poltergeist;
		delete this.modData('Learnsets', 'alomoguish').learnset.shadowball;
		delete this.modData('Learnsets', 'alomoguish').learnset.shadowclaw;
		delete this.modData('Learnsets', 'alomoguish').learnset.steelroller;
		delete this.modData('Learnsets', 'alomoguish').learnset.whirpool;
		
		this.modData("Learnsets", "annhailord").learnset.haze = ["8L1"];
		this.modData("Learnsets", "annhailord").learnset.leechseed = ["8L1"];
		this.modData("Learnsets", "annhailord").learnset.surf = ["8L1"];
		this.modData("Learnsets", "annhailord").learnset.waterspout = ["8L1"];
		this.modData("Learnsets", "annhailord").learnset.gigadrain = ["8L1"];
		delete this.modData('Learnsets', 'annhailord').learnset.anchorshot;
		delete this.modData('Learnsets', 'annhailord').learnset.astonish;
		delete this.modData('Learnsets', 'annhailord').learnset.brutalswing;
		delete this.modData('Learnsets', 'annhailord').learnset.earthquake;
		delete this.modData('Learnsets', 'annhailord').learnset.gyroball;
		delete this.modData('Learnsets', 'annhailord').learnset.heavyslam;
		delete this.modData('Learnsets', 'annhailord').learnset.hex;
		delete this.modData('Learnsets', 'annhailord').learnset.ironhead;
		delete this.modData('Learnsets', 'annhailord').learnset.phantomforce;
		delete this.modData('Learnsets', 'annhailord').learnset.poltergeist;
		delete this.modData('Learnsets', 'annhailord').learnset.shadowball;
		delete this.modData('Learnsets', 'annhailord').learnset.shadowclaw;
		delete this.modData('Learnsets', 'annhailord').learnset.steelroller;
		delete this.modData('Learnsets', 'annhailord').learnset.whirpool;
		
		this.modData("Learnsets", "lusopass").learnset.gyroball = ["8L1"];
		this.modData("Learnsets", "lusopass").learnset.gigadrain = ["8L1"];
		this.modData("Learnsets", "lusopass").learnset.shadowball = ["8L1"];
		this.modData("Learnsets", "lusopass").learnset.energyball = ["8L1"];
		this.modData("Learnsets", "lusopass").learnset.shadowsneak = ["8L1"];
		this.modData("Learnsets", "lusopass").learnset.poltergeist = ["8L1"];
		this.modData("Learnsets", "lusopass").learnset.brutalswing = ["8L1"];
		this.modData("Learnsets", "lusopass").learnset.grassknot = ["8L1"];
		this.modData("Learnsets", "lusopass").learnset.ironhead = ["8L1"];
		this.modData("Learnsets", "lusopass").learnset.rapidspin = ["8L1"];
		
		this.modData("Learnsets", "sunkennon").learnset.aurasphere = ["8L1"];
		this.modData("Learnsets", "sunkennon").learnset.darkpulse = ["8L1"];
		this.modData("Learnsets", "sunkennon").learnset.sludgebomb = ["8L1"];
		this.modData("Learnsets", "sunkennon").learnset.scald = ["8L1"];
		this.modData("Learnsets", "sunkennon").learnset.focusblast = ["8L1"];
		this.modData("Learnsets", "sunkennon").learnset.autotomize = ["8L1"];
		this.modData("Learnsets", "sunkennon").learnset.terrainpulse = ["8L1"];
		this.modData("Learnsets", "sunkennon").learnset.waterpulse = ["8L1"];
		this.modData("Learnsets", "sunkennon").learnset.nastyplot = ["8L1"];
		delete this.modData('Learnsets', 'sunkennon').learnset.powerwhip;
		delete this.modData('Learnsets', 'sunkennon').learnset.anchorshot;
		delete this.modData('Learnsets', 'sunkennon').learnset.shadowclaw;
		delete this.modData('Learnsets', 'sunkennon').learnset.brickbreak;
		delete this.modData('Learnsets', 'sunkennon').learnset.assurance;
		delete this.modData('Learnsets', 'sunkennon').learnset.thief;
		
		this.modData('Learnsets', 'jorunny').learnset.liquidation = ['8L1'];
		this.modData('Learnsets', 'jorunny').learnset.flipturn = ['8L1'];
		this.modData('Learnsets', 'jorunny').learnset.scald = ['8L1'];
		this.modData('Learnsets', 'jorunny').learnset.poisonjab = ['8L1'];
		this.modData('Learnsets', 'jorunny').learnset.gunkshot = ['8L1'];
		this.modData('Learnsets', 'jorunny').learnset.venomdrench = ['8L1'];
		this.modData('Learnsets', 'jorunny').learnset.purify = ['8L1'];
		delete this.modData('Learnsets', 'jorunny').learnset.healingwish;
		delete this.modData('Learnsets', 'jorunny').learnset.healbell;
		delete this.modData('Learnsets', 'jorunny').learnset.fakeout;
		delete this.modData('Learnsets', 'jorunny').learnset.quickattack;
		delete this.modData('Learnsets', 'jorunny').learnset.closecombat;
		delete this.modData('Learnsets', 'jorunny').learnset.highjumpkick;
        
      this.modData('Learnsets', 'exsunei').learnset.knockoff = ['8L1'];
		this.modData('Learnsets', 'exsunei').learnset.flareblitz = ['8L1'];
		this.modData('Learnsets', 'exsunei').learnset.uturn = ['8L1'];
		this.modData('Learnsets', 'exsunei').learnset.crunch = ['8L1'];
		this.modData('Learnsets', 'exsunei').learnset.swordsdance = ['8L1'];
      this.modData('Learnsets', 'exsunei').learnset.swordsdance = ['8L1'];
		delete this.modData('Learnsets', 'exsunei').learnset.thunderpunch;
		delete this.modData('Learnsets', 'exsunei').learnset.wish;
        
      this.modData('Learnsets', 'auranubis').learnset.recover = ['8L1'];
		this.modData('Learnsets', 'auranubis').learnset.willowisp = ['8L1'];
		this.modData('Learnsets', 'auranubis').learnset.shadowbone = ['8L1'];
		this.modData('Learnsets', 'auranubis').learnset.spiritshackle = ['8L1'];
		this.modData('Learnsets', 'auranubis').learnset.scorchingsands = ['8L1'];
		delete this.modData('Learnsets', 'auranubis').learnset.meteormash;
      delete this.modData('Learnsets', 'auranubis').learnset.steelbeam;
      delete this.modData('Learnsets', 'auranubis').learnset.forcepalm;
      delete this.modData('Learnsets', 'auranubis').learnset.irontail;
      delete this.modData('Learnsets', 'auranubis').learnset.extremespeed;

		
		
		//This mmmmmmight not be necessary, but I can't tell how this is gonna turn out in the client while testing
		//so I figure better safe than sorry...
		//Construct Mega Evolution learnsets, for those horrible clowns that for SOME REASON select Megas in the teambuilder
		for (const id in this.dataCache.Pokedex) {
			const pokemon = this.dataCache.Pokedex[id];
			if (pokemon.megaOf) {//if the pokedex entry has a fusion field, it's a fusion
				if (!this.dataCache.Learnsets[id]) this.dataCache.Learnsets[id] = { learnset: {}};//create a blank learnset entry so we don't need a learnsets file
				const learnset = this.dataCache.Learnsets[this.toID(pokemon.megaOf)].learnset;//get the learnset of the mon
				for (const moveid in learnset) {
					//if (this.dataCache.Moves[moveid].isNonstandard === 'Past') continue; //exclude dexited moves
					this.modData('Learnsets', id).learnset[moveid] = ['8L1'];//hopefully they dont care about compatibility in this mod
				}
			}
		}
	},
}; 
