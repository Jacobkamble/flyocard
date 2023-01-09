import React, { useState } from "react";

import "./TripDetails.css";
import Fade from "react-reveal/Fade";
import UpcomingTrips from "./TripCategories/UpcomingTrips";
import CompletedTrips from "./TripCategories/CompletedTrips";
import CanceledTrips from "./TripCategories/CanceledTrips";
import { user_Profile_my_trips } from "../../actions/userProfileAction";
import { useDispatch, useSelector } from "react-redux";

const TripDetails = () => {
  const [tripsDropDown, setTripDropDown] = useState(false);
  const dispatch = useDispatch();
  const tripsCategory = useSelector(
    (state) => state.userProfile.userProfileMyTripsState
  );

  return (
    <div className="tripDetailsWrapper">
      <div className="tripDetailsNav">
        <div
          className="CurrentTripDisplay"
          onClick={() => {
            setTripDropDown((prev) => !prev);
          }}
        >
          {tripsCategory}
        </div>
        <div className="tripDetailsHamburger">
          {tripsDropDown ? (
            <i
              class="fas fa-chevron-up"
              onClick={() => {
                setTripDropDown((prev) => !prev);
              }}
            ></i>
          ) : (
            <i
              class="fas fa-chevron-down"
              onClick={() => {
                setTripDropDown((prev) => !prev);
              }}
            ></i>
          )}
        </div>
      </div>
      {/*TRIPS NAVIGATION FOR DESKTOP */}

      <div className="tripsNavigationDesktop">
        <div className="tripsCategoryWrapper">
          <div
            className={`tripsCategoryDesktop ${
              tripsCategory === "Upcoming Trips" ? "selected" : null
            }`}
            onClick={() => {
              dispatch(user_Profile_my_trips("Upcoming Trips"));
            }}
          >
            Upcoming Trips
          </div>
          <div
            className={`tripsCategoryDesktop ${
              tripsCategory === "Completed Trips" ? "selected" : null
            }`}
            onClick={() => {
              dispatch(user_Profile_my_trips("Completed Trips"));
            }}
          >
            Completed Trips
          </div>
          <div
            className={`tripsCategoryDesktop ${
              tripsCategory === "Canceled Trips" ? "selected" : null
            }`}
            onClick={() => {
              dispatch(user_Profile_my_trips("Canceled Trips"));
            }}
          >
            Canceled Trips
          </div>
        </div>
      </div>
      {/*TRIPS NAVIGATION FOR MOBILE */}
      <Fade top collapse when={tripsDropDown} duration={100} distance="10%">
        <div className="tripsDropDown">
          <div
            className="tripsCategory"
            onClick={() => {
              dispatch(user_Profile_my_trips("Upcoming Trips"));
              setTripDropDown(false);
            }}
          >
            Upcoming trips
          </div>
          <div
            className="tripsCategory"
            onClick={() => {
              dispatch(user_Profile_my_trips("Completed Trips"));
              setTripDropDown(false);
            }}
          >
            Completd trips
          </div>
          <div
            className="tripsCategory"
            onClick={() => {
              dispatch(user_Profile_my_trips("Canceled Trips"));
              setTripDropDown(false);
            }}
          >
            Canceled trips
          </div>
        </div>
      </Fade>
      {tripsCategory === "Upcoming Trips" ? (
        <div className="upcomingTripsWrapper">
          <UpcomingTrips />
        </div>
      ) : (
        ""
      )}

      {tripsCategory === "Completed Trips" ? (
        <div className="completedTripsWrapper">
          <CompletedTrips />
        </div>
      ) : (
        ""
      )}

      {tripsCategory === "Canceled Trips" ? (
        <div className="canceledTripsWrapper">
          <CanceledTrips />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TripDetails;
