import React, { useState, useEffect } from "react";
import PopUpDeparture from "../../Home/components/PopUpDeparture";
import PopUpDestination from "../../Home/components/popUpDestination";
import MyCalendarOne from "../../Home/components/CalendarOneWay";
import MyCalendar from "../../Home/components/Calendar";
import CalendarRetrun from "../../Home/components/CalendarReturn";
import TravellerInfo from "../../Home/components/TravellerInfo";
import Multicity from "../../Home/components/Multicity";
import { TodayDate } from "../../Utilities/TodayDate";
import MyButton from "../../Utilities/Button";

import MyRadio from "../../Utilities/RadioBtn";

import HeadShake from "react-reveal/HeadShake";
import { default as switchSvg } from "../../images/switch.svg";
///REDUX
import {
  setDeparture,
  setDestinationSelect,
  setToggle,
  setDepartureDate,
  setReturnDate,
  setRadio,
  setError,
  setDeparture1,
} from "../../actions/HomePageActions";

import { useSelector, useDispatch } from "react-redux";
import Airports from "../../Airports.json";
import "./SearchUpdateBlock.css";

const SearchFlightBlock = () => {
  const dispatch = useDispatch();
  const departure = useSelector((state) => state.Home.departure);
  const destination = useSelector((state) => state.Home.destination);
  const radio = useSelector((state) => state.Home.radio);
  const error = useSelector((state) => state.Home.errorMessage);
  const departureDate = useSelector((state) => state.Home.departureDate);
  const returnDate = useSelector((state) => state.Home.returnDate);
  const travelClassError = useSelector((state) => state.Home.travelClassError);
  const [toggleChange, setToggleChange] = useState({
    dep: departure,
    des: destination,
  });

  const [departState, setDepartState] = useState(false);
  const [destiState, setDestiState] = useState(false);

  const [destiOpenFromDepart, setdestiOpenFromDepart] = useState(false);
  const [calendarFromDesti, setCalendarFromDesti] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const oneway = "oneway";
  const twoway = "twoway";

  useEffect(() => {
    setToggleChange({
      dep: departure,
      des: destination,
    });
  }, [departure, destination]);

  useEffect(() => {
    if (radio === "oneway") {
      dispatch(setReturnDate(""));
    } else if (radio === "twoway") {
    }
  }, [radio, dispatch]);

  const setTripType = (s) => {
    if (!s === "twoway") {
      dispatch(setReturnDate(""));
    } else if (s === "twoway") {
      dispatch(setRadio("twoway"));
    } else if (s === "multicity") {
      dispatch(setRadio("multicity"));
    }
  };
  const DateReformatdepartureOne = (date) => {
    if (date) {
      var depday = date.day;
      var depmonth = date.month;
      var depyear = date.year;

      var y = depyear.toString();
      var mnth = depmonth.toString();
      var daystring = depday.toString();

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
      month[0] = "Jan";
      month[1] = "Feb";
      month[2] = "Mar";
      month[3] = "Apr";
      month[4] = "May";
      month[5] = "Jun";
      month[6] = "Jul";
      month[7] = "Aug";
      month[8] = "Sep";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";
      var mm = month[d.getMonth()];

      dispatch(
        setDepartureDate({
          day: depday,
          month: depmonth,
          year: depyear,
          mm: mm,
          dd: dd,
        })
      );
    }
  };
  const DateReformatdeparture = (date) => {
    if (date.from) {
      var depday = date.from.day;
      var depmonth = date.from.month;
      var depyear = date.from.year;

      var y = depyear.toString();
      var mnth = depmonth.toString();
      var daystring = depday.toString();

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
      month[0] = "Jan";
      month[1] = "Feb";
      month[2] = "Mar";
      month[3] = "Apr";
      month[4] = "May";
      month[5] = "Jun";
      month[6] = "Jul";
      month[7] = "Aug";
      month[8] = "Sep";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";
      var mm = month[d.getMonth()];

      dispatch(
        setDepartureDate({
          day: depday,
          month: depmonth,
          year: depyear,
          mm: mm,
          dd: dd,
        })
      );
    }
    if (date.to) {
      DateReformatreturn(date);
      setCalendarOpen(false);
      setCalendarFromDesti(false);
    }
  };

  const DateReformatreturn = (date) => {
    var desday = date.to.day;
    var desmonth = date.to.month;
    var desyear = date.to.year;

    var y = desyear.toString();
    var mnth = desmonth.toString();
    var daystring = desday.toString();

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
      month[0] = "Jan";
      month[1] = "Feb";
      month[2] = "Mar";
      month[3] = "Apr";
      month[4] = "May";
      month[5] = "Jun";
      month[6] = "Jul";
      month[7] = "Aug";
      month[8] = "Sep";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";
    var mm = month[d.getMonth()];

    dispatch(
      setReturnDate({
        day: desday,
        month: desmonth,
        year: desyear,
        mm: mm,
        dd: dd,
      })
    );

    console.log(date);
  };
  useEffect(() => {
    if (departure === null || destination === null) {
      dispatch(setError("please select departure & destination to proceed"));
    } else if (departure && destination) {
      dispatch(setError(""));
    }

    if (departure && destination) {
      if (departure.code && destination.code) {
        if (departure.code === destination.code) {
          dispatch(setError("From & to airports cannot be same"));
        } else {
          dispatch(setError(""));
        }
      }
    }

    if (radio === "twoway" && returnDate === "") {
      dispatch(setError("Please select a return date to proceed"));
    }
  }, [departure, destination, radio, returnDate, dispatch]);

  const validation = () => {
    /* if (departure1 && destination1) {
      if (departure1.code === destination1.code) {
        dispatch(setError1("From & to airports cannot be same"));
      } else {
        dispatch(setError1(""));
      }
    }
    if (departure2 && destination2) {
      if (departure2.code === destination2.code) {
        dispatch(setError2("From & to airports cannot be same"));
      } else {
        dispatch(setError2(""));
      }
    }
    if (departure3 && destination3) {
      if (departure3.code === destination3.code) {
        dispatch(setError3("From & to airports cannot be same"));
      } else {
        dispatch(setError3(""));
      }
    }
    if (departure4 && destination4) {
      if (departure4.code === destination4.code) {
        dispatch(setError4("From & to airports cannot be same"));
      } else {
        dispatch(setError4(""));
      }
    }*/

    if (departure === null && destination === null) {
      dispatch(setError("please select departure & destination to proceed"));
    } else if (departure && destination) {
      dispatch(setError(""));
    }

    if (departure && destination) {
      if (departure.code && destination.code) {
        if (departure.code === destination.code) {
          dispatch(setError("From & to airports cannot be same"));
        } else {
          dispatch(setError(""));
        }
      }
    }

    if (radio === "twoway" && returnDate === "") {
      dispatch(setError("Please select a return date to proceed"));
    }
  };

  return (
    <>
      <div className="searchUpdateBlockContainer">
        <div className="searchUpdateBlockFlightSearchContainer">
          {/*---------------------RADIO BUTTONS---------------------*/}
          <div className="searchUpdateBlockRadioButtons">
            <MyRadio
              radioState={radio}
              setRadioState={(val) => {
                dispatch(setRadio(val));
              }}
            />
          </div>
          <div className="searchUpdateBlockSearchBlockContainer">
            {radio !== "multicity" ? (
              <div className="searchUpdateBlockSearchBlock">
                {/*---------------------DEPARTURE DROPDOWN---------------------*/}
                <div className="searchUpdateBlockDeparturePopUpContainer">
                  <div className="searchUpdateBlockPopup">
                    <PopUpDeparture
                      options={Airports}
                      label="FROM"
                      prompt="Select Departure"
                      onChange={(val) => {
                        dispatch(setDeparture(val));
                        setToggleChange({ ...toggleChange, dep: val });
                        if (destination === val) {
                          dispatch(
                            setError("From & to airports cannot be same")
                          );
                        }
                      }}
                      objstate={departure}
                      openDropDown={departState}
                      handleDropDown={(val) => {
                        setDepartState(val);
                      }}
                      openDestination={(val) => {
                        setdestiOpenFromDepart(val);
                      }}
                    />
                  </div>
                  <div className="searchUpdateBlockAirportDescription">
                    {departure ? (
                      <div className="searchUpdateBlockOptionDisplay">
                        <div className="searchUpdateBlockAirportCodeDisplay ">
                          {departure.code},
                        </div>
                        <div className="searchUpdateBlockAirportNameDisplay">
                          {departure.title}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div
                  className="searchUpdateBlockToggleSwitch"
                  onClick={() => {
                    if (departure === undefined || destination === undefined) {
                      dispatch(setError("cannot toggle"));
                    } else {
                      dispatch(setToggle(toggleChange));
                    }
                  }}
                >
                  <img className="switchSvg" src={switchSvg} alt="switch" />
                </div>

                {/*---------------------DESTINATION DROPDOWN---------------------*/}
                <div className="searchUpdateBlockDestinationPopUpContainer">
                  <div className="searchUpdateBlockPopup">
                    <PopUpDestination
                      options={Airports}
                      label="TO"
                      prompt="Select Destination"
                      onChange={(val) => {
                        dispatch(setDestinationSelect(val));
                        dispatch(setDeparture1(val));
                        setToggleChange({ ...toggleChange, des: val });
                        if (departure === val) {
                          dispatch(
                            setError("From & to airports cannot be same")
                          );
                        }
                      }}
                      objstate={destination}
                      openDropDown={destiState}
                      handleDropDown={(val) => {
                        setDestiState(val);
                      }}
                      openDropDownFromDepart={destiOpenFromDepart}
                      closeDropDownOnClick={() => {
                        setdestiOpenFromDepart(false);
                      }}
                      openDepartureFromDestination={(val) => {
                        setDepartState(val);
                      }}
                      openCalendarFromDestination={(val) => {
                        setCalendarFromDesti(val);
                      }}
                      currentDepartState={departState}
                    />
                  </div>
                  <div className="searchUpdateBlockAirportDescription">
                    {destination ? (
                      <div className="searchUpdateBlockOptionDisplay">
                        <div className="searchUpdateBlockAirportCodeDisplay ">
                          {destination.code},
                        </div>
                        <div className="searchUpdateBlockAirportNameDisplay">
                          {destination.title}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                {error === "From & to airports cannot be same" ||
                error === "please select departure & destination to proceed" ? (
                  <HeadShake count={5} delay={200}>
                    <div
                      className={`searchUpdateBlockErrorContainerAirtports ${
                        error ? "open" : null
                      }`}
                    >
                      {error ? <h4 className="errorH4">{error}</h4> : null}
                    </div>
                  </HeadShake>
                ) : null}
                {/*---------------------DEPARTURE DATE CALENDAR---------------------*/}
                <div className="searchUpdateBlockDepartureDateContainer">
                  {radio === "twoway" ? (
                    <MyCalendar
                      label="DEPARTURE"
                      onSelectChange={(date) => DateReformatdeparture(date)}
                      displayMonth={departureDate.mm}
                      minDate={TodayDate()}
                      trip={() => setTripType(oneway)}
                      objstate={departureDate}
                      day={TodayDate()}
                      dayreturn={returnDate}
                      setOpenCalendar={(val) => setCalendarOpen(val)}
                      openCalendar={calendarOpen}
                      openCalendarfromDesti={calendarFromDesti}
                      closeCalendar={(val) => setCalendarFromDesti(val)}
                    />
                  ) : (
                    <MyCalendarOne
                      label="DEPARTURE"
                      onSelect={(date) => dispatch(setDepartureDate(date))}
                      placeholder="departureDate"
                      onSelectChange={(date) => DateReformatdepartureOne(date)}
                      displayMonth={departureDate.mm}
                      day={departureDate}
                      minDate={TodayDate()}
                      trip={() => setTripType(oneway)}
                      objstate={departureDate}
                      openCalendarfromDesti={calendarFromDesti}
                      closeCalendar={(val) => setCalendarFromDesti(val)}
                    />
                  )}
                </div>
                {/*--------------------- RETURN DATE CALENDAR---------------------*/}
                <div className="searchUpdateBlockReturnDateContainer">
                  <CalendarRetrun
                    label="RETURN"
                    placeholder={
                      radio === "twoway"
                        ? "Select a return date"
                        : "Tap to add return date"
                    }
                    displayMonth={returnDate ? returnDate.mm : ""}
                    trip={() => setTripType(twoway)}
                    objstate={returnDate}
                    setOpenCalendar={(val) => setCalendarOpen(val)}
                  />
                </div>
                {error === "Please select a return date to proceed" ? (
                  <HeadShake count={5} delay={400}>
                    <div
                      className={`searchUpdateBlockErrorContainerReturnDate ${
                        error ? "open" : null
                      }`}
                    >
                      {error ? (
                        <h4 className="errorH4Return">{error}</h4>
                      ) : null}
                    </div>
                  </HeadShake>
                ) : null}
                <div className="searchUpdateBlockTravellerInfoContainer">
                  <TravellerInfo label="TRAVELLER & CLASS" />
                </div>
              </div>
            ) : null}

            {travelClassError ? (
              <HeadShake count={5} delay={200}>
                <div
                  className={`searchUpdateBlockErrorContainerTravelClass ${
                    travelClassError &&
                    (radio === "oneway" || radio === "twoway")
                      ? "open"
                      : null
                  }`}
                >
                  <h4 className="searchUpdateBlockErrorH4">
                    {travelClassError}
                  </h4>
                </div>
              </HeadShake>
            ) : null}
          </div>
        </div>
        {radio !== "multicity" ? (
          <div className="updateSearchBlockBtn">
            <MyButton
              type="default"
              label="Search"
              padding=" 6px 25px 6px 25px"
              fontsize="20px"
              runAction={() => {}}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};
export default SearchFlightBlock;