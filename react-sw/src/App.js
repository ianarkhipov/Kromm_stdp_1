import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Character} from "./Character"



function App() {
  const [characterId, setCharacterId] = useState(1)

  const increase = ()=> {
    console.log("I am increased")
    setCharacterId(characterId + 1)
  }

  const decrease = () => {
    console.log("i am decreased")
    setCharacterId(characterId - 1)
  }

  return (
    <div className="App">
      <p>
        This is my Star Wars character. Below is character with id: {characterId}
      </p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <Character id={characterId} />
    </div>
  )
}

export default App;
