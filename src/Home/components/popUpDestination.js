import React, { useState, useEffect, useRef } from "react";
import useOutSideClick1 from "../../Utilities/useOutSideClick1";
import { useSelector } from "react-redux";

import "./popUp.css";

const PopUpDestination = ({
  options,
  label,
  onChange,
  prompt,
  objstate,
  openDropDown,
  handleDropDown,
  openDropDownFromDepart,
  closeDropDownOnClick,
  openDepartureFromDestination,
  currentDepartState,
  openCalendarFromDestination,
}) => {
  const departure = useSelector((state) => state.Home.departure);
  const value = objstate;
  const [query, setQuery] = useState("");
  const ref = useOutSideClick1(
    handleDropDown,
    closeDropDownOnClick,
    openDropDown,
    openDropDownFromDepart
  );

  const inputRefDes = useRef();
  useEffect(() => {
    if (openDropDown || openDropDownFromDepart) {
      inputRefDes.current.focus();
    }
  }, [openDropDown, openDropDownFromDepart]);
  function filter(options) {
    return options.filter(
      (option) =>
        option.city.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        option.code.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        option.title.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }
  const mql = window.matchMedia("(max-width:420px)");
  useEffect(() => {
    if (currentDepartState === true) {
      handleDropDown(false);
      closeDropDownOnClick(false);
    }
  }, [currentDepartState, openDropDown, handleDropDown, closeDropDownOnClick]);
  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">
          <h3 className="headingH3Airport">{label}</h3>
        </div>
        <div
          className={`CityName_Placeholder ${value ? "cityname" : ""}`}
          onClick={() => handleDropDown((prev) => !prev)}
        >
          {value ? value.city.toString() : "Select Destination"}
        </div>
      </div>
      <div
        className={`optionsBlock ${
          openDropDown || openDropDownFromDepart ? "open" : null
        }`}
        ref={ref}
      >
        {mql.matches ? <div className="departureLabel">From</div> : null}
        <div
          className={`inputFieldWrapper ${
            openDropDown || openDropDownFromDepart ? "open" : null
          }`}
          ref={ref}
        >
          {mql.matches ? (
            <i
              className="fas fa-arrow-left"
              onClick={() => {
                handleDropDown(false);
                closeDropDownOnClick(false);
              }}
            ></i>
          ) : (
            ""
          )}

          <input
            className={`cityInputDes2 ${
              openDropDown || openDropDownFromDepart ? "open" : null
            }`}
            autoFocus
            type="text"
            placeholder={value ? <div> {value}</div> : prompt}
            value={departure ? departure.city : "Select Departure"}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={() => {
              if (mql.matches) {
                openDepartureFromDestination(true);
              }
            }}
            ref={inputRefDes}
          />
        </div>
        {mql.matches ? <div className="departureLabel"> To</div> : null}
        <div
          className={`inputFieldWrapper ${
            openDropDown || openDropDownFromDepart ? "open" : null
          }`}
        >
          {!mql.matches ? <i className="fas fa-search"></i> : ""}

          <input
            className={`cityInputDes1 ${
              openDropDown || openDropDownFromDepart ? "open" : null
            }`}
            autoFocus
            type="text"
            placeholder={value ? <div> {value}</div> : prompt}
            value={query ? query : value ? value.city.toString() : null}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            ref={inputRefDes}
          />
        </div>
        <div
          className={`options ${
            openDropDown || openDropDownFromDepart ? "open" : null
          }`}
        >
          {filter(options).map((option) => (
            <div
              className={`option ${
                value === option ? "selected" : "notSelected"
              }`}
              onClick={() => {
                setQuery("");
                onChange(option);
                handleDropDown(false);
                closeDropDownOnClick();
                openCalendarFromDestination(true);
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

export default PopUpDestination;
