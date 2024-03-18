/**
 * 5. есть массив чисел [2,5,29] нужно сделать массив где все числа возведены в квадрат
 * 6. есть массив чисел [2,5,29] нужно посчитать сумму всех чисел
 */

const arr = [23, 45, 3, 9];
let new_arr = [];



for (let i = 0; i < arr.length; i++) {
  new_arr.push(arr[i] ** 2);
}
console.log(new_arr);

function quadrater (num, idx, arr) {
  console.log(`I am quadrating element ${num} with index ${idx} of array ${arr}`)
  return num **2
}

// console.log("arr.map", arr.map(quadrater))
console.log(
  "arr.map2",
  arr.map(
    el=> el ** 2
  )
)

// console.log("reduce",
//   arr.reduce(
//     ((acc, cur) => acc + cur),
//     0
//   )
// )

console.log("reduce",
  arr.reduce(
    ((acc, cur, idx,array) => {
      console.log(`I am reducer with acc: ${acc} with cur ${cur} with idx ${idx} with array ${array}`)
      return acc + cur
    }),
    0
  )
)


// arr.map()
// arr.reduce()
// arr.filter()
// arr.find()
// console.log("forEach", arr.forEach(quadrater))

