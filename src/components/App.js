 import React from "react";
 import {useState} from "react";

const App = () => {
  const [name,setName] = useState();
  function handleInputChange(e){
    setName(e.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="ip">Enter your name:</label> <br/>
        <input id="ip" type="text" value={name} onChange={handleInputChange}
        />
        <p>{name && `Hello ${name}!`}</p>
    </div>
  )
}

export default App
