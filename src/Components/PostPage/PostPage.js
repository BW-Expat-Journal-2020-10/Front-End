import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import { useHistory } from "react-router-dom";

const PostPage = () => {
  const [publicPosts, setPublicPosts] = useState([]);
  const { push } = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchPosts();
    // fetchNames();
  }, []);

  useEffect(() => {
    fetchNames();
  }, [])
  const fetchPosts = () => {
    axiosWithAuth()
      .get("/api/posts")
      .then((res) => {
        console.log(res);
        
        setPublicPosts(res.data.reverse());
      })
      .catch((err) => console.log(err));
  };

  const fetchNames = () => {
    axiosWithAuth()
      .get("/api/users")
      .then((res) => {
        setUsers(res.data);
      });
  };

  return (
    <div>
      { publicPosts.map((post, i) => (
        <div className="main-post" onClick={() => push(`/post/${post.id}`)} key={post.id}>
          
          <div className="post-header">
            <h2>Title: {post.title}</h2>
            {users.map((user) => {
              return post.user_id === user.id ? (
                <h3 key={user.id} className="creator">Created By: {user.username}</h3>
              ) : null;
            })}
          </div>

          <img className="post" src={post.img_url} alt="oops! no_image" />
          <p>{post.body}</p>
  
        </div>
      ))}
    </div>
  );
};

export default PostPage;
