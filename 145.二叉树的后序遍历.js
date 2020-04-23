/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
// 递归
// var postorderTraversal = function(root, list = []) {
//   if (!root) return list
//   postorderTraversal(root.left, list)
//   postorderTraversal(root.right, list)
//   list.push(root.val)
//   return list
// };
// ---------------------------------------
// 非递归, 先左子节点到底，然后回退
// var postorderTraversal = function(root) {
//   const result = []
//   const stack = []
//   if (!root) return result
//   let last = null
//   let current = root
//   while(current || stack.length > 0) {
//     while (current) {
//       stack.push(current)
//       current = current.left
//     }
//     current = stack[stack.length - 1]
//     if (current.right === null || current.right === last) {
//       current = stack.pop()
//       result.push(current.val)
//       last = current
//       current = null
//     } else {
//       current = current.right
//     }
//   }
//   return result
// };

// 使用栈的形式, 先放左子节点，然后放右子节点，每次取栈顶操作，加入到结果数组的首位（逆序）
var postorderTraversal = function(root) {
  if(!root) return []
  const stack = []
  const res = []
  stack.push(root)
  let current = null
  while(stack.length > 0) {
    current = stack.pop()
    res.unshift(current.val)
    if (current.left) {
      stack.push(current.left)
    }
    if (current.right) {
      stack.push(current.right)
    }
  }
  return res
} 
// @lc code=end

