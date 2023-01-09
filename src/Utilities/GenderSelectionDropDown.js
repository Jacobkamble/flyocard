import React from "react";
import "./GenderSelectionDropDown.css";
const GenderSelectionDropDown = ({ open, setGender, gender }) => {
  return (
    <div>
      {open ? (
        <div className="travellerGenderContainer">
          <div className="travellerGenderOptions">
            <div
              className={`genderOption   ${
                gender === "Male" ? "selected" : null
              }`}
              onClick={() => {
                setGender("Male");
              }}
            >
              Male{" "}
            </div>
            <div
              className={`genderOption   ${
                gender === "Female" ? "selected" : null
              }`}
              onClick={() => {
                setGender("Female");
              }}
            >
              Female{" "}
            </div>
            <div
              className={`genderOption   ${
                gender === "Other" ? "selected" : null
              }`}
              onClick={() => {
                setGender("Other");
              }}
            >
              {" "}
              Other
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default GenderSelectionDropDown;
