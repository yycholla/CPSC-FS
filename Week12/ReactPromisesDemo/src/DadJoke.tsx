import React, { useState } from "react";

const DadJoke = () => {
	const [dadJoke] = useState("Finding the perfect joke!");

	return (
		<div className="row align-items-center py-2">
			<div className="col-6">
				<img className="img-fluid rounded-4" src="images/DadJoke.png" />
			</div>
			<div className="col-6">
				<div className="display-4 text-white">{dadJoke}</div>
			</div>
		</div>
	);
}

export default DadJoke;