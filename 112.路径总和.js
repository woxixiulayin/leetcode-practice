/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  // 深度递归遍历
  // 排除空节点
  if (!root) return false
  // 叶子节点
  const val = root.val
  let nextSum = sum - val
  if(!root.left && !root.right) {
    return nextSum === 0
  }

  return hasPathSum(root.left, sum - val)
  || hasPathSum(root.right, sum - val)
};
// @lc code=end

