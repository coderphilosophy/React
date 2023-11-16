import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  /*
  uesRef hook
  used when we need the reference of an element.
  Here in this project the problem that we are facing is that when we select the copy button we want the text in the textbox to be selected.
  But we do not have any access to the text of the textbox as both the elements(button and text-box) are not related to each other.
  useRef is used in the case to overcome this problem.

  NOTE: we can do this without useRef as well but we use it to enhance the user experience. Like in this case we could directly select the text in the text-box but using useRef allows us to highlight the selected text. 
  */
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()-=_+[]{}<>,.?"

    for(let i = 1; i <= length; i++){
      let charIndex = Math.floor(Math.random() * (str.length+1))
      pass += str.charAt(charIndex) 
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed])

  /*
  For callback dependency array, they tell us that if any of the dependencies are changed the method is rerun. Otherwise it is not.
  The function value is simply returned without calling the function.
  It focuses more on optimizing the method.

  The dependency array of the useEffect tell us that if there is any change in any of the elements of the dependency array then the function should be rerun.
  */

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center'>
        <h1 className='text-white text-center mb-2'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly

            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min = {6}
            max = {50}
            value = {length}
            className='cursor-pointer'
            onChange = {(e) => {setLength(e.target.value)}}
             />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numAllowed}
            id = "numberInput"
            onChange={() => {
              //callback function gives us access to the previous value
              setNumAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked = {charAllowed}
              id = "characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
