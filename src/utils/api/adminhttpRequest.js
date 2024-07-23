import axios from "axios";
const loginUserDetails = localStorage.getItem("loginUser");
const data = JSON.parse(loginUserDetails);
// const { token } = data;
// console.log("dkjgksgdk", token);

const adminapi = axios.create({
  baseURL: "http://18.61.158.245:4000/flyingbyts/api/admin",
  //   withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Authorization: data?.token ? data?.token : "",
  },
});

export default adminapi;

// console.log('accessToken', localStorage.getItem('accessToken'))
