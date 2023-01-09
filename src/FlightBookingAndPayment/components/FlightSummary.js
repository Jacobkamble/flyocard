import React, { useEffect, useState } from "react";
import "./FlightSummary.css";
import { useSelector } from "react-redux";
import { default as airlineLogo } from "../../images/indigoLogo.png";
import { default as LayOverImg } from "../../images/onelayover.svg";
import PricePromise from "./PricePromise";

const FlightSummary = () => {
  const Departure = useSelector((state) => state.Home.departure.code);
  const Destination = useSelector((state) => state.Home.destination.code);

  const DepCity = useSelector((state) => state.Home.departure.city);
  const DesCity = useSelector((state) => state.Home.destination.city);
  const tripType = useSelector((state) => state.Home.radio);
  const trip1DepartureTime = useSelector(
    (state) => state.SearchResult.trip1DepartureTime
  );
  const trip1ArrivalTime = useSelector(
    (state) => state.SearchResult.trip1ArrivalTime
  );

  const trip2DepartureTime = useSelector(
    (state) => state.SearchResult.trip2DepartureTime
  );
  const trip2ArrivalTime = useSelector(
    (state) => state.SearchResult.trip2ArrivalTime
  );
  const trip1price = useSelector((state) => state.SearchResult.trip1Price);
  const trip2price = useSelector((state) => state.SearchResult.trip2Price);
  var total = " ";
  if (trip2price) {
    total = parseInt(trip1price) + parseInt(trip2price);
  } else {
    total = parseInt(trip1price);
  }

  const conversionRate = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencyRate
  );

  const conversionSymbol = useSelector(
    (State) => State.CurrencyConversion.ExchangeRate.currencySymbol
  );

  const [tripTotalPrice, setTripTotalPrice] = useState(parseInt(total));

  useEffect(() => {
    var amtTotal = "";
    var tripTotal = "";
    if (conversionRate) {
      amtTotal = total * conversionRate;
      tripTotal = Math.round(amtTotal);
      setTripTotalPrice(tripTotal);
    } else {
      amtTotal = total * 1;
      tripTotal = Math.round(amtTotal);
      setTripTotalPrice(tripTotal);
    }
  }, [conversionRate, total]);

  const depDate = useSelector((state) => state.Home.departureDate);
  const desDate = useSelector((state) => state.Home.returnDate);
  const cabinClass = useSelector((state) => state.Home.travelClass);
  var dayofWeekD = depDate.dd ? depDate.dd.slice(0, 3) : depDate.dd;
  var dayofWeekR = desDate.dd ? desDate.dd.slice(0, 3) : desDate.dd;
  var monthD = depDate.mm ? depDate.mm.slice(0, 3) : depDate.mm;
  var monthR = desDate.mm ? desDate.mm.slice(0, 3) : desDate.mm;

  return (
    <>
      <div className="itinerarySummaryContainer">
        <PricePromise />
        <div className="itinerarySummaryHeader">
          <div className="itinerarySummaryHeaderText">Flight Details</div>
          <div className="itinerarySummaryHeaderTotal">
            {conversionSymbol}
            {tripTotalPrice}{" "}
            {console.log("second : ", tripTotalPrice)}
            <span className="priceDescription">/ Person</span>
          </div>
        </div>
        <div className="tripInfoContainer">
          <div className="tripDetailsHeader">
            <div className="TripTypeTitle">
              <div className="FlightDatesHeader">
                <div className="tripTypeContainer">Depart</div>
                {dayofWeekD}, {monthD} {depDate.day}
              </div>
            </div>
            <div className="d-none d-sm-block">
                IndiGo Airlines Flight 8776
              </div>
            <div className="cabinType">
              Cabin: <div className="cabinCode">{cabinClass}</div>
            </div>
          </div>

          <div className="tripDetailsSummaryComponent">
            <div className="airlineInfo">
              <div className="airlineLogo">
                <img
                  className="airlineLogoImgTag"
                  src={airlineLogo}
                  alt="logo"
                ></img>{" "}
                <div className="airlineName">IndiGo<div className="flightno">Flight 8776</div></div>
              </div>
            </div>

            <div className="FlightDateInfoContainer">
              <div className="FlightDates">
                {dayofWeekD}, {monthD} {depDate.day}
              </div>
            </div>

            <div className="timeCodeWrapper">
              <div className="timeContainer">{trip1DepartureTime}</div>
              <div className="airportInfoContainer">
                <div className="cityContainer">{DepCity},</div>
                <div className="codeContainer">{Departure}</div>
              </div>
            </div>
            <div className="LayOverInfo">
              <div className="totalHoursOfFlight">6h 5m</div>
              <div className="LayOverImg">
                <img
                  className="LayOverImg"
                  src={LayOverImg}
                  alt="layoverimage"
                ></img>
              </div>
              <div className="NoOfStops"> 1 Stop</div>
            </div>
            <div className="timeCodeWrapper">
              <div className="timeContainer">{trip1ArrivalTime}</div>
              <div className="airportInfoContainer">
                <div className="cityContainer">{DesCity},</div>
                <div className="codeContainer">{Destination}</div>
              </div>
            </div>
            <div className="FlightDateInfoContainer">
              <div className="FlightDates">
                {dayofWeekD}, {monthD} {depDate.day}
              </div>
            </div>
          </div>
        </div>
        {tripType === "twoway" ? (
          <div className="tripInfoContainer">
            <div className="tripDetailsHeader">
              <div className="TripTypeTitle">
                <div className="FlightDatesHeader">
                  <div className="tripTypeContainer">Return</div>
                  {dayofWeekR}, {monthR} {desDate.day}
                </div>
              </div>
              <div className="d-none d-sm-block">
                IndiGo Airlines Flight 8776
              </div>
              <div className="cabinType">
                Cabin:<div className="cabinCode">{cabinClass}</div>
              </div>
            </div>
            <div className="tripDetailsSummaryComponent">
              <div className="airlineInfo">
                <div className="airlineLogo">
                  <img
                    className="airlineLogoImgTag"
                    src={airlineLogo}
                    alt="logo"
                  ></img>{" "}
                  <div className="airlineName">IndiGo<div className="flightno">Flight 8776</div></div>
                </div>
              </div>

              <div className="FlightDateInfoContainer">
                <div className="FlightDates">
                  {dayofWeekR}, {monthR} {desDate.day}
                </div>
              </div>

              <div className="timeCodeWrapper">
                <div className="timeContainer">{trip2DepartureTime}</div>
                <div className="airportInfoContainer">
                  <div className="cityContainer">{DesCity},</div>
                  <div className="codeContainer">{Destination}</div>
                </div>
              </div>
              <div className="LayOverInfo">
                <div className="totalHoursOfFlight">6h 5m</div>
                <div className="LayOverImg">
                  <img
                    className="LayOverImg"
                    src={LayOverImg}
                    alt="layoverimage"
                  ></img>
                </div>
                <div className="NoOfStops"> 1 Stop</div>
              </div>

              <div className="timeCodeWrapper">
                <div className="timeContainer">{trip2ArrivalTime}</div>
                <div className="airportInfoContainer">
                  <div className="cityContainer">{DepCity},</div>
                  <div className="codeContainer">{Departure}</div>
                </div>
              </div>

              <div className="FlightDateInfoContainer">
                <div className="FlightDates">
                  {dayofWeekR}, {monthR} {desDate.day}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FlightSummary;
