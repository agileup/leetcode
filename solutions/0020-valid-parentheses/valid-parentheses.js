// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
//
// 	Open brackets must be closed by the same type of brackets.
// 	Open brackets must be closed in the correct order.
//
//
// Note that an empty string is also considered valid.
//
// Example 1:
//
//
// Input: "()"
// Output: true
//
//
// Example 2:
//
//
// Input: "()[]{}"
// Output: true
//
//
// Example 3:
//
//
// Input: "(]"
// Output: false
//
//
// Example 4:
//
//
// Input: "([)]"
// Output: false
//
//
// Example 5:
//
//
// Input: "{[]}"
// Output: true
//
//


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const temp = [];
    const bracket = {'(':')', '{':'}','[':']'}
    for (let i = 0; i < s.length; i++) {
        switch (s.charAt(i)) {
            case '(':
            case '[':
            case '{':
                temp.push(bracket[s.charAt(i)]);
                break;
            case ')':
            case ']':
            case '}':
                if (temp.pop() !== s.charAt(i)) return false;
                break;
            default: break;
        }
    }
    
    if (temp.length > 0) return false;
        
    return true;
};
