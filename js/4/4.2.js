// MATH RAN DOM

// let min = 1;
// let max = 10;


function rand10(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
} // the +1 in () is to include max

console.log(rand10(1, 10)); // var can be defined here

// ALTERNATIVE **************

function randy10() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(randy10());

// does also include MAX