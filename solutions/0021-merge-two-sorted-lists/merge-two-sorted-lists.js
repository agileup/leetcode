// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
//
// Example:
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
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
var mergeTwoLists = function(l1, l2) {
    let result = new ListNode();
    let temp = result;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            result.next = l1;
            l1 = l1.next;
        } else {
            result.next = l2;
            l2 = l2.next;
        }
        
        result = result.next;
    }
    
    if (l1) {
        result.next = l1;
    }
    if (l2) {
        result.next = l2;
    }
    
    return temp.next;
};
