import {
  REGISTER_USER,
  LOGIN_USER,
  VERIFY_USER,
  SIGNOUT_USER,
} from "../actions/types";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginInfo: action.payload,
      };
    case VERIFY_USER:
      return {
        ...state,
        user_verification: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        register_user_info: action.payload,
      };
    case SIGNOUT_USER:
      return {
        ...state,
        user_verification: "",
      };

    default:
      return state;
  }
};

export default userReducer;
