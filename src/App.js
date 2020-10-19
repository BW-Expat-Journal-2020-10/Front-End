import React, { useState  } from "react";
import "./App.css";
import Signup from "./Components/Singup/Signup";
import Signin from "./Components/Signin/Signin";
import NewPost from "./Components/NewPost/NewPost"
import PostPage from "./Components/PostPage/PostPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute"

import { PostContext} from "./context/PostContext";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  
  return (
    <div className="App">
    
      <Router>
        {/* <PrivateRoute exact path="/" component={""} /> */}
        <Navbar />
        <Switch>
        {/* <PostContext.Provider value={{userData}}> */}
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup}/>
          <Route path="/homepage" component={PostPage} />
          <Route path="/newpost" component={NewPost} />
          <Route exact path="/"/>
          {/* </PostContext.Provider> */}
        </Switch>


      </Router>
    </div>
  );
}

export default App;
