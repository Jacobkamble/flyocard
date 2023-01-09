import React, { useState } from "react";
import "./TravelerDetails.css";
import DobInputField from "../Reusable-InputFields/DobInputField";
import DOBPicker from "../Reusable-InputFields/DOBPicker";
import Fade from "react-reveal/Fade";

const TravelerDetails = () => {
  const [addTraveler, setAddTraveler] = useState(false);
  return (
    <>
      <Fade top cascade duration={500}>
        <div className="travellerDetailsWrapper">
          {addTraveler ? null : (
            <div className="myTravellersContainer">
              <div className="myTravellersHeader">
                <div className="myTravellerHeaderText">My Travelers </div>
                <div
                  className="addTravellerBtn"
                  onClick={() => {
                    setAddTraveler(true);
                  }}
                >
                  Add Traveler
                </div>
              </div>
            </div>
          )}
          {addTraveler ? (
            <>
              <div className="addTravelerWrapper">
                <div className="td-FirstNameMiddleNameDisplay">
                  {/* FIRST ROW - FIRST NAME & MIDDLE NAME*/}
                  <div className="td-inputFieldRow">
                    <div className="td-inputAndLabel">
                      <div className="TDlabel">
                        First Name<span className="compulsouryTextSpan">*</span>
                      </div>
                      <div className="TDtext">
                        <input className="TDInputField" placeholder="" />
                      </div>
                    </div>

                    <div className="td-inputAndLabel">
                      <div className="tDlabelExpiryDate">Middle Name</div>
                      <div className="TDtext">
                        <input className="TDInputField" placeholder="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="td-LastNameDobDisplay">
                  <div className="td-inputFieldRow">
                    <div className="td-inputAndLabel">
                      <div className="TDlabel">
                        Last Name<span className="compulsouryTextSpan">*</span>
                      </div>
                      <div className="TDtext">
                        <input className="TDInputField" placeholder="" />
                      </div>
                    </div>

                    <div className="inputAndLabelDob">
                      {/* <DobInputField /> */}
                      <DOBPicker />
                    </div>
                  </div>
                </div>
                <div className="td-GenderDisplay">
                  <div className="td-inputFieldRowGender">
                    <div className="td-inputAndLabel">
                      <div className="TDlabel">
                        Gender<span className="compulsouryTextSpan">*</span>
                      </div>
                      <div className="TDtext">
                        <input className="TDInputField" placeholder="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="td-actionBtn">
                <div
                  className="td-cancelBtn"
                  onClick={() => {
                    setAddTraveler(false);
                  }}
                >
                  Cancel
                </div>
                <div className="td-saveBtn">Save</div>
              </div>
            </>
          ) : null}
        </div>
      </Fade>
    </>
  );
};

export default TravelerDetails;
