import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./PopularFilters.css";

const PopularFilters = ({ selectedFilter, setSelectedFilter }) => {
  const [totalAmount, setTotalAmount] = useState();
  const [totalAmount1, setTotalAmount1] = useState();
  const [totalAmount2, setTotalAmount2] = useState();
  const [totalAmount3, setTotalAmount3] = useState();
  const [totalAmount4, setTotalAmount4] = useState();
  const CurrencySymbol = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencySymbol
  );
  const conversionRate = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencyRate
  );
  useEffect(() => {
    if (conversionRate) {
      var price1 = parseInt(487) * conversionRate;
      var p1 = Math.round(price1);
      setTotalAmount(p1);
    } else {
      setTotalAmount(487);
    }
    if (conversionRate) {
      var price1 = parseInt(455) * conversionRate;
      var p1 = Math.round(price1);
      setTotalAmount1(p1);
    } else {
      setTotalAmount1(455);
    }
    if (conversionRate) {
      var price1 = parseInt(821) * conversionRate;
      var p1 = Math.round(price1);
      setTotalAmount2(p1);
    } else {
      setTotalAmount2(821);
    }
    if (conversionRate) {
      var price1 = parseInt(467) * conversionRate;
      var p1 = Math.round(price1);
      setTotalAmount3(p1);
    } else {
      setTotalAmount3(467);
    }
    
  });
  return (
    <div className="popularFiltersWrapper">
      <div className="popularFiltersContainer">
        <div className="popularFiltersBlock">
          <div
            className={`popularFiltersBox ${
              selectedFilter === "Recommended" ? "Selected" : null
            }`}
            onClick={() => {
              setSelectedFilter("Recommended");
            }}
          >
            <div className="popularFilterTitle">
              <div className="popularFilterIcon">
                <i class="fas fa-star"></i>
              </div>
              Recommended
            </div>
            <div className="popularFilterAvegragePrice">
              {CurrencySymbol}
              {totalAmount}</div>
          </div>

          <div className="popularFilterDivision"></div>

          <div
            className={`popularFiltersBox ${
              selectedFilter === "Cheapest" ? "Selected" : null
            }`}
            onClick={() => {
              setSelectedFilter("Cheapest");
            }}
          >
            <div className="popularFilterTitle">
              <div className="popularFilterIcon">
                <i class="fas fa-tag"></i>
              </div>
              Cheapest
            </div>
            <div className="popularFilterAvegragePrice">{CurrencySymbol}
              {totalAmount1}</div>
          </div>
          <div className="popularFilterDivision"></div>
          <div
            className={`popularFiltersBox ${
              selectedFilter === "Shortest" ? "Selected" : null
            }`}
            onClick={() => {
              setSelectedFilter("Shortest");
            }}
          >
            <div className="popularFilterTitle">
              {" "}
              <div className="popularFilterIcon">
                <i class="fas fa-clock"></i>
              </div>
              Shortest
            </div>
            <div className="popularFilterAvegragePrice">{CurrencySymbol}
              {totalAmount2}</div>
          </div>
          <div className="popularFilterDivision"></div>
          <div
            className={`popularFiltersBox ${
              selectedFilter === "Alternate Dates" ? "Selected" : null
            }`}
            onClick={() => {
              setSelectedFilter("Alternate Dates");
            }}
          >
            <div className="popularFilterTitle">
              {" "}
              <div className="popularFilterIcon">
                <i class="fas fa-calendar-alt"></i>
              </div>
              Alternate Dates
            </div>
            <div className="popularFilterAvegragePrice">{CurrencySymbol}
              {totalAmount3}</div>
          </div>
          <div className="popularFilterDivision"></div>
          <div
            className={`popularFiltersBox ${
              selectedFilter === "Nearby Airports" ? "Selected" : null
            }`}
            onClick={() => {
              setSelectedFilter("Nearby Airports");
            }}
          >
            <div className="popularFilterTitle">
              {" "}
              <div className="popularFilterIcon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              Nearby Airports
            </div>
            <div className="popularFilterAvegragePrice">{CurrencySymbol}
              {totalAmount1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularFilters;
