import React from "react";
import styled from "styled-components";
import {Link } from "react-router-dom";

export default function SignInForm(props) {
  const { change, values, submit } = props;

  return (
    <SigninWrapper>
      <form className="form container" onSubmit={submit}>
      <h1>LOG IN</h1>
        <div className="inputs">
          <label>
            <div className="label">
          <i className="fas fa-user"></i>Username:
          </div>
            <input
              value={values.username}
              placeholder="Username"
              name="username"
              type="text"
              onChange={change}
              autoComplete="off"
            />
          </label>
          <label>
          <div className="label">
          <i className="fas fa-lock"></i> Password:
          </div>
            <input
              value={values.password}
              placeholder={ "Password"}
              name="password"
              type="password"
              onChange={change}
              autoComplete="off"
            />
          </label>
        </div>
        <div className="submit">
          <button className="inner-button">Sign In</button>
        </div>
        <div className="new-account">
          <p>Not registered yet?</p>
          <Link className="register" to="/signup">Register Here</Link>
        </div>
      </form>
    </SigninWrapper>
  );
}

const SigninWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

h1{
  font-family: "Karma", sans-serif;
}

  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .label{
    width: 200px;
    padding: 0 0px;
    
    text-align: left;
    margin: 0 0 0 70px;

    i{
      margin-right: 2px;
      margin-top: 10px;
    }
    @media (max-width: 3000px) {
     
      justify-content: flex-start;
     
     margin: 10px 0 0 300px;
    }
    @media (max-width: 2500px) {
     
      justify-content: flex-start;
     
     margin: 10px 0 0 250px;
    }
    @media (max-width: 1500px) {
     
      justify-content: flex-start;
     
     margin: 10px 0 0 28px;
    }
    @media (max-width: 2000px) {
     
      justify-content: flex-start;
     
     margin: 10px 0 0 160px;
    }
    @media (max-width: 1500px) {
     
      justify-content: flex-start;
     
     margin: 10px 0 0 100px;
    }
    @media (max-width: 900px) {
     
      justify-content: flex-start;
     
     margin: 10px 0 0 3px;
    }
  }

  .new-account {
    margin-top: 20px;
    a {
      text-decoration: none;
      color: black;  
      font-size: 1.2rem;
    }
  }

  input {
    font-size: 20px;
    outline: 0;
    transition: all 0.9s;
    border-radius: 2%;
    background-color: lightgray;
    padding: 15px;
    border: 1px solid black;

    :focus{
      background-color: white;
      border: none
    }
  }

`;
