/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let collection = {}
    const len = nums.length
    let val = null
    for (let i = 0; i < len ; i++) {
      val = nums[i]
      if (collection[val] !== undefined) {
        return [collection[val], i]
      } else {
        collection[target - val] = i
      }
    }
    return []
};
// @lc code=end
console.log(twoSum([2,7,11,15], 9))
