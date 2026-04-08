"use strict";
import Character from "./character.js";
import Monster from "./monster.js";

let vargus = new Character("Vargus", 17, 13);
let troll = new Monster("Troll", 3);

troll.attacks(vargus);

(function start() {
	document.getElementById("main").innerHTML = `<h1>${vargus.display()}</h1>`;
})();