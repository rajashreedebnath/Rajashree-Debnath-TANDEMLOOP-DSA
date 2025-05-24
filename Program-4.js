// Problem-4: Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//   (examples)
//   input: [1,2,8,9,12,46,76,82,15,20,30]
//   Output: 
//     {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}




function countMultiples() {

    let input = prompt("Enter numbers separated by commas (e.g. 1,2,8,9,12,15)");

    if (!input) {
        alert("❌ No input provided.");
        return countMultiples();
    }

    const arr = input.split(',')
        .map(s => parseInt(s.trim()))
        .filter(n => !isNaN(n));

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
    let output = "✅\n";
    for (let i = 1; i <= 9; i++) {
        output += `${i}: ${result[i]}\n`;
    }

    alert(output);
}