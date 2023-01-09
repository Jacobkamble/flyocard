import React, { useState } from "react";
import "./AirlineFilters.css";
import Flights from "../../Flights.json";
import AirlineFilterSingleAirline from "./AirlineFilterSingleAirline";

const AirlineFilters = (itineries) => {
  const [nextScrollBtn, setnextScrollBtn] = useState("");
  const scrollNext = () => {
    document.getElementById("a").scrollLeft += 490;
  };
  const scrollPrev = () => {
    document.getElementById("a").scrollLeft -= 490;
  };

  return (
    <div className="AirlinesFilterWrapper">
      <div className="AirlinesFilterControls">
        <div className="allFaresFilter">Show All Fares</div>
        <div className="nonStopFilter"> Non Stop</div>
        <div className="moreThen1StopFilter"> 1+ Stops</div>
      </div>
      <div className="singleAirline" id="a">
        {Flights.map((flight, index) => {
          return (
            <AirlineFilterSingleAirline
              airlineName={flight.airline1}
              trip1Price={flight.price}
              trip2Price={flight.priceR}
            />
          );
        })}
      </div>
      <div className="ScrollButtonWrapper">
        <div
          onClick={() => {
            scrollPrev();
          }}
          className="scrollPrev"
        >
          <i class="fas fa-chevron-left"></i>
        </div>
        <div
          className={`scrollNext ${
            nextScrollBtn === "disableBtn" ? "disabled" : null
          }`}
          onClick={() => {
            scrollNext();
          }}
        >
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default AirlineFilters;
