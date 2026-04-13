import React, { useState } from "react";

const DogPicture = () => {
	const [dogUrl] = useState("images/DogOfTheDay.png");

	return (
		<div className="row align-items-center py-2">
			<div className="col-6">
				<img className="img-fluid rounded-4" src="images/DogOfTheDay.png" />
			</div>
			<div className="col-6">
				<img className="img-fluid rounded-4" src={dogUrl} />
			</div>
		</div>
	);
}

export default DogPicture;