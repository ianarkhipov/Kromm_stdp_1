

document.getElementById("pInput").addEventListener("click", addElement);


let div_1 = (newDiv = null);

function addElement() {
  let newDiv = document.createElement("div")
  newDiv.innerHTML = "<p>Hello, world!</p>";

div_1 = document.getElementById("target_div1");
document.body.insertBefore(newDiv, div_1)
}


