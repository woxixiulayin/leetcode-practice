/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// function linkList (head) {
//   let list = []
//   let cur = head
//   while(cur) {
//     list.push(cur.val)
//     cur = cur.next
//   }
//   return list
// }
var insertionSortList = function(head) {
  // if (head === null || head.next === null) return head
  let cur = head
  let pre = null

  while(cur !== null) {

    let sortedCur = head
    let sortedPre = null
    let changed = false

    // console.log('cur', cur.val, linkList(head))
    while(sortedCur !== cur) {
      if (sortedCur.val > cur.val) {
        pre.next = cur.next

        if (sortedPre !== null) {
          sortedPre.next = cur
        } else {
          head = cur
        }
        cur.next = sortedCur
        changed = true
        break
      }
      sortedPre = sortedCur
      sortedCur = sortedCur.next
    }

    if (changed) {
      cur = pre.next
    } else {
      pre = cur
      cur = cur.next
    }
  }
  return head
};
// @lc code=end
// const node3 = { value: 3, next: null }
// const node1 = { value: 1, next: node3 }
// const node2 = { value: 2, next: node1 }
// const node4 = { value: 4, next: node2 }
// let head = node4

// console.log(linkList(head))
// insertionSortList(head)
// console.log(linkList(head))
