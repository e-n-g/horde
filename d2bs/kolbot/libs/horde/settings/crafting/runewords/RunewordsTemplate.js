/**
*	@filename	RunewordsTemplate.js
*	@author		Adpist
*	@desc		Template for runewords profile
*	@credits	Adpist, JeanMax / SiC-666 / Dark-f, Alogwe, Imba, Kolton, Larryw, Noah, QQValpen, Sam, YGM
*/

var RunewordProfile = {
	character : { //Character Runewords
		"shield" : {
			"normal_ancients_pledge" : {
				runeword: Runeword.AncientsPledge,
				sockets: 3,
				bases: ["Kite Shield", "Large Shield", "Bone Shield"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[FireResist] == 50 && [LightResist] == 50",
				tier: 0,
				skipIf: ""
			}
		},
		
		"sword" : {
			"spirit" : {
				runeword: Runeword.Spirit,
				sockets: 4,
				bases: ["Broad Sword", "Crystal Sword"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[itemallskills] == 2",
				tier: 0,
				skipIf: ""
			}
		}
	},
	
	merc: { //Merc runewords
		"polearm" : {
			"normal_insight" : {
				runeword: Runeword.Insight,
				sockets: 4,
				bases: ["Poleaxe", "Halberd"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[Meditationaura] <= 17",
				tier: 0,
				skipIf: ""
			},
			
			"nm_insight" : {
				runeword: Runeword.Insight,
				sockets: 4,
				bases: ["Bill", "Battle Scythe", "Partizan", "Bec De Corbin"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[Meditationaura] <= 17",
				tier: 0,
				skipIf: ""
			},
			
			"hell_insight" : {
				runeword: Runeword.Insight,
				sockets: 4,
				bases: ["Thresher", "Cryptic Axe", "Great Poleaxe", "Giant Thresher"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[Meditationaura] <= 17",
				tier: 0,
				skipIf: ""
			},
			
			"hell_insight_endgame" : {
				runeword: Runeword.Insight,
				sockets: 4,
				bases: ["Thresher", "Cryptic Axe", "Great Poleaxe", "Giant Thresher"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: true,
				recipeType: Recipe.Socket.Weapon,
				roll: Roll.Eth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[Meditationaura] == 17",
				tier: 0,
				skipIf: ""
			}
		}
	}
};