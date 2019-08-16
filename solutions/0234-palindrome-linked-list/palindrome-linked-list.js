// Given a singly linked list, determine if it is a palindrome.
//
// Example 1:
//
//
// Input: 1->2
// Output: false
//
// Example 2:
//
//
// Input: 1->2->2->1
// Output: true
//
// Follow up:
// Could you do it in O(n) time and O(1) space?
//


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let count = 0;
    let arr = [];
    while (head) {
        count++;
        arr.push(head.val);
        head = head.next;
    }
    
    if (count === 1) return true;
    
    let half = arr.splice(0, count/2).reverse();
    if (count % 2 !== 0) arr.shift();
    
    return arr.join('') === half.join('');
};
