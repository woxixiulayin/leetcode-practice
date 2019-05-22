/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
    let head2 = l2
    let current2 = l2
    let current1 = l1

    while(current1.next) {
      head2 = current2.next

      // current2 = current1.next
      current2.next = current1.next
      current1.next = current2
      
      current1 = current2.next
      current2 = head2
    }
    current1.next = head2
    return l1
};

