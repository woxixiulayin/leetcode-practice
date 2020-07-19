/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let dp = []
  
  for (let i = 2; i <= n; i++) {
    let count = 0
    for(let j = 0; j < i;j++) {
      count += dp[j]*dp[i-j]
    }
    dp[i] = count
  }
  return dp[n]
};
// @lc code=end

// 42
console.log(numTrees(3))