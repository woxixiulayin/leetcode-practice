/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i = 0
  let j = numbers.length - 1
  while(i<j) {
    const sum = numbers[i] + numbers [j]
    if (sum < target) {
      i++
    } else if (sum > target) {
      j--
    } else {
      break
    }
  }
  return [ i + 1, j + 1]
};
// @lc code=end

// 输出[1,2]
// console.log(twoSum([2, 7, 11, 15], 9))