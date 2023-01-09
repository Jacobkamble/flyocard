import React, { useState, useEffect, useRef } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./ModalCalendar.css";
import { Calendar } from "react-modern-calendar-datepicker";

//REDUX
///REDUX
import { setRadio } from "../../actions/HomePageActions";
import { useDispatch } from "react-redux";

const ModalCalendarReturn = ({
  label,

  placeholder,
  openCalendar,
  objstate,
}) => {
  const Date = objstate;
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="modalLabelH3">{label}</h3>
      <div
        className="modal-my-custom-input-class"
        onClick={() => {
          openCalendar(true);
          dispatch(setRadio("twoway"));
        }}
      >
        {Date ? (
          <div>
            {Date.mm} , {Date.day} ' {Date.year}
          </div>
        ) : (
          <div className="modalReturnPlaceholder">{placeholder}</div>
        )}
      </div>
      <div className="modalDateContainer">
        <div className="modalDayOfWeekDisplay">{Date ? Date.dd : null}</div>
      </div>

      <div className="modalReturnCalenderContainer"></div>
    </>
  );
};

export default ModalCalendarReturn;
