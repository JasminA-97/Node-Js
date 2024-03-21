// 14.  Write a function to find the longest substring without repeating characters in a given string.
const prompt = require('prompt-sync')();

const longestSubstringWithoutRepeating = (s) => {
    const lastIndex = new Array(256).fill(-1); // Array to store the last index of each character
    let maxLength = 0;
    let start = 0;
    let longestSubstring = '';

    for (let end = 0; end < s.length; end++) {
        const char = s.charCodeAt(end);
        start = Math.max(start, lastIndex[char] + 1); // Update the start index if the current character was seen before
        const currentLength = end - start + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            longestSubstring = s.substring(start, end + 1);
        }
        lastIndex[char] = end; // Update the last index of the current character
    }

    return longestSubstring;
};

// Input from the user
const s = prompt('Enter the string: ');

// Output the result
console.log("Longest substring without repeating characters:", longestSubstringWithoutRepeating(s));
