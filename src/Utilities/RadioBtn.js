import React from "react";
import "./RadioBtn.css";
//REDUX

const MyRadio = ({ radioState, setRadioState }) => {
  const handleRadio = (type) => {
    if (type === "oneway") {
      setRadioState("oneway");
    } else if (type === "twoway") {
      setRadioState("twoway");
    } else if (type === "multicity") {
      setRadioState("multicity");
    }
  };

  return (
    <div className="radioWrapper">
      <div className="radioBlock">
        <div
          className={`customRadio  ${
            radioState === "twoway" ? "selected" : null
          }`}
          onClick={() => {
            handleRadio("twoway");
          }}
        >
          {/*  */}
          Return
        </div>
        <div
          className={`customRadio  ${
            radioState === "oneway" ? "selected" : null
          }`}
          onClick={() => {
            handleRadio("oneway");
          }}
        >
          One Way
        </div>

        <div
          className={`customRadio  ${
            radioState === "multicity" || radioState === "multicity"
              ? "selected"
              : null
          }`}
          onClick={() => {
            handleRadio("multicity");
          }}
        >
          Multicity
        </div>
      </div>
    </div>
  );
};

export default MyRadio;
