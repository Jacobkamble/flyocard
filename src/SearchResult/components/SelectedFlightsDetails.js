import React, { useState, useEffect } from "react";
import "./SelectedFlightsDetails.css";
import { default as flightStatusAirlineLogo } from "../../images/indigoLogo.png";
import { default as LayOverLogo } from "../../images/onelayover.svg";
import { useSelector } from "react-redux";
const SelectedFlightsDetails = ({
  departureTime,
  arrivalTime,
  price,
  desAirport,
  depAirport,
  depDate,
  desDate,
  SetSelectReturnDate,
  SetSelectDepDate,
  setCheckBoxD,
  setCheckBoxR,
  checkD,
  checkR,
}) => {
  var dayofWeekD = depDate.dd ? depDate.dd.slice(0, 3) : depDate.dd;
  var dayofWeekR = desDate.dd ? desDate.dd.slice(0, 3) : desDate.dd;
  var monthD = depDate.mm ? depDate.mm.slice(0, 3) : depDate.mm;
  var monthR = desDate.mm ? desDate.mm.slice(0, 3) : desDate.mm;

  const conversionRate = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencyRate
  );

  const currencySymbol = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencySymbol
  );
  const [totalAmount, setTotalAmount] = useState(price);

  useEffect(() => {
    if (conversionRate) {
      var totalTripPrice = parseInt(price) * conversionRate;

      var priceTotal = Math.round(totalTripPrice);
      setTotalAmount(priceTotal);
    } else {
      setTotalAmount(price);
    }
  }, [conversionRate, price]);

  return (
    <div className="flightStatusDetailWrapperMedia">
      <div className="propmptContainerMedia">
        {checkD === "Departure" ? (
          <div className="SelectedFlightPrompMedia">Your Departing Flight</div>
        ) : null}
        {checkR === "Return" ? (
          <div className="SelectedFlightPrompMedia">Your Returning Flight</div>
        ) : null}

        <div
          className="backToComboMedia"
          onClick={() => {
            setCheckBoxD("");
            setCheckBoxR("");
          }}
        >
          &nbsp;&nbsp;Change
        </div>
      </div>

      <div className="flightStatusDetailContainerMedia">
        <div className="SelectedFlightSummarywrapperMedia">
          <div
            className="SelectedFlightSummarycontainerMedia"
            onClick={() => {
              SetSelectDepDate(true);
              SetSelectReturnDate(false);
            }}
          >
            <div
              className={`checkBoxUncheckMedia ${
                checkD === "Departure" || checkR === "Return"
                  ? null
                  : " unchecked"
              }`}
              onClick={() => {
                setCheckBoxD("");
                setCheckBoxR("");
              }}
            >
              <i class="fas fa-check"></i>
            </div>
            <div className="airlineInfoMedia">
              <div className="flightStatusAirlineIconMedia">
                <img
                  className="flightStatusAirlineIconImgTagMedia"
                  src={flightStatusAirlineLogo}
                  alt="arilineLogoMedia"
                />
              </div>
              <div className="airlineNameMedia">IndiGo</div>
            </div>
            <div className="itineraryDepInfoMedia">
              <div className="departureTimeMedia">{departureTime}</div>
              <div className="departureAirportMedia">{depAirport.code}</div>
            </div>
            <div className="layOverInfoMedia">
              <div className="totalFlightHoursMedia">6h 5m</div>
              <div className="layOverSvgMedia">
                <img
                  className="layOverSvgImgTagMedia"
                  src={LayOverLogo}
                  alt="layoverlogoMedia"
                ></img>
              </div>
              <div className="NoOFStopsMedia">1 stop</div>
            </div>
            <div className="itineraryDesInfoMedia">
              <div className="destinationTimeMedia">{arrivalTime}</div>
              <div className="destinationAirportMedia">{desAirport.code}</div>
            </div>
            <div className="FlightPriceMedia">
              {" "}
              {currencySymbol}
              {totalAmount}
            </div>
          </div>
        </div>
      </div>
      {checkD === "Departure" ? (
        <div className="SelectSecondFlightPrompMedia">
          Select a return flight
        </div>
      ) : null}
      {checkR === "Return" ? (
        <div className="SelectSecondFlightPrompMedia">
          Select a departure flight
        </div>
      ) : null}
    </div>
  );
};

export default SelectedFlightsDetails;
