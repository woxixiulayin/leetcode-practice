/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
      const current = nums[i]
      const diff = target - current
      const index = map[diff]
      if (index > -1) {
        return [index, i]
      } else {
        map[current] = i
      }
    }
};

