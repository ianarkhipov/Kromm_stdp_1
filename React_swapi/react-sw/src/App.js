import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [myState] = useState(101)

  const increase = ()=> {
    console.log("I am increased")
  }

  return (
    <div className="App">
     <p>
       This is my React app. It has state: {myState}
     </p>
      <button onClick={increase}>Add</button>
    </div>
  );
}

export default App;
