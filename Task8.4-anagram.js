// 4.  Write a program that determines if a given string is an anagram of another string.

const prompt = require('prompt-sync')({ sigint: true });

function isAnagram(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

const string1 = prompt('Enter the first string: ');
const string2 = prompt('Enter the second string: ');

console.log(isAnagram(string1, string2) ? "The strings are anagrams." : "The strings are not anagrams.");
