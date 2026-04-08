import React from "react";

interface Props {
	name: string,
	hitPoints: number,
	armorClass: number
}

class PartyMember extends React.Component<Props> {
	hitPoints: number;

	constructor(props: Props) {
		super(props);
		this.hitPoints = props.hitPoints;
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

export default PartyMember;