import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import useOutSideClick1 from "../../Utilities/useOutSideClick1";
import "./ModalCalendar.css";

//REDUX

const MyCalendar = ({
  label,
  onSelectChange,
  minDate,
  dayreturn,
  objstate,
  handelCalendarState,
  handleCalendar,
  calendarStateForDestination,
  handleDestinationCalendarState,
}) => {
  const ref = useOutSideClick1(
    handleCalendar,
    handleDestinationCalendarState,
    handelCalendarState,
    calendarStateForDestination
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
      <h3 className="modalLabelH3 ">{label}</h3>
      <div
        className="modal-my-custom-input-class"
        onClick={() => handleCalendar(true)}
      >
        {Date.mm} , {Date.day} ' {Date.year}
      </div>
      <div className="modalDateContainer">
        <div className="modalDayOfWeekDisplay">{Date ? Date.dd : null}</div>
      </div>
      <div className="modalDepartureCalenderContainer" ref={ref}>
        {handelCalendarState || calendarStateForDestination ? (
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
        ) : null}
      </div>
    </>
  );
};

export default MyCalendar;
