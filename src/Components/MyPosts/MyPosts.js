import React, { useEffect, useState } from "react";
import DeletePost from './EditDelete/DeletePost'
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import EditPost from "./EditDelete/EditPost";
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
            <EditPost postId={post.id} postValues={post} >Edit Post</EditPost>
            <DeletePost postId={post.id} >Delete Post</DeletePost>
          </div>
        );
      })}
    </div>
  );
};

export default MyPosts;
