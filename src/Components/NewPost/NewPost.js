import React, { useState } from "react";

const initialPostValues = {
  image: "",
  text: "",
};
const NewPost = () => {
  const [postValues, setPostValues] = useState(initialPostValues);

  const inputChange = (e) => {
    setPostValues({
      ...postValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
      e.preventDefault()
      console.log("submitted")
      
  }

  return (
    <div>
      <form className="form-container" onSubmit={submitForm}>
        <h2>Create a new Post</h2>

        <div className="inputs">
          <label>
            Image url
            <input
              value={postValues.image}
              name="image"
              type="text"
              onChange={inputChange}
            />
          </label>

          <label>
            Text
            <input
              value={postValues.text}
              name="text"
              type="text"
              onChange={inputChange}
            />
          </label>
        </div>

        <div className="submit">
          <button>Post</button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
