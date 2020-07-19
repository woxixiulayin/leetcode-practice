/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 记录以第i个元素结尾的最长子串
  const dp = []
  let len = s.length
  if (len === 0) return 0
  dp[0] = 1
  let res = 1
  for (let i = 1; i < len; i++) {
    // 是否在前一位所在的子串中
    let index = s.slice(i - dp[i -1], i).indexOf(s[i])
    if (index === -1) { // 不在子串
      dp[i] = dp[i-1] + 1
    } else { // 在子串中
      dp[i] = dp[i-1] - index
    }
    res = Math.max(res, dp[i])
  }
  return res
};
// @lc code=end
console.log(lengthOfLongestSubstring('dvdf'))