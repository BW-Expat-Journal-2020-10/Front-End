import React, {useState, useEffect, useContext} from "react";
import { PostContext } from "../../context/PostContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
const PostPage = () => {
   const [publicPosts, setPublicPosts] = useState([])
   const { push } = useHistory();

   useEffect(() => {
      fetchPosts()
   }, [])

   const fetchPosts = () => {
    axiosWithAuth().get("/posts")
    .then((res) => {
        console.log(res)
        setPublicPosts(res.data)
    })
    .catch(err => console.log(err))
   }
  return(
    <PostWrapper>
    {publicPosts.map((post, i) => (
        <div key={i}>
        <h1>{post.title}</h1>
        <img className="post" src={post.img_url} alt="oops! no_image"/>
        </div>
    ))}
   <button onClick={() => push("/newpost")}>Create a new post</button>
    </PostWrapper>
  );
};


const PostWrapper = styled.div`
 height: auto;
 
 .post{
     width: 100%;
     object-fit: contain;
 }
`;
export default PostPage;
