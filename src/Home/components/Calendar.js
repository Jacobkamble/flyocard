import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import useOutSideClick1 from "../../Utilities/useOutSideClick1";
import "./Calendar.css";

//REDUX

const MyCalendar = ({
  label,
  onSelectChange,
  minDate,
  dayreturn,
  objstate,
  openCalendar,
  setOpenCalendar,
  openCalendarfromDesti,
  closeCalendar,
}) => {
  const flight = label;
  const ref = useOutSideClick1(
    setOpenCalendar,
    closeCalendar,
    openCalendar,
    openCalendarfromDesti
  );

  const setTo = () => {
    if (dayreturn) {
      return {
        year: dayreturn.year,
        month: dayreturn.month,
        day: dayreturn.day,
      };
    }
  };
  const setFrom = () => {
    if (objstate) {
      return {
        year: objstate.year,
        month: objstate.month,
        day: objstate.day,
      };
    }
  };

  const [selectedDate, setSelectedDate] = useState({
    from: setFrom(),
    to: setTo(),
  });

  const Date = objstate;

  return (
    <>
      <div  className={`date-container ${flight === "DEPARTURE" ? "left" : "right"}`}>
      <h3 className="labelH3">{label}</h3>
      <div 
        className="my-custom-input-class"
        onClick={() => setOpenCalendar(true)}
      >
        <p>{Date.mm} , {Date.day} ' {Date.year}</p>
      </div>
      <div  className="dateContainer">
        <div className="dayOfWeekDisplay">{Date ? Date.dd : null}</div>
      </div>
      <div className="calenderContainer" ref={ref}>
        {openCalendar || openCalendarfromDesti ? 
        (
          <Calendar
          value={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            onSelectChange(date);
          }}
          minimumDate={minDate}
          colorPrimary="#a4d3e7"
          colorPrimaryLight="rgb(185, 241, 255)"
          calendarClassName="responsive-calendar"
          renderFooter={() => (
            <div
              style={{
                display: "flex",
                fontSize: "1.5rem",
                padding: "2rem 1rem 1rem 8rem",
              }}
            ></div>
          )}
        />
        
        )
         : null}
      </div>
      </div>
    </>
  );
};

export default MyCalendar;
