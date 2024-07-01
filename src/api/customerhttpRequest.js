import axios from "axios";
const loginUserDetails = localStorage.getItem("loginUser");
const data = JSON.parse(loginUserDetails);
// const { token } = data;
// console.log("dkjgksgdk", token);

const customerapi = axios.create({
  baseURL: "http://18.61.70.225:4000/flyingbyts/api/customer",
  //   withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Authorization: data?.token ? data?.token : "",
  },
});

export default customerapi;

// console.log('accessToken', localStorage.getItem('accessToken'))
