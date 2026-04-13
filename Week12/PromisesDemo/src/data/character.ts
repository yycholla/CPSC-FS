class Character {
	name: string;
	hitPoints: number;
	armorClass: number;
	maxHitPoints: number;

	constructor(name: string, hitPoints: number, armorClass: number) {
		this.name = name;
		this.hitPoints = hitPoints;
		this.armorClass = armorClass;
		this.maxHitPoints = hitPoints;
	}
	takeDamage(damage: number) {
		this.hitPoints = damage >= this.hitPoints ? 0 : this.hitPoints - damage;
	}
	takePotion(healing: number) {
		this.hitPoints = Math.min(healing + this.hitPoints, this.maxHitPoints);
	}
}

export default Character;