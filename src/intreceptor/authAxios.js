import axios from "axios";

const AuthAxios = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export default AuthAxios;
