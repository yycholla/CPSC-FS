import Character from "./data/character";
import { getPartyMemberByName } from "./data/dataProvider";

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Time's up!");
//     reject("Hello there");
//   }, 2000);
// });

// promise.then(() => {
//   console.log("yippee");
// });
// promise.catch((reason) => {
//   console.log(reason);
// });

// TODO: The Starting Point

let promise = new Promise<Character>((resolve, reject) => {
  let name = "Conan";
  setTimeout(() => {
    let member = getPartyMemberByName(name);
    if (member) {
      resolve(member);
    } else {
      reject("could not find party memeber");
    }
  }, 2000);
});

promise.then((member) => {
  console.log(member);
});
promise.catch((reason) => {
  console.log(reason);
});

async function getPartyMember(name: string): Promise<Character> {
  let promise = new Promise<Character>((resolve, reject) => {
    setTimeout(() => {
      let member = getPartyMemberByName(name);
      if (member) {
        resolve(member);
      } else {
        reject(`${name} does not exist`);
      }
    }, 2000);
  });
  return promise;
}

getPartyMember("Vargus")
  .then((member) => {
    console.log(`Resolved: ${member.name}`);
    return member.hitPoints;
  })
  .then((hitpoints) => {
    console.log(`... who has ${hitpoints} hit points.`);
    return "Isn't that great?";
  })
  .then((sentance) => {
    console.log(sentance);
  })
  .then(() => {
    console.log("This is too much\n\n");
  })
  .catch((reason) => {
    console.error(reason);
  });

async function getAsyncPartyMemeber(name: string) {
  let member: Character = await getPartyMember(name);
  console.log(
    `Yippee we got ${member.name}\n They even have ${member.hitPoints} hp!`,
  );
}

getAsyncPartyMemeber("Vargus");

getAsyncPartyMemeber("Blah")
  .catch((error) => {
    console.error(error);
  })
  .finally(() => console.log("finished"));
