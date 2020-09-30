const readlineSync = require("readline-sync");

let length = readlineSync.question("Enter a length :");
let width = readlineSync.question("THE WIDTH, QUICKLY: ");

function calcSurface(a, b) { //if i put length and width here NaN comes at CL
    return length * width;
}

console.log("The area of your rectangle is " + calcSurface(length * width));