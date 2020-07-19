/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  const J = matrix.length
  const I = matrix[0].length

  let i = 0
  let j = J -1
  while( i < I && j > -1) {
    let cur = matrix[j][i]
    if (cur < target) {
      i++
    } else if (cur > target) {
      j--
    } else if (cur === target){
      return true
    }
  }

  return false
};
// @lc code=end

// console.log(searchMatrix([
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ], 222))
console.log(searchMatrix([
  [ -5 ]
], -10))