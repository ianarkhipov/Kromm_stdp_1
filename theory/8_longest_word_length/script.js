const sentence = "hello i like bananas"

const words = sentence.split (" ");

let longest_word = "";
for (const word of words) {
  if (word.length > longest_word.length){
    longest_word = word
  }
}
// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > longest_word.length) {
//     longest_word = words[i];
//   }
// }



console.log("Самое длинное слово: ", longest_word);


console.log(
  Math.max(
    ...sentence.split(" ").map(word=>word.length)
  )
)
