// 6.  Write a program to generate the Fibonacci sequence up to a certain number of terms (entered by the user).

const prompt = require('prompt-sync')();

const numberOfTerms = parseInt(prompt('Enter the number of terms: '));

let prev = 0, curr = 1;
console.log("Fibonacci sequence:");
for (let i = 0; i < numberOfTerms; i++) {
    console.log(prev);
    [prev, curr] = [curr, prev + curr];
}
