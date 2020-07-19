/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const N = triangle.length
  let res = new Map()
  const minium = (list, i, j) => {
    let key = ''+i+j
    if (res.has(key)) {
      return res.get(key)
    }
    let data = null
    if (i === N -1) {
       data = list[i][j]
    } else {
      let left = minium(list, i + 1, j)
      let right = minium(list, i + 1, j + 1)
      data = left < right ? left + list[i][j] : right + list[i][j]
    }
    res.set(key, data)
    return data
  }
  return minium(triangle, 0, 0)
};
// @lc code=end

// console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
// console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]))