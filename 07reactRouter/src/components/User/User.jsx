import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams()
    console.log(userid)
    return (
        <div>User: {userid}</div>
    )
}

export default User