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

export const setSelectedTrip1FlightId = (trip1Id) => {
  return {
    type: SET_SELECTED_TRIP1_FLIGHT_ID,
    payload: trip1Id,
  };
};
export const setSelectedTrip1DepartureFlightTime = (trip1DepartureTime) => {
  return {
    type: SET_SELECTED_TRIP1_DEPARTURE_FLIGHT_TIME,
    payload: trip1DepartureTime,
  };
};

export const setSelectedTrip1ArrivalFlightTime = (trip1ArrivalTime) => {
  return {
    type: SET_SELECTED_TRIP1_ARRIVAL_FLIGHT_TIME,
    payload: trip1ArrivalTime,
  };
};
export const setSelectedTrip1FlightPrice = (trip1Price) => {
  return {
    type: SET_SELECTED_TRIP1_FLIGHT_PRICE,
    payload: trip1Price,
  };
};
export const setSelectedTrip2FlightId = (trip2Id) => {
  return {
    type: SET_SELECTED_TRIP2_FLIGHT_ID,
    payload: trip2Id,
  };
};
export const setSelectedTrip2DepartureFlightTime = (trip2DepartureTime) => {
  return {
    type: SET_SELECTED_TRIP2_DEPARTURE_FLIGHT_TIME,
    payload: trip2DepartureTime,
  };
};
export const setSelectedTrip2ArrivalFlightTime = (trip2ArrivalTime) => {
  return {
    type: SET_SELECTED_TRIP2_ARRIVAL_FLIGHT_TIME,
    payload: trip2ArrivalTime,
  };
};
export const setSelectedTrip2FlightPrice = (trip2Price) => {
  return {
    type: SET_SELECTED_TRIP2_FLIGHT_PRICE,
    payload: trip2Price,
  };
};
export const setSelectedFlightTotalPrice = (totalPrice) => {
  return {
    type: SET_SELECTED_FLIGHT_TOTAL_PRICE,
    payload: totalPrice,
  };
};
export const setSelectedFlightUSDPrice = (usdPrice) => {
  return {
    type: SET_SELECTED_FLIGHT_USD_PRICE,
    payload: usdPrice,
  };
};
