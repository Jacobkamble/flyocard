import React, { useState } from "react";
import "./Filters.css";
import MyButton from "../../Utilities/Button";
import { default as airlineLogo } from "../../images/indigoLogo.png";

const Filters = ({ dep, des }) => {
  const [airlineSelect, setAirlineSelect] = useState(false);
  return (
    <div className="filtersContentContainer">
      
      <div className="filterContentBlock">
        <div className="filterHeader"> Filter By</div>
        <div className="filterBlock">
          <div className="stopsFilter">
            <div className="filterOptions">
              <div className="filterLabel">
                Stops from {dep ? dep.city : ""}
              </div>
              <div className="stopsContainer">
                <div className="stopBlock">
                  <div className="numberOfStops">0</div>
                  <div className="stopLabel">Non Stop </div>
                  <div className="stopCost">₹12345</div>
                </div>
                <div className="stopBlock">
                  <div className="numberOfStops">1</div>
                  <div className="stopLabel"> Stop</div>
                  <div className="stopCost">₹67890</div>
                </div>
                <div className="stopBlock">
                  <div className="numberOfStops">2+</div>
                  <div className="stopLabel">Stops </div>
                  <div className="stopCost">₹54321</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filterBlock">
          <div className="timeFilter">
            <div className="filterOptions">
              <div className="filterLabel">
                Departure from {dep ? dep.city : ""}
              </div>

              <div className="timeSlotContainter">
                <div className="timeSlotBlock">
                  <div className="timeSlotLabel">Before 6AM</div>
                  <div className="timeSlotCost">-</div>
                </div>
                <div className="timeSlotBlock">
                  <div className="timeSlotLabel">6AM - 12Noon</div>
                  <div className="timeSlotCost">-</div>
                </div>
                <div className="timeSlotBlock">
                  <div className="timeSlotLabel">12Noon - 6PM</div>
                  <div className="timeSlotCost">₹67890</div>
                </div>
                <div className="timeSlotBlock">
                  <div className="timeSlotLabel">After 6PM</div>
                  <div className="timeSlotCost">₹98765</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filterBlock">
          <div className="timeFilter">
            <div className="filterOptions">
              <div className="filterLabel">
                Arrival at {des ? des.city : ""}
              </div>
              <div className="timeSlotContainter">
                <div className="timeSlotBlock">
                  <div className="timeSlotLabel">Before 6AM</div>
                  <div className="timeSlotCost">-</div>
                </div>
                <div className="timeSlotBlock">
                  <div className="timeSlotLabel">6AM - 12Noon</div>
                  <div className="timeSlotCost">-</div>
                </div>
                <div className="timeSlotBlock">
                  <div className="timeSlotLabel">12Noon - 6PM</div>
                  <div className="timeSlotCost">₹67890</div>
                </div>
                <div className="timeSlotBlock">
                  <div className="timeSlotLabel">After 6PM</div>
                  <div className="timeSlotCost">₹98765</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filterBlock">
          <div className="airlineFilter">
            <div className="filterOptions">
              <div className="filterLabel"> Airline</div>

              <div className="airlinesContainer">
                <div className="airlineBlock">
                  <div className="airlineDescription">
                    <div className="airlineLogo">
                      <img
                        className="filterAirlineLogoImgTag"
                        src={airlineLogo}
                        alt="logo"
                      />
                    </div>
                    <div className="airlineNameFilters">IndiGo</div>
                  </div>
                  <div className="airlinePriceDescription">
                    <div className="airlinePriceFilters">₹12345</div>
                    <div
                      className={`airlineSelectBtn ${
                        airlineSelect ? "Selected" : null
                      }`}
                      onClick={() => {
                        setAirlineSelect((prev) => !prev);
                      }}
                    ></div>
                  </div>
                </div>
                <div className="airlineBlock">
                  <div className="airlineDescription">
                    <div className="airlineLogo">
                      <img
                        className="filterAirlineLogoImgTag"
                        src={airlineLogo}
                        alt="logo"
                      />
                    </div>
                    <div className="airlineNameFilters">IndiGo</div>
                  </div>
                  <div className="airlinePriceDescription">
                    <div className="airlinePriceFilters">₹12345</div>
                    <div
                      className={`airlineSelectBtn ${
                        airlineSelect ? "Selected" : null
                      }`}
                      onClick={() => {
                        setAirlineSelect((prev) => !prev);
                      }}
                    ></div>
                  </div>
                </div>
                <div className="airlineBlock">
                  <div className="airlineDescription">
                    <div className="airlineLogo">
                      <img
                        className="filterAirlineLogoImgTag"
                        src={airlineLogo}
                        alt="logo"
                      />
                    </div>
                    <div className="airlineNameFilters">IndiGo</div>
                  </div>
                  <div className="airlinePriceDescription">
                    <div className="airlinePriceFilters">₹12345</div>
                    <div
                      className={`airlineSelectBtn ${
                        airlineSelect ? "Selected" : null
                      }`}
                      onClick={() => {
                        setAirlineSelect((prev) => !prev);
                      }}
                    ></div>
                  </div>
                </div>
                <div className="airlineBlock">
                  <div className="airlineDescription">
                    <div className="airlineLogo">
                      <img
                        className="filterAirlineLogoImgTag"
                        src={airlineLogo}
                        alt="logo"
                      />
                    </div>
                    <div className="airlineNameFilters">IndiGo</div>
                  </div>
                  <div className="airlinePriceDescription">
                    <div className="airlinePriceFilters">₹12345</div>
                    <div
                      className={`airlineSelectBtn ${
                        airlineSelect ? "Selected" : null
                      }`}
                      onClick={() => {
                        setAirlineSelect((prev) => !prev);
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="filterApplyBtnContainer">
        <MyButton
          label="Apply Filters"
          padding=" 4px 20px 4px 20px"
          fontsize="22px"
          runAction={() => {}}
        />
      </div>
    </div>
  );
};

export default Filters;
