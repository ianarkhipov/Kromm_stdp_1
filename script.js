
const targetDiv = document.getElementById("target_div");
let productNames = [];

document.getElementById("add_button").addEventListener("click", addElement);
document.getElementById("name_input").addEventListener("keyup", (event)=>{
  if (event.keyCode === 13) {
    addElement()
  }
})

function addElement() {
  const productName = document.getElementById("name_input").value;
  productNames.push(productName);
  const newInnerElement = createInnerElement(productName, productNames.length);
  targetDiv.appendChild(newInnerElement);
  //далее чистим инпут
  document.getElementById("name_input").value = "";
}

function createInnerElement(productName, idx){
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
  productNames.splice(idx-1, 1)
  renderAgain()
}


function renderAgain(){
  targetDiv.innerHTML = ''
  productNames.forEach((productName, index)=> {
    const newInnerElement = createInnerElement(productName, index+1);
    targetDiv.appendChild(newInnerElement);
  })
}
