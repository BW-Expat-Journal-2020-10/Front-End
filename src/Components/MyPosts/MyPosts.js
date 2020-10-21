import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);

  const { push } = useHistory();

  useEffect(() => {
    const currentId = localStorage.getItem("userId");
    axiosWithAuth()
      .get(`/api/users/${currentId}/posts`)
      .then((res) => {
        console.log()
        setMyPosts(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <button onClick={() => push("/newpost")} className="post-button">
        Create a new post
      </button>
      {myPosts.map((post) => {
        return (
            <div className="main-post" key={post.id} onClick={() => push(`/mypost/${post.id}`)}>
              <h2>Title: {post.title}</h2>
              <img src={post.img_url} alt={post.title} className="post" />
              <h3>Story: {post.body}</h3>
            </div>
        );
      })}
    </div>
  );
};

export default MyPosts;
