import React, { useState, useEffect, useRef } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./ModalCalendar.css";
import { Calendar } from "react-modern-calendar-datepicker";
import useOutSideClick1 from "../../Utilities/useOutSideClick1";

//REDUX

const ModalOnewayCalendar = ({
  label,
  onSelect,
  placeholder,
  onSelectChange,
  displayMonth,
  day,
  minDate,
  trip,
  objstate,
  closeCalendar,
  openCalendarfromDesti,
}) => {
  const [selectedDate, setSelectedDate] = useState(day);
  const [openCalendar, setOpenCalendar] = useState(false);
  const Date = objstate;

  const ref = useOutSideClick1(
    setOpenCalendar,
    closeCalendar,
    openCalendar,
    openCalendarfromDesti
  );

  const setDate = (date) => {
    onSelect(date);
  };

  return (
    <>
      <h3 className="modalLabelH3">{label}</h3>
      <div
        className="modal-my-custom-input-class"
        onClick={() => setOpenCalendar((prev) => !prev)}
      >
        {Date.mm} , {Date.day} ' {Date.year}
      </div>
      <div className="modalDateContainer">
        <div className="modalDayOfWeekDisplay">{Date ? Date.dd : null}</div>
      </div>
      <div className="modalDepartureCalenderContainer" ref={ref}>
        {openCalendar || openCalendarfromDesti ? (
          <Calendar
            value={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setDate(date);
              onSelectChange(date);
            }}
            minimumDate={minDate}
            colorPrimary="#a4d3e7"
            colorPrimaryLight="rgb(185, 241, 255)"
            calendarClassName="responsive-calendarOne"
          />
        ) : null}
      </div>
    </>
  );
};

export default ModalOnewayCalendar;
