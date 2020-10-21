import React, { useState, useEffect } from "react";
import SignupForm from "./SignupForm";
import * as yup from "yup";
import schema from "./validation/signupFormSchema";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialSignupValues = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: "",
};

const initialFormErrors = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: "",
};

const initialDisabled = true;
const Signup = () => {
  const [signupValues, setSignupValues] = useState(initialSignupValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const { push, go } = useHistory();

  const inputChange = (e) => {
    e.persist();
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log("errors");
        setFormErrors({
          ...formErrors,
          [e.target.name]: err.errors[0],
        });
      });

    setSignupValues({
      ...signupValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(signupValues);
    axiosWithAuth()
      .post("/api/auth/register", signupValues)
      .then((res) => {
        const signInValues = {
          username: signupValues.username,
          password: signupValues.password,
        };
        axiosWithAuth()
          .post("/api/auth/login", signInValues)
          .then((resolve) => {
            window.localStorage.setItem("token", resolve.data.token);
            window.localStorage.setItem("userId", resolve.data.id);
            window.localStorage.setItem("message", resolve.data.message);
            push("/homepage");
            go(0);
          });
      });
    setSignupValues(initialSignupValues);
  };

  useEffect(() => {
    schema.isValid(signupValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [signupValues]);

  return (
    <SignupForm
      values={signupValues}
      change={inputChange}
      submit={submitForm}
      errors={formErrors}
      disabled={disabled}
    />
  );
};

export default Signup;
