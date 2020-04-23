/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function(root) {
//   if (!root) return []
//   const current = root.val
//   const left = preorderTraversal(root.left)
//   const right = preorderTraversal(root.right)
//   return [ current, ...left, ...right ]
// };

// -----------------------------------------
// 非递归
// var preorderTraversal = function(root) {
//   const result = []
//   const stack = []
//   if (!root) return result

//   let current = root
//   while(current || stack.length > 0) {
//     // 找到末端左节点
//     while (current) {
//       stack.push(current)
//       result.push(current.val)
//       current = current.left
//     }
//     // 切换到上一个右节点
//     const father = stack.pop()
//     current = father.right
//   }
//   return result
// };

// -----------------------------------------
// 使用栈的形式, 先放右子节点，然后放左子节点，每次取栈顶操作
var preorderTraversal = function(root) {
  if(!root) return []
  const stack = []
  const res = []
  stack.push(root)
  let current = null
  while(stack.length > 0) {
    current = stack.pop()
    res.push(current.val)
    if (current.right) {
      stack.push(current.right)
    }
    if (current.left) {
      stack.push(current.left)
    }
  }
  return res
}

// @lc code=end

