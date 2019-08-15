// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
//
// Example:
//
//
// Input: 
//
// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0
//
// Output: 4
//


/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const height = matrix.length;
    if (height === 0) return 0;
    
    const width = matrix[0].length;
    let arr = [...Array(height)].fill(0).map(x=>new Array(width).fill(0));
    
    let result = 0, max = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i === 0 || j === 0) {
                max = Number(matrix[i][j]);
                arr[i][j] = max;
            } else if (matrix[i][j] == 0) {
                arr[i][j] = 0;
            } else {
                max = Math.min(arr[i-1][j-1], arr[i][j-1], arr[i-1][j]) + 1;
                arr[i][j] = max;
            }
            
            if (result < max) result = max;
        }
    }
    
    return result * result;
};
