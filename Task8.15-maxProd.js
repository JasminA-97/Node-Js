// 15. Write a function that takes an array of integers and returns the maximum product that can be obtained by multiplying any three integers in the array.

const prompt = require('prompt-sync')();

const maxProductOfThree = (nums) => {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const n = nums.length;
    const product1 = nums[0] * nums[1] * nums[n - 1]; // Product of two smallest and the largest number
    const product2 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // Product of three largest numbers
    return Math.max(product1, product2);
};

// Input from the user
const input = prompt('Enter integers separated by commas: ');
const nums = input.split(',').map(Number);

// Output the result
console.log('Maximum product of three integers:', maxProductOfThree(nums));
