// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
//
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
//
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//
//
// 	I can be placed before V (5) and X (10) to make 4 and 9. 
// 	X can be placed before L (50) and C (100) to make 40 and 90. 
// 	C can be placed before D (500) and M (1000) to make 400 and 900.
//
//
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
//
// Example 1:
//
//
// Input: "III"
// Output: 3
//
// Example 2:
//
//
// Input: "IV"
// Output: 4
//
// Example 3:
//
//
// Input: "IX"
// Output: 9
//
// Example 4:
//
//
// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
//
//
// Example 5:
//
//
// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
//


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var str = s.split('');
    var result = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'I':
                if (str[i+1] !== 'V' && str[i+1] !== 'X') {
                   result += 1;
                }
                break;
            case 'V':
                if (i > 0 && str[i-1] === 'I') {
                    result += 4;
                } else {
                    result += 5;
                }
                break;
            case 'X':
                if (i > 0 && str[i-1] === 'I') {
                    result += 9;
                } else if (str[i+1] !== 'L' && str[i+1] !== 'C') {
                    result += 10;
                }
                break;
            case 'L':
                if (i > 0 && str[i-1] === 'X') {
                    result += 40;
                } else {
                    result += 50;
                }
                break;
            case 'C':
                if (i > 0 && str[i-1] === 'X') {
                    result += 90;
                } else if (str[i+1] !== 'D' && str[i+1] !== 'M') {
                    result += 100;
                }
                break;
            case 'D':
                if (i > 0 && str[i-1] === 'C') {
                    result += 400;
                } else {
                    result += 500;
                }
                break;
            case 'M':
                if (i > 0 && str[i-1] === 'C') {
                    result += 900;
                } else {
                    result += 1000;
                }
                break;
            default:
                throw new Error('invalid romans');
        }
    }
    
    return result;
};
