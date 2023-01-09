import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CurrencyConversionMobile.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";
import Flags from "country-flag-icons/react/3x2";
import {
  setCurrencyExchangeRate,
  setCurrencyExchangeRateError,
} from "../../actions/ApiActions";
require("dotenv").config();
const CurrencyConversionMobile = ({ closeCurrencyModal }) => {
  const selectedCurrency = useSelector(
    (state) => state.CurrencyConversion.ExchangeRate.countryCode
  );
  console.log(selectedCurrency);
  const dispatch = useDispatch();

  const api_key = process.env.REACT_APP_API_KEY;
  const convertCurrency = async (ID, Symbol) => {
    fetch(`http://apilayer.net/api/live?access_key=${api_key}`)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error("something went wrong");
        }
        return res.json();
      })
      .then((res) => {
        console.log(res.success);
        if (res.success === true) {
          const data = res;
          const result = data.quotes[ID];
          dispatch(
            setCurrencyExchangeRate({
              currencyRate: result,
              currencySymbol: Symbol,
              countryCode: ID,
              success: data.success,
            })
          );
          dispatch(setCurrencyExchangeRateError(""));
        } else {
          const setError = (res) => {
            console.log(res);
            dispatch(setCurrencyExchangeRateError(res.error.info));
          };
          setError(res);
        }
      })
      .catch((err) => {
        dispatch(setCurrencyExchangeRateError(err.message));
      });
  };
  return (
    <>
      <Fade>
        <div className="currencyConversionMobileWrapper">
          <div className="currencyConversionMobileHeader">
            <div className="currencyConversionMobileBackBtn">
              <i
                class="fas fa-arrow-left"
                onClick={() => {
                  closeCurrencyModal();
                }}
              ></i>
            </div>
            <div className="currencyConversionMobileTitle">Change Currency</div>
          </div>
          {/*---------------------------------------FIRST ROW OF FLAGS------------------------------- */}
          <div className="currencyConversionMobileFlagContainer">
            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USD" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USD", "$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.US title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">USD</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDCAD" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDCAD", "C$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.CA title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">CAD</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">C$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDGBP" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDGBP", "£");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.GB title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">GBP</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">£</div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------------SECOND ROW OF FLAGS ----------------------------*/}
          <div className="currencyConversionMobileFlagContainer">
            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDAUD" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDAUD", "$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.AU title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">AUD</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDCHF" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDCHF", "CHF");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.CH title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">CHF</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolWithWordsMobile">CHF</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDHKD" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDHKD", "$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.HK title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">HKD</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">$</div>
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------THIRD ROW OF FLAGS----------------------------- */}
          <div className="currencyConversionMobileFlagContainer">
            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDJPY" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDJPY", "¥");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.JP title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">JPY</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">&yen;</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDCNY" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDCNY", "¥");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.CN title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">CNY</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">&yen;</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDINR" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDINR", "₹");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.IN title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">INR</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">₹</div>
                </div>
              </div>
            </div>
          </div>

          {/*--------------------------------- FOURTH ROW OF FLAGS ---------------------------------*/}
          <div className="currencyConversionMobileFlagContainer">
            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDKYD" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDKYD", "CI$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.KY title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">KYD</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">CI$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDAWG" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDAWG", "ƒ");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.AW title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">AWG</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">ƒ</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDBBD" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDBBD", "$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.BB title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">BBD</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">$</div>
                </div>
              </div>
            </div>
          </div>
          {/*--------------------- FIFTH ROW OF FLAGS -----------------------------------*/}
          <div className="currencyConversionMobileFlagContainer">
            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDBSD" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDBSD", "$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.BS title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">BSD</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDDOP" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDDOP", "RD$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.DO title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">DOP</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolWithWordsMobile">RD$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDHTG" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDHTG", "G");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.HT title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">HTG</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">G</div>
                </div>
              </div>
            </div>
          </div>

          {/*--------------------- SIXTH ROW OF FLAGS -----------------------------------*/}
          <div className="currencyConversionMobileFlagContainer">
            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDJMD" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDJMD", "J$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.JM title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">JMD</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">J$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDTTD" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDTTD", "TT$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.TT title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">TTD</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolWithWordsMobile">TT$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDDKK" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDDKK", "KR");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.DK title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">DKK</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">KR</div>
                </div>
              </div>
            </div>
          </div>

          {/*--------------------- SEVENTH ROW OF FLAGS -----------------------------------*/}
          <div className="currencyConversionMobileFlagContainer">
            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDNOK" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDNOK", "kr");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.NO title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">NOK</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">kr</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDSEK" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDSEK", "kr");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.SE title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">SEK</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">KR</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDHUF" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDHUF", "FT");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.HU title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">HUF</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">FT</div>
                </div>
              </div>
            </div>
          </div>

          {/*--------------------- EIGHTH ROW OF FLAGS -----------------------------------*/}
          <div className="currencyConversionMobileFlagContainer">
            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDMKN" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDMKN", "$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.MX title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">MKN</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDSGD" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDSGD", "$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.SG title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">SGD</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDAED" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDAED", "AED");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.AE title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">AED</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolWithWordsMobile">AED</div>
                </div>
              </div>
            </div>
          </div>
          {/*--------------------- NINETH ROW OF FLAGS -----------------------------------*/}
          <div className="currencyConversionMobileFlagContainer">
            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDNZD" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDNZD", "$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.NZ title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">NZD</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDZAR" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDZAR", "R");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.ZA title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">ZAR</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">R</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDTRY" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDTRY", "TR");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.TR title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">TRY</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">TR</div>
                </div>
              </div>
            </div>
          </div>
          {/*--------------------- TENTH ROW OF FLAGS -----------------------------------*/}
          <div className="currencyConversionMobileFlagContainer">
            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDMRY" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDMRY", "RM");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.MY title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">MRY</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">RM</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDPHP" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDPHP", "p");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.PH title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">PHP</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">P</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDLKR" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDLKR", "RS");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.LK title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">LKR</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">RS</div>
                </div>
              </div>
            </div>
          </div>

          {/*--------------------- ELEVENTH ROW OF FLAGS -----------------------------------*/}
          <div className="currencyConversionMobileFlagContainer">
            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDNPR" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDNPR", "RS");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.NP title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">NPR</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">RS</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDBND" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDBND", "$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.BN title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">BND</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDIDR" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDIDR", "RP");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.ID title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">IDR</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">RP</div>
                </div>
              </div>
            </div>
          </div>

          {/*--------------------- TWELETH ROW OF FLAGS -----------------------------------*/}
          <div className="currencyConversionMobileFlagContainer">
            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDMOP" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDMOP", "MOP$");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.MO title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">MOP</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolWithWordsMobile">MOP$</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDSAR" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDSAR", "﷼");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.SA title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">SAR</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">﷼</div>
                </div>
              </div>
            </div>

            <div
              className={`currencyFlagWrapperMobile ${
                selectedCurrency === "USDTHB" ? "select" : null
              }`}
              onClick={() => {
                convertCurrency("USDTHB", "฿");

                closeCurrencyModal(false);
              }}
            >
              <div className="flagIconContainerMobile">
                <Flags.TH title="United States" className="flagIcon" />
              </div>
              <div className="codeSymbolContainerMobile">
                <div className="currencyCodeContainerMobile">THB</div>

                <div className="currencySymbolContainerMobile">
                  <div className="currencySymbolMobile">฿</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default CurrencyConversionMobile;
