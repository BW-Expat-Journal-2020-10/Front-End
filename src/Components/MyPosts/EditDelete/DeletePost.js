import React from 'react'
import { axiosWithAuth } from '../../../utils/axiosWithAuth'
import { useHistory } from "react-router-dom"


const DeletePost = (props) => {
    const { push } = useHistory()
    const deleteRequest = (e) => {
        e.preventDefault()  
       axiosWithAuth()
      
        .delete(`/api/posts/${props.postId}`)
        
   .then(res => {
    console.log(res)
       push("/myposts")
   })
    }
    return (
<div>
<button onClick={deleteRequest}>delete</button>
</div>
    )
   
};

export default DeletePost