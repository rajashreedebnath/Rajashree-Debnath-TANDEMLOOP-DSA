// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//   Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//   Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string




class Calculator {
    constructor(a, b, operation) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.operation = operation.toLowerCase();
    }

    isValid() {
        return !isNaN(this.a) && !isNaN(this.b);
    }

    calculate() {
        switch (this.operation) {
            case "add":
                return `${this.a} + ${this.b} = ${this.a + this.b}`;
            case "subtract":
                return `${this.a} - ${this.b} = ${this.a - this.b}`;
            case "multiply":
                return `${this.a} * ${this.b} = ${this.a * this.b}`;
            case "divide":
                if (this.b === 0) {
                    return "❌ Error: Division by zero!";
                }
                return `${this.a} / ${this.b} = ${this.a / this.b}`;
            default:
                alert("❌ Invalid operation. Use add, subtract, multiply, or divide.");
                return runCalculator();

        }
    }
}

function runCalculator() {
    let a = prompt("Enter the first number:");
    let b = prompt("Enter the second number:");
    let operation = prompt("Enter operation (add, subtract, multiply, divide):");

    const calc = new Calculator(a, b, operation);

    if (!calc.isValid()) {
        alert("❌ Invalid number(s). Please try again.");
        return runCalculator();
    }

    const result = calc.calculate();
    alert("✅ Result: " + result);
}
