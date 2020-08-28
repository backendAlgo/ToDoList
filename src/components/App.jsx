import React, { useState } from "react";
import List from "./List";



function App() {
  const [liItems, setLiItems] = useState([]);
  const [value, setValue] = useState("");
  function handleChange(e) {
    const value = e.target.value;
    setValue(value);
  }
  function handleClick(e) {
    e.preventDefault();
    if(value.trim() != "") {
      const prevValue = value;
      setLiItems(prev => {
        return (
          [...prev, prevValue]
        );
      });
      setValue("");
    }    
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
      <form onSubmit={handleClick} >
        <input type="text" onChange={handleChange} value={value}/>
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
        
      </div>
      <div>
        <ul>
          {liItems.map(item => <List key={item} text={item}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
