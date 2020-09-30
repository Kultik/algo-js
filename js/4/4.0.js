/*

function hello(name) {
    console.log("Hello " + name);
}

function add(a, b) {
    return a + b;
}

console.log("The sum of 2 and 3 is " + add(2, 3));

let myFunction = (a, b) => {
    return a + b;
  }
  
  console.log(myFunction(2, 3)); // 5
  
  myFunction = (a, b) => {
    return a * b;
  }
  
  console.log(myFunction(2, 3)); // 6

*/

// RECURSIVE ***********


function count(i) {
    if (i <= 100) {
        console.log(i);
        count(i + 2);
    }
}

count(2);