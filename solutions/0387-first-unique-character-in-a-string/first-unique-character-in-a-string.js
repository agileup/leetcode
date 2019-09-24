//
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
//
// Examples:
//
// s = "leetcode"
// return 0.
//
// s = "loveleetcode",
// return 2.
//
//
//
//
// Note: You may assume the string contain only lowercase letters.
//


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // string을 한글자씩 돌면서 해당 레터를 키로 갖고 반복횟수를 값으로 갖는 해시맵을 구성하고 그 후에 해당 해시맵을 돌면서 횟수가 1인경우를 리턴한다
    const len = s.length;
    if (!len) return -1;
    
    const temp = {};
    for (let i = 0; i < len; i++) {
        if (temp[s[i]]) {
            temp[s[i]] += 1;
        } else {
            temp[s[i]] = 1;
        }
    }
    
    for (let k of Object.keys(temp)) {
        if (temp[k] == 1) {
            return s.indexOf(k);
        }
    }
    
    return -1;
};
