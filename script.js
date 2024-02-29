
const targetDiv = document.getElementById("target_div")
let counter = 0;

document.getElementById("add_button").addEventListener("click", addElement);

function addElement() {
  counter++;
  const newInnerElement = createInnerElement(counter)
  targetDiv.appendChild(newInnerElement);
}

function createInnerElement(idx){
  const newElement = document.createElement("div")
  newElement.style.margin = '10px';
  newElement.id = `inner_element_${idx}`

  const paragraph = document.createElement("p")
  paragraph.textContent = "Hello, world! " + idx;


  const button = document.createElement("button")
  button.innerText = "Remove"
  const myIdxRemover = () => { removeInnerElement(idx) }
  button.addEventListener("click", myIdxRemover)
  // option 2
  // button.addEventListener("click", ()=> {
  //   document.querySelector(`#inner_element_${idx}`).remove()
  // })

  newElement.appendChild(paragraph)
  newElement.appendChild(button)
  return newElement
}

function removeInnerElement(idx) {
  document.querySelector(`#inner_element_${idx}`).remove()
  if (idx === counter) {
    counter--
  }
}
