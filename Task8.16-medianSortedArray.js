// 16. Write a function to find the median of two sorted arrays.

const findMedianSortedArrays = (nums1, nums2) => {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const n = merged.length;
    return n % 2 === 0 ? (merged[n / 2 - 1] + merged[n / 2]) / 2 : merged[Math.floor(n / 2)];
};

// Example usage:
const nums1 = [1, 3];
const nums2 = [2];
console.log('Median:', findMedianSortedArrays(nums1, nums2)); // Output: 2
