import React from "react";
import { createRoot } from "react-dom/client";
import Character from "./character";
import PartyList from "./PartyList";
import "./css/base.css";

const characters = [
	new Character("Vargus", 17, 13),
	new Character("Ezmerelda", 23, 17),
	new Character("Conan", 50, 15)
];

const App = () => {
    return (
    <>
		<img className="img-fluid" src="images/road_to_adventure.png" />
		<PartyList party={[...characters]} />
	</>
    );
};

export default App;