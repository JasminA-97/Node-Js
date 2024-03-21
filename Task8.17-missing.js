// 17. Write a function that finds the first missing positive integer in an unsorted integer array.

const firstMissingPositive = (nums) => {
    const n = nums.length;
    const set = new Set(nums.filter(num => num > 0));

    for (let i = 1; i <= n + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
};

// Example usage:
const nums = [3, 4, -1, 1];
console.log('First missing positive integer:', firstMissingPositive(nums)); // Output: 2
