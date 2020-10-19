import React from "react";
import "./App.css";
import Signup from "./Components/Singup/Signup";
import Signin from "./Components/Signin/Signin";
import NewPost from "./Components/NewPost/NewPost"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute"

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>

        {/* <PrivateRoute exact path="/" component={""} /> */}
        <Switch>
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup}/>
          <Route path="/newpost" component={NewPost} />
          <Route exact path="/"/>
        </Switch>


      </Router>
    </div>
  );
}

export default App;
