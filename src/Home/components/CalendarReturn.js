import React from "react";

import "./Calendar.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

///REDUX
import { setRadio } from "../../actions/HomePageActions";
import { useDispatch } from "react-redux";

const MyCalendar = ({ label, placeholder, setOpenCalendar, objstate }) => {
  const Date = objstate;
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="labelH3">{label}</h3>
      <div
        className="my-custom-input-class"
        onClick={() => {
          setOpenCalendar(true);
          dispatch(setRadio("twoway"));
        }}
      >
        {Date ? (
          <div>
            {Date.mm} , {Date.day} ' {Date.year}
          </div>
        ) : (
          <div className="returnPlaceholder">{placeholder}</div>
        )}
      </div>
      <div className="dateContainer">
        <div className="dayOfWeekDisplay">{Date ? Date.dd : null}</div>
      </div>
    </>
  );
};

export default MyCalendar;
