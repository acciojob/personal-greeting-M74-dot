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
        <label htmlFor="ip">Enter your name:</label> <br/>
        <input 
          id="ip"
          type="text"
          value={name}
          onChange={handleInputChange}
        />
        <p>{name && `Hello {name}!`}</p>
    </div>
  )
}

export default App
