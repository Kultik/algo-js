let i = 1;
let array = [i];

for (let i = 1; i <= 20; i += 1) {
    const element = array[i];
    if (i % 2 === 0) {

        console.log(i / 2);
    }
    else if (i % 2 === 1) {
        console.log(i * 3);
    }
}