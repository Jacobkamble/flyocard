import axios from "axios";

import { verify_user, signout_user } from "../actions/userActions";
import {
  getTokenCookie,
  getAuthHeader,
  removeTokenCookie,
} from "../Utilities/tools";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const Login = async (values) => {
  const user = await axios.post("/api/auth/signin", {
    email: values.email,
    mobile: values.mobile,
    channel: values.channel,
  });

  return user.data;
};

export const VerifyOpt = async (values) => {
  try {
    const loginInfo = await axios.post("/api/auth/verifyOtp", {
      mobile: values.mobile,
      code: values.code,
    });
    return loginInfo;
  } catch (error) {
    return error;
  }
};

export const RegisterUser = async (values) => {
  console.log(values.firstName);
  console.log(values.lastName);
  console.log(values.mobile);
  try {
    const registerInfo = await axios.post("/api/auth/register", {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      mobile: values.mobile,
    });

    return registerInfo.data;
  } catch (error) {
    return error;
  }
};

export const userIsAuth = () => {
  return async (dispatch) => {
    try {
      if (!getTokenCookie()) {
        throw new Error("Unauthorized");
      }
      const user = await axios.get("/api/auth/isauth", getAuthHeader());
      dispatch(verify_user({ data: user.data, auth: true }));
    } catch (error) {
      dispatch(verify_user({ data: {}, auth: false }));
    }
  };
};

export const userSignOut = () => {
  console.log("in delete cookie");
  return async (dispatch) => {
    removeTokenCookie();
    dispatch(signout_user({ data: {}, auth: false }));
  };
};
