/**
 * 6. У тебя есть массив студентов
 *
 * Тебе надо:
 * 1. Вывести имя студента с лучшим средним баллом
 * 2. Вывести всех студентов со средним баллом больше 90
 */

const students = [
  { name: "Alice", scores: [90, 85, 97]},
  { name: "Bob", scores: [75, 80] },
  { name: "Carl"},
];

// const median = arr => {
//   const sorted = arr.slice().sort((a, b) => a - b);
//   const middle = Math.floor(sorted.length / 2);
//   if (sorted.length % 2 === 0) {
//     return (sorted[middle - 1] + sorted[middle]) / 2;
// } else {
//   return sorted[middle];
// }
// };

// 1
function bestAverageMark(students) {
  return students.map(student=>{
    return {
      ...student,
      average: student.scores.reduce((acc, score) => acc + score, 0)/student.scores.length}
  })
  // todo: read about sort
  .sort((a, b) => b.average - a.average)[0]
}

function bestAverageMark_1(students) {
  return students.map(student => ({
      ...student,
      average: !! student.scores
        ? student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length
        : 0

    })
  )
  // todo: read about sort
  // todo: make this undefined safe, when no scores
  .sort((a, b) => b.average - a.average)[0]
}

console.log(bestAverageMark_1(students))
