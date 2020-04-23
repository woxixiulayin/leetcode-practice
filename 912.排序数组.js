/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // return mergeSort(nums, 0, nums.length - 1)
    quickSort(nums, 0, nums.length - 1)
    return nums
};

function quickSort(list, start, end) {
  if (start >= end) return
  const mid = partition(list, start, end)
  quickSort(list, start, mid)
  quickSort(list, mid + 1, end)
}

function partition(list, start, end) {
  let middle = start
  let midValue = list[middle]
  let afterDiv = start + 1
  let i = start

  while(++i <= end) {
    if (list[i] < midValue) {
      swap(list, i, afterDiv)
      afterDiv++
    }
  }
  middle = afterDiv - 1
  swap(list, start, middle)
  return middle
}

function swap(list, a, b) {
  const b_value = list[b]
  list[b] = list[a]
  list[a] = b_value
}
// @lc code=end

// 输入：[5,1,1,2,0,0]
// // 输出：[0,0,1,1,2,5]
let list = [5,1,1,2,0,0]

console.log('result is:', sortArray(list))