/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

const matchMap = {
  '(': ')',
  ')': '(',
  '{': '}',
  '}': '{',
  '[': ']',
  ']': '[',
}
var isValid = function(s) {
  const stack = []
  const len = s.length

  for (let i = 0; i < len; i++) {
    if (stack.length !== 0 && matchMap[s[i]] === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }

  return stack.length === 0
};
// @lc code=end
// console.log(isValid("()[]{}"))
// console.log(isValid("()[]{"))
