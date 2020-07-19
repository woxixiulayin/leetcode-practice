/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // 二维数组，distArray[i][j]，word1的前i个字符转到word2的前j个字符的最短距离
  const distArray = []
  const len1 = word1.length
  const len2 = word2.length
  let value = 0
  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      if (i===0) {
        value = j
      } else if (j===0) {
        value = i
      } else if (word1[i - 1] === word2[j - 1]) {
        value = distArray[i-1][j-1]
      } else {
        value = 1 + Math.min(
          distArray[i-1][j], // 删除
          distArray[i][j-1], // 插入
          distArray[i-1][j-1], // 替换
          )
        }
        if (typeof distArray[i] === 'undefined') {
          distArray[i] = []
        }
        distArray[i][j] = value
      }
  }
  return distArray[len1][len2]
};
// @lc code=end

console.log(minDistance('horse', 's'))