import axios from "axios";
import baseUrl from "./baseURL";
import { userLoginAction } from "data/reducers/auth/actions";

export const axiosAuth = (data) => (dispatch) => {
  axios
    .post(`${baseUrl}auth`, data)
    .then((res) => {
      dispatch(userLoginAction(res));
    })
    .catch((error) => {
      alert("Error:", error);
    });
};
