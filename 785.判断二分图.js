/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  // 遍历，找出这样的子集，不存在则为false
  const len = graph.length
  // 用户记录染色结果
  const memo = Array(len).fill(-1)
  const checkOne = index => {
    const flag = memo[index]
    const opposite = flag ^ 1
    const nextVals = graph[index]

    for(let i = 0; i < nextVals.length; i++) {
      const curIndex = nextVals[i]
      if(memo[curIndex] === -1) {
        memo[curIndex] = opposite
        if(!checkOne(curIndex)) return false
      } else if(memo[curIndex] === flag) {
        return false
      }
    }
    return true
  }

  for(let i = 0; i < len; i++) {
    if(memo[i] === -1) {
      memo[i] = 0
    }
    if(!checkOne(i)) return false
  }

  return true
}
// @lc code=end
// console.log(isBipartite([[2,4],[2,3,4],[0,1],[1],[0,1],[7],[9],[5],[],[6],[12,14],[],[10],[],[10],[19],[18],[],[16],[15],[23],[23],[],[20,21],[],[],[27],[26],[],[],[34],[33,34],[],[31],[30,31],[38,39],[37,38,39],[36],[35,36],[35,36],[43],[],[],[40],[],[49],[47,48,49],[46,48,49],[46,47,49],[45,46,47,48]]
//   ) === false)
// console.log(isBipartite([[1,3], [0,2], [1,3], [0,2]]) === true)