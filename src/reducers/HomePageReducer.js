import {
  SET_DEPARTURE,
  SET_DESTINATION,
  SET_TOGGLE,
  SET_RETURN_DATE,
  SET_DEPARTURE_DATE,
  SET_RADIO,
  SET_ERROR,
  SET_ERROR_1,
  SET_ERROR_2,
  SET_ERROR_3,
  SET_ERROR_4,
  SET_ADULT_COUNT,
  SET_CHILDREN_COUNT,
  SET_INFANT_COUNT,
  SET_CLASS,
  SET_TRAVELLERS_TOTAL,
  SET_TRAVEL_CLASS_ERROR,
  SET_ADD_CITY_COUNTER,
  SET_DEPARTURE_1,
  SET_DEPARTURE_2,
  SET_DEPARTURE_3,
  SET_DEPARTURE_4,
  SET_DESTINATION_1,
  SET_DESTINATION_2,
  SET_DESTINATION_3,
  SET_DESTINATION_4,
  SET_DEPARTURE_DATE_1,
  SET_DEPARTURE_DATE_2,
  SET_DEPARTURE_DATE_3,
  SET_DEPARTURE_DATE_4,
} from "../actions/types";
import { TodayDate } from "../Utilities/TodayDate";
import { nextDay } from "../Utilities/NextDay";
const initialState = TodayDate();
const nextdate = nextDay(initialState);
const radioValue = "twoway";
const adultCount = 1;
const childrenCount = 0;
const infantCount = 0;
const travelClass = "Economy";
const travellersTotal = 1;
const addCityCounter = 0;
const initialDep = {
  city: "Los Angeles",
  title: "Los Angeles International Airport",
  code: "LAX",
};
const initialDes = {
  city: "Dallas",
  title: "Dallas/Fort Worth International Airport",
  code: "DFW",
};

const HomePageReducer = (
  state = {
    departureDate: initialState,
    returnDate: nextDay(initialState),
    radio: radioValue,
    adultCount,
    childrenCount,
    infantCount,
    travelClass,
    travellersTotal,
    addCityCounter,
    departure: initialDep,
    destination: initialDes,
    departureDate1: nextdate,
    departureDate2: nextdate,
    departureDate3: nextdate,
    departureDate4: nextdate,
  },
  action
) => {
  switch (action.type) {
    case SET_DEPARTURE:
      return { ...state, departure: action.payload };
    case SET_DESTINATION:
      return { ...state, destination: action.payload };
    case SET_TOGGLE:
      return {
        ...state,
        departure: action.payload.des,
        destination: action.payload.dep,
      };
    case SET_DEPARTURE_DATE:
      return {
        ...state,
        departureDate: action.payload,
      };
    case SET_RETURN_DATE:
      return {
        ...state,
        returnDate: action.payload,
      };
    case SET_RADIO:
      return {
        ...state,
        radio: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case SET_ERROR_1:
      return {
        ...state,
        errorMessage1: action.payload,
      };
    case SET_ERROR_2:
      return {
        ...state,
        errorMessage2: action.payload,
      };
    case SET_ERROR_3:
      return {
        ...state,
        errorMessage3: action.payload,
      };
    case SET_ERROR_4:
      return {
        ...state,
        errorMessage4: action.payload,
      };
    case SET_ADULT_COUNT:
      return {
        ...state,
        adultCount: action.payload,
      };
    case SET_CHILDREN_COUNT:
      return {
        ...state,
        childrenCount: action.payload,
      };
    case SET_INFANT_COUNT:
      return {
        ...state,
        infantCount: action.payload,
      };
    case SET_CLASS:
      return {
        ...state,
        travelClass: action.payload,
      };
    case SET_TRAVELLERS_TOTAL:
      return {
        ...state,
        travellersTotal: action.payload,
      };
    case SET_TRAVEL_CLASS_ERROR:
      return {
        ...state,
        travelClassError: action.payload,
      };
    case SET_ADD_CITY_COUNTER:
      return {
        ...state,
        addCityCounter: action.payload,
      };
    case SET_DEPARTURE_1:
      return {
        ...state,
        departure1: action.payload,
      };

    case SET_DEPARTURE_2:
      return {
        ...state,
        departure2: action.payload,
      };
    case SET_DEPARTURE_3:
      return {
        ...state,
        departure3: action.payload,
      };
    case SET_DEPARTURE_4:
      return {
        ...state,
        departure4: action.payload,
      };

    case SET_DESTINATION_1:
      return {
        ...state,
        destination1: action.payload,
      };

    case SET_DESTINATION_2:
      return {
        ...state,
        destination2: action.payload,
      };

    case SET_DESTINATION_3:
      return {
        ...state,
        destination3: action.payload,
      };

    case SET_DESTINATION_4:
      return {
        ...state,
        destination4: action.payload,
      };
    case SET_DEPARTURE_DATE_1:
      return {
        ...state,
        departureDate1: action.payload,
      };
    case SET_DEPARTURE_DATE_2:
      return {
        ...state,
        departureDate2: action.payload,
      };
    case SET_DEPARTURE_DATE_3:
      return {
        ...state,
        departureDate3: action.payload,
      };
    case SET_DEPARTURE_DATE_4:
      return {
        ...state,
        departureDate4: action.payload,
      };

    default:
      return state;
  }
};

export default HomePageReducer;
