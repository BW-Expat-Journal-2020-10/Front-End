import React from "react"

export default function SignupForm (props) {
    const {values, change, submit, errors, disabled} = props

    return (
       <form className="form container" onSubmit={submit}>
           <div className="errors">
               <div>{errors.username}</div>
               <div>{errors.password}</div>
               <div>{errors.first_name}</div>
               <div>{errors.last_name}</div>
               <div>{errors.email}</div>
           </div>
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

               <label>
                   First Name
                   <input 
                    value={values.first_name}
                    name="first_name"
                    type="text"
                    onChange={change}
                    />
               </label>

               <label>
                   Last Name
                   <input 
                    value={values.last_name}
                    name="last_name"
                    type="text"
                    onChange={change}
                    />
               </label>

               <label>
                   Email
                   <input 
                    value={values.email}
                    name="email"
                    type="text"
                    onChange={change}
                    />
               </label>
           </div>

           <div className="submit">
               <button disabled={disabled} className="inner-button">Sign up</button>
           </div>
       </form>
    )
}