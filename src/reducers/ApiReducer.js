import {
  SET_CURRENCY_EXCHANGE_RATE,
  SET_CURRENCY_EXCHANGE_RATE_ERROR,
} from "../actions/types";

const ApiReducer = (
  state = {
    ExchangeRate: {
      currencyRate: 1,
      currencySymbol: "$",
      countryCode: "USD",
    },
  },
  action
) => {
  switch (action.type) {
    case SET_CURRENCY_EXCHANGE_RATE:
      return { ...state, ExchangeRate: action.payload };
    case SET_CURRENCY_EXCHANGE_RATE_ERROR:
      return { ...state, ExchangeRateError: action.payload };

    default:
      return state;
  }
};

export default ApiReducer;
