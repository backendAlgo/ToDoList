import React, { useState } from "react";
import List from "./List";
import InputArea from "./InputArea";



function App() {
  const [liItems, setLiItems] = useState([]);
  
  
  function handleDelete(index) {
    setLiItems((prev) => {
      return prev.filter((value, i) => {
        return index !== i
      })
    });
  }
  function handleClick(value) {
    if(value.trim() != "") {
        setLiItems(prev => {
        return (
            [...prev, value]
        );
        });
    }    
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea handleClick={handleClick} />
      <div>
        <ul>
          {liItems.map((item, index) => <List key={index} id={index} text={item} handleDelete={handleDelete}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
