import axios from "axios";
import { jwtDecode } from "jwt-decode";

export function login(credentials, callback) {
  axios
    .post("https://fakestoreapi.com/auth/login", credentials)
    .then((response) => {
      if (response.data.token) {
        callback(true, response);
      }
    })
    .catch((error) => {
      callback(false, error);
    });
}

export function getUsername() {
  const decoded = jwtDecode(localStorage.getItem("token"));
  return decoded.user;
}
