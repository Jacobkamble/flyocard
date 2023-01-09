import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./FlightPackages.css";
import { set_support_package } from "../../actions/PaymentAndBookingActions";

const FlightPackages = ({ package1Amt, package2Amt, package3Amt }) => {
  const currencySymbol = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencySymbol
  );
  const conversionRate = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.currencyRate
  );
  const dispatch = useDispatch();
  const [StandardAmount, SetStandardAmount] = useState(package1Amt);
  const [PremiumAmount, SetPremiumAmount] = useState(package2Amt);
  const [SupremeAmount, SetSupremeAmount] = useState(package3Amt);
  const [selectedPackage, setSelectedPackage] = useState({
    package_name: "premium",
    package_price: 14.95,
  });
  useEffect(() => {
    dispatch(
      set_support_package({
        package_name: selectedPackage.package_name,
        package_price: selectedPackage.package_price,
      })
    );
  }, [dispatch, selectedPackage]);

  useEffect(() => {
    var standardAmt = "";
    var standardPackage = "";
    if (conversionRate) {
      standardAmt = package1Amt * conversionRate;
      standardPackage = standardAmt.toFixed(2);
      SetStandardAmount(standardPackage);
    } else {
      standardAmt = package1Amt * 1;
      standardPackage = standardAmt.toFixed(2);
      SetStandardAmount(standardPackage);
    }
  }, [conversionRate, package1Amt]);

  useEffect(() => {
    var premiumAmt = "";
    var premiumPackage = "";
    if (conversionRate) {
      premiumAmt = package2Amt * conversionRate;
      premiumPackage = premiumAmt.toFixed(2);
      SetPremiumAmount(premiumPackage);
    } else {
      premiumAmt = package2Amt * 1;
      premiumPackage = premiumAmt.toFixed(2);
      SetPremiumAmount(premiumPackage);
    }
  }, [conversionRate, package2Amt]);

  useEffect(() => {
    var supremeAmt = "";
    var supremePackage = "";
    if (conversionRate) {
      supremeAmt = package3Amt * conversionRate;
      supremePackage = supremeAmt.toFixed(2);
      SetSupremeAmount(supremePackage);
    } else {
      supremeAmt = package3Amt * 1;
      supremePackage = supremeAmt.toFixed(2);
      SetSupremeAmount(supremePackage);
    }
  }, [conversionRate, package3Amt]);

  return (
    <>
      <div className="packageHeaderContainer">
        <div className="SupportPackagetext">
          Support Packages (Choose your level of support)
        </div>
        <div className="packageBoxContainer">
          <div
            className={`packageBox1 ${selectedPackage.package_name === "standard" ? "selected" : null
              }`}
            onClick={() => {
              setSelectedPackage({
                package_name: "standard",
                package_price: package1Amt,
              });
            }}
          >
            <div className="BoxTextContainer">
              <div className="BoxText1">Standard</div>
              <div className="BoxCurrency">
                {currencySymbol}
                {StandardAmount}
              </div>
              <div className="BoxText2">Standard</div>
              <div className="BoxText3">Standard</div>
              <div className="BoxText4">
                <button className="btn">
                  {selectedPackage.package_name === "standard"
                    ? "Included"
                    : "Included"}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`packageBox2 ${selectedPackage.package_name === "premium" ? "selected" : null
              }`}
            onClick={() => {
              setSelectedPackage({
                package_name: "premium",
                package_price: package2Amt,
              });
            }}
          >
            <div className="BoxTextContainer" id="box2">
              <div className="BoxText1">Premium</div>
              <div className="BoxCurrency">
                {currencySymbol}
                {PremiumAmount}
              </div>
              <div className="BoxText2">Fast</div>
              <div className="BoxText3">Priority</div>
              <div className="BoxText4">
                {/*<div
                className={`btn ${
                  selectedPackage === "premium" ? "selected" : null
                }`}
              >
                {`${selectedPackage === "premium" ? "ADDED" : "ADD"}`}
              </div>*/}
                <button className="btn">
                  {selectedPackage.package_name === "premium" ? "ADDED" : "ADD"}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`packageBox3 ${selectedPackage.package_name === "supreme" ? "selected" : null
              }`}
            onClick={() => {
              setSelectedPackage({
                package_name: "supreme",
                package_price: package3Amt,
              });
            }}
          >
            <div className="BoxTextContainer">
              <div className="BoxText1">Supreme</div>
              <div className="BoxCurrency">
                {currencySymbol}
                {SupremeAmount}
              </div>
              <div className="BoxText2">Fastest</div>
              <div className="BoxText3">Highest Priority</div>
              <div className="BoxText4">
                <button className="btn">
                  {selectedPackage.package_name === "supreme" ? "ADDED" : "ADD"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightPackages;
