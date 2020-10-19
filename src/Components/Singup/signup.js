import React, { useState } from "react";
import SignupForm from "./SignupForm";
import axios from "axios";

const initialSignupValues = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: "",
};
const Signup = () => {
  const [signupValues, setSignupValues] = useState(initialSignupValues);

  const inputChange = (e) => {
    setSignupValues({
      ...signupValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://expatjournal-api.herokuapp.com/api/auth/register",
        signupValues
      )
      .then((res) => {
        console.log(res.data);
      });
    setSignupValues(initialSignupValues);
  };

  return (
    <SignupForm
      values={signupValues}
      change={inputChange}
      submit={submitForm}
    />
  );
}

export default Signup
