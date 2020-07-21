/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 从戳气球改成插入气球，计算怎么插入气球获得最大值
var maxCoins = function(nums) {
  // nums的长度大于0
  const list = [1, ...nums, 1]
  let n = list.length
  const dp = []

  // i为子数组长度，j为起始位置
  // f(i, j) 表示从j位置开始，长度为i的子数组的最大值
  for (let i = 0; i < n - 1; i++) {
    if (!dp[i]) {
      dp[i] = []
    }
    for (let j = 0; j < n - i; j ++) {
      dp[i][j] = 0
    }
  }

  // 从长度为1开始，计算到原始nums的长度
  for(let i = 1; i < n - 1; i++) {
    // 下标开始的位置
    for (let j = 0; j < n - i; j++) {
      let res = 0
      // k为下标
      for(let k = i; k < i + j + 1; k++) {
        res = Math.max(res, dp[i][k] + dp[k][j])
      }
      dp[i][j] = 
    }
  }
};
// @lc code=end
console.log(maxCoins([3,1,5,8]) === 167)
console.log(maxCoins([]) == 0)
console.log(maxCoins([9]) === 9)
console.log(maxCoins([9,76,64,21]) === 116718)

