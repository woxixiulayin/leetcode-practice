/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let cur1 = l1
  let cur2 = l2
  let head = new ListNode(0)
  let noop = new ListNode(0) // 哨兵作用
  let cur = head
  let preNode = null // 记录前一个节点，最后用来删除掉尾部的0
  let carry = 0

  while(cur1 || cur2) { // 完全遍历两个链表
    const val = (cur1 || noop).val + (cur2 || noop).val + carry
    if (val > 9) {
      cur.val = val % 10
      carry = 1
    } else {
      cur.val = val
      carry = 0
    }

    cur.next = new ListNode(0)
    preNode = cur
    cur = preNode.next
    cur1 = (cur1 || noop).next // 保持操作统一
    cur2 = (cur2 || noop).next // 保持操作统一
  }

  if (carry > 0) {
    cur.val = carry
    cur.next = null
  } else {
    preNode.next = null
  }
  return head
};

