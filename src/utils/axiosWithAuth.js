import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://expatjournal-api.herokuapp.com/apihttp://localhost:5000/api"
  });
};
