// 5.  Write a program that simulates a basic calculator capable of performing addition, subtraction, multiplication, and division. The program should prompt the user to enter two numbers and an operator (+, -, *, /), then output the result of the operation.

const prompt = require('prompt-sync')();

function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        default:
            return "Invalid operator";
    }
}

const num1 = parseFloat(prompt('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));
const operator = prompt('Enter the operator (+, -, *, /): ');

const result = calculator(num1, num2, operator);
console.log("Result:", result);
