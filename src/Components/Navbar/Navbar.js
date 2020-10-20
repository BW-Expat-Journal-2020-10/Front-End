import { faGolfBall } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const welcomeMsg = localStorage.getItem("message");

  const { go } = useHistory();

  return (
    <NavContainer>
      <h1>Dispatch</h1>
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
        <NavLink className="link" to="/myposts">
          My Posts{" "}
        </NavLink>
      </div>
      <h1>{welcomeMsg}</h1>
    </NavContainer>
  );
};

const NavContainer = styled.div`
    height: 70px;
    width:85%;
    display: flex;
    /* padding-left:5%; */
    align-items: center;
    margin: 5% 5% 0 5%;
    background-color: lightgray;
    border-radius: 20px;
    /* box-sizing: border-box; */
 /* border:4px solid pink; */
    h1 {
        color: gray;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.15rem;
        line-height: 1;
        margin-left:5%;
    }
    .nav {  display:flex;
       flex-flow:row;   
        width:80%; 
        justify-content:center; 
        align-items: center;
        box-sizing:border-box;
        a {
          display:flex;
          
         text-align: center;
         width:10%;
            padding: 0px 25px;
           color: black;
            text-decoration: none;
            margin: 20px;

            &:hover{
              color: whitesmoke;
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
