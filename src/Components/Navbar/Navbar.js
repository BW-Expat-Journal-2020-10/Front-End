import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const welcomeMsg = localStorage.getItem("message");


  const { go } = useHistory();

  return (
    <NavContainer>
      <div className="wrapper">
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
      </div>
    </NavContainer>
    
  );
};

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

    .wrapper{
    height: 70px;
    width:85%;
    display: flex;
    /* padding-left:5%; */
    align-items: center;
    background-color: lightgray;
    border-radius: 20px;
    /* box-sizing: border-box; */

   
    position: fixed;
    justify-content: center;
    }
    h1 {
        color: gray;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.15rem;
        line-height: 1;
        margin-left:5%;
    }
    .nav {  
     
      display:flex;
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
