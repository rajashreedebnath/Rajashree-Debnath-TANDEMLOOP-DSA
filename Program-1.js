// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//   Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//   Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string





const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



class Calculator {
    constructor(a, b, operation) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.operation = operation.toLowerCase();
    }

    calculate() {
        switch (this.operation) {
            case "add":
                console.log(`${this.a} + ${this.b} = `, this.a + this.b);
                break;

            case "subtract":
                console.log(`${this.a} - ${this.b} = `, this.a - this.b);
                break;

            case "multiply":
                console.log(`${this.a} * ${this.b} = `, this.a * this.b);
                break;

            case "divide":
                if (this.b === 0) {
                    console.log(`Error: Division by zero!`);
                } else {
                    console.log(`${this.a} / ${this.b} = `, this.a / this.b);
                }
                break;

            default:
                console.log(`Error: Invalid operation!`);
        }
    }
}




rl.question("Enter the first number: ", (a) => {
    rl.question("Enter the second number: ", (b) => {
        rl.question("Enter the operation (add, subtract, multiply, divide): ", (operation) => {
            const calc = new Calculator(a, b, operation);
            calc.calculate();
            rl.close();
        });
    });
});