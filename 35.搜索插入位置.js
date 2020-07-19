/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const len = nums.length

  // 排除极端情况
  // if (target < nums[0]) return 0
  // if (target > nums[len-1]) return len

  const search = (left, right) => {
    // console.log(left, right)
    if(left >= right) {
      return target <= nums[left]
      ? left
      : left + 1
    }

    const mid = Math.floor((left + right) / 2)

    if (target <= nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }

    return search(left, right)
  }

  return search(0, nums.length - 1)

};
// @lc code=end

// console.log(searchInsert([1,3,5,6], 5) === 2)
// console.log(searchInsert([1,3,5,6], 2) === 1)
// console.log(searchInsert([1,3,5,6], 0) === 0)
// console.log(searchInsert([1,3,5,6], 7) === 4)
// console.log(searchInsert([1,3], 2) === 1)
// console.log(searchInsert([1,2,2,2,2,3], 2) === 1)
// console.log(searchInsert([1,2,2,2,2,3], 2) === 1)