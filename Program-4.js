// Problem-4: Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//   (examples)
//   input: [1,2,8,9,12,46,76,82,15,20,30]
//   Output: 
//     {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




function countMultiples(arr) {
    const result = {};
    for (let i = 1; i <= 9; i++) {
        result[i] = 0;
    }
    for (let num of arr) {
        for (let i = 1; i <= 9; i++) {
            if (num % i === 0) {
                result[i]++;
            }
        }
    }
    return result;
}


function askInput() {
    rl.question("Enter numbers separated by commas (e.g. 1,2,8,9): ", (input) => {

        const arr = input.split(',')
            .map(s => s.trim())
            .map(Number)
            .filter(n => !isNaN(n));

        if (arr.length === 0) {
            console.log("Please enter valid numbers.");
            askInput();
        } else {
            const multiplesCount = countMultiples(arr);
            console.log(multiplesCount);
            rl.close();
        }
    });
}

askInput();
