// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always exist in the array.
//
// Example 1:
//
//
// Input: [3,2,3]
// Output: 3
//
// Example 2:
//
//
// Input: [2,2,1,1,1,2,2]
// Output: 2
//
//


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const len = nums.length;
    if (len === 1) return nums[0];
    
    const temp = {};
    let result = -1;
    for (let i = 0; i < len; i++) {
        let n = nums[i];
        if (temp[n] === undefined) {
            temp[n] = len/2 - 2;
        } else if (temp[n] <= 0) {
            result = n;
            break;
        } else {
            temp[n]--;
        }
    };
    
    
    return result;
};
