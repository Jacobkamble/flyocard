import React, { useState } from "react";
import "./FlightSeatSelection.css";
import { default as SeatSelectionImg } from "../../images/seatSelction.png";

const FlightSeatSelection = () => {
  const [openSelectionModal, setSelectionModal] = useState(false);
  return (
    <div className="FlightSeatSelectionContainer">
      <div className="FlightSeatSelectionHeader">
        <div className="FlightSeatSelectionHeaderText">Seat Selection</div>
        <div className="FlightSeatSelectionHeaderAddLogo">
          {openSelectionModal ? (
            <i
              class="fas fa-chevron-up"
              onClick={() => {
                setSelectionModal((prev) => {
                  return !prev;
                });
              }}
            ></i>
          ) : (
            <i
              class="fas fa-chevron-down"
              onClick={() => {
                setSelectionModal((prev) => {
                  return !prev;
                });
              }}
            ></i>
          )}

          <i></i>
        </div>
      </div>
      <div
        className={`FlightSeatSelectionModal ${
          openSelectionModal ? "open" : null
        }`}
      >
        <div className="SeatSelectionImage">
          <img src={SeatSelectionImg} alt="selectionImg"></img>
        </div>
      </div>
    </div>
  );
};
export default FlightSeatSelection;
