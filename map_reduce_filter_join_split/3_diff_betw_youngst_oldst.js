/**
 * 2. 3. У тебя есть массив "людей" тебе надо вернуть одно число -
 * разницу между самым взрослым и самым молодым
 */


const input = [  {
  name: "John",
  age: 13,
},
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Phil",
    age: 72,
  }
  ]

const ageDiff = input.reduce((acc,
                              cur) => {
  const {age} = cur;
  return {
    min: Math.min(acc.min, age),
    max: Math.max(acc.max, age)
  };
}, { min: Infinity, max: -Infinity});

const diff = ageDiff.max - ageDiff.min;
console.log(diff)
