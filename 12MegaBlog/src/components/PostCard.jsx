import React from "react";
import { Link } from 'react-router-dom'
import Service from '../appwrite/configure'

//$id is appwrite syntax
function PostCard({$id, title, featuredImage}){

    return (
       <Link to={`/post/${$id}`}>
            <div  className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={Service.getFilePreview(featuredImage)} alt={title} 
                    className="rounded-xl" />
                </div>
                <h2
                className="text-xl font-bold"
                >{title}</h2>
            </div>
       </Link>
    )
}

export default PostCard