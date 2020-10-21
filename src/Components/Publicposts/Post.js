import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useParams } from "react-router-dom";

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
    <div>
        
      <div key={post.id} className="my-post">
        <h2>Title: {post.title}</h2>
        <img src={post.img_url} alt={post.title} />
        <h3>Body: {post.body}</h3>

      </div>
    </div>
  );
};

export default Post;
