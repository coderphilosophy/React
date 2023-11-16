import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

/*the outlet will use the layout as the base. The thing above and below it will remain the same. Wherever the outlet is provided that part will change dynamically.  */
function Layout(){
    return (
        <>
            <Header />
            <Outlet /> 
            <Footer />
        </>
    )
}

export default Layout