import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

export default function EditPost(props) {

  const { postValues, postId, setPost, post } = props

  const initialFormValues = {
    title: postValues.title,
    body: postValues.body,
    img_url: postValues.img_url,
  };

  const [formValues, setformValues] = useState(initialFormValues);

  const change = (e) => {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    console.log("POST", post)
    axiosWithAuth()
      .put(`/posts/${postId}`, formValues)
      .then((res) => {
        console.log(res);
        console.log("POST IN .THEN", post)
        setPost({
          ...post,
          img_url: res.data.img_url,
          title: res.data.title,
          body: res.data.body,
        })
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submit}>
      Edit Post
      <div className="inputs">
        <input
          value={formValues.img_url}
          placeholder="img_url"
          name="img_url"
          type="text"
          onChange={change}
        />

        <input
          value={formValues.title}
          placeholder="title"
          name="title"
          type="text"
          onChange={change}
        />

        <input
          value={formValues.body}
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
