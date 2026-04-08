import {d4, d6, d8, d10, d12, d20} from "./die.js";

class Monster {
	constructor(name, attackBonus) {
		this.name = name;
		this.attackBonus = attackBonus;
	}

	attacks(character) {
		let roll = d20.roll();
		console.log("roll",roll);
		if (roll == 20) {
			console.log(`${character.name} got critically hit!`);
			character.takeDamage(d6.roll() + d6.roll());
		} else if (roll == 1) {
			console.log(`${this.name} critically missed ${character.name}!`);
		} else if (roll + this.attackBonus >= character.armorClass) {
			console.log(`${this.name} hit ${character.name}!`);
			character.takeDamage(d6.roll());
		} else {
			console.log(`${this.name} missed ${character.name}.`);
		}		
	}
}

export default Monster;