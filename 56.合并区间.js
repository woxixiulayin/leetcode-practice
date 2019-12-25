/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const eleMap = intervals.reduce((res, item) => {
      const [ start, end ] = item
      if (typeof res[start] === 'undefined') {
        res[start] = 0
      }
      res[start] += 1
      if (typeof res[end] === 'undefined') {
        res[end] = 0
      }
      res[end] -= 1
      return res
    }, {})

    eleList = Object.keys(eleMap).map(key => ({ value: Number(key), flag: eleMap[key] })).sort((a, b) => a.value - b.value)

    let count = 0
    let range = []
    let resList = []

    for (let i = 0; i < eleList.length; i++) {
      count += eleList[i].flag

      if (range.length === 0) {
        range.push(eleList[i].value)
      }
      if (count === 0 && range.length === 1) {
        range.push(eleList[i].value)
        resList.push(range)
        range = []
      }

    }

    return resList
};
// @lc code=end

// console.log(merge([[1,4],[5 , 5]]))
