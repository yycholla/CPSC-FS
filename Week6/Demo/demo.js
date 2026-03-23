{
    let appetite = "blah";
    console.log(appetite);
}
// console.log(appetite);

const hulkMood = "angry";
{
    const hulkMood = "controlled";
    console.log(hulkMood);
}
console.log(hulkMood);

let objBool = new Boolean("true");
console.log(objBool);
console.log(objBool.valueOf());
let primitiveBool = Boolean("");
console.log(primitiveBool);

let objString = new String(37);
console.log(objString);
console.log(objString.valueOf());
let primitiveString = String(37);
console.log(primitiveString);

let objNumber = new Number("42");
console.log(objNumber);
console.log(objNumber.valueOf());
let primitiveNumber = Number("42")
console.log(primitiveNumber);

let someNumber = "5";
console.log((5 + Number(someNumber))**2)

let numSides = 20;
let roll = rollD20;
console.log(roll)

let armorClass = 13;
let charName = "Vargus"
console.log("Troll attacks ", charName,  ":");

if (roll == 20) {
    console.log("Troll crits", charName);
} else if (roll == 1) {
    console.log("Troll misses", charName);
} else if (roll >= armorClass) {
    console.log("Troll hit", charName);
} else {
    console.log("troll miss");
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Blast off!");

function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) +1;
}
console.log(rollDie(20))

function rollD20() {
    return rollDie(20);
}

let someValue = "";
if (someValue) {
    console.log("Yay javascript is so cool");
} else {
    console.log("Javascript decided this was false");
}

let classes = new Array(4);
classes[0] = "Barbarian";
classes[1] = "Knight";
classes[2] = "Ranger";
classes[3] = "Wizard";
console.log(classes);

let meals = ["Breakfast", "Lunch", "Dinner"];
console.log(meals);

let myName = {};
myName.firstName = "Colin";
myName.lastName = "Hanway";
console.log(myName)

class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let colin = new Person("Colin", "Hanway");
console.log(colin);

let vargus = {
    name: "Vargus",
    hitPoints: 17,
    armorClass: 13,
    description: function () {
        return "My name is " + this.name + " and I have " + this.hitPoints + " and an armor class of " + this.armorClass;
    },
};

console.log(vargus.description())

let ezmereldaString = `{
    "firstName": "Ezmerelda",
    "hitPoints": 27,
    "armorClass": 17
}`;

console.log(ezmereldaString);

let ezmerelda = JSON.parse(ezmereldaString);

console.log(ezmerelda);

let vargusString = JSON.stringify(vargus);

console.log(vargusString);

vargus = JSON.parse(vargusString);

console.log(vargus);

let character = ezmerelda;

let htmlString = "<h1>" + character.firstName + "</h1>";
console.log(htmlString);
document.getElementById("stuff").innerHTML = htmlString;