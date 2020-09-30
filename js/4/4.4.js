const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

function multiRand(n) {
    let Arr = [];
    for (i = 0; i < n; i++) {
        Arr.push(rand10());
    }
    return Arr / Arr.length;
}

let snickers = new Number(readlineSync.question("How many panels of cheese ?"));

console.log(multiRand(snickers));


// 3.4 for MIN and MAX