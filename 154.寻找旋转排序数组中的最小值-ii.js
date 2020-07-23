/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let min = nums[0]
  for(let i = 1; i< nums.length; i++) {
    min = Math.min(min, nums[i])
  }

  return min
};
// @lc code=end
// console.log(findMin([1,3,5]) === 1)
// console.log(findMin([2,2,2,0,1]) === 0)
