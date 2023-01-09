import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pulse from "react-reveal/Pulse";
import HeadShake from "react-reveal/HeadShake";
import MyButton from "../Utilities/Button";
import Loginpopup from "./components/Loginpopup";
import LoginRegisterModal from "../Register-sign-in_sign-out/LoginRegisterModal";
import SignOutModal from "../Register-sign-in_sign-out/SignOutModal";
import MobileMenu from "./components/MobileMenu";
import Flags from "country-flag-icons/react/3x2";
import useClickOutside from "../Utilities/useClickOutside";
import newLogo from "../images/newLogo.png";

import { default as flyokartLogo } from "../images/flyokart-plane-svg.svg";
import "./Header.css";

import CurrencyConversion from "./components/CurrencyConversion";
const f = <Flags.US title="USA" class="logoborder" />;
const Header = () => {
  const [currencyModal, setCurrencyModal] = useState(false);
  const [loginPopUpDisplayopen, setloginPopUpDisplayOpen] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);
  const CurrencyConversionError = useSelector(
    (state) => state.CurrencyConversion.ExchangeRateError
  );
  const user_auth = useSelector((state) =>
    state.Login_Register_Info.user_verification
      ? state.Login_Register_Info.user_verification
      : false
  );

  const verifiedUserName = useSelector((state) =>
    state.Login_Register_Info.user_verification
      ? state.Login_Register_Info.user_verification
      : false
  );
  const conversionSymbol = useSelector(
    (State) => State.CurrencyConversion.ExchangeRate.currencySymbol
  );

  const currencyTitle = useSelector(
    (State) => State.CurrencyConversion.ExchangeRate.countryCode
  );

  const currencyFlag = useSelector(
    (State) => State.CurrencyConversion.ExchangeRate.countryflag
  );
  var currency = currencyTitle === "USD" ? "USD" : currencyTitle.slice(3, 7);

  const ref = useRef(null);
  const closeUserDropDown = () => [setUserDropDown(false)];
  const ref1 = useClickOutside(closeUserDropDown);

  const [openRegistersignInModal, setOpenRegistersignInModal] = useState(false);
  const [openSignOutModal, setOpenSignOutModal] = useState(false);

  const handleLoginBtn = () => {
    setOpenRegistersignInModal((prev) => !prev);
  };

  const [mobileMenu, setMobileMenu] = useState();
  console.log(currencyFlag)
  return (
    <>
      <div className="headerContainer ">
        <Link className="logoLink" to="/">
          <div className="logoContainer">
            {/* <div className="logoText">
              <h1 className="logoH1">Fly0kart.com</h1>
            </div> */}

            {/* <div className="logoImage">
              <img src={flyokartLogo} alt="logo" className="logoSvg"></img>
            </div> */}

            <div className="logoImage">
              <img
                style={{ width: "175px", height: "35oop9x" }}
                src={newLogo}
                alt="logo"
                className="logoSvg"
              ></img>
            </div>
          </div>
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "25vw",
            marginLeft: "120px",
          }}
        >
          <div>
            <a
              style={{ color: "#07085C", fontSize: "20px", cursor: "pointer" }}
            >
              Home
            </a>
          </div>
          <div>
            <a
              style={{ color: "#07085C", fontSize: "20px", cursor: "pointer" }}
            >
              About
            </a>
          </div>

          <div>
            <a
              style={{ color: "#07085C", fontSize: "20px", cursor: "pointer" }}
            >
              Services
            </a>
          </div>

          <div>
            <a
              style={{ color: "#07085C", fontSize: "20px", cursor: "pointer" }}
            >
              Offers
            </a>
          </div>
        </div>

        <div className="currencyConversionWrapper">
          <>
            {CurrencyConversionError ? (
              <HeadShake count={10}>
                <div className="currencyConversionError">
                  Error Converting Currency :- {CurrencyConversionError}
                </div>
              </HeadShake>
            ) : (
              ""
            )}
            <div
              className={`conversionBtn ${
                !CurrencyConversionError ? "withoutError" : ""
              }`}
              onClick={() => {
                setCurrencyModal((prev) => !prev);
                console.log(currencyModal);
              }}
            >
              {/* <div className="d-flex justify-content-between">
                {currencyFlag == null ? f : currencyFlag}&nbsp;
                {currency}&nbsp;
                {conversionSymbol}
              </div> */}


{/* Some error is here due to currencyFlag */}
<div className="d-flex justify-content-between">
              {currencyFlag===null?f:""}&nbsp;
              {/* {currencyFlag===null?f:currencyFlag}&nbsp; */}

              {currency}&nbsp;
              {conversionSymbol}
              </div>


              <div className="dropDownIconCurrency">
                <i className="fas fa-caret-down"></i>
              </div>
            </div>
          </>
        </div>

        
        <div className="currencyConversionModal">
          <CurrencyConversion
            modalOpen={currencyModal}
            closeCurrencyModal={(val) => {
              setCurrencyModal(val);
            }}
          />
        </div>


        <div className="login" ref={ref1}>
          {user_auth.auth ? (
            <div
              className="verifiedUserWrapper"
              onClick={() => {
                setUserDropDown((prev) => !prev);
              }}
            >
              <div className="userProfileIcon">
                <i className="fas fa-user"></i>
              </div>
              <div className="verifiedUserTitle">
                {verifiedUserName.data.firstName}
              </div>
              {userDropDown ? (
                <i className="fas fa-sort-up"></i>
              ) : (
                <i className="fas fa-sort-down"></i>
              )}

              {userDropDown ? (
                <div className="verifiedUserDropDown">
                  <Link to="userprofile" className="logoLink">
                    <div className="verifiedUserDDOption">My Account</div>
                  </Link>

                  <div
                    className="verifiedUserDDOption"
                    onClick={() => {
                      setOpenSignOutModal(true);
                    }}
                  >
                    Sign out
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div className="loginBtn">
              <MyButton
                type="default"
                label="SignIn"
                padding=" 6px 20px 6px 20px"
                fontsize="16px"
                runAction={handleLoginBtn}
              />
            </div>
          )}
        </div>

        {!verifiedUserName ? (
          <Pulse count={2}>
            <div
              className={`loginToast ${
                loginPopUpDisplayopen ? "open" : "close"
              }`}
              onClick={() => setloginPopUpDisplayOpen((prev) => !prev)}
            >
              <Loginpopup />
            </div>
          </Pulse>
        ) : null}

        <div className="contactUsBanner d-flex">
          <div className="mobileMenuIcon my-auto">
            <div className="hamburgerMenu">
              <i
                className={`fas ${mobileMenu ? "fa-times" : "fa-bars"}`}
                onClick={() => {
                  setMobileMenu((prev) => !prev);
                }}
              ></i>
            </div>
          </div>
          <div className="mobile-hidden">
            <div className="cancellationContainer">24 hours Cancellation! </div>
            <a href="tel:+1800" style={{ textDecoration: "none" }}>
              <div className="contactUsContainer">
                <div className="callUsIcon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                Call Us at 1800-FlyOkart
              </div>
            </a>
          </div>
        </div>
        {openRegistersignInModal ? (
          <LoginRegisterModal
            closeModal={() => {
              setOpenRegistersignInModal(false);
            }}
          />
        ) : null}
        {openSignOutModal ? (
          <SignOutModal
            closeSignOutModal={() => {
              setOpenSignOutModal(false);
            }}
          />
        ) : null}
      </div>

      {mobileMenu ? (
        <MobileMenu
          MobileMenuState={mobileMenu}
          closeMobileMenu={() => {
            setMobileMenu(false);
          }}
        />
      ) : null}
    </>
  );
};

export default Header;
