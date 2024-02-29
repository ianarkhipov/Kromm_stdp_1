


let div_1 = document.createElement("div")
document.body.insertBefore(div_1, document.getElementById("target_div1"));

let counter = 1;

document.getElementById("pInput").addEventListener("click", addElement);

function addElement() {
  let newParagraph = document.createElement("p")
  newParagraph.textContent = "Hello, world! " + counter;
  newParagraph.id = "p_" + counter;
  div_1.appendChild(newParagraph);

  counter++;
}


