import React, { useState, useContext } from "react";
import SignInForm from "./SigninForm";
import axios from "axios";
import { PostContext } from "../../context/PostContext";

const initialSignInValues = {
  username: "",
  password: "",
};

export default function SignIn() {
  const [signInValues, setSignInValues] = useState(initialSignInValues);

  const inputChange = (e) => {
    setSignInValues({
      ...signInValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://expatjournal-api.herokuapp.com/api/auth/login",
        signInValues

      )
      .then((res) => {
        console.log("Login request", res.data);
        window.localStorage.setItem("token", res.data.token)
        window.localStorage.setItem("userId", res.data.id)
        window.localStorage.setItem("message", res.data.message)
        // setUserData(res.data)
      });

    setSignInValues(initialSignInValues);
  };

  return (

    <SignInForm
      change={inputChange}
      values={signInValues}
      submit={submitForm}
    />


  );
}
