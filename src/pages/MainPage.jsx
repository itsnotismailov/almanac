import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom";

const MainPage = () => {
  const [state, setstate] = useState(0);
  const [input, setinput] = useState("hi im islam");
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setstate (state + 1)}>inc</button>
      <button onClick={() => setstate(state - 1)}>dec</button>
      <h2>{input}</h2>
      
      <input placeholder="search" type="text" onChange={(e) => setinput(e.target.value)} />
    </div>
  )
}

export default MainPage