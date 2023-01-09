import React from "react";
import ReactDom from "react-dom";
import Slide from "react-reveal/Slide";
import Filters from "./Filters";
import "./FiltersModal.css";

const FiltersModal = ({ closeFilerts, departure, destination }) => {
  return ReactDom.createPortal(
    <>
      <Slide bottom duration={400}>
        <div className="filtersModalContainer">
          <div className="filtersModalHeader">
            <div className="filtersModalBackIcon" onClick={closeFilerts}>
              <i class="fas fa-chevron-left"></i>
            </div>
            <div className="headerTitle">Sort & Filter</div>
          </div>
          <Filters dep={departure} des={destination} />
        </div>
      </Slide>
    </>,
    document.getElementById("portal3")
  );
};

export default FiltersModal;
