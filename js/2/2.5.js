const readlineSync = require("readline-sync");

// let favNumber;

// while (favNumber != 42) {
//     favNumber = new Number(readlineSync.question('Your favorite number? '));

//     if (favNumber != 42) console.log("Are you sure?");
// }

let code = new Number(readlineSync.question('What is your favourite number ? '));

while (code != 42) {
    code = new Number(readlineSync.question('Are you sure ? Try again : '));
}