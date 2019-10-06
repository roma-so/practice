/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var countUnivalSubtrees = function(root) {
  let count = 0;
  
  function isNodeUni(node) {
    if (!root) return 0;

    // base case - if the node has no children this is a univalue subtree
    if (!node.left && !node.right){
      // found a univalue subtree - increment
      count++;
      return true;
    }
    
    var isUniNow = true;

    // check if all of the node's children are univalue subtrees and if they have the same value
    // also recursively call is_uni for children

    if(node.left) {
      isUniNow = isNodeUni(node.left) &&  isUniNow && node.left.val == node.val
    }

    if(node.right) {
      isUniNow = isNodeUni(node.right) &&  isUniNow && node.right.val == node.val
    }

    // increment self.res and return whether a univalue tree exists here
    if (isUniNow) {
      count++;
      return isUniNow;
    }

  }
  
  isNodeUni(root)
  
  return count;
};
