import axios from "axios";
const loginUserDetails = localStorage.getItem("loginUser");
const data = JSON.parse(loginUserDetails);
// const { token } = data;
// console.log("dkjgksgdk", token);

const api = axios.create({
  baseURL: "http://18.61.60.231:4000/flyingbyts/api/user",
  //   withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Authorization: data?.token ? data?.token : "",
  },
});

export default api;

console.log("accessToken", localStorage.getItem("accessToken"));
