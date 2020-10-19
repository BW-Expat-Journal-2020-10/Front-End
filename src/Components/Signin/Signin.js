import React, { useState } from "react";
import SignInForm from "./SigninForm";
import axios from "axios";

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
        console.log(res.data);
        window.localStorage.setItem("token", res.data.token)
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
