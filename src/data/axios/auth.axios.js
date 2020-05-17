import axios from "axios";
import baseUrl from "./baseURL";

export async function axiosAuth(data) {
  return await axios
    .post(`${baseUrl}auth`, data)
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
