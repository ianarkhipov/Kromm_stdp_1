/**
 * 5. У тебя есть массив букв
 * надо посчитать каждую букву и вывести объект формата
 * перечня букв с пересчитанным кол-вом
 */

const input = ["a", "c", "a", "d"]

const count = input.reduce((acc, i) => {
  if (acc.hasOwnProperty(i)) {
    acc[i] += 1;
  } else {
    acc[i] = 1;
  }
  return acc;
},{})

//console.log(count)

for (const key in count) {
  console.log(key + ': ' + count[key]);
}
