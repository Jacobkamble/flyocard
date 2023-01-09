import React, { useState } from "react";
import "./ProfileDetails.css";
import Fade from "react-reveal/Fade";
import MyDetails from "./MyInformationCategories/MyDetails";
import BillingDetails from "./MyInformationCategories/BillingDetails";
import TravelerDetails from "./MyInformationCategories/TravelerDetails";

import { user_Profile_my_information } from "../../actions/userProfileAction";
import { useDispatch, useSelector } from "react-redux";
const ProfileDetails = () => {
  const [myInfoDropDown, setMyInfoDropDown] = useState(false);

  const dispatch = useDispatch();
  const myInfoCategory = useSelector(
    (state) => state.userProfile.userProfileMyInformationState
  );
  return (
    <div className="myInfoWrapper">
      {/* MY INFO CATEGORIES NAVIGATION Mobile */}
      <div
        className="myInfoNavBar"
        onClick={() => {
          setMyInfoDropDown((prev) => !prev);
        }}
      >
        <div className="currentCategoryDisplay">{myInfoCategory}</div>
        <div
          className="myInfoHamburger"
          onClick={() => {
            setMyInfoDropDown((prev) => !prev);
          }}
        >
          {myInfoDropDown ? (
            <i
              class="fas fa-chevron-up"
              onClick={() => {
                setMyInfoDropDown((prev) => !prev);
              }}
            ></i>
          ) : (
            <i
              class="fas fa-chevron-down"
              onClick={() => {
                setMyInfoDropDown((prev) => !prev);
              }}
            ></i>
          )}
        </div>
      </div>

      {/* MY INFO CATEGORIES NAVIGATION DESKTOP */}
      <div className="myInfoNavBarDesktop">
        <div className="currentCategoryDesktopWrapper">
          <div
            className={`currentCategoryDesktop ${
              myInfoCategory === "My Details" ? "selected" : null
            }`}
            onClick={() => {
              dispatch(user_Profile_my_information("My Details"));
            }}
          >
            My Details
          </div>
          <div
            className={`currentCategoryDesktop ${
              myInfoCategory === "Billing Details" ? "selected" : null
            }`}
            onClick={() => {
              dispatch(user_Profile_my_information("Billing Details"));
            }}
          >
            Billing Details
          </div>
          <div
            className={`currentCategoryDesktop ${
              myInfoCategory === "Travelers Details" ? "selected" : null
            }`}
            onClick={() => {
              dispatch(user_Profile_my_information("Travelers Details"));
            }}
          >
            Travelers Details
          </div>
        </div>
      </div>

      {/* MY INFO CATEGORIES NAVIGATION Mobile */}

      <Fade top collapse when={myInfoDropDown} duration={100} distance="10%">
        <div className="myInfoCategoryDropDown">
          <div
            className="myInfoCategoryOptions"
            onClick={() => {
              dispatch(user_Profile_my_information("My Details"));
              setMyInfoDropDown(false);
            }}
          >
            My Details
          </div>
          <div
            className="myInfoCategoryOptions"
            onClick={() => {
              dispatch(user_Profile_my_information("Billing Details"));
              setMyInfoDropDown(false);
            }}
          >
            Billing Details
          </div>
          <div
            className="myInfoCategoryOptions"
            onClick={() => {
              dispatch(user_Profile_my_information("Travelers Details"));
              setMyInfoDropDown(false);
            }}
          >
            Traveler Details
          </div>
        </div>
      </Fade>

      <div className="myInfoContainer">
        {myInfoCategory === "My Details" ? (
          <div className="myDetailsWrapper">
            <MyDetails />
          </div>
        ) : null}
        {myInfoCategory === "Billing Details" ? (
          <div className="myDetailsWrapper">
            <BillingDetails />
          </div>
        ) : null}
        {myInfoCategory === "Travelers Details" ? (
          <div className="myDetailsWrapper">
            <TravelerDetails />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileDetails;
