/**
 * 2. Получаешь массив чисел и надо вернуть сумму всех положительных чисел.
 */


const input_1 = [1, -4, 12, 0, -3, 29, -150];
const output_1 = input_1
      .filter(item => item > 0)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(output_1)

//option 2 ( decomposed arr.reduce() )

function customReduce(positiveInts, callback, initialValue) {
  let accumulator = initialValue === undefined ? positiveInts[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;


  for (let i = startIndex; i < positiveInts.length; i++) {
    accumulator = callback(accumulator, positiveInts[i], i, positiveInts);
  }
  return accumulator
}


function customReducer(accumulator, currentValue) {
  return accumulator + currentValue
}

input_1.reduce(customReducer, 0)

const output_2 = customReduce(positiveInts, (accumulator, currentValue) =>
accumulator + currentValue, 0);
console.log(output_2)

//option 3
let output_3 = 0;

for (let i = 0; i < positiveInts.length; i++) {
  if (positiveInts[i] > 0) {
    output_3 += positiveInts[i];
  }
}
console.log(output_3);

// TODO: forEach, map to reduce
