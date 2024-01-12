import React, { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout} from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  //here we first ask the database the details of the current user. If it returns the data then we can update the values in our store. So now the store contains the information that a user is logged in and the users information.
  //If the database returns null, it means that there is no current user. So we update the store that currently there is no user logged in and set the userData as null.
  //we set the loading variable false as we know about whether a user is logged in or not.
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return loading ? (null) : (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        {/* the <main> tag is used to wrap the primary content of the webpage, separating it from the header and footer.  */}
        <main>
        TODO: {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
