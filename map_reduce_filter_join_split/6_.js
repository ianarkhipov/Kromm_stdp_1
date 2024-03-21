/**
 * 6. У тебя есть массив студентов
 *
 * Тебе надо:
 * 1. Вывести имя студента с лучшим средним баллом
 * 2. Вывести всех студентов со средним баллом больше 90
 */

const students = [
  { name: "Alice", scores: [90, 85, 97] },
  { name: "Bob", scores: [75, 80] },
  { name: "Carl", scores: [45, 56, 94]},
];

const median = arr => {
  const sorted = arr.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
} else {
  return sorted[middle];
}
};
