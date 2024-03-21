// 7.  Write a program to find all prime numbers between two given numbers (entered by the user).

const prompt = require('prompt-sync')();

// Input from the user
const lowerLimit = parseInt(prompt('Enter the lower limit: '));
const upperLimit = parseInt(prompt('Enter the upper limit: '));

// Find and display prime numbers between the given range
console.log("Prime numbers between", lowerLimit, "and", upperLimit, "are:");
for (let num = lowerLimit; num <= upperLimit; num++) {
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(num);
    }
}


// const prompt = require('prompt-sync')();

// // Input from the user
// const lowerLimit = parseInt(prompt('Enter the lower limit: '));
// const upperLimit = parseInt(prompt('Enter the upper limit: '));

// // Function to check if a number is prime
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // Find and display prime numbers between the given range
// console.log("Prime numbers between", lowerLimit, "and", upperLimit, "are:");
// for (let num = lowerLimit; num <= upperLimit; num++) {
//     if (isPrime(num)) {
//         console.log(num);
//     }
// }
