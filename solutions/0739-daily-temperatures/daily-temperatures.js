//
// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.  If there is no future day for which this is possible, put 0 instead.
//
// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
//
//
// Note:
// The length of temperatures will be in the range [1, 30000].
// Each temperature will be an integer in the range [30, 100].
//


/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const len = T.length;
    let result = [];
    let count, checked;
    for (let i = 0; i < len; i++) {
        count = 0;
        checked = false;
        for (let j = i+1; j < len; j++) {
            count++;
            if (T[i] < T[j]) {
                result.push(count);
                checked = true;
                break;
            }
        }
        
        if (!checked) {
            result.push(0);
        }
    }
    
    return result;
};
