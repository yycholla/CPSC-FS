import React, { useState } from "react";

interface Props {
	name: string,
	hitPoints: number,
	armorClass: number
}

const PartyMember = ({name, hitPoints: maxHitPoints, armorClass}: Props) => {
	const [hitPoints, setHitPoints] = useState(maxHitPoints);

	const nameColor = () => {
		return hitPoints > maxHitPoints/2 ? "text-white" : (hitPoints > 0) ? "text-warning" : "text-danger";
	};

	return (
			<div className="col-4">
				<figure className="figure my-2">
					<img className="figure-img img-fluid rounded-top-pill" src={`images/${name}.png`} />
					<figcaption className="figcaption row">
						<a href="#" className={`${nameColor()} fs-4 btn`} data-bs-toggle="collapse" data-bs-target={`#${name}Data`}>
							{name}
						</a>
						<div id={`${name}Data`} className="collapse bg-white rounded-pill text-center fs-6">
							<i>Hit Points: {hitPoints}</i>
							<br/>
							<b>Armor Class: {armorClass}</b>
							<br/>
							<button className="btn btn-danger btn-sm" onClick={() => {
									setHitPoints(hitPoints < 7 ? 0 : hitPoints - 7);
								}}>Attack Me!</button>
						</div>
					</figcaption>
				</figure>
			</div>
	);
}

export default PartyMember;