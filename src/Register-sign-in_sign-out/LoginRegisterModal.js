/* Login/Register modal is rendered in header*/
import React, { useState } from "react";
import "./LoginRegisterModal.css";
import ReactDom from "react-dom";
import MyButton from "../Utilities/Button";
import Fade from "react-reveal/Fade";
import { default as flyokartLogo } from "../images/flyokart-plane-svg.svg";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Login } from "./userAuth";
import { login_user } from "../actions/userActions";
import { useDispatch } from "react-redux";
import LoginForm from "./components/LoginForm";
import RegisterationForm from "./components/RegisterationForm";

const LoginRegisterModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [loginOption, setLoginOption] = useState({
    email: null,
    mobile: "",
    otp: "",
  });
  const [getOtp, setGetOtp] = useState(false);
  const [goToRegister, setGoToRegister] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);
  const handleContinue = async () => {
    setSpinner(true);
    try {
      const response = await Login({
        email: loginOption.email,
        mobile: loginOption.mobile,
        channel: "sms",
      }).then(() => {
        setGetOtp(true);
        dispatch(login_user(response));
        setSpinner(false);
      });
    } catch (error) {
      if (error.response) {
        if (error.response.data.statusCode === 401) {
          setGoToRegister(true);
        }
        dispatch(login_user(error.response.data));
        if (error.response.data.statusCode === 401) {
          setError(false);
        } else {
          setError(true);
        }
      }
      setSpinner(false);
    }
  };

  return ReactDom.createPortal(
    <>
      <Fade top cascade duration={500}>
        <div style={{zIndex:"9"}} className="LoginRegisterModalWrapper">
          <div className="LoginRegisterModalBox">
            <div className="closeLoginRegisterModalContainer">
              <i
                class="fas fa-times"
                onClick={() => {
                  closeModal();
                }}
              ></i>
            </div>

            <div className="LoginRegisterModalLogoContainer">
              <div className="LoginRegisterModalLogoText">Fly0kart.com</div>
              <div className="logoImage">
                <img src={flyokartLogo} alt="logo" className="logoSvg"></img>
              </div>
            </div>
            {spinner ? (
              <div className="loadingSpinner">
                <Loader
                  type="MutatingDots"
                  color="#46B2E0"
                  secondaryColor="#0E3D6F"
                  height={100}
                  width={100}
                />
              </div>
            ) : goToRegister ? (
              <RegisterationForm
                enteredValue={
                  loginOption.mobile ? loginOption.mobile : loginOption.email
                }
                goToLogin={() => {
                  setGoToRegister(false);
                }}
              />
            ) : getOtp ? (
              <LoginForm phoneNo={loginOption.mobile} closeModal={closeModal} />
            ) : (
              <div className="registerLoginDynamicForms">
                <div className="modalTitle">Login/Signup</div>
                <div className="inputFiledLabel">
                  Welcome to Fly0kart.com ,<br></br>
                  Please enter your Email or Phone number
                </div>
                <div className="LoginRegisterModalInputFieldWrapper">
                  <div className="email_MobileNumberField">
                    <input
                      className="loginRegisterInputField"
                      type="text"
                      placeholder="Enter Email id or Mobile Number"
                      value={loginOption.mobile}
                      onChange={(e) => {
                        setLoginOption({ mobile: e.target.value });
                      }}
                    />
                  </div>
                  {error ? (
                    <div className="errorDisplay">
                      Something when wrong, please try again later
                    </div>
                  ) : null}
                </div>
                <div className="continueBtnWrapper">
                  <MyButton
                    type="default"
                    label="Continue"
                    padding="2% 30% 2% 30%"
                    fontsize="20px"
                    runAction={() => {
                      handleContinue();
                    }}
                  />
                </div>
                <div className="LoginRegisterModalDisclamer">
                  By proceeding, you agree to FlyOkart's Privacy Policy, User
                  Agreement and T&Cs
                </div>
              </div>
            )}
          </div>
        </div>
      </Fade>
    </>,
    document.getElementById("portal5")
  );
};

export default LoginRegisterModal;
