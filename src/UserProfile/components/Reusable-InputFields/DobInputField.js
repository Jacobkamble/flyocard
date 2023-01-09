import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./DobInputField.css";

const DobInputField = () => {
  const [monthDropDown, setMonthDropDown] = useState("");
  const [dayDropDown, setDayDropDown] = useState("");
  const [yearDropDown, setYearDropDown] = useState("");
  const [dob, setDob] = useState({ month: "", day: "", year: "" });

  /* FUNCTION TO GENERATE YEARS FOR YEAR DROPDOWN */
  const generateYears = () => {
    const max = new Date().getFullYear();
    const min = max - 10;
    let y = [];
    for (var i = max; i >= min; i--) {
      y.push(i);
    }
    return y;
  };
  const [years, setYears] = useState(generateYears());
  // eslint-disable-next-line no-sparse-arrays
  const noOfDays = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    ,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];
  // const ref1 = useClickOutside(setDayDropDown);
  // const ref2 = useClickOutside(setYearDropDown);
  return (
    <div className="dobInputWrapper">
      <div className="dobInputContainer">
        <div className="dobInputLabel">Date Of Birth</div>
        <div
          className="dobMonthSelect"
          onClick={() => {
            setMonthDropDown((prev) => !prev);
            setDayDropDown(false);
            setYearDropDown(false);
          }}
        >
          <div className="dobMonthDisplay">
            <div className="dobMonthDisplayText">{dob.month}</div>
            <div className="dobMonthDropDownIcon">
              <i class="fas fa-caret-down"></i>
            </div>
          </div>
          {monthDropDown ? (
            <ul className="dobMonthDropDown">
              <li
                className="dobMonthDropDownOption"
                onClick={() => {
                  setDob((prev) => {
                    return { ...prev, month: "Jan" };
                  });
                  setMonthDropDown(false);
                }}
              >
                Jan
              </li>
              <li
                className="dobMonthDropDownOption"
                onClick={() => {
                  setDob((prev) => {
                    return { ...prev, month: "Feb" };
                  });
                  setMonthDropDown(false);
                }}
              >
                Feb
              </li>
              <li
                className="dobMonthDropDownOption"
                onClick={() => {
                  setDob((prev) => {
                    return { ...prev, month: "Mar" };
                  });
                  setMonthDropDown(false);
                }}
              >
                Mar
              </li>
              <li
                className="dobMonthDropDownOption"
                onClick={() => {
                  setDob((prev) => {
                    return { ...prev, month: "Apr" };
                  });
                  setMonthDropDown(false);
                }}
              >
                Apr
              </li>
              <li
                className="dobMonthDropDownOption"
                onClick={() => {
                  setDob((prev) => {
                    return { ...prev, month: "May" };
                  });
                  setMonthDropDown(false);
                }}
              >
                May
              </li>
              <li
                className="dobMonthDropDownOption"
                onClick={() => {
                  setDob((prev) => {
                    return { ...prev, month: "Jun" };
                  });
                  setMonthDropDown(false);
                }}
              >
                Jun
              </li>
              <li
                className="dobMonthDropDownOption"
                onClick={() => {
                  setDob((prev) => {
                    return { ...prev, month: "Jul" };
                  });
                  setMonthDropDown(false);
                }}
              >
                Jul
              </li>
              <li
                className="dobMonthDropDownOption"
                onClick={() => {
                  setDob((prev) => {
                    return { ...prev, month: "Aug" };
                  });
                  setMonthDropDown(false);
                }}
              >
                Aug
              </li>
              <li
                className="dobMonthDropDownOption"
                onClick={() => {
                  setDob((prev) => {
                    return { ...prev, month: "Sep" };
                  });
                  setMonthDropDown(false);
                }}
              >
                Sep
              </li>
              <li
                className="dobMonthDropDownOption"
                onClick={() => {
                  setDob((prev) => {
                    return { ...prev, month: "Oct" };
                  });
                  setMonthDropDown(false);
                }}
              >
                Oct
              </li>
              <li
                className="dobMonthDropDownOption"
                onClick={() => {
                  setDob((prev) => {
                    return { ...prev, month: "Nov" };
                  });
                  setMonthDropDown(false);
                }}
              >
                Nov
              </li>
              <li
                className="dobMonthDropDownOption"
                onClick={() => {
                  setDob((prev) => {
                    return { ...prev, month: "Dec" };
                  });
                  setMonthDropDown(false);
                }}
              >
                Dec
              </li>
            </ul>
          ) : null}
        </div>
        <div
          className="dobDaySelect"
          onClick={() => {
            setDayDropDown((prev) => !prev);
            setMonthDropDown(false);
            setYearDropDown(false);
          }}
        >
          <div className="dobDayDisplay">
            <div className="dobDayDisplayText">{dob.day}</div>
            <div className="dobDayDropDownIcon">
              <i class="fas fa-caret-down"></i>
            </div>
          </div>
        </div>
        {dayDropDown ? (
          <div className="dobDayDropDown">
            {noOfDays.map((day, index) => {
              return (
                <li
                  className="dobDayDropDownOption"
                  onClick={() => {
                    setDob((prev) => {
                      return { ...prev, day: day };
                    });

                    setDayDropDown(false);
                  }}
                >
                  {day}
                </li>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DobInputField;
