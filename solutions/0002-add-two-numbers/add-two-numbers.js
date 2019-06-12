// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example:
//
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
//
//


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(), curr = dummy;
    let a, b, sum, temp = 0, val;
    while (l1 || l2) {
        a = l1 === null ? 0 : l1.val;
        b = l2 === null ? 0 : l2.val;
        sum = a + b + temp;
        val = sum % 10;
        temp = parseInt(sum / 10);
        
        curr.next = new ListNode(val);
        curr = curr.next;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    if (temp) curr.next = new ListNode(temp);
    
    return dummy.next;
};
