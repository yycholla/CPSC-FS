import React from "react";
import PartyMember from "./PartyMember";
import Character from "./character";

interface Props {
	party: Character[];
}

class PartyList extends React.Component<Props> {
	constructor(props: Props) {
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

export default PartyList;