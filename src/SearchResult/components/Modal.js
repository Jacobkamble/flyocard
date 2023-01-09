import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import ModalPopUpDeparture from "./ModalDeparturePopUp";
import ModalPopUpDestination from "./ModalDestinationPopUp";
import Airports from "../../Airports.json";
import HeadShake from "react-reveal/HeadShake";
import ModalCalendarDeparture from "./ModalCalendarDeparture";
import ModalCalendarRetrun from "./ModalCalendarReturn";
import ModalOnewayCalendar from "./ModalOnewayCalendar";
import TravellerClassField from "./TravellerClassField";
import ModalTravellerInfoDropDown from "../../Utilities/ModalTravellerInfoDropDown";
import { TodayDate } from "../../Utilities/TodayDate";
import MyButton from "../../Utilities/Button";
import Slide from "react-reveal/Slide";
import MyRadio from "../../Utilities/RadioBtn";
import "./modal.css";

//REDUX
import {
  setDeparture,
  setToggle,
  setDepartureDate,
  setReturnDate,
  setRadio,
  setError,
  setDestinationSelect,
} from "../../actions/HomePageActions";
import { useSelector, useDispatch } from "react-redux";

const Modal = ({ closeModal, show, handleBtnUpdate, CheckCalendarStatus }) => {
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
  const tripType = useSelector((state) => state.Home.tripType);
  const radio = useSelector((state) => state.Home.radio);
  const error = useSelector((state) => state.Home.errorMessage);
  const departureDate = useSelector((state) => state.Home.departureDate);
  const returnDate = useSelector((state) => state.Home.returnDate);
  const travelClassError = useSelector((state) => state.Home.travelClassError);
  const adultCount = useSelector((state) => state.Home.adultCount);
  const childrenCount = useSelector((state) => state.Home.childrenCount);
  const infantCount = useSelector((state) => state.Home.infantCount);

  const travelClass = useSelector((state) => state.Home.travelClass);
  const travellersTotal = useSelector((state) => state.Home.travellersTotal);

  const [infoOpen, setInfoOpen] = useState(false);
  const [handleDepDropDown, setHandleDepDropDown] = useState(false);
  const [handleDesDropDown, setHandleDesDropDown] = useState(false);
  const [handleCalendar, setHandleCalendar] = useState(false);
  const [handlecalendarFromDestination, setHandlecalendarFromDestination] =
    useState(false);
  const [radioModal, setRadioModal] = useState(radio);
  const [localDep, setLocalDep] = useState(departure);
  const [localDes, setLocalDes] = useState(destination);
  const [localDepartureDate, setLocalDepartureDate] = useState(departureDate);
  const [localReturnDate, setLocalReturnDate] = useState(returnDate);
  const [localError, setLocalError] = useState(error);
  useEffect(() => {
    if (travelClassError === "") {
      setInfoOpen(false);
    }
  }, [travelClassError]);

  const cabinClass = useSelector((state) => state.Home.travelClass);
  useEffect(() => {
    setToggleChange({
      dep: departure,
      des: destination,
    });
  }, [departure, destination]);

  useEffect(() => {
    if (departure && destination) {
      if (departure.code === destination.code) {
        dispatch(setError("From & to airports cannot be same"));
      } else if (departure.code !== destination.code) {
        dispatch(setError(""));
      }
    }
  }, [departure, destination, dispatch]);
  const [toggleChange, setToggleChange] = useState({
    dep: departure,
    des: destination,
  });

  const oneway = "oneway";
  const twoway = "twoway";
  const setTripType = (s) => {
    if (!s === "twoway") {
      setLocalReturnDate("");
      dispatch(setReturnDate(""));
    } else if (s === "twoway") {
      setRadioModal("twoway");
      dispatch(setRadio("twoway"));
    } else if (s === "multicity") {
      setRadioModal("multicity");
      dispatch(setRadio("multicity"));
    }
  };

  const DateReformatdeparture = (date) => {
    if (date.from) {
      var depday = date.from.day;
      var depmonth = date.from.month;
      var depyear = date.from.year;

      var y = date.from.year.toString();
      var mnth = date.from.month.toString();
      var daystring = date.from.day.toString();

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

      setLocalDepartureDate({
        day: depday,
        month: depmonth,
        year: depyear,
        mm: mm,
        dd: dd,
      });
    }
    if (date.to) {
      DateReformatreturn(date);
      setHandleCalendar(false);
    }
  };

  const DateReformatreturn = (date) => {
    if (date.to) {
      var desday = date.to.day;
      var desmonth = date.to.month;
      var desyear = date.to.year;

      var y = date.to.year.toString();
      var mnth = date.to.month.toString();
      var daystring = date.to.day.toString();

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

      setLocalReturnDate({
        day: desday,
        month: desmonth,
        year: desyear,
        mm: mm,
        dd: dd,
      });
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
  const updateHandle = () => {
    dispatch(setRadio(radioModal));
    dispatch(setDeparture(localDep));
    dispatch(setDepartureDate(localDepartureDate));
    dispatch(setReturnDate(localReturnDate));
  };

  return ReactDom.createPortal(
    <>
      <Slide top duration={400}>
        <div
          className="modalWrapper"
          style={{
            opacity: show ? "1" : "0",
          }}
        >
          <div className="modalHeader">
            <i
              class="fas fa-times"
              onClick={() => {
                closeModal();
              }}
            ></i>
          </div>
          <div className="radiobuttons">
            <MyRadio
              radioState={radioModal}
              setRadioState={(val) => {
                setRadioModal(val);
              }}
            />
          </div>
          <div className="modalContent">
            <div className="depDesBlock">
              <div className="departurePopUp">
                <ModalPopUpDeparture
                  options={Airports}
                  label="FROM"
                  prompt="Select Departure"
                  onChange={(val) => {
                    setLocalDep(val);
                    setToggleChange({ ...toggleChange, dep: val });
                    if (destination === val) {
                      dispatch(setError("From & to airports cannot be same"));
                    }
                  }}
                  objstate={localDep}
                  depDropDownState={handleDepDropDown}
                  openDepartureDropDown={(val) => {
                    setHandleDepDropDown(val);
                  }}
                  openDestinationFromDeparture={(val) => {
                    setHandleDesDropDown(val);
                  }}
                />
              </div>
              <div
                className="modaltoggleSwitch"
                onClick={() => {
                  if (departure === undefined || destination === undefined) {
                    dispatch(setError("cannot toggle"));
                  } else {
                    dispatch(setToggle(toggleChange));
                  }
                }}
              >
                <i class="fas fa-exchange-alt"></i>
              </div>
              <div className="destinationPopUP">
                <ModalPopUpDestination
                  options={Airports}
                  label="To"
                  prompt="Select Destination"
                  onChange={(val) => {
                    setLocalDes(val);
                    setToggleChange({ ...toggleChange, dep: val });
                    if (destination === val) {
                      dispatch(setError("From & to airports cannot be same"));
                    }
                  }}
                  objstate={localDes}
                  desDropDownState={handleDesDropDown}
                  closeDestination={(val) => {
                    setHandleDesDropDown(val);
                  }}
                  handleDesDropDown={(val) => {
                    setHandleDesDropDown(val);
                  }}
                  openDepartureFromDestination={(val) => {
                    setHandleDepDropDown(val);
                  }}
                  currentDepartState={handleDepDropDown}
                  openCalendarFromDestination={(val) => {
                    setHandleCalendar(val);
                  }}
                />
              </div>
            </div>
            {error === "From & to airports cannot be same" ||
            error === "please select departure & destination to proceed" ? (
              <HeadShake count={5} delay={200}>
                <div
                  className={`modalErrorContainerAirtports ${
                    error ? "open" : null
                  }`}
                >
                  {error ? <h4 className="modalErrorH4">{error}</h4> : null}
                </div>
              </HeadShake>
            ) : null}
            <div className="dateBlock">
              {/*---------------------DEPARTURE DATE CALENDAR---------------------*/}
              <div className="modalDepartureDateContainer">
                {radio === "twoway" ? (
                  <ModalCalendarDeparture
                    label="DEPARTURE"
                    onSelect={(date) => setLocalDepartureDate(date)}
                    placeholder="departureDate"
                    onSelectChange={(date) => {
                      DateReformatdeparture(date);
                    }}
                    displayMonth={departureDate.mm}
                    day={departureDate}
                    dayreturn={returnDate}
                    minDate={TodayDate()}
                    trip={() => setTripType(oneway)}
                    objstate={localDepartureDate}
                    handleCalendar={(val) => {
                      setHandleCalendar(val);
                    }}
                    handelCalendarState={handleCalendar}
                    calendarStateForDestination={handlecalendarFromDestination}
                    handleDestinationCalendarState={(val) => {
                      setHandlecalendarFromDestination(val);
                    }}
                  />
                ) : (
                  <ModalOnewayCalendar
                    label="DEPARTURE"
                    onSelect={(date) => dispatch(setDepartureDate(date))}
                    placeholder="departureDate"
                    onSelectChange={(date) => DateReformatdepartureOne(date)}
                    displayMonth={departureDate.mm}
                    day={departureDate}
                    minDate={TodayDate()}
                    trip={() => setTripType(oneway)}
                    objstate={departureDate}
                    openCalendarfromDesti={handlecalendarFromDestination}
                    closeCalendar={(val) =>
                      setHandlecalendarFromDestination(val)
                    }
                  />
                )}
              </div>
              {/*--------------------- RETURN DATE CALENDAR---------------------*/}
              <div className="modalReturnDateContainer">
                <ModalCalendarRetrun
                  label="RETURN"
                  onSelect={(date) => setLocalReturnDate(date)}
                  placeholder={
                    radio === "twoway"
                      ? "Select a return date"
                      : "Tap to add return date"
                  }
                  trip={() => setTripType(twoway)}
                  objstate={localReturnDate}
                  openCalendar={(val) => {
                    setHandleCalendar(val);
                  }}
                />
              </div>
            </div>
            <TravellerClassField />
          </div>
          <div className="updateSearchBtn">
            <MyButton
              type="default"
              label=" Update Search"
              padding=" 6px 25px 6px 25px"
              fontsize="24px"
              runAction={() => {
                updateHandle();
                closeModal();
              }}
            />
          </div>
        </div>
      </Slide>
    </>,
    document.getElementById("portal1")
  );
};

export default Modal;
