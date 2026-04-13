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

export { getPartyList, getPartyMemberByName };
