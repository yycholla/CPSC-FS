"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartyList = void 0;
exports.getPartyMemberByName = getPartyMemberByName;
const character_1 = __importDefault(require("./character"));
const characters = [
    new character_1.default("Vargus", 17, 13),
    new character_1.default("Ezmerelda", 23, 17),
    new character_1.default("Conan", 50, 15),
];
const getPartyList = () => {
    return [...characters];
};
exports.getPartyList = getPartyList;
function getPartyMemberByName(name) {
    return characters.find((member) => {
        return member.name.startsWith(name);
    });
}
//# sourceMappingURL=dataProvider.js.map