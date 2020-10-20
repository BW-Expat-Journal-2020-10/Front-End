import React, { useState, useEffect, useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
const PostPage = () => {
  const [publicPosts, setPublicPosts] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axiosWithAuth()
      .get("/posts")
      .then((res) => {
        console.log(res);
        setPublicPosts(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <PostWrapper>
      <button onClick={() => push("/newpost")}>Create a new post</button>
      {publicPosts.map((post, i) => (
        <div className='main-post' key={i}>
          <h1>{post.title}</h1>
          <img className="post" src={post.img_url} alt="oops! no_image" />
        </div>
      ))}
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  height: auto;

  .post {
    width: 100%;
    object-fit: contain;
  }

  .main-post{
    border-bottom:2px solid rgba(5,5,5,.4);
    border-left:4px outset rgba(5,5,5,.4);
    border-radius:10px;
    width:65%;
    margin:5% auto;
    padding:8% 10%;
    background-color:rgba(2,2,2,.1);
  }
  
`;
export default PostPage;
