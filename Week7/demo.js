"use strict";

const blech = function() { console.log("Oooooooooop..... acccck!")};

blech();

{
    const volume = function(width, height, depth) {
        return width * height * depth;
    };
    console.log("The volume of the box is: " + volume(2, 3, 4));
}

{
    const volume = function(width=2, height=2, depth=4) {
        return width * height * depth;
    };
    console.log("The volume of the box is: " + volume());
}

const helloWorld = () => {
    console.log("Hello Arrow Functions");
}

helloWorld();

{
    const volume = (width=1, height=2, depth=4) => {
        return width * height * depth;
    };
    console.log("The volume of the box is: " + volume());

    const square = (length) => {
        return length**2;
    }
    const square2 = length => length**2;
    console.log("The area of the square is: " + square(2));
    console.log("The area of the square is: " + square2(2));
}

const vargus = {
    name: "Vargus",
    hitPoints: 17,
    armorClass: 13,
    takeDamage: function(damage) {
        this.hitPoints = damage > this.hitPoints ? 0 : this.hitPoints - damage;
    },
    takePotion: function(healing) {
        const wrappedArrow = () => {
            this.hitPoints = this.hitPoints + healing;
        }
        wrappedArrow();
    }
}

console.log(vargus)
vargus.takeDamage(10);
console.log(vargus)
vargus.takePotion(5);
console.log(vargus)

{
    const mystery = "answer";

    const obj = {
        [mystery]: 42
    }
    console.log(obj)
}

{
    const unlucky = 13;
    const obj = {
        unlucky
    }
    console.log(obj);
}

{
    const PI = Math.PI;
    const YO = Math.E;
    const SQRT2 = Math.SQRT2;
}

const { PI, E, SQRT2 } = Math;

const circle = {
    label: 'myCircle',
    radius: 3
}

{
    const circleArea = (radius) => (PI * radius**2).toFixed(2);
    console.log(circleArea(2))
}

{
    const circleArea = ({radius}, {precision=2}={}) => (PI * radius**2).toFixed(precision);
    console.log(circleArea(circle))
}
{
    const [first,,, last] = [10,20,30,40];
    console.log(first, last)
}

{
    const [first, ...rest] = [10,20,30,40,50,60];
    console.log(first, rest);
}
{
    const data = {
        temp1: '001',
        temp2: '002',
        firstName: 'John',
        lastName: 'Doe',
    }

    const {temp1, temp2, ...person} = data;
    console.log(person);
}
{
    const originalArray = [10,20,30,40,50,60];
    const origPerson = {
        firstName: 'John',
        lastName: 'Doe',
    }

    const newArray = [...originalArray];
    console.log(newArray)

    const newPerson = {...origPerson};
    console.log(newPerson);
}



class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello ${this.name}!`;
    }
}

const person = new Person('Vargus');

const html = `
    <div class="text-primary text-center display-2">
        ${person.greet()}
    </div>
`;

console.log(html)

document.getElementById('main').innerHTML = html;

class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
    greet() {
        console.log(`Hello ${this.name} from the ${this.grade}!`)
    }
}

const mary = new Student("Mary", "3rd Grade");
mary.greet();