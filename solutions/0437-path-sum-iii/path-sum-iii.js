// You are given a binary tree in which each node contains an integer value.
//
// Find the number of paths that sum to a given value.
//
// The path does not need to start or end at the root or a leaf, but it must go downwards
// (traveling only from parent nodes to child nodes).
//
// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.
//
// Example:
//
// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
//
//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1
//
// Return 3. The paths that sum to 8 are:
//
// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11
//
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
 * @param {number} sum
 * @return {number}
 */
let count;
var pathSum = function(root, sum) {
    if (!root) return 0;
    
    count = 0;
    let queue = [];
    
    queue.push(root);
    while (queue.length) {
        let node = queue.shift();
        
        check(node, sum);
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return count;
};

var check = function(root, sum) {
    if (!root) return 0;
    
    if (root.val == sum) {
        count++;
    }
    
    check(root.left, sum-root.val);
    check(root.right, sum-root.val);
}
