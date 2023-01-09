import React, { useState } from "react";
import "./RegisterationFrom.css";
import MyButton from "../../Utilities/Button";
import Loader from "react-loader-spinner";
import { default as registredImage } from "../../images/AmigosStanding.png";
import { RegisterUser } from "../userAuth";
import { useDispatch } from "react-redux";
import { register_user } from "../../actions/userActions";

const RegisterationForm = ({ enteredValue, goToLogin }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    PhoneNO: enteredValue,
    email: "",
  });

  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const handleRegister = async () => {
    setSpinner(true);
    try {
      const userInfo = await RegisterUser({
        firstName: user.firstName,
        lastName: user.lastName,
        mobile: user.PhoneNO,
        email: user.email,
      });
      dispatch(register_user(userInfo));
      setRegisterSuccess(true);
      setSpinner(false);
    } catch (error) {
      if (error.response) {
        dispatch(register_user(error.response.data));
        setError(true);
      }
      setSpinner(false);
    }
  };
  return (
    <>
      {registerSuccess ? (
        <>
          <div className="registerMessageWrapper">
            <div className="registerIllustration">
              <img
                className="registerIllustrationImgTag"
                src={registredImage}
                alt="registration successfull!"
              ></img>
            </div>
            <div className="registerMessageTitle">
              Registration Successfull!
              <br></br>
            </div>
          </div>
          <div className="registerationFormContinueBtn">
            <MyButton
              type="default"
              label="Login Now"
              padding=" 6px 150px 6px 150px"
              fontsize="20px"
              runAction={() => {
                goToLogin();
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
            <>
              {" "}
              <div className="registerationFormWrapper">
                <div className="registerationInputFieldWrapper">
                  <div className="inputFieldBorder">
                    <input
                      className="registerationInputFields"
                      type="text"
                      placeholder="Enter First Name"
                      value={user.firstName}
                      onChange={(e) => {
                        setUser((prev) => {
                          return { ...prev, firstName: e.target.value };
                        });
                      }}
                    />
                  </div>
                  <div className="inputFieldBorder">
                    <input
                      className="registerationInputFields"
                      type="text"
                      placeholder="Enter Last Name"
                      value={user.lastName}
                      onChange={(e) => {
                        setUser((prev) => {
                          return { ...prev, lastName: e.target.value };
                        });
                      }}
                    />
                  </div>

                  <div className="inputFieldBorder">
                    <input
                      className="registerationInputFields"
                      type="text"
                      placeholder="Enter Email id"
                      value={user.email}
                      onChange={(e) => {
                        setUser((prev) => {
                          return { ...prev, email: e.target.value };
                        });
                      }}
                    />
                  </div>

                  <div className="inputFieldBorder">
                    <input
                      className="registerationInputFields"
                      type="text"
                      placeholder="Enter Phone number"
                      value={user.PhoneNO}
                      disabled={true}
                    />
                  </div>
                  {error ? (
                    <div className="errorDisplay">
                      Something when wrong, please try again later
                    </div>
                  ) : null}
                </div>
                <div className="registerBtn">
                  <MyButton
                    type="default"
                    label="Register"
                    padding=" 6px 165px 6px 165px"
                    fontsize="20px"
                    runAction={() => {
                      handleRegister();
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
export default RegisterationForm;
