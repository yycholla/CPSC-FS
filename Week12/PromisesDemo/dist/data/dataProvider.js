"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartyList = void 0;
exports.getPartyMemberByName = getPartyMemberByName;
exports.getRandomDadJoke = getRandomDadJoke;
const axios_1 = __importDefault(require("axios"));
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
async function getRandomDadJoke() {
    let response = await axios_1.default.get("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    return response.data.joke;
}
//# sourceMappingURL=dataProvider.js.map