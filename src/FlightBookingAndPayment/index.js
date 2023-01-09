import React, { useState } from "react";
import "./FlightBookingAndPayment.css";
import FlightSummary from "./components/FlightSummary";
import PriceDetails from "./components/PriceDetails";
import FlightSeatSelection from "./components/FlightSeatSelection";
import FlightPackage from "./components/FlightPackages";
import Header from "../Header/index";
import TravellerInfoInput from "./components/TravellersInfoInput";
import TravellerInfoInputMedia from "./components/TravellerInfoInputMedia";
import CardInfoInput from "./components/CardInfoInput";
import BillingAndContactForm from "./components/BillingAndContactForm";
import { useSelector } from "react-redux";

const FlightBookingAndPayment = () => {
  const adultCount = useSelector((state) => state.Home.adultCount);
  const childCount = useSelector((state) => state.Home.childrenCount);
  const infantCount = useSelector((state) => state.Home.infantCount);

  var package1Price = "0";
  var package2Price = "14.95";
  var package3Price = "20.95";

  const renderTravellerInfo = () => {
    const travellerInfo = [];
    for (var count = 0; count < adultCount; count++) {
      travellerInfo.push(
        <TravellerInfoInput travellerType={"Adult"} travellerNo={count + 1} />
      );
    }

    for (var countChild = 0; countChild < childCount; countChild++) {
      travellerInfo.push(
        <TravellerInfoInput travellerType={"Child"} travellerNo={count + 1} />
      );
      count++;
    }

    for (var countInfant = 0; countInfant < infantCount; countInfant++) {
      travellerInfo.push(
        <TravellerInfoInput travellerType={"Infant"} travellerNo={count + 1} />
      );
      count++;
    }

    return travellerInfo;
  };

  const renderTravellerInfoMedia = () => {
    const travellerInfoMedia = [];
    for (var count = 0; count < adultCount; count++) {
      travellerInfoMedia.push(
        <TravellerInfoInputMedia
          travellerType={"Adult"}
          travellerNo={count + 1}
        />
      );
    }

    for (var countChild = 0; countChild < childCount; countChild++) {
      travellerInfoMedia.push(
        <TravellerInfoInputMedia
          travellerType={"Child"}
          travellerNo={count + 1}
        />
      );
      count++;
    }

    for (var countInfant = 0; countInfant < infantCount; countInfant++) {
      travellerInfoMedia.push(
        <TravellerInfoInputMedia
          travellerType={"Infant"}
          travellerNo={count + 1}
        />
      );
      count++;
    }

    return travellerInfoMedia;
  };

  return (
    <>
      <Header />
      <div className="flightBookingAndPaymentContainer">
        <div className="flightBookingAndPaymentScroll">
          <div className="flightSummaryWrapper">
            <FlightSummary />
          </div>
          <div className="travellerInfoInputWrapper">
            {renderTravellerInfo()}
          </div>

          {
            <div className="packages">
              <FlightPackage
                package1Amt={package1Price}
                package2Amt={package2Price}
                package3Amt={package3Price}
              />
            </div>
          }
          <div className="FlightSelectionWrapper">
            <FlightSeatSelection />
          </div>
          <div className="cardInfoInputWrapper">
            <CardInfoInput />
          </div>
          <div className="billingAndContactForm">
            <BillingAndContactForm />
          </div>
        </div>

        <div className="priceDetailsWrapperDesktop">
          <PriceDetails />
        </div>

        <div className="flightBookingAndPaymentScrollMedia">
          <div className="flightSummaryWrapper">
            <FlightSummary />
          </div>

          <div className="travellerInfoInputWrapperMedia">
            {renderTravellerInfoMedia()}
          </div>
          {
            <div className="packages">
              <FlightPackage
                package1Amt={package1Price}
                package2Amt={package2Price}
                package3Amt={package3Price}
              />
            </div>
          }
          <div className="FlightSelectionWrapper">
            <FlightSeatSelection />
          </div>
          <div className="cardInfoInputWrapper">
            <CardInfoInput />
          </div>
          <div className="billingAndContactForm">
            <BillingAndContactForm />
          </div>
          <div className="priceDetailsWrapperMedia">
            <PriceDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightBookingAndPayment;
