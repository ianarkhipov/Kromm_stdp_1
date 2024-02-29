

document.getElementById("pInput").addEventListener("click", addElement);

//document.body.onload = addElement;
let div_1 = (newDiv = null);

function addElement() {
  let newDiv = document.createElement("div")
  newDiv.innerHTML = "<h3>Hello, world!</h3>";

div_1 = document.getElementById("target_div1");
document.body.insertBefore(newDiv, div_1)
}


