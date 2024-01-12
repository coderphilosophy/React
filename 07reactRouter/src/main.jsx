import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub, { getGitHubInfo } from './components/GitHub/GitHub.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contactUs",
//         element: <ContactUs />
//       }
//     ]
//   }
// ])

//another method to do routing

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path = '' element = {<Home />} />
      <Route path = 'about' element = {<About />} />
      <Route path = 'contactUs' element = {<ContactUs />} />
      <Route path = 'user/:userid' element = {<User />} />
      <Route 
      loader={getGitHubInfo}
      path = 'github' 
      element = {<GitHub />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)

/*
All the date router objects are passed in the RouterProvider to render the application.

CreateBrowserRouter -> It receives an array as an input which contains information on which component should be rendered on which path.

Loader is basically a more optimized approach than routing. In this the API call is made when we hover over the link, so in a sense this is one step faster than routing approach.
*/