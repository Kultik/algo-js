let arr = [1, 2, 10, 4, 5];

let sum = arr.reduce(function (a, b) {
    return a + b;
}, 0);

// The 0 is the Initial Value : if no initial, the first element in the array will be used

console.log(sum);

let kra = [100, 101, 102];

let add = kra.reduce(function (a, b) {
    return a + b;
});

console.log(add);

function log(a, b, c) {
    return a + b + c;
}
console.log("The sum is " + log(5, 10, 15));