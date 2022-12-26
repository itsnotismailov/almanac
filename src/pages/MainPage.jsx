import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom";

const MainPage = () => {
  const [state, setstate] = useState(100);
  const [input, setinput] = useState("hi im islam");
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setstate (state + 2)}>inc</button>
      <button onClick={() => setstate(state - 10)}>dec</button>
      <h2>{input}</h2>
      <Link to='/about'>
      воон
      </Link>
      
      <input placeholder="search........ so cool" type="text" onChange={(e) => setinput(e.target.value)} />
    </div>
  )
}

export default MainPage