import React, { useState } from "react";
import MyButton from "../../Utilities/Button";
import Loader from "react-loader-spinner";
import { VerifyOpt } from "../userAuth";
import { useDispatch, useSelector } from "react-redux";
import { verify_user, login_user } from "../../actions/userActions";
import { default as welcomeImage } from "../../images/AmigosBrowsing.png";
import "./LoginForm.css";

const LoginForm = ({ phoneNo, closeModal }) => {
  const userInfo = useSelector((state) =>
    state.Login_Register_Info.user_verification
      ? state.Login_Register_Info.user_verification.data
      : ""
  );
  const userAuth = useSelector((state) =>
    state.Login_Register_Info.user_verification
      ? state.Login_Register_Info.user_verification.data.auth
      : ""
  );
  const dispatch = useDispatch();
  const [loginOption, setLoginOption] = useState({
    otp: "",
  });
  const [error, setError] = useState(false);
  const [userApproved, setUserApproved] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const handleVerifyOtp = async () => {
    setSpinner(true);
    try {
      const response = await VerifyOpt({
        email: "",
        mobile: phoneNo,
        code: loginOption.otp,
      });

      dispatch(verify_user({ data: response.data.user, auth: true }));
      console.log(userAuth);

      setUserApproved(true);

      setSpinner(false);
    } catch (error) {
      if (error.response) {
        dispatch(verify_user({ Error: error.response.data }));
        setError(true);
      }
      setSpinner(false);
    }
  };
  const redirectTouserProfile = () => {
    return "/userprofile";
  };

  return (
    <>
      {userApproved ? (
        <>
          <div className="welcomeMessageWrapper">
            <div className="welcomeIllustration">
              <img
                className="welcomeIllustrationImgTag"
                src={welcomeImage}
                alt="welcome"
              ></img>
            </div>
            <div className="welcomeMessageTitle">
              Welcome,<br></br>{" "}
              {userInfo ? userInfo.firstName : userInfo ? userInfo.email : null}
              &nbsp;
              {userInfo ? userInfo.lastName : null}
            </div>
          </div>
          <div className="loginFormContinueBtn">
            <MyButton
              type="default"
              label="Book a Flight!"
              padding="2% 26% 2% 26%"
              fontsize="20px"
              runAction={() => {
                closeModal(false);
              }}
              linkTo={() => {
                redirectTouserProfile();
              }}
            />
          </div>
        </>
      ) : (
        <>
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
          ) : (
            <div className="loginFormWrapper">
              <div className="modalTitle">Login</div>
              <div className="inputFiledLabel">
                Hello! <br></br>Please enter your OTP
              </div>
              <div className="LoginRegisterModalInputFieldWrapper">
                <div className="email_MobileNumberField">
                  <input
                    className="otpInputField"
                    type="text"
                    placeholder="Enter OTP"
                    value={loginOption.otp}
                    onChange={(e) => {
                      setLoginOption({ otp: e.target.value });
                    }}
                  />
                </div>
                {error ? (
                  <div className="errorDisplay">
                    Something when wrong, please try again later
                  </div>
                ) : null}
              </div>
              <div className="loginBtnWrapper">
                <MyButton
                  type="default"
                  label="Login"
                  padding="2% 40% 2% 40%"
                  fontsize="20px"
                  runAction={() => {
                    handleVerifyOtp();
                  }}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default LoginForm;
