import React, {useEffect, useState} from "react";
import {Container, PostForm} from '../components/index'
import service from "../appwrite/configure";
import { useParams, useNavigate } from 'react-router-dom'

function EditPost(){
    const [post, setPost] = useState([])
    //taking the slug value from the url.
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            service.getPost(slug).then((post) => {
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ) : null
}

export default EditPost