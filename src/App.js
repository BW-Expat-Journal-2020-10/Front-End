import React, { useState } from "react";
import "./App.css";
import Signup from "./Components/Signup/Signup";
import Signin from "./Components/Signin/Signin";
import NewPost from "./Components/NewPost/NewPost";
import PostPage from "./Components/PostPage/PostPage";
import MyPosts from "./Components/MyPosts/MyPosts"

import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import MyPost from "../src/Components/MyPosts/MyPost";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* <PostContext.Provider value={{userData}}> */}

        {localStorage.getItem("token") ? (
          <PrivateRoute exact path="/" component={PostPage} />
         ) : ( 
          <Route exact path="/login" component={Signin} />
         )} 
        <Route path="/signup" component={Signup} />
        <Route path="/newpost" component={NewPost} />
        <PrivateRoute path="/homepage" component={PostPage} />
        <PrivateRoute path="/myposts" component={MyPosts} />
        <Route path="/mypost/:id" component={MyPost} />

        {/* </PostContext.Provider> */}
      </Switch>
    </div>
  );
  //
}

export default App;
