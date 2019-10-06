/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var output = [];
  function traversal(object) {
    if (!object || !object.val) return;
    output.push(object.val);
    if (object.left) traversal(object.left);
    if (object.right) traversal(object.right);
  }
  traversal(root)
  return output;
};
