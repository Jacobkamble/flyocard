import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import Slide from "react-reveal/Slide";

import LoginRegisterModal from "../../Register-sign-in_sign-out/LoginRegisterModal";
import "./MobileMenu.css";
import CurrencyConversionMobile from "./CurrencyConversionMobile";

const MobileMenu = ({ MobileMenuState, closeMobileMenu }) => {
  const verifiedUserName = useSelector((state) =>
    state.Login_Register_Info.user_verification
      ? state.Login_Register_Info.user_verification.user
      : null
  );

  const [loginModal, setLoginModal] = useState(false);
  const [currencyModal, setCurrencyModal] = useState(false);
  return ReactDom.createPortal(
    <>
      <div
        className="mobileMenuOverlay"
        onClick={() => {
          closeMobileMenu();
        }}
      ></div>
      {loginModal ? (
        <div className="mobileLoginModal">
          <LoginRegisterModal
            closeModal={() => {
              setLoginModal(false);
            }}
          />
        </div>
      ) : (
        ""
      )}

      {currencyModal ? (
        <div className="mobileCurrencyConversionModal">
          <CurrencyConversionMobile
            closeCurrencyModal={() => {
              setCurrencyModal(false);
            }}
          />
        </div>
      ) : (
        ""
      )}
      <Slide right>
        <div className="mobileMenuContainer">
          <div className="signInOptionContainer">
            {verifiedUserName ? (
              <>
                <Link to="userprofile" className="userDashLinkMobileMenu">
                  <div
                    className="verifiedUserDetails"
                    onClick={() => {
                      closeMobileMenu();
                    }}
                  >
                    {`${verifiedUserName ? verifiedUserName.firstName : ""}`}
                    &nbsp;
                    {`${verifiedUserName ? verifiedUserName.lastName : ""}`}
                  </div>
                  <div className="userTier">
                    Tier : Bronze&nbsp;<i class="fas fa-trophy"></i>
                  </div>
                </Link>
              </>
            ) : (
              <div
                className="signInBtn"
                onClick={() => {
                  setLoginModal((prev) => !prev);
                }}
              >
                SignIn/Register
              </div>
            )}
          </div>
          <div
            className="mobileMenuCurrencyConverterContainer"
            onClick={() => {
              setCurrencyModal((prev) => !prev);
            }}
          >
            <div className="currencyIconWrapper">
              <i class="fas fa-dollar-sign"></i>&nbsp;
              <i class="fas fa-arrow-right"></i>&nbsp;
              <i class="fas fa-question"></i>
            </div>
            <div className="optionTitle"> Change Currency</div>
          </div>
          <div className="signOutOptionContainer">
            <div className="signoutIcon">
              <i class="fas fa-sign-out-alt"></i>
            </div>
            <div className="optionTitle">Sign Out </div>
          </div>
        </div>
      </Slide>
    </>,
    document.getElementById("mobileMenu")
  );
};
export default MobileMenu;
