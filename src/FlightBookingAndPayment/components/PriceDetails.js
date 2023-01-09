import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./PriceDetails.css";
import Img from './wallet.png'

const PriceDetails = () => {
  const noOfAdults = useSelector((state) => state.Home.adultCount);
  const noOfChildren = useSelector((state) => state.Home.childrenCount);
  const noOfInfants = useSelector((state) => state.Home.infantCount);
  const trip1price = useSelector((state) => state.SearchResult.trip1Price);
  const trip2price = useSelector((state) => state.SearchResult.trip2Price);
  const package_name = useSelector(
    (state) => state.PaymentAndBooking.package_info.package_name
  );

  const package_price = useSelector(
    (state) => state.PaymentAndBooking.package_info.package_price
  );

  var totalPrice = "";
  if (trip2price) {
    totalPrice = parseInt(trip1price) + parseInt(trip2price);
  } else {
    totalPrice = parseInt(trip1price);
  }

  const currencySymbol = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencySymbol
  );
  const conversionRate = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencyRate
  );
  const totalPriceFromSR = totalPrice;
  const [flightPrice, setFlightPrice] = useState(totalPriceFromSR);
  const [totalPriceAdult, setTotalPriceAdult] = useState(0);
  const [totalPriceInfant, setTotalPriceInfant] = useState(0);
  const [totalPriceChildren, setTotalPriceChildren] = useState(0);
  const [packagePrice, setPackagePrice] = useState(package_price);
  const [totalAmount, setTotalAmount] = useState();
  useEffect(() => {
    var amtTotal = "";
    var tripTotal = "";
    if (conversionRate) {
      amtTotal = totalPriceFromSR * conversionRate;
      tripTotal = Math.round(amtTotal);
      setFlightPrice(tripTotal);
    } else {
      amtTotal = totalPriceFromSR * 1;
      tripTotal = Math.round(amtTotal);
      setFlightPrice(tripTotal);
    }
  }, [conversionRate, totalPriceFromSR]);

  useEffect(() => {
    var calcAdultCount = flightPrice * noOfAdults;
    setTotalPriceAdult(Math.round(calcAdultCount));
    if (noOfChildren) {
      var calcChildren = flightPrice * noOfChildren;
      setTotalPriceChildren(Math.round(calcChildren));
    } else {
      setTotalPriceChildren(0);
    }
    if (noOfInfants) {
      var calcInfant = flightPrice * noOfInfants;
      setTotalPriceInfant(Math.round(calcInfant));
    } else {
      setTotalPriceInfant(0);
    }
  }, [
    noOfAdults,
    noOfChildren,
    noOfInfants,
    totalPrice,
    totalAmount,
    totalPriceAdult,
    totalPriceChildren,
    totalPriceInfant,
    totalPriceFromSR,
    flightPrice,
  ]);

  useEffect(() => {
    if (package_price) {
      var converted_package_price = package_price * conversionRate;
      setPackagePrice(converted_package_price.toFixed(2));
    } else {
      setPackagePrice(0);
    }
  }, [conversionRate, package_price]);
  useEffect(() => {
    var calcTotalAmount =
      totalPriceAdult +
      totalPriceChildren +
      totalPriceInfant +
      parseInt(packagePrice);

    setTotalAmount(calcTotalAmount);
  }, [totalPriceAdult, totalPriceChildren, totalPriceInfant, packagePrice]);

  const currencyTitle = useSelector(
    (State) => State.CurrencyConversion.ExchangeRate.countryCode
  );
  var currency = currencyTitle === "USD" ? "USD" : currencyTitle.slice(3, 7);

  return (
    <div className="priceDetailsContainer">
      <div className="priceDetailHeaderContainer">
        <div className="priceDetailHeading">Price Details</div>
        <div className="priceDetailCurrency">{currency}</div>
      </div>
      <div className="priceBreakDown">
        <div className="priceBreakDownHeaders">
          <div className="priceBreakDownHeader1"> Tavelller(s)</div>
          <div className="priceBreakDownHeader2"> Price per person</div>
          <div className="priceBreakDownHeader3">Subtotal</div>
        </div>
        {/* PRICE FOR ADULTS */}
        <div className="priceForAdult">
          <div className="travellerCount">{noOfAdults} x Adults</div>
          <div className="pricePerPerson">
            {currencySymbol}
            {flightPrice}
          </div>
          <div className="totalPrice">
            {currencySymbol}
            {totalPriceAdult}
          </div>
        </div>
        {/* PRICE FOR CHILDREN */}
        {noOfChildren > 0 ? (
          <div className="priceForChildren">
            <div className="travellerCount">{noOfChildren} x Children</div>
            <div className="pricePerPerson">
              {currencySymbol}
              {flightPrice}
            </div>
            <div className="totalPrice">
              {currencySymbol}
              {totalPriceChildren}
            </div>
          </div>
        ) : null}
        {/* PRICE FOR INFANTS */}
        {noOfInfants > 0 ? (
          <div className="priceForInfant">
            <div className="travellerCount">{noOfInfants} x Infants</div>
            <div className="pricePerPerson">
              {currencySymbol}
              {flightPrice}
            </div>
            <div className="totalPrice">
              {currencySymbol}
              {totalPriceInfant}
            </div>
          </div>
        ) : null}
        <div className="selectedPackage">
          <div className="packageName">{package_name} - (Support package)</div>
          <div className="packagePrice">
            {currencySymbol}
            {packagePrice}
          </div>
        </div>
        <div className="totalAmount">
          <div className="totalAmountHeader">Total Price</div>
          <div className="totalAmountText">
            {currencySymbol}
            {totalAmount}
          </div>
        </div>
      </div>
      <div >
      <button className="btn paybtn">
        <div class="pay">Pay {currencySymbol}
            {totalAmount}<div className="img2"><img className="" src={Img} height="25px" width="25px" alt="{pay}"></img></div> </div>
        </button>
        </div>
    </div>
  );
};
export default PriceDetails;
