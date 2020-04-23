/**
 * https://muyiy.cn/question/program/126.html
 * 有一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；
 最后桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)；
 */
function recover(arr) {
  let originList = []

  if(arr.length % 2 === 0) {
    while(arr.length > 0) {
      originList.push(arr.shift())
      originList.push(arr.pop())
    }
  } else {
    originList.push(arr.pop())
    while(arr.length > 0) {
      originList.push(arr.shift())
      originList.push(arr.pop())
    }
  }
  return originList
}

function poke(arr) {
  let list = []
  if (arr.length % 2 !== 0) {
    list.push(arr.pop())
  }
  while(arr.length > 0) {
    list.unshift(arr.pop())
    list.push(arr.pop())
  }
  return list
}

console.log(recover([1,2,3,4,5,6,7,8,9,10,11,12,13]))
console.log(poke([ 13, 1, 12, 2, 11, 3, 10, 4, 9, 5, 8, 6, 7 ]))