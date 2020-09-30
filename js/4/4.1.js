const readlineSync = require("readline-sync");

let length = readlineSync.question("Enter a length :");
let width = readlineSync.question("THE WIDTH, QUICKLY: ");

function calcSurface(length, width) {
    return length * width;
}

console.log("The area of your rectangle is " + calcSurface(length * width));