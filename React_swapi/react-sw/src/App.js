import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [myState] = useState(101)

  return (
    <div className="App">
     <p>
       This is my React app. It has state: {myState}
     </p>
    </div>
  );
}

export default App;
