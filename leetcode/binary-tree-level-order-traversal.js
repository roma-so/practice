/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
  var output = [];

  function traversal(object, level) {
    if (!object || (!object.val && object.val !== 0)) return;
    if (!output[level]) output[level] = [];
    output[level].push(object.val);
    if (object.left) traversal(object.left, level + 1);
    if (object.right) traversal(object.right, level + 1);
  }

  traversal(root, 0)
  return output;
};
