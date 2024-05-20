import axios from "axios";

const api = axios.create({
  baseURL: "http://18.61.230.105:4000/flyingbyts/api/user",
  //   withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Authorization: `${localStorage.getItem("accessToken")}`,
  },
});

export default api;
