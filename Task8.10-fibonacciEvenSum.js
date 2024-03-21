// 10.  Write a program to generate the Fibonacci sequence up to a specified limit and then calculate the sum of all even numbers in the sequence.

const prompt = require('prompt-sync')();

// Function to generate Fibonacci sequence up to a specified limit
function generateFibonacci(limit) {
    const fibonacciSequence = [0, 1]; // Start with 0 and 1
    let nextFibonacci = 0;
    while ((nextFibonacci = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2]) <= limit) {
        fibonacciSequence.push(nextFibonacci);
    }
    return fibonacciSequence;
}

// Function to calculate the sum of even numbers in an array
function sumEvenNumbers(array) {
    return array.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}

// Input from the user
const limit = parseInt(prompt('Enter the limit for the Fibonacci sequence: '));

// Generate Fibonacci sequence up to the specified limit
const fibonacciSequence = generateFibonacci(limit);

// Calculate the sum of all even numbers in the sequence
const evenSum = sumEvenNumbers(fibonacciSequence);

// Output the result
console.log("Fibonacci sequence up to", limit, ":", fibonacciSequence);
console.log("Sum of all even numbers in the sequence:", evenSum);
