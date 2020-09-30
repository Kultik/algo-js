const readlineSync = require("readline-sync");

let day = new Number(readlineSync.question('Number between 1 and 7: '));

// let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

// console.log(`Your pick was ${pick} and it is related to ${days[pick-1]}`);

let day;
switch (i = day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
// document.getElementById("demo").innerHTML = "Today is " + day;

console.log("Today is " + day);