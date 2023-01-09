import React, { useState, useEffect, useRef } from "react";
import useOutSideClick1 from "../../Utilities/useOutSideClick1";
import { useSelector } from "react-redux";

import "./ModalPopUp.css";

const PopUpDestination = ({
  options,
  label,
  onChange,
  prompt,
  objstate,
  desDropDownState,
  handleDesDropDown,
  openDepartureFromDestination,
  currentDepartState,
  closeDestination,
  openCalendarFromDestination,
}) => {
  const departure = useSelector((state) => state.Home.departure);
  const value = objstate;
  const [query, setQuery] = useState("");
  const ref = useOutSideClick1(
    handleDesDropDown,
    closeDestination,
    desDropDownState,
    openDepartureFromDestination
  );
  const inputRefDes = useRef();
  useEffect(() => {
    if (desDropDownState) {
      inputRefDes.current.focus();
    }
  }, [desDropDownState]);
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
      handleDesDropDown(false);
    }
  }, [currentDepartState, desDropDownState, handleDesDropDown]);
  return (
    <div className="ModalDropdown">
      <div className="ModalControl">
        <div className="Modalselected-value">
          <h3 className="ModalheadingH3Airport">{label}</h3>
        </div>
        <div
          className={`ModalCityName_Placeholder ${value ? "cityname" : ""}`}
          onClick={() => handleDesDropDown((prev) => !prev)}
        >
          {value ? value.city.toString() : "Select Destination"}
        </div>
      </div>
      <div
        className={`ModalOptionsBlock ${desDropDownState ? "openDes" : null}`}
        ref={ref}
      >
        {mql.matches ? <div className="departureLabel">From</div> : null}
        <div
          className={`ModalInputFieldWrapper ${
            desDropDownState ? "open" : null
          }`}
          ref={ref}
        >
          {mql.matches ? (
            <i
              class="fas fa-arrow-left"
              onClick={() => {
                handleDesDropDown(false);
              }}
            ></i>
          ) : (
            ""
          )}

          <input
            className={`ModalCityInputDes2 ${desDropDownState ? "open" : null}`}
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
          className={`ModalInputFieldWrapper ${
            desDropDownState ? "open" : null
          }`}
        >
          {!mql.matches ? <div className="modalPopUpSearchIconDes"><i class="fas fa-search"></i></div> : ""}

          <input
            className={`ModalCityInputDes1 ${desDropDownState ? "open" : null}`}
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
        <div className={`ModalOptions ${desDropDownState ? "open" : null}`}>
          {filter(options).map((option) => (
            <div
              className={`ModalOption ${
                value === option ? "selected" : "notSelected"
              }`}
              onClick={() => {
                setQuery("");
                onChange(option);
                handleDesDropDown(false);
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
