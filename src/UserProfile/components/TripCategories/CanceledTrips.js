import React from "react";
import "./CanceledTrips.css";
import { default as airlineLogo } from "../../../images/indigoLogo.png";
import { default as layoverSvg } from "../../../images/onelayover.svg";
import Fade from "react-reveal/Fade";
const CanceledTrips = () => {
  return (
    <>
      <Fade top cascade duration={500}>
        <div className="canceledTripsDetailsWrapper">
          <div className="canceledTripsItinerary">
            <div className="canceledTripImpInfo">
              <div className="canceledTrips_tripType">
                Trip Type: <span className="cnt_IMpInfoDesc">Two-Way</span>
              </div>
              <div className="canceledTrips_tripStatus">
                Trip Status: <span className="cnt_IMpInfoDesc">Canceled</span>
              </div>
            </div>
            {/* COMPLETED TRIPS TRIP NUMBER 1  ---(FOR TWO-WAY TRIPS) */}
            <div className="canceledTrips_trip1">
              <div className="cnt_itineraryDateAndCabinClass">
                <div className="cnt_itineraryDate">Depart Thu,sep 10</div>
                <div className="cnt_itineraryCabinClass">Cabin : Economy</div>
              </div>
              <div className="cnt_itineraryDetails">
                <div className="cnt_itineraryAirlineLogoAndName">
                  <div className="canceledTripsAirlineLogo">
                    <img
                      src={airlineLogo}
                      alt="airlineLogo"
                      className="canceledTripsAirlineLogoImgTag"
                    />
                  </div>
                  <div className="canceledTripsAirlineName">IndiGo</div>
                </div>
                <div className="cnt_itineraryTakeOffDate">Thu,Sep 12</div>
                <div className="cnt_itineraryTakeOffTimeAndAirportName">
                  <div className="cnt_flightTime">13:40</div>
                  <div className="cnt_flightAirport">ATL</div>
                </div>
                <div className="cnt_itineraryDurationAndStops">
                  <div className="cnt_tripDuration">6h 5m</div>
                  <div className="cnt_layOverInfo">
                    <img
                      src={layoverSvg}
                      alt="layoverImg"
                      className="cnt_layOverInfoImgTag"
                    />
                  </div>
                  <div className="cnt_itineraryNoOfStops">1 Stop</div>
                </div>
                <div className="cnt_itineraryLandingTimeAndAirportName">
                  <div className="cnt_flightTime">19:35</div>
                  <div className="cnt_flightAirport">DFW</div>
                </div>
                <div className="cnt_itineraryLandingDate">Thu,Sep 12</div>
              </div>
            </div>
            {/* COMPLETED TRIPS TRIP NUMBER 2  ---(FOR TWO-WAY TRIPS) */}
            <div className="canceledTrips_trip2">
              <div className="cnt_itineraryDateAndCabinClass">
                <div className="cnt_itineraryDate">Depart Thu,sep 10</div>
                <div className="cnt_itineraryCabinClass">Cabin : Economy</div>
              </div>
              <div className="cnt_itineraryDetails">
                <div className="cnt_itineraryAirlineLogoAndName">
                  <div className="canceledTripsAirlineLogo">
                    <img
                      src={airlineLogo}
                      alt="airlineLogo"
                      className="canceledTripsAirlineLogoImgTag"
                    />
                  </div>
                  <div className="canceledTripsAirlineName">IndiGo</div>
                </div>
                <div className="cnt_itineraryTakeOffDate">Thu,Sep 12</div>
                <div className="cnt_itineraryTakeOffTimeAndAirportName">
                  <div className="cnt_flightTime">13:40</div>
                  <div className="cnt_flightAirport">ATL</div>
                </div>
                <div className="cnt_itineraryDurationAndStops">
                  <div className="cnt_tripDuration">6h 5m</div>
                  <div className="cnt_layOverInfo">
                    <img
                      src={layoverSvg}
                      alt="layoverImg"
                      className="cnt_layOverInfoImgTag"
                    />
                  </div>
                  <div className="cnt_itineraryNoOfStops">1 Stop</div>
                </div>
                <div className="cnt_itineraryLandingTimeAndAirportName">
                  <div className="cnt_flightTime">19:35</div>
                  <div className="cnt_flightAirport">DFW</div>
                </div>
                <div className="cnt_itineraryLandingDate">Thu,Sep 12</div>
              </div>
            </div>
          </div>
          {/* COMPLETED TRIPS TRIP NUMBER 1  ---(FOR ONE-WAY TRIPS) */}
          <div className="canceledTripsItinerary">
            <div className="canceledTripImpInfo">
              <div className="canceledTrips_tripType">
                Trip Type: <span className="cnt_IMpInfoDesc">Two-Way</span>
              </div>
              <div className="canceledTrips_tripStatus">
                Trip Status: <span className="cnt_IMpInfoDesc">Canceled</span>
              </div>
            </div>
            {/* COMPLETED TRIPS TRIP NUMBER 1  ---(FOR ONE-WAY TRIPS) */}
            <div className="canceledTrips_trip1">
              <div className="cnt_itineraryDateAndCabinClass">
                <div className="cnt_itineraryDate">Depart Thu,sep 10</div>
                <div className="cnt_itineraryCabinClass">Cabin : Economy</div>
              </div>
              <div className="cnt_itineraryDetails">
                <div className="cnt_itineraryAirlineLogoAndName">
                  <div className="canceledTripsAirlineLogo">
                    <img
                      src={airlineLogo}
                      alt="airlineLogo"
                      className="canceledTripsAirlineLogoImgTag"
                    />
                  </div>
                  <div className="canceledTripsAirlineName">IndiGo</div>
                </div>
                <div className="cnt_itineraryTakeOffDate">Thu,Sep 12</div>
                <div className="cnt_itineraryTakeOffTimeAndAirportName">
                  <div className="cnt_flightTime">13:40</div>
                  <div className="cnt_flightAirport">ATL</div>
                </div>
                <div className="cnt_itineraryDurationAndStops">
                  <div className="cnt_tripDuration">6h 5m</div>
                  <div className="cnt_layOverInfo">
                    <img
                      src={layoverSvg}
                      alt="layoverImg"
                      className="cnt_layOverInfoImgTag"
                    />
                  </div>
                  <div className="cnt_itineraryNoOfStops">1 Stop</div>
                </div>
                <div className="cnt_itineraryLandingTimeAndAirportName">
                  <div className="cnt_flightTime">19:35</div>
                  <div className="cnt_flightAirport">DFW</div>
                </div>
                <div className="cnt_itineraryLandingDate">Thu,Sep 12</div>
              </div>
            </div>
          </div>

          {/* COMPLETED TRIPS TRIP NUMBER 1  ---(FOR ONE-WAY TRIPS) */}
          <div className="canceledTripsItinerary">
            <div className="canceledTripImpInfo">
              <div className="canceledTrips_tripType">
                Trip Type: <span className="cnt_IMpInfoDesc">Two-Way</span>
              </div>
              <div className="canceledTrips_tripStatus">
                Trip Status: <span className="cnt_IMpInfoDesc">Canceled</span>
              </div>
            </div>
            {/* COMPLETED TRIPS TRIP NUMBER 1  ---(FOR ONE-WAY TRIPS) */}
            <div className="canceledTrips_trip1">
              <div className="cnt_itineraryDateAndCabinClass">
                <div className="cnt_itineraryDate">Depart Thu,sep 10</div>
                <div className="cnt_itineraryCabinClass">Cabin : Economy</div>
              </div>
              <div className="cnt_itineraryDetails">
                <div className="cnt_itineraryAirlineLogoAndName">
                  <div className="canceledTripsAirlineLogo">
                    <img
                      src={airlineLogo}
                      alt="airlineLogo"
                      className="canceledTripsAirlineLogoImgTag"
                    />
                  </div>
                  <div className="canceledTripsAirlineName">IndiGo</div>
                </div>
                <div className="cnt_itineraryTakeOffDate">Thu,Sep 12</div>
                <div className="cnt_itineraryTakeOffTimeAndAirportName">
                  <div className="cnt_flightTime">13:40</div>
                  <div className="cnt_flightAirport">ATL</div>
                </div>
                <div className="cnt_itineraryDurationAndStops">
                  <div className="cnt_tripDuration">6h 5m</div>
                  <div className="cnt_layOverInfo">
                    <img
                      src={layoverSvg}
                      alt="layoverImg"
                      className="cnt_layOverInfoImgTag"
                    />
                  </div>
                  <div className="cnt_itineraryNoOfStops">1 Stop</div>
                </div>
                <div className="cnt_itineraryLandingTimeAndAirportName">
                  <div className="cnt_flightTime">19:35</div>
                  <div className="cnt_flightAirport">DFW</div>
                </div>
                <div className="cnt_itineraryLandingDate">Thu,Sep 12</div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default CanceledTrips;
