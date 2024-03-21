const str = "abc"

const strToArray = str.split('')

strToArray.reverse();

const mirroredStr = strToArray.join('')

console.log(mirroredStr)

function solution(input) {
  let output = ""
  for (let i = input.length; i--; i>= 0) {
    output += input[i]
  }
  return output
}

function solution_2(input) {
  let output = ""
  for (const symbol of input.split('').reverse()){
    output += symbol
  }
  return output
}

function solution_3(input){
  return input
    .split('')
    .reverse()
    .reduce((acc, cur)=>acc+cur, "")
    //todo: understand what is going on

}


console.log(solution_3("abcd"))
