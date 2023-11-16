import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/coderphilosophy')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //         console.log(data)
    //     })
    // }, [])

    return (
        <div className="text-center m-4 bg-gray-600 p-4 text-3xl text-white">GitHub followers: {data.followers}
        <img src={data.avatar_url} alt = "Git Picture" width = {300} /> 
        </div>
    )
}

export default GitHub

export const getGitHubInfo = async () => {
    const response = await fetch('https://api.github.com/users/coderphilosophy')

    return response.json()
}