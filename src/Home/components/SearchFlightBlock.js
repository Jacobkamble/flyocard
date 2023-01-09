import React, { useState, useEffect } from "react";
import PopUpDeparture from "./PopUpDeparture";
import PopUpDestination from "./popUpDestination";
import MyCalendarOne from "./CalendarOneWay";
import MyCalendar from "./Calendar";
import CalendarRetrun from "./CalendarReturn";
import TravellerInfo from "./TravellerInfo";
import Multicity from "./Multicity";
import { TodayDate } from "../../Utilities/TodayDate";

import MyRadio from "../../Utilities/RadioBtn";

// import MyButton from "../Utilities/Button";
import MyButton from "../../Utilities/Button";

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
  setError1,
  setError2,
  setError3,
  setError4,
  setTravelClassError,
  setDeparture1,
} from "../../actions/HomePageActions";

import { useSelector, useDispatch } from "react-redux";
import Airports from "../../Airports.json";
import "../homePage.css";

const SearchFlightBlock = ({classForSlide}) => {
  console.log(classForSlide);

  const [currencyModal, setCurrencyModal] = useState(false);
  const dispatch = useDispatch();
  const departure = useSelector((state) => state.Home.departure);
  const destination = useSelector((state) => state.Home.destination);
  const departure1 = useSelector((state) => state.Home.departure1);
  const departure2 = useSelector((state) => state.Home.departure2);
  const departure3 = useSelector((state) => state.Home.departure3);
  const departure4 = useSelector((state) => state.Home.departure4);

  const destination1 = useSelector((state) => state.Home.destination1);
  const destination2 = useSelector((state) => state.Home.destination2);
  const destination3 = useSelector((state) => state.Home.destination3);
  const destination4 = useSelector((state) => state.Home.destination4);
  const radio = useSelector((state) => state.Home.radio);
  const error = useSelector((state) => state.Home.errorMessage);
  const departureDate = useSelector((state) => state.Home.departureDate);
  const returnDate = useSelector((state) => state.Home.returnDate);
  const travelClassError = useSelector((state) => state.Home.travelClassError);
  const adultCount = useSelector((state) => state.Home.adultCount);
  const childrenCount = useSelector((state) => state.Home.childrenCount);
  const infantCount = useSelector((state) => state.Home.infantCount);

  const cabinClass = useSelector((state) => state.Home.travelClass);

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


  // new added by jacob
  const handleSearchBtn = () => {
    validation();
  };

  const handleLinks = () => {
    if (error === "") {
      var trip = "";
      var query = "";

      var depOne = departure ? departure.code : "";
      var desOne = destination ? destination.code : "";

      var depDateOneDay = departureDate.day.toString();
      var depDateOnemonth = departureDate.month.toString();
      var depDateOneyear = departureDate.year.toString();

      if (radio === "oneway") {
        trip = "OneWay";
        query = `tripType=${trip}&itinerary=${depOne}-${desOne}_${depDateOneDay}-${depDateOnemonth}-${depDateOneyear}&A-${adultCount}_C-${childrenCount}_I-${infantCount}&cabinClass-${cabinClass}`;
      } else if (radio === "twoway") {
        if (returnDate) {
          trip = "TwoWay";
          var deptwo = destination ? destination.code : "";
          var destwo = departure ? departure.code : "";
          var depDatetwoDay = returnDate.day.toString();
          var depDatetwomonth = returnDate.month.toString();
          var depDatetwoyear = returnDate.year.toString();
          query = `tripType=${trip}&itinerary=${depOne}-${desOne}_${depDateOneDay}-${depDateOnemonth}-${depDateOneyear}&${deptwo}-${destwo}_${depDatetwoDay}-${depDatetwomonth}-${depDatetwoyear}&A-${adultCount}_C-${childrenCount}_I-${infantCount}&cabinClass-${cabinClass}`;
        } else {
        }
      }

      const usp = new URLSearchParams(query);
      var searchParams = usp.toString();

      return `search/${searchParams}`;
    }
  }; 

  return (
    <>
      <div style={{marginTop:"0"}} className={`${classForSlide}`}>
        {console.log(classForSlide)}
        <div style={{disply:"flex",width:"70%",margin:"4rem auto",color:"white",alignItems:"center",justifyContent:"center"}}>
         <div style={{}}>
         <h1 style={{textAlign:"center",fontsize:"600px",fontSize:"2.7rem",fontWeight:"bold",lineHeight:"1.7"}}>Flight Ticket Booking has a new Destination</h1>
          <h5 style={{textAlign:"center",fontSize:"1.5rem",fontWeight:"lighter",lineHeight:"1.7"}}>We make our customers happy by providing as many choices as possible</h5>
          <h5 style={{textAlign:"center",fontSize:"1.5rem",fontWeight:"bold",lineHeight:"1.7"}}>Book your first journey with us NOW</h5>
         </div>
        
        </div>
        <div className="flightSearchContainer" style={{margin:"auto auto",border:"1px solid red"}}>
          {/*---------------------RADIO BUTTONS---------------------*/}
          <div className="radioButtons">
            <MyRadio
              radioState={radio}
              setRadioState={(val) => {
                dispatch(setRadio(val));
              }}
            />
          </div>
          <div className="searchBlockContainer" style={{margin:"auto auto",border:"1px solid green"}}>
            {radio !== "multicity" ? (
              <div style={{border:"1px solid blue"}} className="searchBlock">
                {/*---------------------DEPARTURE DROPDOWN---------------------*/}
                <div style={{ backgroundColor:"white", margin:".5rem .2rem"}} className="departurePopUpContainer">
                  <div className="popup">
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
                  <div className="airportDescription">
                    {departure ? (
                      <div className="optionDisplay">
                        <div className="AirportCodeDisplay ">
                          {departure.code},
                        </div>
                        <div className="AirportNameDisplay">
                          {departure.title}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div style={{padding:"",marginLeft:""}}
                  className="toggleSwitch"
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
                <div  style={{ backgroundColor:"white",margin:".5rem .2rem"}} className="destinationPopUpContainer">
                  <div className="popup">
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
                  <div className="airportDescription">
                    {destination ? (
                      <div className="optionDisplay">
                        <div className="AirportCodeDisplay ">
                          {destination.code},
                        </div>
                        <div className="AirportNameDisplay">
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
                      className={`errorContainerAirtports ${
                        error ? "open" : null
                      }`}
                    >
                      {error ? <h4 className="errorH4">{error}</h4> : null}
                    </div>
                  </HeadShake>
                ) : null}


                {/*---------------------DEPARTURE DATE CALENDAR---------------------*/}


                <div className="departureDateContainer" style={{  margin:"0.5rem 0.5rem", backgroundColor:"white"}}>
                  {radio === "twoway" ? 
                  (
                    <div >
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
                    </div>
                   
                  )
                   : (
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
                <div style={{ backgroundColor:"white",margin:"0.5rem 0.5rem"}} className="returnDateContainer" >
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
                      className={`errorContainerReturnDate ${
                        error ? "open" : null
                      }`}
                    >
                      {error ? (
                        <h4 className="errorH4Return">{error}</h4>
                      ) : null}
                    </div>
                  </HeadShake>
                ) : null}
                <div style={{backgroundColor:"white", margin:"0.5rem 0.5rem"}} className="TravellerInfoContainer" >
                  <TravellerInfo label="TRAVELLER & CLASS" />
                </div>
                <div className="btnSearch" style={{margin:"auto auto"}}>
        <MyButton 
        
          type="default"
          label="Search"
          padding=" 6px 60px 6px 60px"
          fontsize="28px"
          runAction={() => {
            handleSearchBtn();
          }}
          linkTo={handleLinks()}
        />
      </div>

              </div>
            ) : (
              <Multicity />
            )}

            {travelClassError ? (
              <HeadShake count={5} delay={200}>
                <div
                  className={`errorContainerTravelClass ${
                    travelClassError &&
                    (radio === "oneway" || radio === "twoway")
                      ? "open"
                      : null
                  }`}
                >
                  <h4 className="errorH4">{travelClassError}</h4>
                </div>
              </HeadShake>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchFlightBlock;
