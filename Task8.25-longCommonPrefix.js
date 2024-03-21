// 25.  Write a function to find the longest common prefix among an array of strings.

const prompt = require('prompt-sync')();

const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return ''; // If the array is empty, return an empty string
    
    // Find the shortest string in the array
    const shortest = strs.reduce((acc, curr) => acc.length < curr.length ? acc : curr);

    // Initialize the longest common prefix as the shortest string
    let longestPrefix = shortest;

    // Iterate through each character of the shortest string
    for (let i = 0; i < shortest.length; i++) {
        // Check if the character at the current index is common to all strings
        for (const str of strs) {
            if (str[i] !== shortest[i]) {
                // If not common, update the longest common prefix and exit the loop
                longestPrefix = shortest.substring(0, i);
                break;
            }
        }
        if (longestPrefix !== shortest) break; // If prefix is updated, exit the loop
    }

    return longestPrefix === shortest ? longestPrefix : 'No common prefix';
};

// Input from the user
const input = prompt('Enter strings separated by commas: ');
const strings = input.split(',');

// Output the result
console.log('Longest common prefix:', longestCommonPrefix(strings));
