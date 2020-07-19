/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxIndex = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    // 当前i处于可访问区域，则更新最大值
    if (i <= maxIndex) {
      maxIndex = Math.max(maxIndex, nums[i] + i)
    } else {
      return false
    }
  }

  return true
};
// @lc code=end

