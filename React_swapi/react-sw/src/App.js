import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Character} from "./Character"

import {A, B} from "./my-file";

function App() {
  const [count, setCount] = useState(0)

  const increase = ()=> {
    console.log("I am increased")
    setCount(count + 1)
  }

  const decrease = () => {
    console.log("i am decreased")
    setCount(count - 1)
  }

  return (
    <div className="App">
      <p>
        This is my React app. It has state: {count}
      </p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <Character name ={"Vasya"} x={count}/>
      <Character name ={"Petya"} x={count}/>
    </div>
  )
}

export default App;
