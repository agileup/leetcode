// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
//
// Input: ["flower","flow","flight"]
// Output: "fl"
//
//
// Example 2:
//
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//
// Note:
//
// All given inputs are in lowercase letters a-z.
//


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = strs[0];
    if (!result) return "";
    
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (result.charAt(j) !== strs[i].charAt(j)) {
                result = result.substring(0, j);
                continue;
            }
        }
    }
    
    return result;
};
