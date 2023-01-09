import {
  SET_CURRENCY_EXCHANGE_RATE,
  SET_CURRENCY_EXCHANGE_RATE_ERROR,
} from "./types";
export const setCurrencyExchangeRate = (rate) => {
  return {
    type: SET_CURRENCY_EXCHANGE_RATE,
    payload: rate,
  };
};

export const setCurrencyExchangeRateError = (rate) => {
  return {
    type: SET_CURRENCY_EXCHANGE_RATE_ERROR,
    payload: rate,
  };
};
