import {
  USER_PROFILE_NAV,
  USER_PROFILE_MY_TRIPS,
  USER_PROFILE_MY_INFORMATION,
} from "../actions/types";
const infoSectionState = {
  myTrips: "Upcoming Trips",
  myInformation: "My Details",
};
const userProfilReducer = (
  state = {
    userProfileNavState: "TripDetails",
    userProfileMyTripsState: "Upcoming Trips",
    userProfileMyInformationState: "My Details",
  },
  action
) => {
  switch (action.type) {
    case USER_PROFILE_NAV:
      return { ...state, userProfileNavState: action.payload };
    case USER_PROFILE_MY_TRIPS:
      return {
        ...state,
        userProfileMyTripsState: action.payload,
      };
    case USER_PROFILE_MY_INFORMATION:
      return {
        ...state,
        userProfileMyInformationState: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default userProfilReducer;
