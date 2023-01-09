import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./DobInputField.css"
const DOBPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
      <>

    <div className="dobInputWrapper">
      <div className="dobInputContainer">
        <div className="dobInputLabel">Date Of Birth</div>
        <div className=".doselectDOB">
        <DatePicker wrapperClassName="datePicker" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
      </div>
    </div>
    </>
  );
};

export default DOBPicker;
