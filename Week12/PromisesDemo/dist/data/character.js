"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    name;
    hitPoints;
    armorClass;
    maxHitPoints;
    constructor(name, hitPoints, armorClass) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.armorClass = armorClass;
        this.maxHitPoints = hitPoints;
    }
    takeDamage(damage) {
        this.hitPoints = damage >= this.hitPoints ? 0 : this.hitPoints - damage;
    }
    takePotion(healing) {
        this.hitPoints = Math.min(healing + this.hitPoints, this.maxHitPoints);
    }
}
exports.default = Character;
//# sourceMappingURL=character.js.map