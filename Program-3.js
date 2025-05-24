// Problem-3: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

//   Output: (examples)
//     1) input a = 1, then output : 1
//     2) input a = 2, then output : 1
//     3) input a = 3, then output : 1, 3, 5
//     4) input a = 4, then output : 1, 3, 5
//     5) input a = 5, then output : 1, 3, 5, 7, 9
//     6) input a = 6, then output : 1, 3, 5, 7, 9
//     .
//     .
//     7) input a = x, then output : 1, 3, 5, 7, .......




function generateOddEvenSeries() {
    let input = prompt("Enter a positive number:");
    let a = parseInt(input);

    if (isNaN(a) || a <= 0) {
        alert("❌ Please enter a valid positive integer.");
        return generateOddEvenSeries();
    }

    count = a % 2 === 0 ? a - 1 : a;
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(2 * i + 1);
    }

    alert("✅ Generated Series: " + result.join(', '));
}