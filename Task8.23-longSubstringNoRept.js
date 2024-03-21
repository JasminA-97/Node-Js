// 23.  Write a function to find the longest substring without repeating characters in a given string.

const prompt = require('prompt-sync')();

const isValidNumber = (s) => /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i.test(s.trim());

// Input from the user
const input = prompt('Enter a string to check if it is a valid number: ');

// Check if the input is a valid number
console.log(isValidNumber(input));
