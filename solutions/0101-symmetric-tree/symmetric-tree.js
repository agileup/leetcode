// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
//
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//
//
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//
//
//  
//
// But the following [1,2,2,null,3,null,3] is not:
//
//
//     1
//    / \
//   2   2
//    \   \
//    3    3
//
//
//  
//
// Note:
// Bonus points if you could solve it both recursively and iteratively.
//


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // return check(root, root);
    if (!root) return true;
    if (!root.left && !root.right) return true;
    if (!root.left || !root.right) return false;
    let q = [];
    q.push(root);
    q.push(root);
    
    while(q.length) {
        let n1 = q.pop();
        let n2 = q.pop();
        
        if (!n1 && !n2) continue;
        if (!n1 || !n2) return false;
        if (n1.val !== n2.val) return false;
        
        q.push(n1.left);
        q.push(n2.right);
        q.push(n1.right);
        q.push(n2.left);
    }
    
    return true;
};

const check = function(n1, n2) {
    if (!n1 && !n2) return true;
    if (!n1 || !n2) return false;
    
    return (n1.val == n2.val) && check(n1.left, n2.right) && check(n1.right, n2.left);
}
