import React, { useEffect, useState } from "react";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const currentId = localStorage.getItem("userId");
    axiosWithAuth()
      .get(
        `https://expatjournal-api.herokuapp.com/api/users/${currentId}/posts`
      )
      .then((res) => {
        console.log(res.data);
        setMyPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>My Posts</h1>
      {myPosts.map((post) => {
        return (
          <div key={post.id} >
            <img src={post.img_url} alt={post.title} />
            <h2>Title: {post.title}</h2>
            <h3>Body: {post.body}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default MyPosts;
