import React from "react";
import PartyMember from "./PartyMember";
import Character from "./character";
import { Link } from "react-router";
import { getPartyList } from "./data/dataProvider";

interface Props {
	party: Character[];
}

const PartyList = () => {
	const party = getPartyList();
	return (
		<>
			<div className="row display-1"><Link to="/monsters" className="col text-center text-white">Your Adventuring Party</Link></div>
			<div className="row">
				{party.map((member, i) => React.createElement(PartyMember, {key: i, ...member}))}
			</div>
		</>
	);
}

export default PartyList;