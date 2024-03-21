// 4. Write a function that take a string as input and reverse only the vowels of a string
// Example 1: s= "hello" , return "holle"
// Example 2: s= "leetcode" , return "leotcede"
function reverseVowels(s) {
    const vowels = 'aeiouAEIOU';
    const chars = s.split('');
    let left = 0, right = s.length - 1;
    while (left < right) {
        // Move left pointer until it points to a vowel
        while (left < right && vowels.indexOf(chars[left]) === -1) {
            left++;
        }
        // Move right pointer until it points to a vowel
        while (left < right && vowels.indexOf(chars[right]) === -1) {
            right--;
        }
        // Swap vowels
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
    }
    return chars.join('');
}

// Test examples
console.log(reverseVowels("hello")); // Output: "holle"
console.log(reverseVowels("leetcode")); // Output: "leotcede"
