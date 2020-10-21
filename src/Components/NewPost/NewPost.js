import React, { useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import * as yup from 'yup'
import schema from './validation/newPostFormSchema'

const NewPost = () => {
  const userId = localStorage.getItem("userId");
  const initialPostValues = {
    user_id: parseInt(userId),
    title: "",
    img_url: "",
    body: "",
  };
  const initialPostFormErrors = {
    img_url: ""
  }

  const [postValues, setPostValues] = useState(initialPostValues);
  const [postFormErrors, setPostFormErrors] = useState(initialPostFormErrors)

  const inputChange = (e) => {
    e.persist()
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setPostFormErrors(initialPostFormErrors)
      })
      .catch((err) => {
        setPostFormErrors({
          ...postFormErrors,
          [e.target.name]: err.errors[0],
        })
      })

    setPostValues({
      ...postValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(postValues);
    axiosWithAuth()
      .post("/posts", postValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="form-container" onSubmit={submitForm}>
        <h2>Create a new Post</h2>

        <div className="errors">
          <div>{postFormErrors.img_url}</div>
        </div>

        <div className="inputs">
          <label>
            Image url
            <input
              value={postValues.image}
              name="img_url"
              type="text"
              onChange={inputChange}
              required
            />
          </label>

          <label>
            Title
            <input
              value={postValues.title}
              name="title"
              type="text"
              onChange={inputChange}
            />
          </label>
        </div>
        <label>
          Story
          <input
            value={postValues.body}
            name="body"
            type="text"
            onChange={inputChange}
          />
        </label>

        <div className="submit">
          <button>Post</button>
        </div>
      </form>
      <h1>Post By My User Id</h1>
    </div>
  );
};

export default NewPost;
