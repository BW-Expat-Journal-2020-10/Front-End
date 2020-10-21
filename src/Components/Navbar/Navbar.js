import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/Deepshot_Logo.jpg";
const Navbar = () => {
  const welcomeMsg = localStorage.getItem("message");


  const { go } = useHistory();

  return (
    <NavContainer>

      <div className="logo-img">
        <img className="logo" src={img} alt="deepshot camera img"></img>
      </div>

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

      <h3>{welcomeMsg}</h3>

    </NavContainer>
    
  );
};

const NavContainer = styled.div`
  height: auto;
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

 /* border:4px solid pink; */
    .logo-img {
      width:15%;
          display:flex;
        margin-left:5%;
        
    }
    .logo{
      margin:auto;
      border-radius:50%;
      width:45%;
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
   h3{
     margin-right:10%;
     letter-spacing:2px; 
   }
}
`;

export default Navbar;
