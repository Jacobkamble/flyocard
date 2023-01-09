import React, { useState } from "react";
import "./MonthDropDown.css";
import { useSelector, useDispatch } from "react-redux";

import { setDobMonth } from "../actions/PaymentAndBookingActions";

const MonthDropDown = ({
  open,
  monthselection,
  setMonthSelection,
  setError,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      {open ? (
        <div className="monthDropDownContainer">
          <div
            className={`monthContainer ${
              monthselection === "January" ? "selected" : null
            }  `}
            onClick={() => {
              dispatch(setDobMonth("January"));
              setMonthSelection("January");
            }}
          >
            January
          </div>
          <div
            className={`monthContainer ${
              monthselection === "February" ? "selected" : null
            }  `}
            onClick={() => {
              dispatch(setDobMonth("February"));
              setMonthSelection("February");
            }}
          >
            February
          </div>
          <div
            className={`monthContainer ${
              monthselection === "    March" ? "selected" : null
            }  `}
            onClick={() => {
              dispatch(setDobMonth("March"));
              setMonthSelection("March");
            }}
          >
            March
          </div>
          <div
            className={`monthContainer ${
              monthselection === "April" ? "selected" : null
            }  `}
            onClick={() => {
              dispatch(setDobMonth("April"));
              setMonthSelection("April");
            }}
          >
            April
          </div>
          <div
            className={`monthContainer ${
              monthselection === "May" ? "selected" : null
            }  `}
            onClick={() => {
              dispatch(setDobMonth("May"));
              setMonthSelection("May");
            }}
          >
            May
          </div>
          <div
            className={`monthContainer ${
              monthselection === "June" ? "selected" : null
            }  `}
            onClick={() => {
              dispatch(setDobMonth("June"));
              setMonthSelection("June");
            }}
          >
            June
          </div>
          <div
            className={`monthContainer ${
              monthselection === "July" ? "selected" : null
            }  `}
            onClick={() => {
              dispatch(setDobMonth("July"));
              setMonthSelection("July");
            }}
          >
            July
          </div>
          <div
            className={`monthContainer ${
              monthselection === "August" ? "selected" : null
            }  `}
            onClick={() => {
              dispatch(setDobMonth("August"));
              setMonthSelection("August");
            }}
          >
            August
          </div>
          <div
            className={`monthContainer ${
              monthselection === "September" ? "selected" : null
            }  `}
            onClick={() => {
              dispatch(setDobMonth("September"));
              setMonthSelection("September");
            }}
          >
            September
          </div>
          <div
            className={`monthContainer ${
              monthselection === "October" ? "selected" : null
            }  `}
            onClick={() => {
              dispatch(setDobMonth("October"));
              setMonthSelection("October");
            }}
          >
            October
          </div>
          <div
            className={`monthContainer ${
              monthselection === "November" ? "selected" : null
            }  `}
            onClick={() => {
              dispatch(setDobMonth("November"));
              setMonthSelection("November");
            }}
          >
            November
          </div>
          <div
            className={`monthContainer ${
              monthselection === "December" ? "selected" : null
            }  `}
            onClick={() => {
              dispatch(setDobMonth("December"));
              setMonthSelection("December");
            }}
          >
            December
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default MonthDropDown;
