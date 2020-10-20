import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

export default function EditPost() {
  const currentId = localStorage.getItem("userId");
  const [postValues, setPostValues] = useState("");

  const change = (e) => {
    setPostValues({
      ...postValues,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/posts", postValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submit}>
      Edit Post
      <div className="inputs">
        <input
          value={postValues}
          placeholder="image"
          name="image"
          type="text"
          onChange={change}
        />

        <input
          value={postValues}
          placeholder="body"
          name="body"
          type="text"
          onChange={change}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
