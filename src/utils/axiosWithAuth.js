import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
 //   baseURL: "https://expatjournal-api.herokuapp.com",
    baseURL: "https://api-expatjournal.herokuapp.com",
    headers: {
      Authorization: token
    }
   
  });
};
