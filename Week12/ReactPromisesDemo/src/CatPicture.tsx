import React, { useState } from "react";

const CatPicture = () => {

	const [catUrl] = useState("images/CatOfTheDay.png");

	return (
		<div className="row align-items-center py-2">
			<div className="col-6">
				<img className="img-fluid rounded-4" src="images/CatOfTheDay.png" />
			</div>
			<div className="col-6">
				<img className="img-fluid rounded-4" src={catUrl} />
			</div>
		</div>
	);
}

export default CatPicture;