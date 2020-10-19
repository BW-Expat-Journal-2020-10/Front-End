import React, {useState, useEffect, useContext} from "react";
import { PostContext } from "../../context/PostContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import { useHistory } from "react-router-dom";
const PostPage = () => {
   const [posts, setPosts] = useState([])
   const { push } = useHistory();

   useEffect(() => {
      fetchPosts()
   }, [])

   const fetchPosts = () => {
    axiosWithAuth().get("/posts")
    .then((res) => {
        console.log(res)
        setPosts(res.data)
    })
    .catch(err => console.log(err))
   }
  return(
    <>
    {posts.map((post, i) => (
        <div key={i}>
        <p >{post.title}</p>
        </div>
    ))}
   <button onClick={() => push("/newpost")}>Create a new post</button>
    </>
  );
};

export default PostPage;