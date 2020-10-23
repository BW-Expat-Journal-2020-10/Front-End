import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useParams } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styled from "styled-components";
import { Link } from "react-router-dom";
const Post = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <PostWrapper>
     

      <div key={post.id} className="my-post">
        <h2>Title: {post.title}</h2>
        <img src={post.img_url} alt={post.title} />
        <h3>Story: {post.body}</h3>

      </div>
    </PostWrapper>
  );
};



const PostWrapper = styled.div`



`;
export default Post;
