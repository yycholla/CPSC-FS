import { getMonsterList } from "./data/dataProvider";
import MonsterFrame from "./MonsterFrame";
import { Link } from "react-router";

const MonsterList = () => {
	const monsterList = getMonsterList();
	return (
		<>
			<div className="row display-1"><Link to="/" className="col text-center text-white">Your Villains</Link></div>
			<div className="row">
				{monsterList.map((member, i) => <MonsterFrame key={i} {...member} />)}
			</div>
		</>
	);
}

export default MonsterList;