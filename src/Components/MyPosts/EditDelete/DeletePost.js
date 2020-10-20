import React from 'react'
import { axiosWithAuth } from '../../../utils/axiosWithAuth'


const DeletePost = (props)=>{
    const deleteRequest = (e) => {
        e.preventDefault()  
       axiosWithAuth()
        .delete(`https://expatjournal-api.herokuapp.com/api/posts/${props.postId}`)
   .then(res =>{
       console.log(res)
   })
    }
    return (
<div>
<button onClick={deleteRequest}>delete</button>
</div>
    )
   
};

export default DeletePost