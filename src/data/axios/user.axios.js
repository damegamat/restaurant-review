import axios from "axios";
import baseUrl from "./baseURL";

export async function axiosUserHash(hash) {
  return await axios
    .get(`${baseUrl}user/activate/${hash}`)
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function axiosUserRegister(data) {
  return await axios
    .post(`${baseUrl}user`, data)
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
