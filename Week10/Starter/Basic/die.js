class Die {
	constructor(sides) {
		this.sides = sides;
	}
	roll() {
		return Math.floor(this.sides * Math.random()) + 1;
	}
}

const d4 = new Die(4);
const d6 = new Die(6);
const d8 = new Die(8);
const d10 = new Die(10);
const d12 = new Die(12);
const d20 = new Die(20);

export {d4, d6, d8, d10, d12, d20 };