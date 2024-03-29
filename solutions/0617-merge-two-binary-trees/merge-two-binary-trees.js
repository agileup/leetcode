// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
//
// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
//
// Example 1:
//
//
// Input: 
// 	Tree 1                     Tree 2                  
//           1                         2                             
//          / \                       / \                            
//         3   2                     1   3                        
//        /                           \   \                      
//       5                             4   7                  
// Output: 
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7
//
//
//  
//
// Note: The merging process must start from the root nodes of both trees.
//


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (!t1 && !t2) {
        return null;
    }
    
    let result = new TreeNode;
    
    if (t1 && t2) {
        result.val = t1.val + t2.val;
        result.left = mergeTrees(t1.left, t2.left);
        result.right = mergeTrees(t1.right, t2.right);
    } else if (t1) {
        result.val = t1.val;
        result.left = t1.left;
        result.right = t1.right;
    } else if (t2) {
        result.val = t2.val;
        result.left = t2.left;
        result.right = t2.right;
    }
    
    // console.log(result);
    
    return result;
};
