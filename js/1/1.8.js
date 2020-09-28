const readlineSync = require("readline-sync");

// STORY TIIIIIIIIIME *****************
let place = readlineSync.question("Where would you go on an Adventure?");
let year = readlineSync.question("What year are we in ?");
let hero = readlineSync.question("Who is the hero?");
// let enemy = readlineSync.question("Consequently, who is the antagonist?");
// let zone = readlineSync.question("Where do they decide to confront each other?");
// let fight = readlineSync.question("How will all of this go down ?");
// let victor = readlineSync.question("Who stands alive at dusk?");
// let future = readlineSync.question("New type of reign?");

console.log("Our story begins in " + place + ". The year is " + year + ". Although he remained hidden for years, " + hero + " arrives.");