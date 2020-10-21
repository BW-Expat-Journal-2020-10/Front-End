import React, { useState } from "react";
import SignInForm from "./SigninForm";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialSignInValues = {
  username: "",
  password: "",
};

export default function SignIn() {
  const { push, go } = useHistory();
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
        push("/homepage")
        go(0);
      })
     .catch((err) => {
       console.log(err)
     })

    setSignInValues(initialSignInValues);
  };

  return (
<>
    <SignInForm
      change={inputChange}
      values={signInValues}
      submit={submitForm}
    />
  
</>
  );
}
