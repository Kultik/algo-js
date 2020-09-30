// ES6 ***********

let arr = [12, 5624565, 78, 955544126548];

console.log(Math.max(...arr));

// another way

let ark = [5, 9, 3];

let max = ark.reduce(function (a, b) {
    return Math.max(a, b);
});

console.log(max);