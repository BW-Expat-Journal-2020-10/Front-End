import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";


const NavContainer = styled.div`
    height: 70px;
    display: flex;
    padding-left: 219px;
    align-items: center;
    margin: 10px 10px 0 10px;
    background-color: lightgray;
    border-radius: 20px;

    h1 {
        color: green;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.15rem;
        line-height: 1;
        margin: 2rem;
    }
    .nav {

        display: flex;
        margin: 20px;
        
        a {
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

const Navbar = () => {
  const welcomeMsg = localStorage.getItem("message");

  const { go } = useHistory();

  return (
    <NavContainer>
      <h1>
        <i className="fab fa-pagelines"></i> 
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
        <a href=" https://watermyplantsbw4.netlify.app">
          <span>About Us</span>
        </a>

        <NavLink to="/myplant">Home</NavLink>
      </div>
      <h1>{welcomeMsg}</h1>
    </NavContainer>
  );
};
export default Navbar;