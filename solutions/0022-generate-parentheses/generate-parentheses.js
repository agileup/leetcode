//
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
//
//
// For example, given n = 3, a solution set is:
//
//
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
//


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    const check = function(open, close, str) {
        // terminate
        if (open === n && close === n) {
            result.push(str);
            return;
        }

        // recursion
        if (open < n) {
            check(open+1, close, str+"(");
        }
        if (open > close) {
            check(open, close+1, str+")");
        }
    };
    check(0, 0, "");
    
    return result;
};


