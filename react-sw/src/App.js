import logo from './logo.svg'
import './App.css'
import {useState} from "react"
// import {Character} from "./Character"



function App() {
  const [characterId, setCharacterId] = useState(1)
  const [characters, setCharacters] = useState({})

  const increase = ()=> {
    console.log("I am increased")
    setCharacterId(characterId + 1)
  }

  const decrease = () => {
    console.log("i am decreased")
    setCharacterId(characterId - 1)
  }

  const getCharacterById = async (id) => {
    const characterFromState = characters[id]
    if (characterFromState) {
      return characterFromState
    }

    await fetch(`https://swapi.tech/api/people/${characterId}/?format=json`)
      .then((res) =>{(res.json())
        .then((data) => {
          //структура запроса
          console.log(data.result)
          setCharacters((oldState) => ({...oldState, [id] : data.result.properties}))
          console.log(characters)
        })
      })
  }



  return (
    <div className="App">
      <p>
        This is my Star Wars character. Below is character with id: {characterId}
      </p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={()=> getCharacterById(characterId)}>GET person</button>
      {/*<Character id={characterId} />*/}
    </div>
  )
}

export default App
