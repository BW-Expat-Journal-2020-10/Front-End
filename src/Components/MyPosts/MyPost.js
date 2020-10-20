import React, { useState, useEffect } from 'react'
import EditPost from "./EditDelete/EditPost";
import DeletePost from './EditDelete/DeletePost';
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useParams } from "react-router-dom";

const MyPost = () => {
    const [post, setPost] = useState([])
    const {id} = useParams();
    console.log("POST HERE", post)

   useEffect(() => {
        axiosWithAuth().get(`/posts/${id}`)
        .then(res => {
         setPost(res.data)
        })
        .catch((err) => console.log(err))
  }, [])


    return (
        <div>
            <h1>My post</h1> 
            <div key={post.id} >
            <img src={post.img_url} alt={post.title} />
            <h2>Title: {post.title}</h2>
            <h3>Body: {post.body}</h3>
            <EditPost postId={post.id} postValues={post} setPost={setPost} post={post} >Edit Post</EditPost>
            <DeletePost postId={post.id} >Delete Post</DeletePost>
          </div>
        </div>
    )
}

export default MyPost;
