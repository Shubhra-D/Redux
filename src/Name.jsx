import React, { useState } from "react";
import { store } from "./store";
import { SET_NAME } from "./action";
import { Counter } from "./Counter";

const Name = () => {
  const [input, setInput] = useState(""); //onchanging the input
  const [name, setName] = useState(""); //on clicking the button


  store.subscribe(()=>{
    setName(store.getState().name)
  })
  return (
    <>
     <div className="app-container">
        <h1>Current Count is {store.getState().count}</h1>
        <h2>{name?`Hello ${name}`:"Enter the Name below"}</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={()=>store.dispatch({type:SET_NAME,payload:input})}>Set Name</button>
    </div>{/**payload should take whatever i am typing */}
    <Counter/>
    </>
  );
};

export default Name;
//input field
