import React, { useState, useEffect } from "react";
import "./ModalTravellerInfoDropDown.css";
import MyButton from "./Button";
import ReactDom from "react-dom";
import Fade from "react-reveal";
import HeadShake from "react-reveal/HeadShake";
import { Link } from "react-router-dom";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  setAdultCount,
  setChildrenCount,
  setInfantCount,
  setClass,
  setTravellersTotal,
  setTravelClassError,
} from "../actions/HomePageActions";

import { setError } from "../actions/HomePageActions";

const ModalTravellerInfoDropDown = ({
  closeTravellerModal,
  showTravellerModal,
}) => {
  const adultCount = useSelector((state) => state.Home.adultCount);
  const childrenCount = useSelector((state) => state.Home.childrenCount);
  const infantCount = useSelector((state) => state.Home.infantCount);
  const travellerTotal = useSelector((state) => state.Home.travellersTotal);
  const travelClass = useSelector((state) => state.Home.travelClass);

  const dispatch = useDispatch();

  const [errOpen, setErrOpen] = useState(false);

  const handleClickAdult = (e) => {
    dispatch(setAdultCount(e.target.value));
  };

  const handleClickChildren = (e) => {
    dispatch(setChildrenCount(e.target.value));
  };

  const handleClickInfant = (e) => {
    dispatch(setInfantCount(e.target.value));
  };

  const departure = useSelector((state) => state.Home.departure);
  const destination = useSelector((state) => state.Home.destination);
  const radio = useSelector((state) => state.Home.radio);
  const error = useSelector((state) => state.Home.errorMessage);
  const departureDate = useSelector((state) => state.Home.departureDate);
  const returnDate = useSelector((state) => state.Home.returnDate);
 
  const cabinClass = useSelector((state) => state.Home.travelClass);
  const validation = () => {
    if (departure && destination) {
      if (departure.code === destination.code) {
        dispatch(setError("From & to airports cannot be same"));
      } else {
        dispatch(setError(""));
      }
    }
    if (departure === null && destination === null) {
      dispatch(setError("please select departure & destination to proceed"));
    }
    if (radio === "twoway" && returnDate === "") {
      dispatch(setError("Please select a return date to proceed"));
    }
  };
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

  const handleClickClass = (e) => {
    var travelClassFormat = "";

    if (e.target.value === 0) {
      travelClassFormat = "Economy";
    } else if (e.target.value === 1) {
      travelClassFormat = "Premium Economy";
    } else {
      travelClassFormat = "Business";
    }
    console.log(e.target.value);
    dispatch(setClass(travelClassFormat));
    handleSearchBtn();
  };

  const calcTotalTravellers = () => {
    var calc = adultCount + childrenCount + infantCount;

    dispatch(setTravellersTotal(calc));
  };

  const handleApplyBtn = () => {
    closeTravellerModal();
    errOpen
      ? dispatch(setTravelClassError("Maximum 9 passangers allowed"))
      : dispatch(setTravelClassError(""));
  };

  const handleAdultCountIncrement = () => {
    if (!(travellerTotal >= 9)) {
      if (!(adultCount >= 9)) {
        dispatch(setAdultCount(adultCount + 1));
        dispatch(setTravellersTotal(travellerTotal + 1));
      }
    } else {
      dispatch(setTravelClassError("Maximum 9 passangers allowed"));
      setErrOpen(true);
    }
  };
  const handleAdultCountDecrement = () => {
    if (!(travellerTotal <= 1)) {
      if (!(adultCount <= 1)) {
        dispatch(setAdultCount(adultCount - 1));
        dispatch(setTravellersTotal(travellerTotal - 1));
      }
    }
    if (travellerTotal <= 9) {
      setErrOpen(false);
      dispatch(setTravelClassError(""));
    }
  };
  const handleChildCountIncrement = () => {
    if (!(travellerTotal >= 9)) {
      if (!(childrenCount >= 9)) {
        dispatch(setChildrenCount(childrenCount + 1));
        dispatch(setTravellersTotal(travellerTotal + 1));
      }
    } else {
      dispatch(setTravelClassError("Maximum 9 passangers allowed"));
      setErrOpen(true);
    }
  };
  const handleChildCountDecrement = () => {
    if (!(travellerTotal <= 0)) {
      if (!(childrenCount <= 0)) {
        dispatch(setChildrenCount(childrenCount - 1));
        dispatch(setTravellersTotal(travellerTotal - 1));
      }
    }
    if (travellerTotal <= 9) {
      setErrOpen(false);
      dispatch(setTravelClassError(""));
    }
  };
  const handleInfantCountIncrement = () => {
    if (!(travellerTotal >= 9)) {
      if (!(infantCount >= adultCount)) {
        dispatch(setInfantCount(infantCount + 1));
        dispatch(setTravellersTotal(travellerTotal + 1));
      }
    } else {
      dispatch(setTravelClassError("Maximum 9 passangers allowed"));
      setErrOpen(true);
    }
  };
  const handleInfantCountDecrement = () => {
    if (!(travellerTotal <= 0)) {
      if (!(infantCount <= 0)) {
        dispatch(setInfantCount(infantCount - 1));
        dispatch(setTravellersTotal(travellerTotal - 1));
      }
    }
    if (travellerTotal <= 9) {
      setErrOpen(false);
      dispatch(setTravelClassError(""));
    }
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay-travellerClass" onClick={closeTravellerModal} />
      <Fade>
        <div className="modalTravellerDropDownContainer">
          <div className="modalTravellerDropDownBlock">
            <div className="modalPassangerSelectContainer">
              <h2 className="modalTravellerDropDownLabel">
                CHOOSE NUMBER OF PASSENGERS
              </h2>
              <div className="modalPassangerBlock">
                <div className="modalPassangerCountLabel">
                  Adult
                  <p className="modalPassangerParagraph">
                    12 Yrs & above on the day of travel
                  </p>
                </div>
                <div className="modalPassangerSelect">
                  <div
                    className="decrementCount"
                    onClick={() => {
                      handleAdultCountDecrement();
                    }}
                  >
                    <i class="fas fa-minus"></i>
                  </div>
                  <div className="countDisplay">
                    <p className="countDisplayParagraph">{adultCount}</p>
                  </div>
                  <div
                    className="incrementCount"
                    onClick={() => {
                      handleAdultCountIncrement();
                    }}
                  >
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="modalPassangerBlock">
                <div className="modalPassangerCountLabel">
                  Child{" "}
                  <p className="modalPassangerParagraph">
                    2 - 12 Yrs on the day of travel
                  </p>
                </div>
                <div className="modalPassangerSelect">
                  <div
                    className="decrementCount"
                    onClick={() => {
                      handleChildCountDecrement();
                    }}
                  >
                    <i class="fas fa-minus"></i>
                  </div>
                  <div className="countDisplay">
                    <p className=" countDisplayParagraph">{childrenCount}</p>
                  </div>
                  <div
                    className="incrementCount"
                    onClick={() => {
                      handleChildCountIncrement();
                    }}
                  >
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="modalPassangerBlock">
                <div className="modalPassangerCountLabel">
                  Infant
                  <p className="modalPassangerParagraph">
                    Under 2 yrs on the day of travel
                  </p>
                </div>
                <div className="modalPassangerSelect">
                  <div
                    className="decrementCount"
                    onClick={() => {
                      handleInfantCountDecrement();
                    }}
                  >
                    <i class="fas fa-minus"></i>
                  </div>
                  <div className="countDisplay">
                    <p className="countDisplayParagraph" countDisplayParagraph>
                      {infantCount}
                    </p>
                  </div>
                  <div
                    className="incrementCount"
                    onClick={() => {
                      handleInfantCountIncrement();
                    }}
                  >
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
            {/*--------------------- CLASS SELECT---------------------*/}
            <div className="modalTravelClassSelectContainer">
              <h2 className="modalTravellerDropDownLabel">
                CHOOSE TRAVEL CLASS
              </h2>
              <div className="modalTravelClassInfo">
                {/*--------------------- 1st---------------------*/}
                <ul className="modalTravelClassList">
                <Link to={handleLinks()} onClick={() => {
        handleSearchBtn();}}>
                  <li
                    className={` ${
                      travelClass === "Economy"
                        ? "selectedNoClass"
                        : "travelClassLi"
                    }`}
                    value={0}
                    onClick={(e) => {
                      handleClickClass(e);
                    }}
                  >
                    Economy
                  </li>
                  </Link>
                  <Link to={handleLinks()} onClick={() => {
        handleSearchBtn();}}>
                  <li
                    className={` ${
                      travelClass === "Premium Economy"
                        ? "selectedNoClass"
                        : "travelClassLi"
                    }`}
                    value={1}
                    onClick={(e) => {
                      handleClickClass(e);
                    }}
                  >
                    Premium Economy
                  </li>
                  </Link>
                  <Link to={handleLinks()} onClick={() => {
        handleSearchBtn();}}>
                  <li
                    className={` ${
                      travelClass === "Business"
                        ? "selectedNoClass"
                        : "travelClassLi"
                    }`}
                    value={2}
                    onClick={(e) => {
                      handleClickClass(e);
                    }}
                  >
                    Business
                  </li>
                  </Link>
                </ul>
              </div>
            </div>

            <HeadShake count={4}>
              <div
                className={`modalTravellerClassError ${
                  errOpen ? "open" : "close"
                }`}
              >
                Maximum 9 passangers allowed
              </div>
            </HeadShake>
            <div className="btnTravellerClassSSelect">
              <MyButton
                label="Apply"
                padding=" 6px 20px 6px 20px"
                fontsize="16px"
                runAction={handleApplyBtn}
              />
            </div>
          </div>
        </div>
      </Fade>
    </>,
    document.getElementById("portal2")
  );
};
export default ModalTravellerInfoDropDown;
