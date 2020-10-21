import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import { useHistory } from "react-router-dom";
import styled from "styled-components";

const PostPage = () => {
  const [publicPosts, setPublicPosts] = useState([]);
  const { push } = useHistory();
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    fetchPosts();
    fetchNames();
  }, []);

  const fetchPosts = () => {
    axiosWithAuth()
      .get("/api/posts")
      .then((res) => {
        console.log(res)
        setPublicPosts(res.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchNames = () => {
    axiosWithAuth()
    .get("/api/users")
    .then(res => {
      setUsers(res.data)
    })
  }

  return (
    <div>

      <button onClick={() => push("/newpost")}>Create a new post</button>
      {publicPosts.map((post, i) => (
        <div className='main-post' key={i}>
   
          <h2>{post.title}</h2>
          {
            users.map((user) => {
              return post.user_id === user.id ? <h2 key={user.id} >Created By: {user.username}</h2> : null
            })
          }

          <img className="post" src={post.img_url} alt="oops! no_image" />
          <p>{post.body}</p>
  
        </div>
      ))}
    </div>
  );
};

export default PostPage;
