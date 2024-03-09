
const targetDiv = document.getElementById("target_div");
let counter = 0;
let productNames = [];


document.getElementById("add_button").addEventListener("click", addElement);

function addElement() {
  counter++;
  const productName = document.getElementById("name").value;
  productNames.push(productName);
  const newInnerElement = createInnerElement(counter, productName);
  targetDiv.appendChild(newInnerElement);
  //далее чистим инпут
  document.getElementById("name").value = "";
}

function createInnerElement(idx, productName){
  const newElement = document.createElement("div")
  newElement.style.margin = '10px';
  newElement.id = `inner_element_${idx}`

  const paragraph = document.createElement("p")

  //Тут в idx записывается либо ввод из инпута, либо дефолт
  paragraph.textContent = `${idx}: ${productName || 'Hello, world!'} `;

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
  counter--
  renderAgain()
}

function renderAgain(){
  targetDiv.innerHTML = ''
  let idx = 0
  while (idx < counter){
    idx++
    targetDiv.appendChild(createInnerElement(idx));
  }
}
