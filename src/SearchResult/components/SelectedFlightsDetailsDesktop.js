import React, { useState, useEffect } from "react";
import "./SelectedFlightsDetailsDesktop.css";
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

  var dayofWeekD = depDate.dd ? depDate.dd.slice(0, 3) : depDate.dd;
  var dayofWeekR = desDate.dd ? desDate.dd.slice(0, 3) : desDate.dd;
  var monthD = depDate.mm ? depDate.mm.slice(0, 3) : depDate.mm;
  var monthR = desDate.mm ? desDate.mm.slice(0, 3) : desDate.mm;
  return (
    <div className="flightStatusDetailWrapperDesktop">
      <div
        className="backToComboDesktop"
        onClick={() => {
          setCheckBoxD("");
          setCheckBoxR("");
        }}
      >
        <i class="fas fa-arrow-left"></i> &nbsp;Back
      </div>
      <div className="flightStatusDetailContainerDesktop">
        <div className="propmptDesktop">
          {checkD === "Departure" ? (
            <div className="SelectedFlightPrompDesktop">
              Your Departing Flight : {dayofWeekD}, {monthD} {depDate.day}{" "}
              {depDate.year}
            </div>
          ) : null}
          {checkR === "Return" ? (
            <div className="SelectedFlightPrompDesktop">
              Your Returning Flight: {dayofWeekR}, {monthR} {depDate.day}{" "}
              {depDate.year}
            </div>
          ) : null}
        </div>
        <div className="SelectedFlightSummarywrapperDesktop">
          <div
            className="SelectedFlightSummarycontainerDesktop"
            onClick={() => {
              SetSelectDepDate(true);
              SetSelectReturnDate(false);
            }}
          >
            <div
              className={`checkBoxUncheck ${
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
            <div className="airlineInfoDesktop">
              <div className="flightStatusAirlineIconDesktop">
                <img
                  className="flightStatusAirlineIconImgTagDesktop"
                  src={flightStatusAirlineLogo}
                  alt="arilineLogo"
                />
              </div>
              <div className="airlineNameDesktop">IndiGo</div>
            </div>
            <div className="itineraryDepInfo">
              <div className="departureTime">{departureTime}</div>
              <div className="departureAirport">{depAirport.code}</div>
            </div>
            <div className="layOverInfoDesktop">
              <div className="totalFlightHoursDesktop">6h 5m</div>
              <div className="layOverSvgDesktop">
                <img
                  className="layOverSvgImgTagDesktop"
                  src={LayOverLogo}
                  alt="layoverlogo"
                ></img>
              </div>
              <div className="NoOFStopsDesktop">1 stop</div>
            </div>
            <div className="itineraryDesInfo">
              <div className="destinationTime">{arrivalTime}</div>
              <div className="destinationAirport">{desAirport.code}</div>
            </div>
            <div className="FlightPrice">
              {currencySymbol}
              {totalAmount}
            </div>
          </div>
        </div>
      </div>
      {checkD === "Departure" ? (
        <div className="SelectSecondFlightPrompDesktop">
          Select a return flight
        </div>
      ) : null}
      {checkR === "Return" ? (
        <div className="SelectSecondFlightPrompDesktop">
          Select a departure flight
        </div>
      ) : null}
    </div>
  );
};

export default SelectedFlightsDetails;
