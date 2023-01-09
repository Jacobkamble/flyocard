import React from "react";
import "./TitleSelectionDropDown.css";

const TitleSelectionDropDown = ({ open, setTitle, Title }) => {
  return (
    <div>
      {open ? (
        <div className="travellerTitleContainer">
          <div className="travellerTitleOptions">
            <div
              className={`titleOption ${Title === "Mr" ? "selected" : null}`}
              onClick={() => {
                setTitle("Mr");
              }}
            >
              Mr
            </div>
            <div
              className={`titleOption ${Title === "Mrs" ? "selected" : null}`}
              onClick={() => {
                setTitle("Mrs");
              }}
            >
              Mrs
            </div>
            <div
              className={`titleOption ${Title === "Miss" ? "selected" : null}`}
              onClick={() => {
                setTitle("Miss");
              }}
            >
              Miss
            </div>
            <div
              className={`titleOption ${
                Title === "Master" ? "selected" : null
              }`}
              onClick={() => {
                setTitle("Master");
              }}
            >
              Master
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default TitleSelectionDropDown;
