// "use strict";
import React from "react";
import { createRoot } from "react-dom/client";
import Character from "./character";
import PartyList from "./PartyList";

const characters = [
	new Character("Vargus", 17, 13),
	new Character("Ezmerelda", 23, 17),
	new Character("Conan", 50, 15)
];


(function start() {
	const topElement = <>
		<img className="img-fluid" src="images/road_to_adventure.png" />
		<PartyList party={[...characters]} />
	</>
	const root = createRoot(document.getElementById("main")!); // non-null assertion operator (!)
	root.render(topElement);
})();