import {useState} from 'react'

/*
IMPORTANT NOTE
Here in this example the reason why we do not use (although we can) onClick = {setColour} is because we need to pass the parameters.

Also we cannot use it like this onClick = {setColour("red")} as in this case the function is directly called and
we would get the return value of the function which we do not want

The best way is onClick = {() => setColour("red")} as in this case we are using a callback function. This also allows us
to pass parameters as well.
*/ 

function App() {
  const [colour, setColour] = useState("lime")

  return (
      <div className="w-full h-screen"
      style={{backgroundColor: colour}}
      >
          <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-10 gap-3 px-2 rounded-full py-2'
          style={{backgroundColor: 'white'}}>
            <div className='flex flex-wrap justify-center gap-2'>
              <button
              onClick={() => setColour("red")}
              className='outline-none px-4 text-white rounded-full'
              style={{backgroundColor: "red"}}
              >Red</button>
            </div>
            <button
              onClick={() => setColour("blue")}
              className='outline-none px-4 text-white rounded-full'
              style={{backgroundColor: "blue"}}
              >Blue</button>
            <button
              onClick={() => setColour("lightgreen")}
              className='outline-none px-4 text-black rounded-full'
              style={{backgroundColor: "lightgreen"}}
              >Green</button>  
            <button
              onClick={() => setColour("Purple")}
              className='outline-none px-4 text-white rounded-full'
              style={{backgroundColor: "Purple"}}
              >Purple</button>  
            <button
              onClick={() => setColour("Lavender")}
              className='outline-none px-4 text-black rounded-full'
              style={{backgroundColor: "Lavender"}}
              >Lavender</button>  
            <button
              onClick={() => setColour("Cyan")}
              className='outline-none px-4 text-black rounded-full'
              style={{backgroundColor: "Cyan"}}
              >Cyan</button>  
            <button
              onClick={() => setColour("Orange")}
              className='outline-none px-4 text-black rounded-full'
              style={{backgroundColor: "Orange"}}
              >Orange</button>  
            </div>
      </div>
  )
}

export default App
