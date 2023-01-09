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

export const setDeparture = (departure) => {
  return {
    type: SET_DEPARTURE,
    payload: departure,
  };
};

export const setDestinationSelect = (destination) => {
  return {
    type: SET_DESTINATION,
    payload: destination,
  };
};

export const setToggle = (toggle) => {
  return {
    type: SET_TOGGLE,
    payload: toggle,
  };
};

export const setDepartureDate = (date) => {
  return {
    type: SET_DEPARTURE_DATE,
    payload: date,
  };
};

export const setReturnDate = (date) => {
  return {
    type: SET_RETURN_DATE,
    payload: date,
  };
};

export const setRadio = (value) => {
  return {
    type: SET_RADIO,
    payload: value,
  };
};

export const setError = (errMessage) => {
  return {
    type: SET_ERROR,
    payload: errMessage,
  };
};

export const setError1 = (errMessage1) => {
  return {
    type: SET_ERROR_1,
    payload: errMessage1,
  };
};

export const setError2 = (errMessage2) => {
  return {
    type: SET_ERROR_2,
    payload: errMessage2,
  };
};

export const setError3 = (errMessage3) => {
  return {
    type: SET_ERROR_3,
    payload: errMessage3,
  };
};

export const setError4 = (errMessage4) => {
  return {
    type: SET_ERROR_4,
    payload: errMessage4,
  };
};

export const setAdultCount = (adultCount) => {
  return {
    type: SET_ADULT_COUNT,
    payload: adultCount,
  };
};
export const setChildrenCount = (childrenCount) => {
  return {
    type: SET_CHILDREN_COUNT,
    payload: childrenCount,
  };
};
export const setInfantCount = (infantCount) => {
  return {
    type: SET_INFANT_COUNT,
    payload: infantCount,
  };
};
export const setClass = (travelClass) => {
  return {
    type: SET_CLASS,
    payload: travelClass,
  };
};

export const setTravellersTotal = (travellersTotal) => {
  return {
    type: SET_TRAVELLERS_TOTAL,
    payload: travellersTotal,
  };
};

export const setTravelClassError = (travelClassErrorMessage) => {
  return {
    type: SET_TRAVEL_CLASS_ERROR,
    payload: travelClassErrorMessage,
  };
};
export const setAddCityCounter = (counter) => {
  return {
    type: SET_ADD_CITY_COUNTER,
    payload: counter,
  };
};
export const setDeparture1 = (departure1) => {
  return {
    type: SET_DEPARTURE_1,
    payload: departure1,
  };
};

export const setDeparture2 = (departure2) => {
  return {
    type: SET_DEPARTURE_2,
    payload: departure2,
  };
};
export const setDeparture3 = (departure3) => {
  return {
    type: SET_DEPARTURE_3,
    payload: departure3,
  };
};
export const setDeparture4 = (departure4) => {
  return {
    type: SET_DEPARTURE_4,
    payload: departure4,
  };
};

export const setDestination1 = (destination1) => {
  return {
    type: SET_DESTINATION_1,
    payload: destination1,
  };
};

export const setDestination2 = (destination2) => {
  return {
    type: SET_DESTINATION_2,
    payload: destination2,
  };
};
export const setDestination3 = (destination3) => {
  return {
    type: SET_DESTINATION_3,
    payload: destination3,
  };
};
export const setDestination4 = (destination4) => {
  return {
    type: SET_DESTINATION_4,
    payload: destination4,
  };
};

export const setDepartureDate1 = (departureDate1) => {
  return {
    type: SET_DEPARTURE_DATE_1,
    payload: departureDate1,
  };
};
export const setDepartureDate2 = (departureDate2) => {
  return {
    type: SET_DEPARTURE_DATE_2,
    payload: departureDate2,
  };
};
export const setDepartureDate3 = (departureDate3) => {
  return {
    type: SET_DEPARTURE_DATE_3,
    payload: departureDate3,
  };
};
export const setDepartureDate4 = (departureDate4) => {
  return {
    type: SET_DEPARTURE_DATE_4,
    payload: departureDate4,
  };
};
