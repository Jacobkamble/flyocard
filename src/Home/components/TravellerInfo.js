/* eslint-disable no-const-assign */
import React, { useState, useEffect } from "react";

import "./TravellerInfo.css";
import MyButton from "../../Utilities/Button";
import useClickOutside from "../../Utilities/useClickOutside";
import HeadShake from "react-reveal/HeadShake";
import ModalTravellerInfoDropDown from "../../Utilities/ModalTravellerInfoDropDown";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  setAdultCount,
  setChildrenCount,
  setInfantCount,
  setClass,
  setTravellersTotal,
  setTravelClassError,
} from "../../actions/HomePageActions";

const TravellerInfo = ({ label }) => {
  const [infoOpen, setInfoOpen] = useState(false);
  const travellersTotal = useSelector((state) => state.Home.travellersTotal);
  const travelClass = useSelector((state) => state.Home.travelClass);

  const closeDropDown = () => {
    setInfoOpen(false);
  };

  return (
    <div className="infoPlaceholder">
      <h3 className="headingH3">{label}</h3>
      <div className="infoInput" onClick={() => setInfoOpen((prev) => !prev)}>
        <div className="infoInputPlaceholder">
          {travellersTotal}
          &nbsp;&nbsp;
          {travellersTotal > 1 ? "Travellers" : "Traveller"}
        </div>
      </div>
      <div className="classInfo">{travelClass}</div>
      {infoOpen ? (
        <div className="modalTravellerInfoDropdownContainer ">
          <ModalTravellerInfoDropDown
            closeTravellerModal={() => {
              closeDropDown();
            }}
            showTravellerModal={infoOpen}
          />
        </div>
      ) : null}
    </div>
  );
};

export default TravellerInfo;
