import React, { useState, useEffect, useRef } from "react";
import useClickOutSide from "../../Utilities/useClickOutside";
import "./popUp.css";

//REDUX

import { useSelector } from "react-redux";
import HomePage from "../HomePage";

const PopUpDeparture = ({
  options,
  label,
  onChange,
  prompt,
  objstate,
  openDropDown,
  handleDropDown,
  openDestination,
}) => {
  const destination = useSelector((state) => state.Home.destination);
  const value = objstate;
  const to = label;
  const [query, setQuery] = useState("");

  const ref = useClickOutSide(handleDropDown);

  const inputRefDep = useRef();
  useEffect(() => {
    if (openDropDown) {
      inputRefDep.current.focus();
    }
  }, [openDropDown]);

  function filter(options) {
    return options.filter(
      (option) =>
        option.city.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        option.code.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        option.title.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }
  const mql = window.matchMedia("(max-width:420px)");

  return (
    <div className="dropdown">
      <div className= {`control ${to === "FROM" ? "left" : "right"}`}>
        <div className="selected-value">
          <h3 className="headingH3Airport">{label}</h3>{" "}
        </div>
        <div
          className={`CityName_Placeholder ${value ? "cityname" : ""}`}
          onClick={() => handleDropDown((prev) => !prev)}
        >
          {value ? value.city.toString() : "Select Departure"}
        </div>
      </div>

      <div className={`optionsBlock ${openDropDown ? "open" : null}`} ref={ref}>
        {mql.matches ? <div className="departureLabel"> From</div> : null}
        <div className={`inputFieldWrapper ${openDropDown ? "open" : null}`}>
          {mql.matches ? (
            <i
              className="fas fa-arrow-left"
              onClick={() => {
                handleDropDown();
              }}
            ></i>
          ) : (
            <i className="fas fa-search"></i>
          )}
          <input
            className={`cityInputDep1 ${openDropDown ? "open" : null}`}
            type="text"
            placeholder={value ? <div> {value}</div> : prompt}
            value={query ? query : value ? value.city.toString() : null}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            ref={inputRefDep}
          />
        </div>
        {mql.matches ? <div className="departureLabel"> To</div> : null}
        <input
          className={`cityInputDep2 ${openDropDown ? "open" : null}`}
          type="text"
          placeholder={value ? <div> {value}</div> : prompt}
          value={destination ? destination.city : "Select Destination"}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange(null);
          }}
          onClick={() => {
            openDestination(true);
            handleDropDown(false);
          }}
        />
        <div className={`options ${openDropDown ? "open" : null}`}>
          {filter(options).map((option) => (
            <div
              className={`option ${
                value === option ? "selected" : "notSelected"
              }`}
              onClick={() => {
                setQuery("");
                onChange(option);
                handleDropDown(false);
                openDestination(true);
              }}
            >
              <span>
                <div className="CityName">{option.city}</div>

                <div className="AirportName">{option.title}</div>
              </span>

              <div className="AirportCode">{option.code}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopUpDeparture;
