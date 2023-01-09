import React, { useState } from "react";
import "./FlightReviewModal.css";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import { Link, Element } from "react-scroll";
import Slide from "react-reveal/Slide";
import { default as airlineLogo } from "../../images/indigoLogo.png";
import { default as seat } from "../../images/seat-red.svg";
const FlightReviewModal = ({ closeFlightRevieModal }) => {
  const [onwardSelect, setOnwardSelect] = useState(true);
  const [returnSelect, setReturnSelect] = useState(false);

  const depart = useSelector((state) => state.Home.departure);
  const desti = useSelector((state) => state.Home.destination);
  const departDate = useSelector((state) => state.Home.departureDate1);
  const returnDate = useSelector((state) => state.Home.returnDate);
  const cabinClass = useSelector((state) => state.Home.travelClass);
  const departTime1 = useSelector(
    (state) => state.SearchResult.trip1DepartureTime
  );
  const destiTime1 = useSelector(
    (state) => state.SearchResult.trip1ArrivalTime
  );
  const departTime2 = useSelector(
    (state) => state.SearchResult.trip2DepartureTime
  );
  const destiTime2 = useSelector(
    (state) => state.SearchResult.trip2ArrivalTime
  );
  const totalPrice = useSelector((state) => state.SearchResult.totalPrice);

  const adultCount = useSelector((state) => state.Home.adultCount);
  const childrenCount = useSelector((state) => state.Home.childrenCount);
  const infantCount = useSelector((state) => state.Home.infantCount);

  return ReactDom.createPortal(
    <>
      <Slide bottom duration={400}>
        <div className="flightReviewModalWrapper">
          <div className="flightReviewModalHeader">
            <div
              className="flightReviewModalHeaderBackBtn"
              onClick={() => {
                closeFlightRevieModal();
              }}
            >
              <i class="fas fa-chevron-left"></i>
            </div>
            <div className="flightReviewModalHeaderTitle"> Flight Review</div>
          </div>
          <div className="flightReviewModalFlightTitleContainer">
            <div
              className={`flightReviewModalFlightTitle ${
                onwardSelect ? "selected" : null
              } `}
              onClick={() => {
                setOnwardSelect(true);
                setReturnSelect(false);
              }}
            >
              Onward
            </div>

            <div
              className={`flightReviewModalFlightTitle    ${
                returnSelect ? "selected" : null
              }`}
              onClick={() => {
                setOnwardSelect(false);
                setReturnSelect(true);
              }}
            >
              Return
            </div>
          </div>

          <div className="flightReviewModalContent">
            <div className="flightReviewModalDetailsBlock">
              <div className="flightReviewModalCard">
                <div className="flightReviewModalCardHeader">
                  <div className="flightAirportCodes">
                    {depart.code} ~ {desti.code}
                  </div>
                  <div className="flightTravelClass">{cabinClass}</div>
                </div>

                <div className="flightReviewModalCardBody">
                  <div className="flightAirlineDescription">
                    <div className="flightAirlineLogo">
                      <img
                        className="flightAirlineLogoImgTag"
                        src={airlineLogo}
                        alt="logo"
                      />
                    </div>
                    <div className="flightAirlineName">Indigo | 6E 2086 </div>{" "}
                  </div>
                  <div className="flightItenarayBlock">
                    <div className="flightReviewModalDepartureDescription">
                      <div className="flightTime">{departTime1}</div>
                      <div className="flightDate">{`${departDate.dd.slice(
                        0,
                        3
                      )}, 
                    ${departDate.day} ${departDate.mm.slice(0, 3)} ${
                        departDate.year
                      }`}</div>
                      <div className="airportCity">{depart.city}</div>
                      <div className="flightAirportName">{depart.title}</div>
                      <div className="airportTerminal">Terminal 2</div>
                    </div>
                    <div className="flightReviewModalDuration">
                      <div className="flightDuration">2hrs 25mins</div>
                      <i class="far fa-clock"></i>
                    </div>
                    <div className="flightReviewModalDestinationDescription">
                      <div className="flightTime">{destiTime1}</div>
                      <div className="flightDate">{`${departDate.dd.slice(
                        0,
                        3
                      )}, ${departDate.day} ${departDate.mm.slice(0, 3)} ${
                        departDate.year
                      }`}</div>
                      <div className="airportCity">{desti.city}</div>
                      <div className="flightAirportName">{desti.title}</div>
                      <div className="airportTerminal">Terminal 1</div>
                    </div>
                  </div>
                </div>
                <div className="flightReviewModalPackages">
                  <div className="flightReviewModalPackagesTitle">
                    Select Services
                    <p className="flightReviewModalPackagesTitleParagraph">
                      Valid for your onward journey
                    </p>
                  </div>
                  {/* First package */}{" "}
                  <div className="offerPackage">
                    <div className="offerPackage1Header"> gosmart</div>
                    <div className="offerPackageContent">
                      <div className="offerPackageServices">
                        {/*
                        <div className="offerPackageService">
                          <div className="offerPackageServiceTitle">
                            <div className="offerPackageServiceIcon">
                              <i class="fas fa-briefcase"></i>
                            </div>
                            <div className="offerPackageServiceLabel">
                              Cabin bag
                            </div>
                          </div>
                        
                          <div className="offerPackageServiceDescription">
                            7 kgs
                          </div>
                        
                        </div>
                      <div className="offerPackageService">
                          <div className="offerPackageServiceTitle">
                            <div className="offerPackageServiceIcon">
                            
                              <i class="fas fa-suitcase-rolling"></i>
                            </div>
                            <div className="offerPackageServiceLabel">
                              Check-in
                            </div>
                          </div>
                          <div className="offerPackageServiceDescription">
                            15 kgs
                          </div>
                        </div>*/}
                        <div className="offerPackageService">
                          <div className="offerPackageServiceTitle">
                            <div className="offerPackageServiceIcon">
                              <i class="fas fa-undo"></i>
                            </div>
                            <div className="offerPackageServiceLabel">
                              Cancellation
                            </div>
                          </div>
                          <div className="offerPackageServiceDescription">
                            Cancellation fee applicatble
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Second package */}{" "}
                  <div className="offerPackage">
                    <div className="offerPackage1Header"> GoFlexi</div>
                    <div className="offerPackageContent">
                      <div className="offerPackageServices">
                        {/* 
                        <div className="offerPackageService">
                          <div className="offerPackageServiceTitle">
                            <div className="offerPackageServiceIcon">
                              <i class="fas fa-briefcase"></i>
                            </div>
                            <div className="offerPackageServiceLabel">
                              Cabin bag
                            </div>
                          </div>
                          <div className="offerPackageServiceDescription">
                            7 kgs
                          </div>
                        </div>
                        <div className="offerPackageService">
                          <div className="offerPackageServiceTitle">
                            <div className="offerPackageServiceIcon">
                              <i class="fas fa-suitcase-rolling"></i>
                            </div>
                            <div className="offerPackageServiceLabel">
                              Check-in
                            </div>
                          </div>
                          <div className="offerPackageServiceDescription">
                            15 kgs
                          </div>
                        </div>*/}
                        <div className="offerPackageService">
                          <div className="offerPackageServiceTitle">
                            <div className="offerPackageServiceIcon">
                              <i class="fas fa-undo"></i>
                            </div>
                            <div className="offerPackageServiceLabel">
                              Cancellation
                            </div>
                          </div>
                          <div className="offerPackageServiceDescription">
                            Cancellation fee applicable
                          </div>
                        </div>
                        <div className="offerPackageService">
                          <div className="offerPackageServiceTitle">
                            <div className="offerPackageServiceIcon">
                              <i class="fas fa-calendar"></i>
                            </div>
                            <div className="offerPackageServiceLabel">
                              Date Change
                            </div>
                          </div>
                          <div className="offerPackageServiceDescription">
                            Date change fee applicable
                          </div>
                        </div>
                        <div className="offerPackageService">
                          <div className="offerPackageServiceTitle">
                            <div className="offerPackageServiceIcon">
                              <img
                                className="offerPackageServiceIconSeatSvg"
                                src={seat}
                                alt="seat"
                              />
                            </div>
                            <div className="offerPackageServiceLabel">Seat</div>
                          </div>
                          <div className="offerPackageServiceDescription">
                            Chargeable
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Element name="returnTrip" className="element">
                <div className="flightReviewModalCard" id="return-journey">
                  <div className="flightReviewModalCardHeader">
                    <div className="flightAirportCodes">
                      {desti.code} ~ {depart.code}
                    </div>
                    <div className="flightTravelClass">{cabinClass}</div>
                  </div>

                  <div className="flightReviewModalCardBody">
                    <div className="flightAirlineDescription">
                      <div className="flightAirlineLogo">
                        <img
                          className="flightAirlineLogoImgTag"
                          src={airlineLogo}
                          alt="logo"
                        />
                      </div>
                      <div className="flightAirlineName">Indigo | 6E 2086 </div>
                    </div>
                    <div className="flightItenarayBlock">
                      <div className="flightReviewModalDepartureDescription">
                        <div className="flightTime">{departTime2}</div>
                        <div className="flightDate">{`${returnDate.dd.slice(
                          0,
                          3
                        )}, 
                    ${returnDate.day} ${returnDate.mm.slice(0, 3)} ${
                          returnDate.year
                        }`}</div>
                        <div className="airportCity">{desti.city}</div>
                        <div className="flightAirportName">{desti.title}</div>
                        <div className="airportTerminal">Terminal 1</div>
                      </div>
                      <div className="flightReviewModalDuration">
                        <div className="flightDuration">2hrs 25mins</div>
                        <i class="far fa-clock"></i>
                      </div>
                      <div className="flightReviewModalDestinationDescription">
                        <div className="flightTime">{destiTime2}</div>
                        <div className="flightDate">{`${returnDate.dd.slice(
                          0,
                          3
                        )}, ${returnDate.day} ${returnDate.mm.slice(0, 3)} ${
                          returnDate.year
                        }`}</div>
                        <div className="airportCity">{depart.city}</div>
                        <div className="flightAirportName">{depart.title}</div>
                        <div className="airportTerminal">Terminal 2</div>
                      </div>
                    </div>
                    <div className="flightReviewModalPackages">
                      <div className="flightReviewModalPackagesTitle">
                        Select Services
                        <p className="flightReviewModalPackagesTitleParagraph">
                          Valid for your onward journey
                        </p>
                      </div>
                      {/* First package */}{" "}
                      <div className="offerPackage">
                        <div className="offerPackage1Header"> gosmart</div>
                        <div className="offerPackageContent">
                          <div className="offerPackageServices">
                            {/*
                            <div className="offerPackageService">
                              <div className="offerPackageServiceTitle">
                                <div className="offerPackageServiceIcon">
                                  <i class="fas fa-briefcase"></i>
                                </div>
                                <div className="offerPackageServiceLabel">
                                  Cabin bag
                                </div>
                              </div>
                              <div className="offerPackageServiceDescription">
                                7 kgs
                              </div>
                            </div>
                            <div className="offerPackageService">
                              <div className="offerPackageServiceTitle">
                                <div className="offerPackageServiceIcon">
                                  <i class="fas fa-suitcase-rolling"></i>
                                </div>
                                <div className="offerPackageServiceLabel">
                                  Check-in
                                </div>
                              </div>
                              <div className="offerPackageServiceDescription">
                                15 kgs
                              </div>
                            </div> */}
                            <div className="offerPackageService">
                              <div className="offerPackageServiceTitle">
                                <div className="offerPackageServiceIcon">
                                  <i class="fas fa-undo"></i>
                                </div>
                                <div className="offerPackageServiceLabel">
                                  Cancellation
                                </div>
                              </div>
                              <div className="offerPackageServiceDescription">
                                Cancellation fee applicable
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Second package */}{" "}
                      <div className="offerPackage">
                        <div className="offerPackage1Header"> GoFlexi</div>
                        <div className="offerPackageContent">
                          <div className="offerPackageServices">
                            {/*
                            <div className="offerPackageService">
                              <div className="offerPackageServiceTitle">
                                <div className="offerPackageServiceIcon">
                                  <i class="fas fa-briefcase"></i>
                                </div>
                                <div className="offerPackageServiceLabel">
                                  Cabin bag
                                </div>
                              </div>
                              <div className="offerPackageServiceDescription">
                                7 kgs
                              </div>
                            </div>
                            <div className="offerPackageService">
                              <div className="offerPackageServiceTitle">
                                <div className="offerPackageServiceIcon">
                                  <i class="fas fa-suitcase-rolling"></i>
                                </div>
                                <div className="offerPackageServiceLabel">
                                  Check-in
                                </div>
                              </div>
                              <div className="offerPackageServiceDescription">
                                15 kgs
                              </div>
                            </div>*/}
                            <div className="offerPackageService">
                              <div className="offerPackageServiceTitle">
                                <div className="offerPackageServiceIcon">
                                  <i class="fas fa-undo"></i>
                                </div>
                                <div className="offerPackageServiceLabel">
                                  Cancellation
                                </div>
                              </div>
                              <div className="offerPackageServiceDescription">
                                Cancellation fee applicable
                              </div>
                            </div>
                            <div className="offerPackageService">
                              <div className="offerPackageServiceTitle">
                                <div className="offerPackageServiceIcon">
                                  <i class="fas fa-calendar"></i>
                                </div>
                                <div className="offerPackageServiceLabel">
                                  Date Change
                                </div>
                              </div>
                              <div className="offerPackageServiceDescription">
                                Date change fee applicable
                              </div>
                            </div>
                            <div className="offerPackageService">
                              <div className="offerPackageServiceTitle">
                                <div className="offerPackageServiceIcon">
                                  <img
                                    className="offerPackageServiceIconSeatSvg"
                                    src={seat}
                                    alt="seat"
                                  />
                                </div>
                                <div className="offerPackageServiceLabel">
                                  Seat
                                </div>
                              </div>
                              <div className="offerPackageServiceDescription">
                                Chargeable
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Element>
            </div>
          </div>
        </div>
      </Slide>
    </>,
    document.getElementById("portal4")
  );
};

export default FlightReviewModal;
