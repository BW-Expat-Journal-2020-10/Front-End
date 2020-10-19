import React from "react";

export default function SignInForm(props) {
  const { change, values, submit } = props;

  return (
    <form className="container" onSubmit={submit}>
      <div className="inputs">
        <label>
          Username
          <input
            value={values.username}
            name="username"
            type="text"
            onChange={change}
          />
        </label>

        <label>
          Password
          <input
            value={values.password}
            name="password"
            type="text"
            onChange={change}
          />
        </label>
      </div>
      <div className="submit">
          <button>Sign In</button>
      </div>
    </form>
  );
}
