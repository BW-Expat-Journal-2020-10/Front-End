import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

export default function EditPost(props) {

  const initialFormValues = {
    title: props.postValues.title,
    body: props.postValues.body,
    img_url: props.postValues.img_url,
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
    axiosWithAuth()
      .put(`/posts/${props}`, formValues)
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
          value={formValues}
          placeholder="img_url"
          name="img_url"
          type="text"
          onChange={change}
        />

        <input
          value={formValues}
          placeholder="title"
          name="title"
          type="text"
          onChange={change}
        />

        <input
          value={formValues}
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
