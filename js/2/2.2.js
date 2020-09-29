const readlineSync = require("readline-sync");

let min = readlineSync.question("Give me a minimum");
let max = readlineSync.question("Give me a MAX");
let current = readlineSync.question("enter Current");

if ((current > min) && (current < max)) {
    console.log(current);
} else if (min > max) {
    console.log("Jon?");
}

