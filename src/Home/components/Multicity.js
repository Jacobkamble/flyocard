import React, { useEffect } from "react";
import PopUpDeparture from "../components/PopUpDeparture";
import PopUpDestination from "../components/popUpDestination";
import MyCalendar from "../components/Calendar";
import TravellerInfo from "../components/TravellerInfo";
import MyButton from "../../Utilities/Button";
import HeadShake from "react-reveal/HeadShake";
import { TodayDate } from "../../Utilities/TodayDate";
import AddCity from "./AddCity";
import "./Multicity.css";
import "../homePage.css";
import "switch.svg";
import "cancel.svg";
import Airports from "../../Airports.json";
import { nextDay } from "../../Utilities/NextDay";

///REDUX
import {
  setDeparture,
  setDestinationSelect,
  setDepartureDate,
  setReturnDate,
  setRadio,
  setAddCityCounter,
  setDeparture1,
  setDeparture2,
  setDeparture3,
  setDeparture4,
  setDestination1,
  setDestination2,
  setDestination3,
  setDestination4,
  setDepartureDate1,
  setDepartureDate2,
  setDepartureDate3,
  setDepartureDate4,
  setError1,
  setError2,
  setError3,
  setError4,
} from "../../actions/HomePageActions";

import { useSelector, useDispatch } from "react-redux";

const Multicity = () => {
  const dispatch = useDispatch();
  const departure = useSelector((state) => state.Home.departure);
  const departure1 = useSelector((state) => state.Home.departure1);
  const departure2 = useSelector((state) => state.Home.departure2);
  const departure3 = useSelector((state) => state.Home.departure3);
  const departure4 = useSelector((state) => state.Home.departure4);

  const destination = useSelector((state) => state.Home.destination);
  const destination1 = useSelector((state) => state.Home.destination1);
  const destination2 = useSelector((state) => state.Home.destination2);
  const destination3 = useSelector((state) => state.Home.destination3);
  const destination4 = useSelector((state) => state.Home.destination4);

  const error = useSelector((state) => state.Home.errorMessage);
  const departureDate = useSelector((state) => state.Home.departureDate);
  const departureDate1 = useSelector((state) => state.Home.departureDate1);
  const departureDate2 = useSelector((state) => state.Home.departureDate2);
  const departureDate3 = useSelector((state) => state.Home.departureDate3);
  const departureDate4 = useSelector((state) => state.Home.departureDate4);
  const radio = useSelector((state) => state.Home.radio);
  const err1 = useSelector((state) => state.Home.errorMessage1);
  const err2 = useSelector((state) => state.Home.errorMessage2);
  const err3 = useSelector((state) => state.Home.errorMessage3);
  const err4 = useSelector((state) => state.Home.errorMessage4);
  const addCityCounter = useSelector((state) => state.Home.addCityCounter);
  const travelClassError = useSelector((state) => state.Home.travelClassError);

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

    setDepartureDate((departureDate) => ({
      ...departureDate,
      mm: mm,
      dd: dd,
    }));

    dispatch(
      setDepartureDate({
        day: depday,
        month: depmonth,
        year: depyear,
        mm: mm,
        dd: dd,
      })
    );
  };

  const handleAddcityBtn = () => {
    dispatch(setAddCityCounter(addCityCounter + 1));
  };

  const initialDeparture1 = (val) => {
    if (val) {
      dispatch(setDeparture1(val));
    }
  };
  const initialDeparture2 = (val) => {
    if (val) {
      dispatch(setDeparture2(val));
    }
  };
  const initialDeparture3 = (val) => {
    if (val) {
      dispatch(setDeparture3(val));
    }
  };
  const initialDeparture4 = (val) => {
    if (val) {
      dispatch(setDeparture4(val));
    }
  };
  useEffect(() => {
    if (departure1 && destination1) {
      if (departure1 === destination1) {
        dispatch(setError1("From & to airports cannot be same"));
      } else {
        dispatch(setError1(""));
      }
    }
    if (departure2 && destination2) {
      if (departure2 === destination2) {
        dispatch(setError2("From & to airports cannot be same"));
      } else {
        dispatch(setError2(""));
      }
    }
    if (departure3 && destination3) {
      if (departure3 === destination3) {
        dispatch(setError3("From & to airports cannot be same"));
      } else {
        dispatch(setError3(""));
      }
    }
    if (departure4 && destination4) {
      if (departure4 === destination4) {
        dispatch(setError4("From & to airports cannot be same"));
      } else {
        dispatch(setError4(""));
      }
    }
  }, [
    departure1,
    destination1,
    departure2,
    destination2,
    departure3,
    destination3,
    departure4,
    destination4,
    dispatch,
  ]);
  return (
    <div className="multicityContainer">
      <div className="temporaryMulticityContainer">
        Call Us at 1800-FlyOkart For Multicity Bookings
      </div>
      {/* <div className="searchBlockMulticity">
        <div className="departurePopUpContainer">
          <div className="popup">
            <PopUpDeparture
              options={Airports}
              label="FROM"
              prompt="Select Departure"
              onChange={(val) => {
                dispatch(setDeparture(val));
              }}
              objstate={departure}
            />
          </div>
          <div className="airportDescription">
            {departure ? (
              <div className="optionDisplay">
                <div className="AirportCodeDisplay ">{departure.code}, </div>
                <div className="AirportNameDisplay">{departure.title}</div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="destinationPopUpContainer">
          <div className="popup">
            <PopUpDestination
              options={Airports}
              label="TO"
              prompt="Select Destination"
              onChange={(val) => {
                dispatch(setDestinationSelect(val));
                initialDeparture1(val);
              }}
              objstate={destination}
            />
          </div>
          <div className="airportDescription">
            {destination ? (
              <div className="optionDisplay">
                <div className="AirportCodeDisplay ">{destination.code}</div>
                <div className="AirportNameDisplay">{destination.title}</div>
              </div>
            ) : null}
          </div>
        </div>
        {error === "From & to airports cannot be same" ? (
          <HeadShake count={5} delay={200}>
            <div className={`errorContainerAirtports ${error ? "open" : null}`}>
              {error ? <h4 className="errorH4">{error}</h4> : null}
            </div>
          </HeadShake>
        ) : null}

        <div className="departureDateContainer">
          <MyCalendar
            label="DEPARTURE"
            onSelect={(date) =>
              dispatch(
                setDepartureDate(date),
                dispatch(setDepartureDate1(nextDay(date))),
                dispatch(setDepartureDate2(nextDay(date))),
                dispatch(setDepartureDate3(nextDay(date))),
                dispatch(setDepartureDate4(nextDay(date)))
              )
            }
            placeholder="departureDate"
            onSelectChange={(date) => DateReformatdeparture(date)}
            displayMonth={departureDate.mm}
            day={departureDate}
            minDate={TodayDate()}
            trip={() => setTripType(oneway)}
            objstate={departureDate}
          />
        </div>
        <div className="TravellerInfoContainerTop">
          <TravellerInfo label="TRAVELLER & CLASS" />
        </div>
      </div>*/}
      {/* <div className="addCityBlock">
        <AddCity
          onChangeDestination={(val) => {
            dispatch(setDestination1(val));
            initialDeparture2(val);
          }}
          onChangeDeparture={(val) => {
            dispatch(setDeparture1(val));
          }}
          onChangeDepartureDate={(val) => {
            dispatch(setDepartureDate1(val));
          }}
          Departure_prop={departure1}
          Destination_prop={destination1}
          DepartureDate_prop={departureDate1}
          error_prop={err1}
        />
      </div>*/}

      {/*{addCityCounter === 0 ? (
        <div className="addCityBtnContainer1">
          <MyButton
            type="default"
            label=" + Add another city"
            padding="10px 10px 10px 10px"
            fontsize="18px"
            runAction={() => {
              handleAddcityBtn();
            }}
          />
        </div>
      ) : null} */}

      {/*{addCityCounter > 0 && addCityCounter < 4 ? (
        <div className="addCityBlock">
          <AddCity
            onChangeDestination={(val) => {
              dispatch(setDestination2(val));
              initialDeparture3(val);
            }}
            onChangeDeparture={(val) => {
              dispatch(setDeparture2(val));
            }}
            onChangeDepartureDate={(val) => {
              dispatch(setDepartureDate2(val));
            }}
            Departure_prop={departure2}
            Destination_prop={destination2}
            DepartureDate_prop={departureDate2}
            error_prop={err2}
          />
        </div>
      ) : null} */}
      {/*{addCityCounter === 1 ? (
        <div className="BtnContainer2">
          <div className="addCityBtnContainer2">
            <MyButton
              type="default"
              label=" + Add another city"
              padding="10px 10px 10px 10px"
              fontsize="18px"
              runAction={() => {
                handleAddcityBtn();
              }}
            />
          </div>
          <div
            className="closeCityBtnContainer2"
            onClick={() => {
              dispatch(setAddCityCounter(addCityCounter - 1));
            }}
          >
            <img className="cancelImg" src="cancel.svg" alt="closeButton" />
          </div>
        </div>
      ) : null} */}

      {/*{addCityCounter > 0 && addCityCounter > 1 ? (
        <div className="addCityBlock">
          <AddCity
            onChangeDestination={(val) => {
              dispatch(setDestination3(val));
              initialDeparture4(val);
            }}
            onChangeDeparture={(val) => {
              dispatch(setDeparture3(val));
            }}
            onChangeDepartureDate={(val) => {
              dispatch(setDepartureDate3(val));
            }}
            Departure_prop={departure3}
            Destination_prop={destination3}
            DepartureDate_prop={departureDate3}
            error_prop={err3}
          />
        </div>
      ) : null} */}
      {/*{addCityCounter === 2 ? (
        <div className="BtnContainer3">
          <div className="addCityBtnContainer3">
            <MyButton
              type="default"
              label=" + Add another city"
              padding="10px 10px 10px 10px"
              fontsize="18px"
              runAction={() => {
                handleAddcityBtn();
              }}
            />
          </div>
          <div
            className="closeCityBtnContainer3"
            onClick={() => {
              dispatch(setAddCityCounter(addCityCounter - 1));
            }}
          >
            <img className="cancelImg" src="cancel.svg" alt="closeButton" />
          </div>
        </div>
      ) : null} */}

      {/*{addCityCounter > 0 && addCityCounter > 2 ? (
        <div className="addCityBlock">
          <AddCity
            onChangeDestination={(val) => {
              dispatch(setDestination4(val));
            }}
            onChangeDeparture={(val) => {
              dispatch(setDeparture4(val));
            }}
            onChangeDepartureDate={(val) => {
              dispatch(setDepartureDate4(val));
            }}
            Departure_prop={departure4}
            Destination_prop={destination4}
            DepartureDate_prop={departureDate4}
            error_prop={err4}
          />
          <div
            className="closeCityBtnContainer4"
            onClick={() => {
              dispatch(setAddCityCounter(addCityCounter - 1));
            }}
          >
            <img className="cancelImg" src="cancel.svg" alt="closeButton" />
          </div>
        </div>
      ) : null} */}

      {/*<div className="TravellerInfoContainerMulticity">
        <TravellerInfo label="TRAVELLER & CLASS" />
        {travelClassError ? (
          <HeadShake count={5} delay={200}>
            <div
              className={`errorContainerTravelClassMulticity ${
                travelClassError && radio === "multicity" ? "open" : null
              }`}
            >
              <h4 className="errorH4">{travelClassError}</h4>
            </div>
          </HeadShake>
        ) : null}
      </div> */}
    </div>
  );
};

export default Multicity;
