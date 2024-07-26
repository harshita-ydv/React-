import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  //let Counter = 15
  let [Counter, setCounter] = useState(15)


  
  const addValue = () => {
    // console.log("value added", Math.random());
    Counter = Counter + 1
    setCounter(Counter)
    console.log("clicked", Counter);
  }

 const removeValue = () =>
{
  setCounter(Counter - 1)
}

  return (
    <>
    <h1>React Counter</h1>
    <h2>
      Counter Value: {Counter}
    </h2>
    <button onClick={addValue}>Add Value {Counter}</button>
   <br/>
    <button onClick={removeValue}>remove Value {Counter}</button>
    </>
  )
}

export default App
