import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  /*
  if I use counter like this then it will not be propagated in the 
  UI of the application.
  so if I have multiple places where the value of counter has to 
  updated on the click of a button then i have to think of some 
  other method.
  using vanilla javascript would not be ideal as we would have to 
  create a lot of references (getElementByID, querySelector, etc..)

  this is where React is beneficial, particularly react hooks.
  Using the useState we can propagate this counter value in the 
  application without needing to create various references.
  */

  //let counter = 15;

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Parshva Gang</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>counter value: {counter}</p>
    </>
  )
}

export default App
