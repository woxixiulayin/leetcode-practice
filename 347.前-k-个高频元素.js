/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const eleMap = nums.reduce((res, item) => {
    if (!res[item]) {
      res[item] = 1
    } else {
      res[item] += 1
    }
    return res
  }, {})

  const eleList = Object.keys(eleMap).map(key => ({
    value: key,
    count: eleMap[key]
  }))

  const less = (a, b) => {
    return a.count < b.count
  }

  // swap函数会写错？
  const swap = (list, x, y) => {
    const temp = list[x]
    list[x] = list[y]
    list[y] = temp
  }

  const parentId = n => Math.floor(n / 2)

  function Heap(list) {
    // 添加一个空的零元素
    this.list = [null].concat(list)
    this.count = 0
  }

  // 添加一个元素， 在末尾添加，然后自下而上堆化
  Heap.prototype.insert = function (ele) {
    this.list.push(ele)
    if (this.list.length < 3) return
    let i = this.list.length - 1
    while (i > 1 && less(this.list[i], this.list[parentId(i)])) {
      swap(this.list, i, parentId(i))
      i = parentId(i)
    }
    // console.log('insert result', this.list)
  }
  
  /**
   * 删除堆顶元素，返回堆顶
   * 将末尾元素放到堆顶，然后自上而下堆化
   */
  Heap.prototype.delete = function () {
    // 删除堆顶，替换成最后一个元素,同时删除最后一个元素!!!
    const top = this.list.splice(1, 1, this.list.pop())

    let i = 1
    const len = this.list.length - 1
    while (true) {
      let pos = i
      if (i * 2 <= len && less(this.list[i * 2], this.list[i])) pos = i * 2
      if ((i * 2 + 1) <= len && less(this.list[i * 2 + 1], this.list[pos])) pos = i * 2 + 1
      if (i === pos) break
      swap(this.list, i, pos)
      i = pos
    }
    return top
  }

  const heap = new Heap([])

  for (let i = 0; i < k; i++) {
    heap.insert(eleList[i])
  }

  let i = k
  while(eleList[i]) {
    heap.insert(eleList[i])
    heap.delete()
    i++
  }

  return heap.list.slice(1).map(item => item.value)

};
