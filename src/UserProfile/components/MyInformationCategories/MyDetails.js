import React from "react";
import { useSelector } from "react-redux";
import "./MyDetails.css";
import DobInputField from "../Reusable-InputFields/DobInputField";
import Fade from "react-reveal/Fade";

const MyDetails = () => {
  const user = useSelector((state) =>
    state.Login_Register_Info.user_verification
      ? state.Login_Register_Info.user_verification.data
      : ""
  );
  return (
    <Fade top cascade duration={500}>
      <div className="myInfosWrapper">
        {/*SIGNED IN VIA INFORMATION */}

        <div className="signInInfoContainer">
          <div className="sigInInfoHeader">Signed-In via</div>
          <div className="sigInInformationDisplay">
            <div className="display-inputRow">
              <div className="label">Phone no.</div>
              <div className="text">
                <div className="myDetailsInfoDisplay"> {user.mobile}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="personalInfoContainer">
          <div className="personalInfoHeader"> Personal Information</div>
          <div className="personalInformationDisplay">
            {/* PERSONAL INFO FIRST ROW- FIRST & MIDDLE NAME*/}
            <div className="firstAndMiddleNameDisplay">
              <div className="display-inputRow">
                <div className="label">
                  First Name<span className="CIcompulsouryMark">*</span>
                </div>
                <div className="text">
                  <input
                    className="myDetailsInputField"
                    value={user.firstName}
                  />
                </div>
              </div>
              <div className="display-inputRow">
                <div className="label">Middle Name</div>
                <div className="text">
                  <input
                    className="myDetailsInputField"
                    placeholder=""
                    value={user.middleName}
                  />
                </div>
              </div>
            </div>
            {/* PERSONAL INFO SECOND ROW- LAST & EMAIL */}
            <div className="lastNameAndEmailDisplay">
              <div className="display-inputRow">
                <div className="label">
                  <span className="display-inputSpan">
                    Last Name<span className="CIcompulsouryMark">*</span>
                  </span>
                </div>
                <div className="text">
                  <input
                    className="myDetailsInputField"
                    placeholder=""
                    value={user.lastName}
                  />
                </div>
              </div>
              <div className="display-inputRow">
                <div className="label">Email</div>
                <div className="text">
                  <div className="myDetailsInfoDisplay"> {user.email}</div>
                </div>
              </div>
            </div>
            {/*  PERSONAL INFO THIRD ROW-PHONE NO. */}
            <div className="PhonenoDisplay">
              <div className="display-inputRow">
                <div className="label">Phone no.</div>
                <div className="text">
                  <div className="myDetailsInfoDisplay"> {user.mobile}</div>
                </div>
              </div>

              <div className="emailDisplay"></div>
            </div>
          </div>
        </div>

        <div className="cantactInfoContainer">
          <div className="contactInfoHeader">Contact Information</div>
          <div className="contactInfoDisplay">
            {/*CONTACT INFO ROW 1- ADDRESS LINE 1&2 */}
            <div className="contactInfoInputFieldRow">
              <div className="display-inputRow">
                <div className="label">
                  Address Line 1<span className="CIcompulsouryMark">*</span>
                </div>
                <div className="text">
                  <input className="myDetailsInputField" placeholder="" />
                </div>
              </div>
              <div className="display-inputRow">
                <div className="label">Address Line 2</div>
                <div className="text">
                  <input className="myDetailsInputField" placeholder="" />
                </div>
              </div>
            </div>
            {/*CONTACT INFO ROW 2- CITY & STATE  */}
            <div className="contactInfoInputFieldRow">
              <div className="display-inputRow">
                <div className="label">
                  City<span className="CIcompulsouryMark">*</span>
                </div>
                <div className="text">
                  <input className="myDetailsInputField" placeholder="" />
                </div>
              </div>
              <div className="display-inputRow">
                <div className="label">
                  State<span className="CIcompulsouryMark">*</span>
                </div>
                <div className="text">
                  <input className="myDetailsInputField" placeholder="" />
                </div>
              </div>
            </div>
            {/*CONTACT INFO ROW 3 - ZIP/POSTAL CODE  */}
            <div className="contactInfoInputFieldRow">
              <div className="display-inputRow">
                <div className="label">
                  Zip code<span className="CIcompulsouryMark">*</span>
                </div>
                <div className="text">
                  <input className="myDetailsInputField" placeholder="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="saveBtn">Save</div>
      </div>
    </Fade>
  );
};

export default MyDetails;
