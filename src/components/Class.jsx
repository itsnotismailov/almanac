import React from "react";

class Class extends React.Component {
    render() {
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
}