import React, { useEffect } from "react"

import { axiosWithAuth } from "../../utils/axiosWithAuth"

const MyPosts = () => {

    const currentId = localStorage.getItem("userId")

    useEffect(() => {
        axiosWithAuth()
        .get("https://expatjournal-api.herokuapp.com/")
        .then()
    })

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default MyPosts
