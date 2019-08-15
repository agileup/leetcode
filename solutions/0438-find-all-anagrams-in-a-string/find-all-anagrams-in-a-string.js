// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
//
// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
//
// The order of output does not matter.
//
// Example 1:
//
// Input:
// s: "cbaebabacd" p: "abc"
//
// Output:
// [0, 6]
//
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
//
//
//
// Example 2:
//
// Input:
// s: "abab" p: "ab"
//
// Output:
// [0, 1, 2]
//
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
//
//


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
//     let result = [], temp = "", check = false;
//     const slen = s.length, plen = p.length;
//     const psort = p.split('').sort().join('');
//     for (let i = 0; i <= slen - plen; i++) {
//         if (check && s[i-1] === s[i+plen-1]) {
//             result.push(i);
//             continue;
//         } 
        
//         temp = s.substr(i, plen);
//         if (temp.split('').sort().join('') === psort) {
//             result.push(i);
//             check = true;
//         } else {
//             check = false;
//         }
//     }
    
//     return result;
    
    let result = [];
    const slen = s.length, plen = p.length;
    if (slen < plen) return result;
    
    let check = {};
    for (let i = 0; i < plen; i++) {
        let c = p[i];
        check[c] = (check[c] || 0) + 1;
    }
    
    let start = 0, end = 0;
    let count = Object.keys(check).length;
    
    while (end < slen) {
        let c = s[end];
        if (check[c] !== undefined) {
            check[c]--;
            if (check[c] === 0) count--;
        }
        end++;
        
        // console.log(start, end, c, count, check);
        while (count === 0) {
            let ch = s[start];
            if (check[ch] !== undefined) {
                check[ch]++;
                if (check[ch] > 0) count++;
            }
            
            if (end - start === plen) result.push(start);
            start++;
        }
    }
    
    return result;
};
