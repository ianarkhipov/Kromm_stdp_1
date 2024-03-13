const sentence = "hello, my name is petya";

function capitalize(sentence) {
  // c++
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ")
}

function capitalize_2(sentence) {
  // python
  const originalWords  = sentence.split(" ")
  const outputWords = []
  for (const word of originalWords) {
    const capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1)
    outputWords.push(capitalizeWord)
  }
  return outputWords.join(" ")
}

function capitalize_3(sentence) {
  return sentence
    .split(' ')
    .map(word=>word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const capitalized = capitalize_3(sentence);
console.log(capitalized)
