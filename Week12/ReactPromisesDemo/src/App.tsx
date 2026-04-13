import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import Banner from "./Banner";
import PageController from "./PageController";

const App = () => {
	
	return (
		<BrowserRouter>
			<Banner />
			<PageController />
		</BrowserRouter>
	);
}

export default App;