/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let i = 0
    let p = head
    while(i++ < n) {
      p = p.next
    }

    if (p === null) {
      head = head.next
      return head
    }

    let q = head
  
    while(p.next) {
      p = p.next
      q = q.next
    }

    q.next = q.next.next
    return head
};

