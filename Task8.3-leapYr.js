// 3.  Write a program that determines if a given year is a century year and a leap year.

const prompt = require('prompt-sync')({ sigint: true });

function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// Example usage:
const year = parseInt(prompt('Enter a year: '));

if (isNaN(year)) {
    console.log("Invalid input. Please enter a valid year.");
} else {
    if (isLeapYear(year)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
    if (year % 100 === 0) {
        console.log(year + " is a century year.");
    } else {
        console.log(year + " is not a century year.");
    }
}
