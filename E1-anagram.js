// 3. Given two strings, s and t, write a function to determine if t is an anagram of s

// Example: s= "dear", t="read", return true. 

// s="rat" , t="cat" return false

function Anagram(str1,str2) {
    if (str1.length != str2.length) {
        return false;
    }

    const sort1 = str1.toLowerCase().split('').sort().join('');
    const sort2 = str2.toLowerCase().split('').sort().join('');

    return sort1 == sort2;
}
const prompt=require('prompt-sync')({sigint:true})
s=prompt('enter string1: ')
t=prompt('enter string2: ')
console.log(Anagram(s,t));

