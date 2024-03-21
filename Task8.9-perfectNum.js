// 9.  Write a program to check if a given number is a perfect number (a number equal to the sum of its proper divisors excluding itself).

function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

const prompt=require('prompt-sync')({sigint:true});
const number = parseInt(prompt('Enter a number :')) 
console.log(number + (isPerfectNumber(number) ? " is a perfect number." : " is not a perfect number."));
