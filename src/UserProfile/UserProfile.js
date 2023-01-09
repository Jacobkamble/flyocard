import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Header";
import "./UserProfile.css";
import TripDetails from "./components/TripDetails";
import ProfileDetails from "./components/ProfileDetails";
import RewardDetails from "./components/RewardDetails";
import { useDispatch } from "react-redux";
import { user_profile_nav } from "../actions/userProfileAction";
import SignOutModal from "../Register-sign-in_sign-out/SignOutModal";
const UserProfile = () => {
  const dispatch = useDispatch();
  const newRightSection = useSelector(
    (state) => state.userProfile.userProfileNavState
  );
  const userFirstName = useSelector((state) =>
    state.Login_Register_Info.user_verification
      ? state.Login_Register_Info.user_verification.data.firstName
      : ""
  );
  const userLastName = useSelector((state) =>
    state.Login_Register_Info.user_verification
      ? state.Login_Register_Info.user_verification.data.lastName
      : ""
  );
  const [signOutModalUserProfile, setSignOutModalUserProfile] = useState(false);
  return (
    <>
      <Header />

      <div className="userDashBoardWrapper">
        {signOutModalUserProfile ? (
          <SignOutModal
            closeSignOutModal={() => {
              setSignOutModalUserProfile(false);
            }}
          />
        ) : null}

        {/*  USER DASHBOARD LEFT SECTION */}
        <div className="userProfileNavSection">
          <div className="userProfileInformation">
            <div className="displayPicture">
              {userFirstName.substring(0, 1)}
              {userLastName.substring(0, 1)}
              <div className="tierDisplay">Bronze | 500 points</div>
            </div>
            <div className="userProfileWelcomeMsg">Welcome!</div>
            <div className="userProfileUserName">
              {userFirstName} {userLastName}
            </div>
            <div className="userProfileNavBar">
              <div
                className={`navBtn ${
                  newRightSection === "TripDetails" ? "selected" : null
                }`}
                onClick={() => {
                  dispatch(user_profile_nav("TripDetails"));
                }}
              >
                <i class="fas fa-briefcase"></i>
                <div
                  className={`navBtnDescription ${
                    newRightSection === "TripDetails" ? "selected" : null
                  }`}
                >
                  My Trips
                </div>
              </div>
              <div
                className={`navBtn ${
                  newRightSection === "ProfileDetails" ? "selected" : null
                }`}
                onClick={() => {
                  dispatch(user_profile_nav("ProfileDetails"));
                }}
              >
                <i class="fas fa-user"></i>
                <div
                  className={`navBtnDescription ${
                    newRightSection === "ProfileDetails" ? "selected" : null
                  }`}
                >
                  My Information
                </div>
              </div>
              <div
                className={`navBtn ${
                  newRightSection === "RewardDetails" ? "selected" : null
                }`}
                onClick={() => {
                  dispatch(user_profile_nav("RewardDetails"));
                }}
              >
                <i class="fas fa-gift"></i>
                <div
                  className={`navBtnDescription ${
                    newRightSection === "RewardDetails" ? "selected" : null
                  }`}
                >
                  My Rewards
                </div>
              </div>
              <div
                className={`navBtn ${
                  newRightSection === "SignOut" ? "selected" : null
                }`}
                onClick={() => {}}
              >
                <i class="fas fa-sign-out-alt"></i>
                <div
                  className={`navBtnDescription ${
                    newRightSection === "SignOut" ? "selected" : null
                  }`}
                  onClick={() => {
                    setSignOutModalUserProfile(true);
                  }}
                >
                  Sign Out
                </div>
              </div>
              {/*  <div
                className={`navBtn ${
                  rightSection === "CancellationDetails" ? "selected" : null
                }`}
                onClick={() => {
                  setRightSection("CancellationDetails");
                }}
              >
                <i class="fas fa-plane"></i>
                <div className="navBtnDescription">Cancellation/Refund</div>
              </div>*/}{" "}
            </div>
          </div>
        </div>
        {/*  USER DASHBOARD RIGHT SECTION */}
        <div className="userProfileInfoSection">
          {newRightSection === "TripDetails" ? <TripDetails /> : ""}
          {newRightSection === "ProfileDetails" ? <ProfileDetails /> : ""}
          {newRightSection === "RewardDetails" ? <RewardDetails /> : ""}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
