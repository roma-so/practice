/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function(preorder, inorder) {
  var idx_map = {};
  var pre_idx = 0;
  var helper = function(in_left, in_right){
    // if there is no elements to construct subtrees
    if (in_left === in_right) return null;
      
    // pick up pre_idx element as a root
    var root_val = preorder[pre_idx]
    var root = {
      val: root_val,
    }

    // root splits inorder list
    // into left and right subtrees
    var index = idx_map[root_val]

    // recursion 
    pre_idx += 1
    // build left subtree
    root.left = helper(in_left, index)
    // build right subtree
    root.right = helper(index + 1, in_right)

    return root;
  }
    
  // build a hashmap value -> its index
  inorder.forEach((obj, key) => {
    idx_map[obj] = key;
  });

  return helper(0, inorder.length);
};
