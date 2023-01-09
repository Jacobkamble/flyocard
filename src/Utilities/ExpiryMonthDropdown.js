import React from "react";
import "./ExpiryMonthDropdown.css";

const ExpiryMonthDropdown = ({ open, selectedMonth, setSelectedMonth }) => {
  return (
    <div>
      {open ? (
        <div className="expiryMonthDropdownContainer">
          <div
            className={`expiryMonthContainer ${
              selectedMonth === "January" ? "selected" : null
            }  `}
            onClick={() => {
              setSelectedMonth("01");
            }}
          >
            January
          </div>
          <div
            className={`expiryMonthContainer ${
              selectedMonth === "February" ? "selected" : null
            }  `}
            onClick={() => {
              setSelectedMonth("02");
            }}
          >
            February
          </div>
          <div
            className={`expiryMonthContainer ${
              selectedMonth === "March" ? "selected" : null
            }  `}
            onClick={() => {
              setSelectedMonth("03");
            }}
          >
            March
          </div>
          <div
            className={`expiryMonthContainer ${
              selectedMonth === "April" ? "selected" : null
            }  `}
            onClick={() => {
              setSelectedMonth("04");
            }}
          >
            April
          </div>
          <div
            className={`expiryMonthContainer ${
              selectedMonth === "May" ? "selected" : null
            }  `}
            onClick={() => {
              setSelectedMonth("05");
            }}
          >
            May
          </div>
          <div
            className={`expiryMonthContainer ${
              selectedMonth === "June" ? "selected" : null
            }  `}
            onClick={() => {
              setSelectedMonth("06");
            }}
          >
            June
          </div>
          <div
            className={`expiryMonthContainer ${
              selectedMonth === "July" ? "selected" : null
            }  `}
            onClick={() => {
              setSelectedMonth("07");
            }}
          >
            July
          </div>
          <div
            className={`expiryMonthContainer ${
              selectedMonth === "August" ? "selected" : null
            }  `}
            onClick={() => {
              setSelectedMonth("08");
            }}
          >
            August
          </div>
          <div
            className={`expiryMonthContainer ${
              selectedMonth === "September" ? "selected" : null
            }  `}
            onClick={() => {
              setSelectedMonth("09");
            }}
          >
            September
          </div>
          <div
            className={`expiryMonthContainer ${
              selectedMonth === "October" ? "selected" : null
            }  `}
            onClick={() => {
              setSelectedMonth("10");
            }}
          >
            October
          </div>
          <div
            className={`expiryMonthContainer ${
              selectedMonth === "November" ? "selected" : null
            }  `}
            onClick={() => {
              setSelectedMonth("11");
            }}
          >
            November
          </div>
          <div
            className={`expiryMonthContainer ${
              selectedMonth === "December" ? "selected" : null
            }  `}
            onClick={() => {
              setSelectedMonth("12");
            }}
          >
            December
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ExpiryMonthDropdown;
