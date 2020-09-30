// ES6 WAY

let arr = [1, 4, 3];

let copy = [...arr];

console.log(copy);

// another method

ark = [2, 5, 6]; // this way i'm not defining it, right ? 

cop = [];

for (i = 0; i < ark.length; i++) {
    cop[i] = ark[i];
}

console.log(cop);

// another method

let first = [5, 8, 45];
let clone = [];
i = -1;

while (++i < first.length) { // if i++ fourth value undefined
    clone[i] = first[i];
}

console.log(clone);