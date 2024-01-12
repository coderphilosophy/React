import React from 'react'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { useDispatch } from 'react-redux'

function LogoutBtn(){
    const dispatch = useDispatch()

    const logoutHandler = () => {
        //first logout from the database and then update the values in the store.
        authService.logout()
            .then(() => {
                dispatch(logout())
            })
    }

    return (
        <button
        onClick={logoutHandler}
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        >Logout</button>
    )
}

export default LogoutBtn;
