/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
// var splitArray = function(nums, m) {
//   const n = nums.length
//   // 从i开始，分成j个自子数组的最大值的最小值
//   const splitStart = (i, j) => {
//     if (n - i < j) return 0

//   }
// };
// 输入：s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// 输出："leetcode"
// 解释：如图所示，"codeleet" 重新排列后变为 "leetcode" 。
var minFlips = function(target) {
  const n = target.length
  let last = 0
  for(let i = n -1; i>=0;i--) {
      last = target[i] === 0 ? last : last + 1
  }
  
  return last
};
// @lc code=end
console.log(minFlips("10111"))

