// 13.  Write a function to find the sum of all prime numbers up to a given number.

const prompt = require('prompt-sync')();

// Function to check if a number is prime
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) return false;
    return true;
};

// Function to find the sum of all prime numbers up to a given number
const sumOfPrimes = limit => {
    let sum = 0;
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
};

// Input from the user
const num = parseInt(prompt('Enter a number: '));

// Output the result
console.log(`Sum of all prime numbers up to ${num}: ${sumOfPrimes(num)}`);
