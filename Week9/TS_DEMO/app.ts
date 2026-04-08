{
    let message: string = "Hello Typescript World!!!!";
    message += "\n Hello node native TypeScript"
    console.log(message);
}

let hitPoints: number;
let something: any;
let erm: unknown;
let playerName: string;

function add(x: number, y: number): number {
    return x + y;
}

type NumNumNum = (n1: number, n2: number) => number;

let method: NumNumNum;

method = add;

// console.log(method(5, 4))
printBinaryOperation(method, 5, 4);
printBinaryOperation(subtract, 5, 4);

function subtract(x: number, y:number): number {
    return x-y;
}

function printBinaryOperation(expression: NumNumNum, firstNum: number, secondNum: number) {
    console.log(expression(firstNum, secondNum));
}

function monsterAttack(armorClass: number): [boolean, number] {
    let numSides: number = 20;
    let roll: number = Math.floor(numSides * Math.random()) + 1;

    if (roll ==20) {
        return [true, 14];
    } else if (roll == 1 ) {
        return [false, 0];
    } else if (roll >= armorClass) {
        return [true, 7]
    } else return [false, 0];
}
let hit: boolean = false;
let i: number = 0;

while (!hit) {
    const wham: [boolean, number] = monsterAttack(20);
    i = i+1;
    hit = wham[0];
    console.log(wham, i);
}
