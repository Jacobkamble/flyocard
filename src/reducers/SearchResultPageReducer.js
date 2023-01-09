import {
  SET_SELECTED_TRIP1_FLIGHT_ID,
  SET_SELECTED_TRIP1_DEPARTURE_FLIGHT_TIME,
  SET_SELECTED_TRIP1_ARRIVAL_FLIGHT_TIME,
  SET_SELECTED_TRIP2_FLIGHT_ID,
  SET_SELECTED_TRIP2_DEPARTURE_FLIGHT_TIME,
  SET_SELECTED_TRIP2_ARRIVAL_FLIGHT_TIME,
  SET_SELECTED_TRIP1_FLIGHT_PRICE,
  SET_SELECTED_TRIP2_FLIGHT_PRICE,
  SET_SELECTED_FLIGHT_TOTAL_PRICE,
  SET_SELECTED_FLIGHT_USD_PRICE,
} from "../actions/types";

const SeacrhResultPageReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SELECTED_TRIP1_FLIGHT_ID:
      return { ...state, trip1Id: action.payload };
    case SET_SELECTED_TRIP1_DEPARTURE_FLIGHT_TIME:
      return { ...state, trip1DepartureTime: action.payload };
    case SET_SELECTED_TRIP1_ARRIVAL_FLIGHT_TIME:
      return { ...state, trip1ArrivalTime: action.payload };
    case SET_SELECTED_TRIP1_FLIGHT_PRICE:
      return { ...state, trip1Price: action.payload };
    case SET_SELECTED_TRIP2_FLIGHT_ID:
      return { ...state, trip2Id: action.payload };
    case SET_SELECTED_TRIP2_DEPARTURE_FLIGHT_TIME:
      return { ...state, trip2DepartureTime: action.payload };
    case SET_SELECTED_TRIP2_ARRIVAL_FLIGHT_TIME:
      return { ...state, trip2ArrivalTime: action.payload };
    case SET_SELECTED_TRIP2_FLIGHT_PRICE:
      return { ...state, trip2Price: action.payload };
    case SET_SELECTED_FLIGHT_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };
    case SET_SELECTED_FLIGHT_USD_PRICE:
      return { ...state, USDPrice: action.payload };
    default:
      return state;
  }
};

export default SeacrhResultPageReducer;
