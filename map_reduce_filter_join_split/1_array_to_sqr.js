/**
 * 1. Получаешь массив чисел и возвращаешь массив где все числа возведены к квадрат.
 * Твой код должен не падать с "ошибочными данными".
 */


const input_1 = [1, 2, 4,5];
const output_1 = input_1.map(inputItem => {
  return inputItem ** 2
})
console.log(output_1)

const input_2 = [1, 2, "3"]
const output_2 = input_2.map(inputItem => {
  parseInt(inputItem)
  return inputItem ** 2
})
console.log(output_2)

const input_3 = [2, {}, [], null, undefined, "ilya"]
const output_3 = input_3.map(inputItem => {
  if (inputItem === null || inputItem === undefined) {
    return NaN;
  } else {
    return parseInt(inputItem) ** 2;
  }
  // return inputItem ** 2
})
console.log(output_3)

