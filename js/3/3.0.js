/*

let sti = ["Geralt", "Lambert"];

console.log("Hello " + sti[0] + " " + sti[1]);

let arr = ["Apple", "Pear", "Banana"];

console.log(arr); // ["Apple", "Pear", "Banana"]

arr.push("Cherry");

console.log(arr); // ["Apple", "Pear", "Banana", "Cherry"]

arr.pop();

console.log(arr); // ["Apple", "Pear", "Banana"]

arr.pop();

console.log(arr);

*/

// ITERATIONS

let ant = ["Apple", "Pear", "Banana"];

for (let i = 0; i < ant.length; i += 1) {
    console.log("Do you eat a " + ant[i] + "?");
}

let pol = ["Apple", "Pear", "Banana"];

for (let elem of pol) {
    console.log("Do you want to eat a " + elem + "?");
}
