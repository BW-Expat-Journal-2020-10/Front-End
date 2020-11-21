import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Post = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const [likes, setLikes] = useState(0);
  // console.log(likes);
  const increase = () => {
    let newLikes = likes + 1;
    setLikes(newLikes);
    console.log(newLikes);
  };
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
      <Main key={post.id} className="my-post">
        <h2>Title: {post.title}</h2>
        <img src={post.img_url} alt={post.title} />
        <div id="likes" className="like-button">
          <button id="increase" onClick={increase}>
            <h1>&#128076;</h1>
          </button>
          <span className="count">0</span>
        </div>
        <h3> {post.body}</h3>
        <div>
          <form className="form-container">
            <input
              placeholder="type comment here"
              value=""
              name="comments"
              type="text"
            />
            <button className="post">submit</button>
          </form>
        </div>
      </Main>
    </div>
  );
};

const Main = styled.div`
  /* border-bottom: 2px solid rgba(5, 5, 5, 0.4);
  border-left: 4px outset rgba(5, 5, 5, 0.4); */
  border-radius: 2px;
  width: 85%;
  margin: auto;
  margin-bottom: 10%;
  padding: 5% 0;
  background-color: ${(pr) => pr.theme.prime};
  cursor: pointer;
  border: 1px solid ${(pr) => pr.theme.secondaryColor};
  color: ${(pr) => pr.theme.secondaryColor};
  text-shadow: 1px 1px black;
  font-size: 1.2rem;
  box-shadow: 2px 4px 15px 2px black;
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    margin-top: 20px;
  }
  img {
    border-radius: 2px;
  }
  .txt {
    margin-top: 20px;
  }
  #likes {
    width: 10%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  span {
    display: flex;
    justify-content: center;
  }
  #increase {
    margin-top: 10px;
    padding: 1%;
    border-radius: 2px;
    background-color: ${(pr) => pr.theme.white};
    border: 2px solid ${(pr) => pr.theme.primaryColor};
    &:hover {
      border: 2px solid ${(pr) => pr.theme.secondaryColor};
      box-shadow: 1px 1px 5px 1px;
      color: ${(pr) => pr.theme.secondaryColor};
    }
    span {
      padding: 0.2%;
      background-color: white;
      border: 1px solid ${(pr) => pr.theme.black};
    }
  }
  .form-container {
    width: 85%;
    margin: auto;
    margin-top: 30px;
    display: flex;
    box-shadow: 1px 1px 5px 1px;
  }
  input {
    width: 90%;
    height: 5vh;
  }
  .post {
    width: 15%;
    border: 2px solid ${(pr) => pr.theme.secondaryColor};
  }
`;

export default Post;
