import React from "react";
import "./UpcomingTrips.css";
import { default as airlineLogo } from "../../../images/indigoLogo.png";
import { default as layoverSvg } from "../../../images/onelayover.svg";
import Fade from "react-reveal/Fade";
const UpcomingTrips = () => {
  return (
    <>
      <Fade top cascade duration={500}>
        <div className="upcomingTripsDetailsWrapper">
          <div className="upcomingTripsItinerary">
            <div className="upcomingTripImpInfo">
              <div className="upcomingTrips_tripType">
                Trip Type: <span className="ut_IMpInfoDesc">Two-Way</span>
              </div>
              <div className="upcomingTrips_tripStatus">
                Trip Status: <span className="ut_IMpInfoDesc">Upcoming</span>
              </div>
            </div>
            {/* UPCOMING TRIPS TRIP NUMBER 1  ---(FOR TWO-WAY TRIPS) */}
            <div className="upcomingTrips_trip1">
              <div className="itineraryDateAndCabinClass">
                <div className="itineraryDate">Depart Thu,sep 10</div>
                <div className="itineraryCabinClass">Cabin : Economy</div>
              </div>
              <div className="itineraryDetails">
                <div className="itineraryAirlineLogoAndName">
                  <div className="upcomingTripsAirlineLogo">
                    <img
                      src={airlineLogo}
                      alt="airlineLogo"
                      className="upcomingTripsAirlineLogoImgTag"
                    />
                  </div>
                  <div className="upcomingTripsAirlineName">IndiGo</div>
                </div>
                <div className="itineraryTakeOffDate">Thu,Sep 12</div>
                <div className="itineraryTakeOffTimeAndAirportName">
                  <div className="flightTime">13:40</div>
                  <div className="flightAirport">ATL</div>
                </div>
                <div className="itineraryDurationAndStops">
                  <div className="tripDuration">6h 5m</div>
                  <div className="layOverInfo">
                    <img
                      src={layoverSvg}
                      alt="layoverImg"
                      className="layOverInfoImgTag"
                    />
                  </div>
                  <div className="itineraryNoOfStops">1 Stop</div>
                </div>
                <div className="itineraryLandingTimeAndAirportName">
                  <div className="flightTime">19:35</div>
                  <div className="flightAirport">DFW</div>
                </div>
                <div className="itineraryLandingDate">Thu,Sep 12</div>
              </div>
            </div>
            {/* UPCOMING TRIPS TRIP NUMBER 2  ---(FOR TWO-WAY TRIPS)*/}
            <div className="upcomingTrips_trip2">
              <div className="itineraryDateAndCabinClass">
                <div className="itineraryDate">Return Sun,sep 15</div>
                <div className="itineraryCabinClass">Cabin : Economy</div>
              </div>
              <div className="itineraryDetails">
                <div className="itineraryAirlineLogoAndName">
                  <div className="upcomingTripsAirlineLogo">
                    <img
                      src={airlineLogo}
                      alt="airlineLogo"
                      className="upcomingTripsAirlineLogoImgTag"
                    />
                  </div>
                  <div className="upcomingTripsAirlineName">IndiGo</div>
                </div>
                <div className="itineraryTakeOffDate">Sun,Sep 15</div>
                <div className="itineraryTakeOffTimeAndAirportName">
                  <div className="flightTime">13:00</div>
                  <div className="flightAirport">DFW</div>
                </div>
                <div className="itineraryDurationAndStops">
                  <div className="tripDuration">6h 5m</div>
                  <div className="layOverInfo">
                    <img
                      src={layoverSvg}
                      alt="layoverImg"
                      className="layOverInfoImgTag"
                    />
                  </div>
                  <div className="itineraryNoOfStops">1 Stop</div>
                </div>
                <div className="itineraryLandingTimeAndAirportName">
                  <div className="flightTime">19:00</div>
                  <div className="flightAirport">ATL</div>
                </div>
                <div className="itineraryLandingDate">Sun,Sep 15</div>
              </div>
            </div>
          </div>

          <div className="upcomingTripsItinerary">
            <div className="upcomingTripImpInfo">
              <div className="upcomingTrips_tripType">
                Trip Type: <span className="ut_IMpInfoDesc">One-Way</span>
              </div>
              <div className="upcomingTrips_tripStatus">
                Trip Status: <span className="ut_IMpInfoDesc">Upcoming</span>
              </div>
            </div>
            {/* UPCOMING TRIPS TRIP NUMBER 1  ---(FOR TWO-WAY TRIPS) */}
            <div className="upcomingTrips_trip1">
              <div className="itineraryDateAndCabinClass">
                <div className="itineraryDate">Depart Tue,sep 16</div>
                <div className="itineraryCabinClass">Cabin : Economy</div>
              </div>
              <div className="itineraryDetails">
                <div className="itineraryAirlineLogoAndName">
                  <div className="upcomingTripsAirlineLogo">
                    <img
                      src={airlineLogo}
                      alt="airlineLogo"
                      className="upcomingTripsAirlineLogoImgTag"
                    />
                  </div>
                  <div className="upcomingTripsAirlineName">IndiGo</div>
                </div>
                <div className="itineraryTakeOffDate">Tue,Sep 16</div>
                <div className="itineraryTakeOffTimeAndAirportName">
                  <div className="flightTime">13:40</div>
                  <div className="flightAirport">ATL</div>
                </div>
                <div className="itineraryDurationAndStops">
                  <div className="tripDuration">6h 5m</div>
                  <div className="layOverInfo">
                    <img
                      src={layoverSvg}
                      alt="layoverImg"
                      className="layOverInfoImgTag"
                    />
                  </div>
                  <div className="itineraryNoOfStops">1 Stop</div>
                </div>
                <div className="itineraryLandingTimeAndAirportName">
                  <div className="flightTime">19:35</div>
                  <div className="flightAirport">DFW</div>
                </div>
                <div className="itineraryLandingDate">Tue,Sep 16</div>
              </div>
            </div>
          </div>

          <div className="upcomingTripsItinerary">
            <div className="upcomingTripImpInfo">
              <div className="upcomingTrips_tripType">
                Trip Type: <span className="ut_IMpInfoDesc">One-Way</span>
              </div>
              <div className="upcomingTrips_tripStatus">
                Trip Status: <span className="ut_IMpInfoDesc">Upcoming</span>
              </div>
            </div>
            {/* UPCOMING TRIPS TRIP NUMBER 1  ---(FOR TWO-WAY TRIPS) */}
            <div className="upcomingTrips_trip1">
              <div className="itineraryDateAndCabinClass">
                <div className="itineraryDate">Depart Tue,sep 16</div>
                <div className="itineraryCabinClass">Cabin : Economy</div>
              </div>
              <div className="itineraryDetails">
                <div className="itineraryAirlineLogoAndName">
                  <div className="upcomingTripsAirlineLogo">
                    <img
                      src={airlineLogo}
                      alt="airlineLogo"
                      className="upcomingTripsAirlineLogoImgTag"
                    />
                  </div>
                  <div className="upcomingTripsAirlineName">IndiGo</div>
                </div>
                <div className="itineraryTakeOffDate">Tue,Sep 16</div>
                <div className="itineraryTakeOffTimeAndAirportName">
                  <div className="flightTime">13:40</div>
                  <div className="flightAirport">ATL</div>
                </div>
                <div className="itineraryDurationAndStops">
                  <div className="tripDuration">6h 5m</div>
                  <div className="layOverInfo">
                    <img
                      src={layoverSvg}
                      alt="layoverImg"
                      className="layOverInfoImgTag"
                    />
                  </div>
                  <div className="itineraryNoOfStops">1 Stop</div>
                </div>
                <div className="itineraryLandingTimeAndAirportName">
                  <div className="flightTime">19:35</div>
                  <div className="flightAirport">DFW</div>
                </div>
                <div className="itineraryLandingDate">Tue,Sep 16</div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default UpcomingTrips;
