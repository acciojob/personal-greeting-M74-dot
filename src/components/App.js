 import React from "react";
 import {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState("");
  function handleInputChange(e){
    setName(e.target.value)
  }
  return (
    <div id="main">
        {/* Do not remove the main div */}
        Enter your name: <br/>
        <input 
          type="text"
          onChange={handleInputChange}
        />
        <p>Hello {name}</p>
    </div>
  )
}

export default App
