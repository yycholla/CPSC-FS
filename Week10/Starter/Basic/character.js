class Character {
	constructor(name, hitPoints, armorClass) {
		this.name = name;
		this.hitPoints = hitPoints;
		this.armorClass = armorClass;
		this.maxHitPoints = hitPoints;
	}
	takeDamage(damage) {
		this.hitPoints = damage >= this.hitPoints ? 0 : this.hitPoints - damage;
	}
	takePotion(healing) {
		this.hitPoints = Math.min(healing + this.hitPoints, this.maxHitPoints);
	}
	display() {
		return `${this.name} has ${this.hitPoints} hp and an armor class of ${this.armorClass}`;
	}
}

export default Character;