import {
  USER_PROFILE_NAV,
  USER_PROFILE_MY_TRIPS,
  USER_PROFILE_MY_INFORMATION,
} from "./types";

export const user_profile_nav = (option) => {
  return {
    type: USER_PROFILE_NAV,
    payload: option,
  };
};

export const user_Profile_my_trips = (option) => {
  return {
    type: USER_PROFILE_MY_TRIPS,
    payload: option,
  };
};
export const user_Profile_my_information = (option) => {
  return {
    type: USER_PROFILE_MY_INFORMATION,
    payload: option,
  };
};
