import React from "react"

export default function SignupForm (props) {
    const {values, change, submit} = props

    return (
       <form className="form container" onSubmit={submit}>
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
               <button>Sign up</button>
           </div>
       </form>
    )
}