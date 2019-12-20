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

// 找出当次循环的最大值，放到最后
function selectSort(list) {
  for(let i = 0; i < list.length; i++) {
    let min = i
    for (let j = i + 1; j < list.length; j++) {
      if (less(list, j, min)) min = j
    }
    if (min !== i) exch(list, min, i)
  }
  return list
}

// 依次往后交换出最大值
function bubbleSort(list) {
  let n = list.length
  for (let i = 0; i < n; i++) {
    let flag = false // 添加标志，如果没有交换，则表明已经有序
    let max =  n - i - 1
    for(let j = 0; j < max; j ++) {
      if (less(list, j + 1, j)) {
        exch(list, j + 1, j)
        flag = true
      }
    }

    if (!flag) break
  }

  return list
}

// 往前插入正确的位置
function insertSort(list) {
  let n = list.length
  
  for (let i = 1; i < n; i++) {
    let cur = list[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (list[j] > cur) {
        // 这里插入排序比冒泡排序少交换操作，更省时间
        list[j + 1] = list[j]
      } else {
        break
      }
    }

    list[j + 1] = cur
  }

  return list
}

function less(list, i, j) {
  return list[i] < list[j]
}
function exch(list, i, j) {
  const temp = list[i]
  list[i] = list[j]
  list[j] = temp
}

// 归并排序
function mergeSort(list, p, q) {
  if (p >= q) return [ list[p] ]
  const m = Math.floor((p + q) / 2)
  return merge(
    mergeSort(list, p, m),
    mergeSort(list, m + 1, q)
    )
  }
  
function merge(listA, listB) {
  let list = []
  while(listA.length > 0 || listB.length > 0) {
    if (listA.length === 0) {
      // concat连接数组不是在原有数组上添加，而是返回一个全新的数组
      list = list.concat(listB)
      break
    }

    if (listB.length === 0) {
      list = list.concat(listA)
      break
    }

    if (listA[0] < listB[0]) {
      // shift弹出首个元素，unshift塞入首个元素
      list.push(listA.shift())
    } else {
      list.push(listB.shift())
    }
  }

  return list
}


function quickSort(list, p, q) {
  if (p >= q) return
  let m = partition(list, p, q)
  // 递归是对p -> m-1 和 m+1 -> q，不是p -> m
  quickSort(list, p, m - 1)
  quickSort(list, m + 1, q)

  return list
}

// 受元素作为基准元素，基于该元素进行大小归类，并返回基准的位置
function partition(list, p, q) {
  // let m = p
  // let baseValue = list[p]
  // let i = p + 1
  // let j = q
  // while(i < j) {
  //   if (list[i] > baseValue) {
  //     exch(list, i, j--)
  //   } else {
  //     i++
  //   }
  // }

  // m = list[i] > baseValue ? i-1 : i
  // exch(list, p, m)
  // return m
  let baseValue = list[p]
  let i = p + 1 // 小值的
  for (let j = p + 1; j <= q; j++){
    if (list[j] < baseValue) {
      exch(list, i++, j)
    }
  }

  exch(list, p, i - 1)
  return i - 1
}

// @lc code=end

// 输入：[5,1,1,2,0,0]
// // 输出：[0,0,1,1,2,5]
// let list = [5,1,1,2,0,0]

// console.log('result is:', sortArray(list))