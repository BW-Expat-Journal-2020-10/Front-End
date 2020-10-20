import React, { useEffect, useState } from "react";
import DeletePost from "./EditDelete/DeletePost";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import EditPost from "./EditDelete/EditPost";
import { useHistory } from "react-router-dom";

const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);
  const { push } = useHistory();

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
          <div onClick={() => push(`/mypost/${post.id}`)}>
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
