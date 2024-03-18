const arrayOfArrays = [ [13, 27, 18, 26, 9], [4, 5, 1, 3], [32, 35,  "39"]];

const flattenedArray = arrayOfArrays.flat();

const biggestNumber = Math.max(...flattenedArray)

console.log(biggestNumber)


let maxNum = 0
for (const array of arrayOfArrays) {
  for (const element of array) {
    if (element>maxNum)
      maxNum = element
  }
}

console.log("2", maxNum)
