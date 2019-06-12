// Count the number of prime numbers less than a non-negative number, n.
//
// Example:
//
//
// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
//
//


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const arr = [];
    let results = 0;
    
    for (var i = 2; i < n; i++) {
        arr[i] = i;
    }
    
    for (var i = 2; i < n; i++) {
        if (arr[i] === 0) continue;
        
        for (var j = i+i; j < n; j += i) {
            arr[j] = 0;
        }
    }
    
    for (var i = 2; i < n; i++) {
        if (arr[i] !== 0) results++;
    }
    
    return results;
};
