/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) return []
    const createTree = (start, end) => {
      if (start > end) {
        return [ null ]
      }
      let rootList = []
      for(let i = start; i <= end; i++) {
        const leftList = createTree(start, i - 1)
        const rightList = createTree(i + 1, end)
        for (let j of leftList) {
          for (let k of rightList) {
            const root = {
              val: i,
              left: j,
              right: k
            }
            rootList.push(root)
          }
        }
      }
      return rootList
    }

    return createTree(1, n)
};
// @lc code=end
// console.log(generateTrees(0))
