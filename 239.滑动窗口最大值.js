/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const slideQ = [] // 记录窗口中的下标
  const res = []
  let i = 0
  if (k > nums.length) return res
  while(i < nums.length) {
    const currentValue = nums[i]
    if (slideQ.length !== 0) {
      // 将要插入的下标大于队首，则踢出队首
      if (i - slideQ[0] >= k) {
        slideQ.shift()
      }
      while(slideQ.length > 0 && currentValue > nums[slideQ[slideQ.length - 1]]) {
        slideQ.pop()
      }
    }
    slideQ.push(i)
    if (i >= k - 1) {
      res.push(nums[slideQ[0]])
    }
    i++
  }

  return res
};
// @lc code=end
// [1,3,-1,-3,5,3,6,7]
// console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
