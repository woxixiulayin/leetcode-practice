/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/** 原地排序算法
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // selectSort(nums)
  popSort(nums)
};

function selectSort(list) {
  for(let i = 0; i < list.length; i++) {
    let min = i
    for (let j = i + 1; j < list.length; j++) {
      if (less(list, j, min)) min = j
    }
    if (min !== i) exch(list, min, i)
  }
}

function popSort(list) {
  let n = list.length
  for (let i = 0; i < n; i++) {
    let flag = false // 添加标志，如果没有交换，则表明已经有序
    for(let j = 0; j < n - i - 1; j ++) {
      if (less(list, j + 1, j)) {
        exch(list, j + 1, j)
        flag = true
      }
    }

    if (!flag) break
  }
  // for(let i = list.length - 1; i > 0; i--) {
  //   for(let j = 0; j < i; j++) {
  //     if (less(list, j+1, j)) exch(list, j+1, j)
  //   }
  // }
}

function less(list, i, j) {
  return list[i] < list[j]
}
function exch(list, i, j) {
  const temp = list[i]
  list[i] = list[j]
  list[j] = temp
}

// @lc code=end

// /**
//  * 输入: [2,0,2,1,1,0]
//   输出: [0,0,1,1,2,2]
//  */
// nums = [2,0,2,1,1,0]
// sortColors(nums)
// console.log('res is', nums)
