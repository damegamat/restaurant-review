import { USER_LOGIN } from "./const";

export const userLoginAction = (payload) => ({
  type: USER_LOGIN,
  payload,
});
