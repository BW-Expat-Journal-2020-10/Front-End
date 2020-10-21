import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

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
    <div>
      <button onClick={() => push("/newpost")}>Create a new post</button>
      {publicPosts.map((post, i) => (
        <div className='main-post' key={i}>
          <h2>{post.title}</h2>
          <img className="post" src={post.img_url} alt="oops! no_image" />
        </div>
      ))}
    </div>
  );
};

export default PostPage;
