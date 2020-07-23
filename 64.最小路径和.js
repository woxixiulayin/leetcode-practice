/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const n = grid.length
  const m = grid[0] ? grid[0].length : 0

  if (n === 0 || m === 0) return 0
  for(let i = 1; i < n; i++) {
    grid[i][0] = grid[i-1][0] + grid[i][0] 
  }
  for(let j = 1; j < m; j++) {
    grid[0][j] = grid[0][j-1] + grid[0][j]
  }
  for(let i = 1; i< n; i++) {
    for (let j = 1; j < m;j++) {
      grid[i][j] = Math.min(grid[i-1][j], grid[i][j -1]) + grid[i][j]
    }
  }
  return grid[n-1][m-1]
};
// @lc code=end
// console.log(minPathSum([
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]))
// console.log(minPathSum(
//   [[1,2,3],
// [4,5,6]]))

