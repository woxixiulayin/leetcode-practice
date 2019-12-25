/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function(intervals, newInterval) {
  const len = intervals.length
  const [ start, end ] = newInterval

  if (len === 0) return [ newInterval ]
  if (start > intervals[len -1][1]) return [ ...intervals, newInterval]
  if (end < intervals[0][0]) return [ newInterval, ...intervals]

  let res = []
  // 受start、end影响生成的区间
  let affectInterval = []
  let i = 0
  for (; i < len; i++) {
    if (start > intervals[i][1]) {
      res.push(intervals[i])
    } else {
      affectInterval[0] = Math.min(intervals[i][0], start)
      break
    }
  }

  for (; i < len; i++) {
    if(end < intervals[i][0]) {
      affectInterval[1] = end
      break
    } else if (end > intervals[i][1]) {
      continue
    } else {
      affectInterval[1] = intervals[i][1]
      i++
      break
    }
  }

  if (affectInterval.length === 1) {
    affectInterval.push(end)
  }

  res.push(affectInterval)

  if (i < intervals.length) {
    res = res.concat(intervals.splice(i))
  }

  return res
};
// @lc code=end
// 输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// 输出: [[1,2],[3,10],[12,16]]
// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))
// [[1,3],[6,9]] [2,5]
// [[1,5], [6,9]]
// console.log(insert([[1,3],[6,9]], [2,5]))
