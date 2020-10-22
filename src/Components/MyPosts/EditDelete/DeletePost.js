import React, { useContext } from 'react'
import { axiosWithAuth } from '../../../utils/axiosWithAuth'
import { useHistory } from "react-router-dom"
import { PostContext } from '../../../context/PostContext';


const DeletePost = () => {
    const { push } = useHistory();
    const { post } = useContext(PostContext);

    const deleteRequest = (e) => {
        e.preventDefault()  
       axiosWithAuth()
      
        .delete(`/api/posts/${post.id}`)
        
   .then(res => {
    console.log(res)
       push("/myposts")
   })
    }
    return (
<div>
<button onClick={deleteRequest} className="button-change delete-button">Delete Post</button>
</div>
    )
   
};

export default DeletePost