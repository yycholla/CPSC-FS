import React from "react";
import { Route, Routes } from "react-router";
import DadJoke from "./DadJoke";
import CatPicture from "./CatPicture";
import DogPicture from "./DogPicture";

const PageController = () => {
	return (
		<Routes>
			<Route path="/" index={true} element={<DadJoke />} />
			<Route path="/cat-picture" element={<CatPicture />} />
			<Route path="/dog-picture" element={<DogPicture />} />
			<Route path="*" element={<h1>Page Not Found</h1>} />
		</Routes>
	);
}

export default PageController;