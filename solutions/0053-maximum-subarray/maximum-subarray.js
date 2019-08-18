// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//
// Example:
//
//
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
//
//
// Follow up:
//
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
//


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    /*
    1 s
    -3, 4
    
    4 s
    -1, 2, 1
    
    2, 1 s
    -5 4
    */
    
    if (nums.length == 1) return nums[0];
    
    let max = 1<<31, temp = 0;
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        temp += curr;
        if (curr > temp) temp = curr;
        
        if (max < temp) max = temp;
    }
    
    return max;
};
