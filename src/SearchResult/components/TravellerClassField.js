import React, { useState, useEffect } from "react";
import ModalTravellerInfoDropDown from "../../Utilities/ModalTravellerInfoDropDown";
import { useSelector, useDispatch } from "react-redux";

const TravellerClassField = () => {
  const [infoOpen, setInfoOpen] = useState(false);
  const travellersTotal = useSelector((state) => state.Home.travellersTotal);
  const travelClass = useSelector((state) => state.Home.travelClass);

  const closeDropDown = () => {
    setInfoOpen(false);
  };
  return (
    <div className="modalTravellerInfoContainer">
      <div className="modalTravellerInfoBlock">
        <h3 className="modalTravellerInfoLabelH3">Travellers & Class</h3>
        <div
          className="modalTravellerInfoInput"
          onClick={() => setInfoOpen((prev) => !prev)}
        >
          <div className="modalTravellerCount">{travellersTotal} </div>
          <div className="modalTravellerPlaceholder">
            &nbsp;&nbsp;
            {travellersTotal > 1 ? "Travellers" : "Traveller"}
          </div>
        </div>
        <div className="modalClassInfo">{travelClass}</div>
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
    </div>
  );
};

export default TravellerClassField;
