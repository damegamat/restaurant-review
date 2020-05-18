import { USER_LOGIN } from "./const";

const initState = {
  token: "",
};

function authReducer(state = initState, action) {
  console.log(action);
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.data.token,
      };
    default: {
      return state;
    }
  }
}

export default authReducer;
