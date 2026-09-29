import {useState}  from 'react'
import './App.css'

function App() {
  const[counter,setCounter]=useState(0);

  return(
    <>
    <h1>Coffee and React</h1>
    <h2>Counter value:{counter}</h2>
     <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>
  Increase
</button>
    <br />
    <button onClick={() => setCounter(prevCounter => prevCounter>0?prevCounter - 1:0)}>
  Decrease
</button>
<div>
  <input
  style={{
    width:"100px",
    border:"1px solid white",
    margin:"0 5px",
    padding:"0.6em 1.2em",
  }}
  
  type="text"
  ></input>
</div>
    </>
  )
}

export default App
