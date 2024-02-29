
const targetDiv = document.getElementById("target_div")
let counter = 1;

document.getElementById("add_button").addEventListener("click", addElement);

function addElement() {
  let newParagraph = document.createElement("p")
  newParagraph.textContent = "Hello, world! " + counter;
  newParagraph.id = "p_" + counter;
  targetDiv.appendChild(newParagraph);
  counter++;
}


