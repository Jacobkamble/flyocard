import React, { useState, useEffect } from "react";
import "./AirlineFilterSingleAirline.css";
import { default as singleAirlineLogo } from "../../images/indigoLogo.png";
import { useSelector } from "react-redux";

const AirlineFilterSingleAirline = ({
  airlineName,
  trip2Price,
  trip1Price,
}) => {
  const conversionRate = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencyRate
  );
  const CurrencySymbol = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencySymbol
  );
  const totalPrice = parseInt(trip1Price) + parseInt(trip2Price);
  const totalPrice2 = parseInt(trip1Price) + parseInt(trip2Price) + 20;

  const [total1, setTotal1] = useState(totalPrice);
  const [total2, setTotal2] = useState(totalPrice2);

  useEffect(() => {
    if (conversionRate) {
      var pricetotal = totalPrice * conversionRate;
      var t1 = pricetotal.toFixed(2);
      setTotal1(t1);
    }
    if (conversionRate) {
      var pricetotal2 = totalPrice2 * conversionRate;
      var t2 = pricetotal2.toFixed(2);
      setTotal2(t2);
    }
  }, [conversionRate, totalPrice, totalPrice2]);
  return (
    <div className="singleAirlineWrapper">
      <div className="singleAirlineIfo">
        <div className="singleAirlineLogo">
          <img
            className="singleAirlineLogoImgTag"
            src={singleAirlineLogo}
            alt="AirlineLogo"
          />
        </div>
        <div className="SingleAirlineName">{airlineName}</div>
      </div>
      <div className="nonStopPrice">
        {CurrencySymbol}
        {total1}
      </div>
      <div className="moreThen1StopsPrice">
        {CurrencySymbol}
        {total2}
      </div>
    </div>
  );
};

export default AirlineFilterSingleAirline;
