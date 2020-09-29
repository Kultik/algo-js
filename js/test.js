const readlineSync = require("readline-sync");

// EXERCICE 1.1 - 1.4

// let userName = readlineSync.question('Can you give me your name?');
// let userFirstName = readlineSync.question('Whats your first name?');
// let city = readlineSync.question('Where are you from?');

// console.log("Hello " + userName + " " + userFirstName + " from " + city);

// let name;
// name = Magma;
// let firstName;
// firstName = Xadel;
// let city;
// city = Volvitron;

// EXERCICE 1.5

let userWeight = readlineSync.question("Can you give your weight ?");
let userNumber = readlineSync.question("just gimme a decimal, yo!");
console.log(Math.trunc(userWeight) * Math.trunc(userNumber));

let userNumb1 = readlineSync.question("Gimme a first number yo!");
let userNumb2 = readlineSync.question("gimme another juicy one, yo!");
console.log(userNumb1 % userNumb2);

let userShoeSize = readlineSync.question("Whats your shoe size ?");
let userBirthyear = readlineSync.question("Birthyear?")
console.log(((userShoeSize * 2 + 5) * 50) - userBirthyear + 1766);

