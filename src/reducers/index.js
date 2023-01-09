import HomePageReducer from "./HomePageReducer";
import SearchResultPageReducer from "./SearchResultPageReducer";
import PaymentAndBookingReducer from "./PaymentAndBookingReducer";
import ApiReducer from "./ApiReducer";
import userReducer from "./userReducer";
import userProfileReducer from "./userProfileReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["Home", "SearchResult"],
};
const rootReducer = combineReducers({
  Home: HomePageReducer,
  SearchResult: SearchResultPageReducer,
  CurrencyConversion: ApiReducer,
  PaymentAndBooking: PaymentAndBookingReducer,
  Login_Register_Info: userReducer,
  userProfile: userProfileReducer,
});

export default persistReducer(persistConfig, rootReducer);
