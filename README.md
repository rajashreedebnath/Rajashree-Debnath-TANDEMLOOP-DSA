# Calculator and Multiples Counter

## Coding Language
This project is implemented in **JavaScript (Node.js)**.



## Description
This project includes:
- A `Calculator` class for basic math operations: add, subtract, multiply, and divide.
- A function that shows odd numbers starting from 1, up to the number the user enters.
- A function that shows odd numbers up to one less if the user enters an even number.
- A function that counts how many numbers in a list are multiples of 1 to 9.



## How to Run
1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Run the program using the command:
3. Follow on-screen prompts to provide input.



## Code Comments

### Calculator Class
- Takes two numbers (`a`, `b`) and an operation string (`add`, `subtract`, `multiply`, `divide`).
- Performs the requested operation.
- Handles division by zero error.


### Odd Numbers Generator

- Takes a positive integer input from the user.
- Generates and displays odd numbers starting from 1 up to the input length.
- Keeps asking until a valid positive integer is entered.


### Odd Numbers Generator (With Even Number Adjustment)

- Takes a positive integer input from the user.
- If the length is even, it generates and displays odd numbers up to one less than the input length.
- If the input is odd, it generates odd numbers up to the input length.
- Keeps asking until a valid positive integer is entered.


### Counting Multiples Function
- Accepts an array of numbers.
- Counts how many numbers are divisible by each number from 1 to 9.
- Returns an object with counts for each divisor.




### User Input Handling
- Uses Node.js `readline` for interactive terminal input.
- Validates inputs and prompts the user again if invalid.
