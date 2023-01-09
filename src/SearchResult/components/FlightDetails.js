import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { default as airlineLogo } from "../../images/indigoLogo.png";
import { default as layoverIcon } from "../../images/layoverIcon.svg";
import { default as oneLayOver } from "../../images/onelayover.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./FlightDetails.css";

import {
  setSelectedTrip1DepartureFlightTime,
  setSelectedTrip1ArrivalFlightTime,
  setSelectedTrip2DepartureFlightTime,
  setSelectedTrip2ArrivalFlightTime,
  setSelectedTrip1FlightPrice,
  setSelectedTrip2FlightPrice,
  setSelectedFlightTotalPrice,
  setSelectedTrip1FlightId,
  setSelectedTrip2FlightId,
} from "../../actions/SearchPageActions";

const FlightDetails = ({
  id,
  idR,
  departure,
  departureR,
  destination,
  destinationR,
  departureTime,
  departureTimeR,
  destinationTime,
  destinationTimeR,
  flightPrice,
  flightPriceR,
  Selection,
  selectedFlight,
  displaySelectedFlightD,
  displaySelectedFlightR,
  setCheckForSelectD,
  setCheckForSelectR,
  checkBoxStateD,
  checkBoxStateR,
  selectedFlightId,
  radioState,
  setTotalTrip,
}) => {
  const USDPrice = parseInt(flightPrice) + parseInt(flightPriceR);

  const conversionRate = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencyRate
  );

  const CurrencySymbol = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencySymbol
  );
  const [Trip1Amount, setTrip1Amount] = useState(parseInt(flightPrice));
  const [Trip2Amount, setTrip2Amount] = useState(parseInt(flightPriceR));
  const [totalAmount, setTotalAmount] = useState();


  useEffect(()=>{
    var bearer = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTM1NDYwOTksImV4cCI6MTY1Mzk3ODA5OX0.0q8UFw8Njtnv8-Z1bR4H0lwgRGL2N7aHoos0ZaleOdY'
    axios.get("http://localhost:8800/API/flight",{
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS",
        'Token': bearer
      }
    }).then((res)=>{
    console.log(res.data);
    //console.log(flightdetails);
    }).catch((err)=>{console.log(err);});
  },[]);
  

 // const [flightdetails,details]=React.useState();
useEffect(()=>{
  var bearer = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTM1NDYwOTksImV4cCI6MTY1Mzk3ODA5OX0.0q8UFw8Njtnv8-Z1bR4H0lwgRGL2N7aHoos0ZaleOdY'
  axios.get("http://localhost:8800/API/flight",{
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS",
      'Token': bearer
    }
  }).then((res)=>{
  console.log(res.data);
  //console.log(flightdetails);
  }).catch((err)=>{console.log(err);});
},[]);


  useEffect(() => {
    if (conversionRate) {
      var price1 = flightPrice * conversionRate;
      var p1 = Math.round(price1);
      setTrip1Amount(p1);
    } else {
      setTrip1Amount(flightPrice);
    }

    if (conversionRate) {
      var price2 = flightPriceR * conversionRate;
      var p2 = Math.round(price2);
      setTrip2Amount(p2);
    } else {
      setTrip2Amount(flightPriceR);
    }
    if (conversionRate) {
      var tA = Trip1Amount + Trip2Amount;
      setTotalAmount(tA);
    } else {
      setTotalAmount(parseInt(flightPrice) + parseInt(flightPriceR));
    }
  }, [Trip1Amount, Trip2Amount, conversionRate, flightPrice, flightPriceR]);


  const params = useParams();

  const itineraryId = useSelector((state) => state.SearchResult.Trip1Id);

  const checkdep = "Departure";
  const checkreturn = "Return";

  const RedirectToBookingOnTrip1 = () => {
    if (checkBoxStateD === "Departure") {
    }
  };
  const RedirectToBookingOnTrip2 = () => {
    if (checkBoxStateD === "Departure") {
      //<Redirect to="/FlightBookingAndPayment"></Redirect>;
    }
  };

  return (
    <div className="flightDetailsContainer">
      {radioState === "twoway" ? (
        <>
          {checkBoxStateD === "" ? (
            <div
            className="maincontainer"
            onClick={() => {
              setCheckForSelectD("Departure");
              Selection(id);
              displaySelectedFlightD(
                departureTime,
                destinationTime,
                flightPrice,
                id
              );
              RedirectToBookingOnTrip1();
            }}
            >
              <div className="flightDetailsHeader">
                <div className="airlineLogo">
                  <img
                    className="flightDetailsLogoImgTag"
                    src={airlineLogo}
                    alt="logo"
                  />
                </div>
                <div className="flightDetailsAirlineName">IndiGo</div>
                <Link className="BookingLink" to="/FlightBookingAndPayment">
                  <div
                    className="comboTotal"
                    onClick={() => {
                      setTotalTrip(
                        departureTime,
                        destinationTime,
                        flightPrice,
                        id,
                        idR,
                        departureTimeR,
                        destinationTimeR,
                        flightPriceR,
                        totalAmount,
                        USDPrice
                      );
                    }}
                  >
                    <div className="flightCurrencySymbolCombo">
                      {CurrencySymbol}
                    </div>
                    <div
                      className="flightCurrencyAmountCombo"
                      onClick={() => {}}
                    >
                      {totalAmount}
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flightDetailsItinerary">
                <div className="selectFlightIndividualCheck">
                  <Link
                    to={!checkBoxStateR ? params : "/FlightBookingAndPayment"}
                  >
                    <div
                      className={`selectCheckBox ${
                        checkBoxStateD === "Departure" ? "Checked" : null
                      }`}
                      onClick={() => {
                        setCheckForSelectD("Departure");
                        Selection(id);
                        displaySelectedFlightD(
                          departureTime,
                          destinationTime,
                          flightPrice,
                          id
                        );
                        RedirectToBookingOnTrip1();
                      }}
                    ></div>
                  </Link>
                </div>
                <div className="flightDetailsDepartureInfo">
                  <div className="departureFlightTime">{departureTime}</div>
                  <div
                    className={`departureFlightLocation ${
                      selectedFlight === id ? "selected" : null
                    }`}
                  >
                    {departure}
                  </div>
                </div>
                <div className="flightDetailsTimeLayoverInfo">
                  <div
                    className={`totalFlightTime ${
                      selectedFlight === id ? "selected" : null
                    }`}
                  >
                    6h 5m
                  </div>
                  <img src={oneLayOver} alt="layoverinfo" />
                  <div
                    className={`numberOfLayovers ${
                      selectedFlight === id ? "selected" : null
                    }`}
                  >
                    Non stop
                  </div>
                </div>
                <div className="flightDetailsDetinationInfo">
                  <div className="destinationFlightTime">{destinationTime}</div>
                  <div
                    className={`destinationFlightLocation ${
                      selectedFlight === id ? "selected" : null
                    }`}
                  >
                    {destination}
                  </div>
                </div>
                {/* <div className="flightDetailsPrice">
                  <div className="flightCurrencySymbol"> {CurrencySymbol}</div>{" "}
                  <div className="flightCurrencyAmount"> {Trip1Amount}</div>
                  </div>*/}
              </div>
            </div>
          ) : null}
          {checkBoxStateR === "" ? (
            <Link
            to={!checkBoxStateD ? params : "/FlightBookingAndPayment"}
            
          >
            <div
            onClick={() => {
              setCheckForSelectR("Return");
              Selection(idR);
              displaySelectedFlightR(
                idR,
                departureTimeR,
                destinationTimeR,
                flightPriceR
              );
            }}
            >
              <div className="flightDetailsHeader">
                <div className="airlineLogo">
                  <img
                    className="flightDetailsLogoImgTag"
                    src={airlineLogo}
                    alt="logo"
                  />
                </div>
                <div className="flightDetailsAirlineName">IndiGo</div>
              </div>
              <div className="flightDetailsItinerary">
                <div className="selectFlightIndividualCheck">
                  <Link
                    to={!checkBoxStateD ? params : "/FlightBookingAndPayment"}
                  >
                    <div
                      className={`selectCheckBox ${
                        checkBoxStateR === "Return" ? "Checked" : null
                      }`}
                      onClick={() => {
                        setCheckForSelectR("Return");
                        Selection(idR);
                        displaySelectedFlightR(
                          idR,
                          departureTimeR,
                          destinationTimeR,
                          flightPriceR
                        );
                      }}
                    ></div>
                  </Link>
                </div>
                <div className="flightDetailsDepartureInfo">
                  <div className="departureFlightTime">{departureTimeR}</div>
                  <div
                    className={`departureFlightLocation ${
                      selectedFlight === idR ? "selected" : null
                    }`}
                  >
                    {departureR}
                  </div>
                </div>
                <div className="flightDetailsTimeLayoverInfo">
                  <div
                    className={`totalFlightTime ${
                      selectedFlight === idR ? "selected" : null
                    }`}
                  >
                    6h 5m
                  </div>
                  <img src={oneLayOver} alt="layoverinfo" />
                  <div
                    className={`numberOfLayovers ${
                      selectedFlight === idR ? "selected" : null
                    }`}
                  >
                    1 stop
                  </div>
                </div>
                <div className="flightDetailsDetinationInfo">
                  <div className="destinationFlightTime">
                    {destinationTimeR}
                  </div>
                  <div
                    className={`destinationFlightLocation ${
                      selectedFlight === idR ? "selected" : null
                    }`}
                  >
                    {destinationR}
                  </div>
                </div>
                {/*   <div className="flightDetailsPrice">
                  <div className="flightCurrencySymbol"> {CurrencySymbol}</div>
                  <div className="flightCurrencyAmount"> {Trip2Amount}</div>
                </div>*/}
              </div>
              <div className="flightDetailsOffer"> </div>
            </div>
         </Link> ) : null}
        </>
      ) : (
        <Link className="BookingLink" to="/FlightBookingAndPayment">
        <div
        onClick={() => {
          setTotalTrip(
            departureTime,
            destinationTime,
            flightPrice,
            id,
            "",
            "",
            "",
            "",
            flightPrice,
            USDPrice
          );
        }}>
          <div className="flightDetailsHeader">
            <div className="airlineLogo">
              <img
                className="flightDetailsLogoImgTag"
                src={airlineLogo}
                alt="logo"
              />
            </div>
            <div className="airlineName">IndiGo</div>
            <Link className="BookingLink" to="/FlightBookingAndPayment">
              <div
                className="comboTotal"
                onClick={() => {
                  setTotalTrip(
                    departureTime,
                    destinationTime,
                    flightPrice,
                    id,
                    "",
                    "",
                    "",
                    "",
                    flightPrice,
                    USDPrice
                  );
                }}
              >
                {CurrencySymbol}
                {Trip1Amount}
              </div>
            </Link>
          </div>

          <div className="flightDetailsItinerary">
            <div className="selectFlightIndividualCheck">
              <Link
                to={
                  checkBoxStateD === "Departure"
                    ? params
                    : "/FlightBookingAndPayment"
                }
              >
                <div
                  className={`selectCheckBox ${
                    checkBoxStateD === "Departure" ? "Checked" : null
                  }`}
                  onClick={() => {
                    setCheckForSelectD("Departure");
                    Selection(id);
                    displaySelectedFlightD(
                      departureTime,
                      destinationTime,
                      flightPrice,
                      id
                    );

                    setTotalTrip(
                      departureTime,
                      destinationTime,
                      flightPrice,
                      id,
                      "",
                      "",
                      "",
                      "",
                      flightPrice,
                      USDPrice
                    );

                    RedirectToBookingOnTrip1();
                  }}
                ></div>
              </Link>
            </div>
            <div className="flightDetailsDepartureInfo">
              <div className="departureFlightTime">{departureTime}</div>
              <div
                className={`departureFlightLocation ${
                  selectedFlight === id ? "selected" : null
                }`}
              >
                {departure}
              </div>
            </div>
            <div className="flightDetailsTimeLayoverInfo">
              <div
                className={`totalFlightTime ${
                  selectedFlight === id ? "selected" : null
                }`}
              >
                6h 5m
              </div>
              <img src={oneLayOver} alt="layoverinfo" />
              <div
                className={`numberOfLayovers ${
                  selectedFlight === id ? "selected" : null
                }`}
              >
                Non stop
              </div>
            </div>
            <div className="flightDetailsDetinationInfo">
              <div className="destinationFlightTime">{destinationTime}</div>
              <div
                className={`destinationFlightLocation ${
                  selectedFlight === id ? "selected" : null
                }`}
              >
                {destination}
              </div>
            </div>
            <div className="flightDetailsPrice">
              {CurrencySymbol}
              {Trip1Amount}
            </div>
          </div>
        </div>
        </Link>
      )}
    </div>
  );
};

export default FlightDetails;
