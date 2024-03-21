// 12.  Write a function to check if a number is a prime number.

const prompt = require('prompt-sync')();

const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) return false;
    return true;
};

const num = parseInt(prompt('Enter a number to check if it is prime: '));
console.log(`${num} ${isPrime(num) ? 'is a prime number.' : 'is not a prime number.'}`);
