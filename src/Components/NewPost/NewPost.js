import React, { useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const NewPost = () => {
  const userId = localStorage.getItem("userId");
  const initialPostValues = {
    user_id: parseInt(userId),
    title: "",
    img_url: "",
    body: "",
  };

  const [postValues, setPostValues] = useState(initialPostValues);

  const inputChange = (e) => {
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
