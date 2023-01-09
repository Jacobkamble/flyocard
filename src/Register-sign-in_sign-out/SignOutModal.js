import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SignOutModal.css";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import { userSignOut } from "./userAuth";
import Fade from "react-reveal/Fade";

const SignOutModal = ({ closeSignOutModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const signOutUser = async () => {
    console.log("logOut clicked");
    setLoader(true);
    await dispatch(userSignOut());
    setLoader(false);
    history.push("/");
  };
  return (
    <Fade top cascade duration={500}>
      <div
        className="SignOutModalWrapper"
        onClick={() => {
          closeSignOutModal();
        }}
      >
        {loader ? (
          <div className="signOutUserSpinner">
            <Loader
              type="MutatingDots"
              color="#46B2E0"
              secondaryColor="#0E3D6F"
              height={100}
              width={100}
            />
          </div>
        ) : (
          <div className="signOutModalBox">
            <div className="signOutModalCloseBtnContainer">
              <i
                class="fas fa-times"
                onClick={() => {
                  closeSignOutModal();
                }}
              ></i>
            </div>
            <div className="siginOutMessageContainer">
              <div>Are you sure you want to Log-out?</div>
            </div>
            <div className="signOutModalButtons">
              <div
                className="signOutModalConfirmBtn"
                onClick={() => {
                  signOutUser();
                }}
              >
                Yes
              </div>
              <div
                className="signOutModalCancelBtn"
                onClick={() => {
                  closeSignOutModal();
                }}
              >
                Cancel
              </div>
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
};

export default SignOutModal;
