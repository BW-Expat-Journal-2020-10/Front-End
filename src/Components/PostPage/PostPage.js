import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import { useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner';
import styled from "styled-components";

import SearchIcon from '@material-ui/icons/Search';

const PostPage = () => {
  const [publicPosts, setPublicPosts] = useState([]);
  const { push } = useHistory();
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false)
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
    fetchNames();
  }, []);


   useEffect(() => {
    setFilteredPosts(
       publicPosts.filter(post => {
        
          return post.title.toLowerCase().includes(inputValue.toLowerCase())


       })
    )
  }, [inputValue, publicPosts])



  const fetchPosts = () => {
    axiosWithAuth()
      .get("/api/posts")
      .then((res) => {
        setLoading(true);
        const data = res.data
        const sorted = data.sort(function(a, b){return a.id - b.id})
        setPublicPosts(sorted.reverse());
        // setPublicPosts(res.data);
        setLoading(false);
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

const filterOnChange = (e) => {

  setInputValue(e.target.value);
};



 if(loading) {
   return (
    <Loader
    type="Puff"
    color="white"
    height={400}
    width={400}
    timeout={3000} //3 secs

 />
   )
 }

  return (
   <HomeWrapper>
    
        <div className="inputs">
         <input  
         id="searchInput"
          type="text"
          value={inputValue} 
          onChange={filterOnChange}
          placeholder="Seach Post By Title" 
          ></input>
          
        </div>

      {loading ? <Loader
        type="Puff"
        color="white"
        height={1000}
        width={900}
        timeout={3000} 
    
     /> : filteredPosts.map((post, i) => (
       <div
       className="main-post"
      onClick={() => push(`/post/${post.id}`)}
       key={post.id}
     > 
    
          <div className="post-header">
            <h2>Title: {post.title}</h2>

            {users.map((user) => {
              return post.user_id === user.id ? (
                <h3 key={user.id} className="creator">
                  Created By: {user.username}
                </h3>
              ) : null;
            })}
          </div>

          <img src={post.img_url} alt={post.title} />
          <p>{post.body}</p>
        </div>
  
      ))}

      </HomeWrapper>

  );
};

const HomeWrapper = styled.div`

.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
}


input {
  width: 400px;
  font-size: 20px;
  outline: 0;
  transition: all 0.9s;
  border-radius: 2%;
  background-color: lightgray;
  padding: 15px;
  border: 1px solid black;
  font-family: "Karma", sans-serif;

  :focus{
    background-color: white;
    border: none
  }
}

`;

export default PostPage;