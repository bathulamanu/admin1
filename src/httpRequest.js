import axios from "axios";

const api = axios.create({
  baseURL: "http://18.61.60.231:4000/flyingbyts/api/user",
  //   withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Authorization: `${localStorage.getItem("accessToken")}`,
  },
});

export default api;

console.log("accessToken", localStorage.getItem("accessToken"));
