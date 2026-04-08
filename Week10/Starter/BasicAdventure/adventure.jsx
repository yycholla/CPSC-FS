"use strict";
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
}

const characters = [
	new Character("Vargus", 17, 13),
	new Character("Ezmerelda", 23, 17),
	new Character("Conan", 50, 15)
];

class PartyList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props.party);
		return (
			<div className="row">
               {this.props.party.map((member, i) => <PartyMember {...member} key={i} />)}
			</div>
		);
	}
}

class PartyMember extends React.Component {
	constructor(props) {
		super(props);
		this.hitPoints = this.props.hitPoints;
	}
	nameColor() {
		return this.hitPoints > this.props.hitPoints/2 ? "text-white" : (this.hitPoints > 0) ? "text-warning" : "text-danger";
	}
	render() {
		console.log("Using the new component!");
		return (
			<div className="col-4">
				<figure className="figure my-2">
					<img className="figure-img img-fluid rounded-top-pill" src={`images/${this.props.name}.png`} />
					<figcaption className="figcaption row">
						<a href="#" className={`${this.nameColor()} fs-4 btn`} data-bs-toggle="collapse" data-bs-target={`#${this.props.name}Data`}>
							{this.props.name}
						</a>
						<div id={`${this.props.name}Data`} className="collapse bg-white rounded-pill text-center fs-6">
							<i>Hit Points: {this.hitPoints}</i>
							<br/>
							<b>Armor Class: {this.props.armorClass}</b>
							<br/>
							<button className="btn btn-danger btn-sm" onClick={() => {
									this.hitPoints = this.hitPoints < 7 ? 0 : this.hitPoints - 7;
									this.setState({});
								}}>Attack Me!</button>
						</div>
					</figcaption>
				</figure>
			</div>
		);
	}
}

(function start() {
	const topElement = <>
		<img className="img-fluid" src="images/road_to_adventure.png" />
		<PartyList party={[...characters]} />
	</>
	const root = ReactDOM.createRoot(document.getElementById("main"));
	root.render(topElement);
})();
