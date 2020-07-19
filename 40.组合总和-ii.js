/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const len = candidates.length
  const resList = []
  // 排序，后面如果出现重复的组合，那他们每个位置的数据会相等
  candidates = candidates.sort((a,b) => a - b)

  const f = (n, curSum, selectList) => {
    if (curSum >= target || n === len) {
      if (curSum === target) {
        // 过滤重复的情况
        if(!resList.some(item => item.every((num, index) => num === selectList[index]))) {
          resList.push(selectList)
        }
      }
      return
    }
    let value =  candidates[n]
    // 不插入
    f(n+1, curSum, [...selectList])
    if (curSum + value <= target) { // 过滤
      // 插入
      f(n+1, curSum + value, [...selectList, value])
    }
  }
  f(0, 0, [])
  return resList
};
// @lc code=end
console.log(combinationSum2([10,1,2,7,6,1,5], 8))
