/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力搜索所有数组组合，求出最大值, 时间复杂度n2,空间复杂度：1
// var maxSubArray = function(nums) {
//   let curSum = nums[0]
//   let n = nums.length
//   let res = nums[0]
//   for(let i = 0; i < n; i++) {
//     curSum = 0
//     for(let j = i; j < n; j++) {
//         curSum += nums[j]
//       // console.log(curSum)
//       res = Math.max(res, curSum)
//     }
//   }
//   return res
// };
// 动态规划，f(i)表示i为结尾的最大子序列和, 时间复杂度n
var maxSubArray = function(nums) {
  let res = nums[0]
  let len = nums.length
  let dp = nums[0]
  for(let i = 1; i< len; i++) {
    // f（i-1)小于0 则不需要加上f(i-1)，加了就变小了
    // 大于等于0则f(i-1) + nums[i]
    dp = dp < 0 ? nums[i] : dp + nums[i]
    res = Math.max(dp, res)
  }

  return res
};
// @lc code=end
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) === 6)
// console.log(maxSubArray([1,2]) === 3)
// console.log(maxSubArray([1]) === 1)
