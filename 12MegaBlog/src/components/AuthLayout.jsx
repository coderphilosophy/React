import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Protected({children, authentication = true}){
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            //if the route requires authentication but the user in unauthenticated it redirects to the login page
            navigate('/login')
        }else if(!authentication && authStatus !== authentication){
            //if the route is for an unauthenticated user but the user is authenticated.
            //it redirects authenticated users away from routes that are intended for unauthenticated users.
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return (
        loader ? <h1>Loading ...</h1> : <>{children}</>
    )
}