const subjects = [
  {name: "vova", age: 40},
  {name: "vasya", age: 27}
];

//слоожна


console.log(
  subjects.reduce(
    (acc, subj)=> acc + subj.age,
    0
  ) / subjects.length
)
