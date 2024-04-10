let currentCharacterIndex = 1;
const textElement = document.getElementById("text");

function fetchCharacter(index) {
  let request = `https://swapi.dev/api/people/${index}/`

  fetch(request).then((response) => {
    return response.json();
  }).then((data) => {
    let p = document.getElementById("text");
    console.log(data);
    p.innerHTML = `${data.name}, height: ${data.height}, weight: ${data.mass}`;
  });
}

//вспомогательное уравнивание индекса?
fetchCharacter(currentCharacterIndex);

document.getElementById("prev").addEventListener("click", () => {
  if (currentCharacterIndex > 1) {
    currentCharacterIndex--;
    fetchCharacter(currentCharacterIndex);
  }
});
  document.getElementById("next").addEventListener("click", () => {
      currentCharacterIndex++;
      fetchCharacter(currentCharacterIndex);
});


