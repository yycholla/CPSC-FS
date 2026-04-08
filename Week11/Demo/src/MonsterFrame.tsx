import React from "react";
import { getMonsterDetail } from "./data/dataProvider";

interface Props {
	index: string
}

const MonsterFrame = ({index} : Props) => {
	const monster = getMonsterDetail(index);
	return (
		<div className="col-3 my-3">
			<img className="img-fluid rounded-top-pill" src={`https://www.dnd5eapi.co${monster.image}`} />
			<div className="text-white fs-4 text-center">{monster.name}</div>
		</div>
	);
}

export default MonsterFrame;