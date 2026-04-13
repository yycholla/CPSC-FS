import axios from "axios";
import Character from "./character";

const characters = [
  new Character("Vargus", 17, 13),
  new Character("Ezmerelda", 23, 17),
  new Character("Conan", 50, 15),
];

const getPartyList = () => {
  return [...characters];
};

function getPartyMemberByName(name: string): Character | undefined {
  return characters.find((member) => {
    return member.name.startsWith(name);
  });
}

async function getRandomDadJoke(): Promise<string> {
  let response = await axios.get("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  return response.data.joke;
}

export { getPartyList, getPartyMemberByName, getRandomDadJoke };
