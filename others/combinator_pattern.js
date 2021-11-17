const spread = function* (start, end, step = 1) {
  const middle = Math.floor((start + end) / 2)
  let increa = middle + 1
  let decrea = middle

  while ((increa <= end) & (decrea >= start)) {
    if (increa <= end) {
      yield increa
      increa += step
    }

    if (decrea >= start) {
      yield decrea
      decrea -= step
    }
  }
}

console.log([...spread(0, 9, 1)])

const incre = function* (start, end, step = 1) {
  while (start <= end) {
    yield start
    start += step
  }
}

const decre = function* (start, end, step = 1) {
  while (start >= end) {
    yield start
    start -= step
  }
}

const range = function (start, end, step = 1) {
  if (start < end) return incre(start, end, step)
  return decre(start, end, step)
}

const toggle = function* (a, b) {
  while (true) {
    let valueA = a.next()
    let valueB = b.next()
    if (valueA.done && valueB.done) break
    if (!valueA.done) yield valueA.value
    if (!valueB.done) yield valueB.value
  }
}

const spreadB = function (start, end, step = 1) {
  const middle = Math.floor((end + start) / 2)
  return toggle(range(middle, start, step), range(middle + step, end, step))
}

console.log([...spreadB(5, 9, 1)])
