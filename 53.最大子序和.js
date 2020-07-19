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
// 暴力搜索所有数组组合，求出最大值
// var maxSubArray = function(nums) {
//   let curSum = nums[0]
//   let n = nums.length
//   let res = nums[0]
//   for(let i = 0; i < n; i++) {
//     for(let j = i; j < n; j++) {
//       if(i === j) {
//         curSum = nums[i]
//       } else {
//         curSum += nums[j]
//       }
//       // console.log(curSum)
//       res = Math.max(res, curSum)
//     }
//   }
//   return res
// };
// var maxSubArray = function(nums) {
//   let curSum = nums[0]
//   let n = nums.length
//   let res = nums[0]
//   for(let i = 0; i < n; i++) {
//     for(let j = i; j < n; j++) {
//       if(i === j) {
//         curSum = nums[i]
//       } else {
//         curSum += nums[j]
//       }
//       // console.log(curSum)
//       res = Math.max(res, curSum)
//     }
//   }
//   return res
// };
// @lc code=end
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSubArray([1,2]))
