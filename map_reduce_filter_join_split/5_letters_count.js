/**
 * 5. У тебя есть массив букв
 * надо посчитать каждую букву и вывести объект формата
 * перечня букв с пересчитанным кол-вом
 */

const input = ["a", "c", "a", "d"]

const count = input.reduce((acc, symbol) => {
  if (acc.hasOwnProperty(symbol)) {
    acc[symbol] += 1;
    // ВАЖНО - это мутация!!!
    return acc
  }
  // возвращаем новый объект который включает в себя все ключи-значения аккумулятора плюс ключ [symbol] со значением 1
  // ВАЖНО - это не мутация!!!
  return {...acc, [symbol]: 1}
  // return [...a, 4]
}, {})

//console.log(count)

// for (const key in count) {
//   console.log(key + ': ' + count[key]);
// }


console.log(count)
