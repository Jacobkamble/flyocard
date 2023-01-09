import {
  SET_DOB_DAY,
  SET_DOB_MONTH,
  SET_SUPPORT_PACKAGE,
} from "../actions/types";

export const setDobDay = (day) => {
  return {
    type: SET_DOB_DAY,
    payload: day,
  };
};
export const setDobMonth = (month) => {
  return {
    type: SET_DOB_MONTH,
    payload: month,
  };
};

export const set_support_package = (package_info) => {
  return {
    type: SET_SUPPORT_PACKAGE,
    payload: package_info,
  };
};
