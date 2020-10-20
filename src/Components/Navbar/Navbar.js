import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";




const Navbar = () => {
  const welcomeMsg = localStorage.getItem("message");

  const { go } = useHistory();

  return (
    <NavContainer>
      <h1>
       Dispatch
      </h1>
      <div className="nav">
        {!localStorage.getItem("token") ? (
          <NavLink className="link" activeClassName="active" to="/login">
            Login
          </NavLink>
        ) : (
          <Link
            className="logout"
            to="/"
            onClick={() => {
              localStorage.clear();

              go(0);
            }}
          >
            Logout
          </Link>
        )}
        {!localStorage.getItem("token") ? (
          <NavLink className="link" activeClassName="active" to="/signup">
            SignUp
          </NavLink>
        ) : null}
        
        <NavLink to="/homepage">Home</NavLink>
        <NavLink className="link" to="/myposts">My Posts </NavLink>
      </div>
      <h1>{welcomeMsg}</h1>
    </NavContainer>
  );
};

const NavContainer = styled.div`
    height: 70px;
    display: flex;
    padding-left: 219px;
    align-items: center;
    margin: 10px 10px 0 10px;
    background-color: lightgray;
    border-radius: 20px;
    box-sizing: border-box;

    h1 {
        color: gray;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.15rem;
        line-height: 1;
        margin: 2rem;
    }
    .nav {   
        display: flex;     
        align-items: center;
        
        a {
         text-align: center;
            width: 100%;
            padding: 0px 25px;
           color: black;
            text-decoration: none;
            margin: 20px;

            &:hover{
              color: gray;
          }
        }
        
        a.active{
          color: gray;
          background: lightgray;
      }
   }
   .logout {
     color: red;
   }
}
`;

export default Navbar;