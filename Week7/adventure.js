"use strict";
class Character {
    constructor(name, hitPoints, armorClass) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.armorClass = armorClass;
        this.maxHitPoints = hitPoints;
    }

    takeDamage(damage) {
        this.hitPoints = damage > this.hitPoints ? 0 : this.hitPoints - damage;
    }
    takePotion(healing) {
        this.hitPoints = Math.min(healing + this.hitPoints, this.maxHitPoints);
    }
}

const vargus = new Character("Vargus", 17, 13);
console.log(vargus);
const start = () => {
    const topElement = React.createElement(
    "h1",
        { className: "bg-danger text-warning text-center" },
        "Hello React!",
    );
    const root = ReactDOM.createRoot(document.getElementById("main"));
    root.render(topElement);
};
start();