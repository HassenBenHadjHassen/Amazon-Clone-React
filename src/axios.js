import axios from "axios";

const instance = axios.create({
  baseURL: "https://hassen-amazon-clone-backend.herokuapp.com",
});

export default instance;
