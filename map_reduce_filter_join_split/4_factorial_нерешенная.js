/**
 * 4. На вход получаешь число (например 6) надо вывести "факториал" числа 6*5*4*3*2*1 = 720.
 * Сделать это через map и reduce точно можно, может и на так очевидно.
 * Попробуй, не получится - реши через for, while....
 */

// const n = 6;


// function factorialReduce(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return Array.from({ length: n }, (_,))
//   }
// }


console.log(Array.from({length: 6})
  .map((_, index)=> index + 1)
  .reduce((acc, curr) => acc * curr, 1))
