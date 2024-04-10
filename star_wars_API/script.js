let request = "https://swapi.dev/api/people/1/"

fetch(request).then((response) => {
  return response.json();
}).then( (data) => {
  let p = document.getElementById("text");
  console.log(data);
  p.innerHTML = `${data.name}, height: ${data.height}, weight: ${data.mass}`;
})

