// 11.  Write a function to generate all permutations of a given string.

const prompt = require('prompt-sync')();

// Function to generate all permutations of a given string
function generatePermutations(str) {
    if (str.length === 1) return [str];
    
    return str.split('').flatMap((char, index) => {
        const remainingChars = str.slice(0, index) + str.slice(index + 1);
        return generatePermutations(remainingChars).map(perm => char + perm);
    });
}

// Input from the user
const str = prompt('Enter a string to generate permutations: ');

// Generate permutations
const allPermutations = generatePermutations(str);

// Output the result
console.log("All permutations of '" + str + "':");
console.log(allPermutations);
