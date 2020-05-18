import axios from "axios";
import baseUrl from "./baseURL";

export async function axiosUserActive(hash) {
  return await axios
    .get(`${baseUrl}user/activate/${hash}`)
    .then((data) => {
      alert("Congratulations, now you can login");
    })
    .catch((error) => {
      alert(`I'm sorry, something goes wrong. ${error}`);
    });
}
