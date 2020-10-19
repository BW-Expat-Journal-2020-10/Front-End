import React, { useState  } from "react";
import "./App.css";
import Signup from "./Components/Singup/Signup";
import Signin from "./Components/Signin/Signin";
import NewPost from "./Components/NewPost/NewPost"
import PostPage from "./Components/PostPage/PostPage";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute"

import { PostContext} from "./context/PostContext";

function App() {
 
  const [userData, setUserData] = useState({localUserId: 114});
  
  return (
    <div className="App">
     
      <Router>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/newpost">newpost</Link>
        <Link to="/homepage">Home</Link>
        {/* <PrivateRoute exact path="/" component={""} /> */}

        <Switch>
        <PostContext.Provider value={{userData}}>
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup}/>
          <Route path="/homepage" component={PostPage} />
          <Route path="/newpost" component={NewPost} />
          <Route exact path="/"/>
          </PostContext.Provider>
        </Switch>


      </Router>
    </div>
  );
}

export default App;
