import React from "react";
import "./CompletedTrips.css";
import { default as airlineLogo } from "../../../images/indigoLogo.png";
import { default as layoverSvg } from "../../../images/onelayover.svg";
import Fade from "react-reveal/Fade";
const CompletedTrips = () => {
  return (
    <>
      <Fade top cascade duration={500}>
        <div className="completedTripsDetailsWrapper">
          <div className="completedTripsItinerary">
            <div className="completedTripImpInfo">
              <div className="completedTrips_tripType">
                Trip Type: <span className="ct_IMpInfoDesc">Two-Way</span>
              </div>
              <div className="completedTrips_tripStatus">
                Trip Status: <span className="ct_IMpInfoDesc">Completed</span>
              </div>
            </div>
            {/* COMPLETED TRIPS TRIP NUMBER 1  ---(FOR TWO-WAY TRIPS) */}
            <div className="completedTrips_trip1">
              <div className="ct_itineraryDateAndCabinClass">
                <div className="ct_itineraryDate">Depart Thu,sep 10</div>
                <div className="ct_itineraryCabinClass">Cabin : Economy</div>
              </div>
              <div className="ct_itineraryDetails">
                <div className="ct_itineraryAirlineLogoAndName">
                  <div className="completedTripsAirlineLogo">
                    <img
                      src={airlineLogo}
                      alt="airlineLogo"
                      className="completedTripsAirlineLogoImgTag"
                    />
                  </div>
                  <div className="completedTripsAirlineName">IndiGo</div>
                </div>
                <div className="ct_itineraryTakeOffDate">Thu,Sep 12</div>
                <div className="ct_itineraryTakeOffTimeAndAirportName">
                  <div className="ct_flightTime">13:40</div>
                  <div className="ct_flightAirport">ATL</div>
                </div>
                <div className="ct_itineraryDurationAndStops">
                  <div className="ct_tripDuration">6h 5m</div>
                  <div className="ct_layOverInfo">
                    <img
                      src={layoverSvg}
                      alt="layoverImg"
                      className="ct_layOverInfoImgTag"
                    />
                  </div>
                  <div className="ct_itineraryNoOfStops">1 Stop</div>
                </div>
                <div className="ct_itineraryLandingTimeAndAirportName">
                  <div className="ct_flightTime">19:35</div>
                  <div className="ct_flightAirport">DFW</div>
                </div>
                <div className="ct_itineraryLandingDate">Thu,Sep 12</div>
              </div>
            </div>
            {/* COMPLETED TRIPS TRIP NUMBER 2  ---(FOR TWO-WAY TRIPS) */}
            <div className="completedTrips_trip2">
              <div className="ct_itineraryDateAndCabinClass">
                <div className="ct_itineraryDate">Depart Thu,sep 10</div>
                <div className="ct_itineraryCabinClass">Cabin : Economy</div>
              </div>
              <div className="ct_itineraryDetails">
                <div className="ct_itineraryAirlineLogoAndName">
                  <div className="completedTripsAirlineLogo">
                    <img
                      src={airlineLogo}
                      alt="airlineLogo"
                      className="completedTripsAirlineLogoImgTag"
                    />
                  </div>
                  <div className="completedTripsAirlineName">IndiGo</div>
                </div>
                <div className="ct_itineraryTakeOffDate">Thu,Sep 12</div>
                <div className="ct_itineraryTakeOffTimeAndAirportName">
                  <div className="ct_flightTime">13:40</div>
                  <div className="ct_flightAirport">ATL</div>
                </div>
                <div className="ct_itineraryDurationAndStops">
                  <div className="ct_tripDuration">6h 5m</div>
                  <div className="ct_layOverInfo">
                    <img
                      src={layoverSvg}
                      alt="layoverImg"
                      className="ct_layOverInfoImgTag"
                    />
                  </div>
                  <div className="ct_itineraryNoOfStops">1 Stop</div>
                </div>
                <div className="ct_itineraryLandingTimeAndAirportName">
                  <div className="ct_flightTime">19:35</div>
                  <div className="ct_flightAirport">DFW</div>
                </div>
                <div className="ct_itineraryLandingDate">Thu,Sep 12</div>
              </div>
            </div>
          </div>
          {/* COMPLETED TRIPS TRIP NUMBER 1  ---(FOR ONE-WAY TRIPS) */}
          <div className="completedTripsItinerary">
            <div className="completedTripImpInfo">
              <div className="completedTrips_tripType">
                Trip Type: <span className="ct_IMpInfoDesc">Two-Way</span>
              </div>
              <div className="completedTrips_tripStatus">
                Trip Status: <span className="ct_IMpInfoDesc">Completed</span>
              </div>
            </div>
            {/* COMPLETED TRIPS TRIP NUMBER 1  ---(FOR ONE-WAY TRIPS) */}
            <div className="completedTrips_trip1">
              <div className="ct_itineraryDateAndCabinClass">
                <div className="ct_itineraryDate">Depart Thu,sep 10</div>
                <div className="ct_itineraryCabinClass">Cabin : Economy</div>
              </div>
              <div className="ct_itineraryDetails">
                <div className="ct_itineraryAirlineLogoAndName">
                  <div className="completedTripsAirlineLogo">
                    <img
                      src={airlineLogo}
                      alt="airlineLogo"
                      className="completedTripsAirlineLogoImgTag"
                    />
                  </div>
                  <div className="completedTripsAirlineName">IndiGo</div>
                </div>
                <div className="ct_itineraryTakeOffDate">Thu,Sep 12</div>
                <div className="ct_itineraryTakeOffTimeAndAirportName">
                  <div className="ct_flightTime">13:40</div>
                  <div className="ct_flightAirport">ATL</div>
                </div>
                <div className="ct_itineraryDurationAndStops">
                  <div className="ct_tripDuration">6h 5m</div>
                  <div className="ct_layOverInfo">
                    <img
                      src={layoverSvg}
                      alt="layoverImg"
                      className="ct_layOverInfoImgTag"
                    />
                  </div>
                  <div className="ct_itineraryNoOfStops">1 Stop</div>
                </div>
                <div className="ct_itineraryLandingTimeAndAirportName">
                  <div className="ct_flightTime">19:35</div>
                  <div className="ct_flightAirport">DFW</div>
                </div>
                <div className="ct_itineraryLandingDate">Thu,Sep 12</div>
              </div>
            </div>
          </div>
          {/* COMPLETED TRIPS TRIP NUMBER 1  ---(FOR ONE-WAY TRIPS) */}
          <div className="completedTripsItinerary">
            <div className="completedTripImpInfo">
              <div className="completedTrips_tripType">
                Trip Type: <span className="ct_IMpInfoDesc">Two-Way</span>
              </div>
              <div className="completedTrips_tripStatus">
                Trip Status: <span className="ct_IMpInfoDesc">Completed</span>
              </div>
            </div>
            {/* COMPLETED TRIPS TRIP NUMBER 1  ---(FOR ONE-WAY TRIPS) */}
            <div className="completedTrips_trip1">
              <div className="ct_itineraryDateAndCabinClass">
                <div className="ct_itineraryDate">Depart Thu,sep 10</div>
                <div className="ct_itineraryCabinClass">Cabin : Economy</div>
              </div>
              <div className="ct_itineraryDetails">
                <div className="ct_itineraryAirlineLogoAndName">
                  <div className="completedTripsAirlineLogo">
                    <img
                      src={airlineLogo}
                      alt="airlineLogo"
                      className="completedTripsAirlineLogoImgTag"
                    />
                  </div>
                  <div className="completedTripsAirlineName">IndiGo</div>
                </div>
                <div className="ct_itineraryTakeOffDate">Thu,Sep 12</div>
                <div className="ct_itineraryTakeOffTimeAndAirportName">
                  <div className="ct_flightTime">13:40</div>
                  <div className="ct_flightAirport">ATL</div>
                </div>
                <div className="ct_itineraryDurationAndStops">
                  <div className="ct_tripDuration">6h 5m</div>
                  <div className="ct_layOverInfo">
                    <img
                      src={layoverSvg}
                      alt="layoverImg"
                      className="ct_layOverInfoImgTag"
                    />
                  </div>
                  <div className="ct_itineraryNoOfStops">1 Stop</div>
                </div>
                <div className="ct_itineraryLandingTimeAndAirportName">
                  <div className="ct_flightTime">19:35</div>
                  <div className="ct_flightAirport">DFW</div>
                </div>
                <div className="ct_itineraryLandingDate">Thu,Sep 12</div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default CompletedTrips;
