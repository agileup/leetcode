// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.  
//
// You need to find the shortest such subarray and output its length.
//
// Example 1:
//
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
//
//
//
// Note:
//
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=. 
//
//


/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    // 정렬을 한 뒤 해당 배열을 돌면서 원본 배열의 원소를 각 indexOf 한 결과가 다른 최소값/최대값을 구한다
    // let arr = nums.map(i => i).sort((a, b) => a-b);
    // let min = nums.length, max = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (arr[i] != nums[i]) {
    //         min = Math.min(min, i);
    //         max = Math.max(max, i);
    //     }
    // }
    // return (max - min >= 0) ? max - min + 1 : 0;
    let min = Number.MAX_VALUE, max = -Number.MAX_VALUE;
    let start = 0, end = -1;
    for (let l=0, r=nums.length-1; r>=0; l++, r--) {
        max = Math.max(max, nums[l]);
        if (nums[l] != max) end = l;
        min = Math.min(min, nums[r]);
        if (nums[r] != min) start = r;
        // console.log(start, end, l, r, nums[l], max, nums[r], min);
    }
    return end - start + 1;
};
