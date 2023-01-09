import {
  SET_DOB_DAY,
  SET_DOB_MONTH,
  SET_SUPPORT_PACKAGE,
} from "../actions/types";

const PaymentAndBookingReducer = (
  state = { package_info: { package_name: "standard", package_price: 0 } },
  action
) => {
  switch (action.type) {
    case SET_DOB_DAY:
      return { ...state, DOB_Day: action.payload };
    case SET_DOB_MONTH:
      return { ...state, DOB_Month: action.payload };
    case SET_SUPPORT_PACKAGE:
      return { ...state, package_info: action.payload };

    default:
      return state;
  }
};

export default PaymentAndBookingReducer;
