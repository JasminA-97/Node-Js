// 22.  Write a function to find the longest common prefix string amongst an array of strings.

const prompt = require('prompt-sync')();

const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return '';

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') return '(none)'; // If prefix becomes empty, no common prefix exists
        }
    }
    return prefix;
};

// Input from the user
const strings = prompt('Enter strings separated by commas: ').split(',');

// Output the result
console.log('Longest common prefix:', longestCommonPrefix(strings));
