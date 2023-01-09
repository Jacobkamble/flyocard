import React from "react";
import PopUpDeparture from "../components/PopUpDeparture";
import PopUpDestination from "../components/popUpDestination";
import MyCalendar from "../components/Calendar";
import HeadShake from "react-reveal/HeadShake";
import { TodayDate } from "../../Utilities/TodayDate";
import Airports from "../../Airports.json";
import "../homePage.css";
import "./AddCity.css";
import "switch.svg";

///REDUX
import { setReturnDate, setRadio } from "../../actions/HomePageActions";

import { useSelector, useDispatch } from "react-redux";

const AddCity = ({
  onChangeDestination,
  onChangeDeparture,
  onChangeDepartureDate,
  Departure_prop,
  Destination_prop,
  DepartureDate_prop,
  error_prop,
}) => {
  const dispatch = useDispatch();
  const departureDate = useSelector((state) => state.Home.departureDate);

  const oneway = "oneway";
  const setTripType = (s) => {
    if (!s === "twoway") {
      dispatch(setReturnDate(""));
    } else if (s === "twoway") {
      dispatch(setRadio("twoway"));
    } else if (s === "multicity") {
      dispatch(setRadio("multicity"));
    }
  };

  const DateReformatdeparture = (date) => {
    var depday = date.day;
    var depmonth = date.month;
    var depyear = date.year;

    var y = date.year.toString();
    var mnth = date.month.toString();
    var daystring = date.day.toString();

    var sp = "-";

    var dateformat = y + sp + mnth + sp + daystring;

    var d = new Date(dateformat);

    const weekday = [7];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var dd = weekday[d.getDay()];

    const month = [12];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var mm = month[d.getMonth()];

    onChangeDepartureDate({
      day: depday,
      month: depmonth,
      year: depyear,
      mm: mm,
      dd: dd,
    });
  };

  return (
    <div className="searchAddCityContainer">
      <div className="searchBlockAddCity">
        {/*---------------------DEPARTURE DROPDOWN---------------------*/}
        <div className="departurePopUpContainer">
          <div className="popup">
            <PopUpDeparture
              options={Airports}
              label="FROM"
              prompt="Select Departure"
              onChange={(val) => {
                onChangeDeparture(val);
              }}
              objstate={Departure_prop}
            />
          </div>
          <div className="airportDescription">
            {Departure_prop ? (
              <div className="optionDisplay">
                <div className="AirportCodeDisplay ">
                  {Departure_prop.code},{" "}
                </div>
                <div className="AirportNameDisplay">{Departure_prop.title}</div>
              </div>
            ) : null}
          </div>
        </div>

        {/*---------------------DESTINATION DROPDOWN---------------------*/}
        <div className="destinationPopUpContainer">
          <div className="popup">
            <PopUpDestination
              options={Airports}
              label="TO"
              prompt="Select Destination"
              onChange={(val) => {
                onChangeDestination(val);
              }}
              objstate={Destination_prop}
            />
          </div>
          <div className="airportDescription">
            {Destination_prop ? (
              <div className="optionDisplay">
                <div className="AirportCodeDisplay ">
                  {Destination_prop.code}
                </div>
                <div className="AirportNameDisplay">
                  {Destination_prop.title}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {error_prop === "From & to airports cannot be same" ? (
          <HeadShake count={5} delay={200}>
            <div
              className={`errorContainerAirtports ${
                error_prop ? "open" : null
              }`}
            >
              {error_prop ? <h4 className="errorH4">{error_prop}</h4> : null}
            </div>
          </HeadShake>
        ) : null}
        {/*---------------------DEPARTURE DATE CALENDAR---------------------*/}
        <div className="departureDateContainer">
          <MyCalendar
            label="DEPARTURE"
            onSelect={(date) => onChangeDepartureDate(date)}
            placeholder="departureDate"
            onSelectChange={(date) => DateReformatdeparture(date)}
            displayMonth={DepartureDate_prop.mm}
            day={departureDate}
            minDate={TodayDate()}
            trip={() => setTripType(oneway)}
            objstate={DepartureDate_prop}
          />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default AddCity;
