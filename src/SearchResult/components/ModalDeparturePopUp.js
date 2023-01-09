import React, { useState, useEffect, useRef } from "react";
import useClickOutSide from "../../Utilities/useClickOutside";
import "./ModalPopUp.css";

//REDUX

import { useSelector } from "react-redux";

const PopUpDeparture = ({
  options,
  label,
  onChange,
  prompt,
  objstate,
  depDropDownState,
  openDepartureDropDown,
  openDestinationFromDeparture,
}) => {
  const destination = useSelector((state) => state.Home.destination);
  const value = objstate;
  const [query, setQuery] = useState("");
  const ref = useClickOutSide(openDepartureDropDown);
  const inputRefDep = useRef();
  useEffect(() => {
    if (depDropDownState) {
      inputRefDep.current.focus();
    }
  }, [depDropDownState]);

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
    <div className="ModalDropdown">
      <div className="ModalControl">
        <div className="Modalselected-value">
          <h3 className="ModalheadingH3Airport">{label}</h3>{" "}
        </div>
        <div
          className={`ModalCityName_Placeholder ${value ? "cityname" : ""}`}
          onClick={() => openDepartureDropDown((prev) => !prev)}
        >
          {value ? value.city.toString() : "Select Departure"}
        </div>
      </div>

      <div
        className={`ModalOptionsBlock ${depDropDownState ? "open" : null}`}
        ref={ref}
      >
        {mql.matches ? <div className="departureLabel"> From</div> : null}
        <div
          className={`inputFieldWrapperDepart ${
            depDropDownState ? "open" : null
          }`}
        >
          {mql.matches ? (
            <i
              class="fas fa-arrow-left"
              onClick={() => {
                openDepartureDropDown(false);
              }}
            ></i>
          ) : (
            <div className="modalPopUpSearchIconDep">
              <i class="fas fa-search"></i>
            </div>
          )}
          <input
            className={`ModalCityInputDep1 ${depDropDownState ? "open" : null}`}
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
          className={`ModalCityInputDep2 ${depDropDownState ? "open" : null}`}
          type="text"
          placeholder={value ? <div> {value}</div> : prompt}
          value={destination ? destination.city : "Select Destination"}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange(null);
          }}
          onClick={() => {
            openDestinationFromDeparture(true);
            openDepartureDropDown(false);
          }}
        />
        <div className={`ModalOptions ${depDropDownState ? "open" : null}`}>
          {filter(options).map((option) => (
            <div
              className={`ModalOption ${
                value === option ? "selected" : "notSelected"
              }`}
              onClick={() => {
                setQuery("");
                onChange(option);
                openDepartureDropDown(false);
                openDestinationFromDeparture(true);
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
