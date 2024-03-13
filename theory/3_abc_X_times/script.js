const a = "abc";

let repeated = a.repeat(10);

console.log(repeated);

function stringMultiplier(str, count){
  let output = ""
  for (let i = 0; i<count; i++) {
    output += str
  }
  return output
}

console.log("2", stringMultiplier(a, 10))

