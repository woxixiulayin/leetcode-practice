/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length
  if (len < 2) return 0
  let temp = prices[1] - prices[0]
  let min = Math.min(prices[0], prices[1])
  let current
  for (let i = 2; i < len; i++) {
    current = prices[i]
    temp =  Math.max(current - min, temp)
    min = Math.min(min, current)
  }
  return temp < 0 ? 0 : temp
};
// @lc code=end

