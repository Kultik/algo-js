const readlineSync = require("readline-sync");

let age = readlineSync.question("Tell me, how old are you?");

if (age >= 18) {
    console.log("Come take a peek, boi");
} else {
    console.log("Get outta here, perv");
}