import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [users, setUsers] = useState([])
  const { push } = useHistory();

  useEffect(() => {
    const currentId = localStorage.getItem("userId");
    axiosWithAuth()
      .get(
        `https://expatjournal-api.herokuapp.com/api/users/${currentId}/posts`
      )
      .then((res) => {
        setMyPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      axiosWithAuth()
      .get(
        `https://expatjournal-api.herokuapp.com/api/users`
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
          <div onClick={() => push(`/mypost/${post.id}`)} key={post.id}>
            <div className="main-post" key={post.id}>
              <h2>Title: {post.title}</h2>
              <img src={post.img_url} alt={post.title} className="post" />
              <h3>Body: {post.body}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyPosts;
