/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 循环不使用递归
var search = function(nums, target) {
  let len = nums.length
  if (len === 0) return -1
  let left = 0
  let right = len - 1
  while(true) {
    if (right < left) return -1
    let mid = Math.floor((right + left) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
};

// @lc code=end
console.log(search([-1,0,3,5,9,12], 9))
