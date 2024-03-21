// 18.  Write a function to find the peak element in an array. A peak element is an element that is greater than its neighbors.
const findPeakElement = (nums) => {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

// Example usage:
const nums = [1, 2, 3, 1];

index=findPeakElement(nums)
console.log('Peak element index:',index); 
console.log('Peak element:', nums[index]);
