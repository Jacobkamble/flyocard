import React, { useState, useEffect } from "react";
import "./FlightSearch.css";
import { Link } from "react-router-dom";
import Flights from "../../Flights.json";

import FlightReviewModal from "./FlightReviewModal";
import SearchUpdateBlock from "../components/SearchUpdateBlock";
import Modal from "./Modal";
import FiltersModal from "./FiltersModal";
import Filters from "./Filters";
import { default as filter } from "../../images/filter.svg";
import { default as edit } from "../../images/edit.svg";
import FlightDetails from "./FlightDetails";
import SelectedFlightsDetails from "./SelectedFlightsDetails";
import SelectedFlightsDetailsDesktop from "./SelectedFlightsDetailsDesktop";
import PopularFilters from "./PopularFilters";
import AirlineFilters from "./AirlineFilters";
import MobileMenu from "../../Header/components/MobileMenu";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedTrip1DepartureFlightTime,
  setSelectedTrip1ArrivalFlightTime,
  setSelectedTrip2DepartureFlightTime,
  setSelectedTrip2ArrivalFlightTime,
  setSelectedTrip1FlightPrice,
  setSelectedTrip2FlightPrice,
  setSelectedFlightTotalPrice,
  setSelectedTrip1FlightId,
  setSelectedTrip2FlightId,
  setSelectedFlightUSDPrice,
} from "../../actions/SearchPageActions";
const FlightSearch = () => {
  const depAirport = useSelector((state) => state.Home.departure);
  const desAirport = useSelector((state) => state.Home.destination);
  const depDate = useSelector((state) => state.Home.departureDate);
  const desDate = useSelector((state) => state.Home.returnDate);
  const adultCount = useSelector((state) => state.Home.adultCount);
  const childrenCount = useSelector((state) => state.Home.childrenCount);
  const infantCount = useSelector((state) => state.Home.infantCount);
  const tripType = useSelector((state) => state.Home.radio);
  const trip1Id = useSelector((state) => state.SearchResult.trip1Id);
  const trip1DepartureTime = useSelector(
    (state) => state.SearchResult.trip1DepartureTime
  );
  const trip1ArrivalTime = useSelector(
    (state) => state.SearchResult.trip1ArrivalTime
  );
  const trip1Price = useSelector((state) => state.SearchResult.trip1Price);
  const trip2Id = useSelector((state) => state.SearchResult.trip2Id);
  const trip2DepartureTime = useSelector(
    (state) => state.SearchResult.trip2DepartureTime
  );
  const trip2ArrivalTime = useSelector(
    (state) => state.SearchResult.trip2ArrivalTime
  );
  const trip2Price = useSelector((state) => state.SearchResult.trip2Price);

  const totalPrice = useSelector((state) => state.SearchResult.totalPrice);
  const [selectedFlight, setSelectedFlight] = useState("");
  const [selectedReturnFlight, setSelectedReturnFlight] = useState("");
  const dispatch = useDispatch();
  if (childrenCount) {
    var childrenCountDisplay = ", " + childrenCount + " Child,";
  } else {
    childrenCountDisplay = "";
  }

  if (infantCount) {
    var infantCountDisplay = infantCount + " Infant";
  } else {
    infantCountDisplay = "";
  }
  const [checkBoxD, setCheckBoxD] = useState("");
  const [checkBoxR, setCheckBoxR] = useState("");

  const [openModal, SetOpenModal] = useState(false);
  const [checkForCalendarOpen, setcheckForCalendarOpen] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [selectDepDate, SetSelectDepDate] = useState(true);
  const [selectReturnDate, SetSelectReturnDate] = useState(false);
  const [openFlightReviewModal, SetOpenFlightReviewModal] = useState(false);
  const [popularFilterSelect, setPopularFilterSelect] = useState("Recommended");
  const [searchUpdateMenu, setSearchUpdateMenu] = useState(false);
  const handleModal = () => {
    SetOpenModal(false);
  };
  const handleFilters = () => {
    setOpenFilters(false);
  };
  const handleUpdateSearchBtn = () => {};
  useEffect(() => {
    var totalPrice = "";
    var TRIP1PRICE = parseInt(trip1Price);
    var TRIP2PRICE = parseInt(trip2Price);

    if (tripType === "twoway") {
      totalPrice = TRIP1PRICE + TRIP2PRICE;
      dispatch(setSelectedFlightTotalPrice(totalPrice));
    } else if (tripType === "oneway") {
      dispatch(setSelectedFlightTotalPrice(TRIP1PRICE));
    }
  }, [trip1Price, trip2Price, dispatch, tripType]);

  const handleBookBtn = () => {
    SetOpenFlightReviewModal(true);
  };
  const handleFlightReviewModal = () => {
    SetOpenFlightReviewModal(false);
  };

  return (
    <>
      <div className="UpdateSearchWrapper">
        <div className="editSearchBlockDesktop">
          <SearchUpdateBlock />
        </div>
        {openModal ? (
          <div className="modalOverLay" onClick={handleModal}></div>
        ) : null}
        <div className="UpdateSearchBlock">
          <div className="editSearchBlock">
            <Link to="/">
              <div className="backBtn">
                <i class="fas fa-chevron-left"></i>
              </div>
            </Link>
            <div className="tripDescriptionBlock">
              <div className="tripDescription">
                <div className="aiportName1">
                  <h1 className="cityNameH1">
                    {depAirport ? depAirport.city : "Select Departure"}
                  </h1>
                </div>
                <div className="svgContainer">
                  {tripType === "oneway" ? (
                    <i class="fas fa-arrow-right"></i>
                  ) : (
                    <i class="fas fa-exchange-alt"></i>
                  )}
                </div>
                <div className="airportName2">
                  <h1 className="cityNameH1">
                    {desAirport ? desAirport.city : "Select Destination"}
                  </h1>
                </div>
              </div>
              <div className="itineraryDates">
                {tripType !== "twoway" ? (
                  <div className="datesH1">
                    {depDate ? (
                      <div>
                        {" "}
                        {depDate.mm} , {depDate.day} '{depDate.year} &nbsp; |
                        &nbsp;
                      </div>
                    ) : null}
                  </div>
                ) : null}
                <div className="travelllerCountDisplay">
                  {adultCount} Adult
                  {childrenCountDisplay} {infantCountDisplay}
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div
              className="my-auto marg"
              onClick={() => SetOpenModal((prev) => !prev)}
            >
              <i class="fas fa-edit"></i>
              
            </div>
            <div className="my-auto marg">
              <i
                className="fas fa-filter"
                onClick={() => {
                  setOpenFilters(true);
                }}
              ></i>
            </div>
            <div className="my-auto">
              {searchUpdateMenu ? (
                <i
                  class="fas fa-times"
                  onClick={() => {
                    setSearchUpdateMenu((prev) => !prev);
                  }}
                ></i>
              ) : (
                <i
                  class="fas fa-bars"
                  onClick={() => {
                    setSearchUpdateMenu((prev) => !prev);
                  }}
                ></i>
              )}
            </div>
            </div>
            {selectDepDate ? (
              openFilters ? (
                <FiltersModal
                  closeFilerts={() => {
                    handleFilters();
                  }}
                  departure={depAirport}
                  destination={desAirport}
                />
              ) : null
            ) : null}
            {selectReturnDate ? (
              openFilters ? (
                <FiltersModal
                  closeFilerts={() => {
                    handleFilters();
                  }}
                  departure={desAirport}
                  destination={depAirport}
                />
              ) : null
            ) : null}
          </div>
          {searchUpdateMenu ? (
            <div className="searchResultMobileMenu">
              <MobileMenu
                closeMobileMenu={() => {
                  setSearchUpdateMenu(false);
                }}
              />
            </div>
          ) : (
            ""
          )}
        </div>

        {openModal ? (
          <div className="modalContainer">
            <Modal
              closeModal={() => {
                handleModal();
              }}
              show={openModal}
              handleBtnUpdate={(val) => {
                handleUpdateSearchBtn();
              }}
              CheckCalendarStatus={(CurrentCalendarState) => {
                setcheckForCalendarOpen(CurrentCalendarState);
              }}
            />
          </div>
        ) : null}

        {tripType === "twoway" || tripType === "oneway" ? (
          <div className="filter_FlightWrapper">
            <div className="filtersWrapper">
              <Filters dep={depAirport} des={desAirport} />
            </div>
            {tripType === "oneway" || tripType === "twoway" ? (
              <div className="FlightDetailsWrapperDesktop">
                {checkBoxD ? (
                  <div
                    className={`SelectedFlightStatusContainerDesktop ${
                      checkBoxD ? "open" : null
                    }`}
                  >
                    <SelectedFlightsDetailsDesktop
                      departureTime={trip1DepartureTime}
                      arrivalTime={trip1ArrivalTime}
                      price={trip1Price}
                      selectDepDate={selectDepDate}
                      selectReturnDate={selectReturnDate}
                      depAirport={depAirport}
                      desAirport={desAirport}
                      depDate={desDate}
                      desDate={desAirport}
                      tripType={tripType}
                      SetSelectReturnDate={(val) => {
                        SetSelectReturnDate(val);
                      }}
                      SetSelectDepDate={(val) => {
                        SetSelectDepDate(val);
                      }}
                      setCheckBoxD={(val) => {
                        setCheckBoxD(val);
                      }}
                      setCheckBoxR={(val) => {
                        setCheckBoxR(val);
                      }}
                      checkD={checkBoxD}
                      checkR={checkBoxR}
                    />
                  </div>
                ) : null}
                {checkBoxR ? (
                  <div
                    className={`SelectedFlightStatusContainerDesktop ${
                      checkBoxR ? "open" : null
                    }`}
                  >
                    <SelectedFlightsDetailsDesktop
                      departureTime={trip2DepartureTime}
                      arrivalTime={trip2ArrivalTime}
                      price={trip2Price}
                      selectDepDate={selectDepDate}
                      selectReturnDate={selectReturnDate}
                      depAirport={desAirport}
                      desAirport={depAirport}
                      depDate={desDate}
                      desDate={desAirport}
                      tripType={tripType}
                      SetSelectReturnDate={(val) => {
                        SetSelectReturnDate(val);
                      }}
                      SetSelectDepDate={(val) => {
                        SetSelectDepDate(val);
                      }}
                      setCheckBoxD={(val) => {
                        setCheckBoxD(val);
                      }}
                      setCheckBoxR={(val) => {
                        setCheckBoxR(val);
                      }}
                      checkD={checkBoxD}
                      checkR={checkBoxR}
                    />
                  </div>
                ) : null}

                <div className="FlightSearchDetailsContainerDesktop">
                  {checkBoxD === "" || !checkBoxR === "" ? (
                    <div className="airlineFilterContainerDesktop">
                      <AirlineFilters />
                    </div>
                  ) : (
                    ""
                  )}
                  {checkBoxD === "" && checkBoxR === "" ? (
                    <div className="popularFiltersDesktop">
                      <PopularFilters
                        selectedFilter={popularFilterSelect}
                        setSelectedFilter={(val) => {
                          setPopularFilterSelect(val);
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="FlightDetailsContainerDesktop">
                    {Flights.map((flight, index) => {
                      return (
                        <FlightDetails
                          selectedFlightId={trip1Id}
                          id={flight.id}
                          departure={flight.departure}
                          destination={flight.destination}
                          departureTime={flight.departureTime}
                          destinationTime={flight.arrivalTime}
                          flightPrice={flight.price}
                          idR={flight.idR}
                          departureR={flight.departureR}
                          destinationR={flight.destinationR}
                          departureTimeR={flight.departureTimeR}
                          destinationTimeR={flight.arrivalTimeR}
                          flightPriceR={flight.priceR}
                          Selection={(val) => {
                            dispatch(setSelectedTrip1FlightId(val));
                          }}
                          radioState={tripType}
                          setCheckForSelectD={(val) => {
                            setCheckBoxD(val);
                          }}
                          setCheckForSelectR={(val) => {
                            setCheckBoxR(val);
                          }}
                          checkBoxStateD={checkBoxD}
                          checkBoxStateR={checkBoxR}
                          displaySelectedFlightD={(
                            depTime,
                            desTime,
                            price,
                            id
                          ) => {
                            dispatch(setSelectedTrip1FlightId(id));
                            dispatch(
                              setSelectedTrip1DepartureFlightTime(depTime)
                            );
                            dispatch(
                              setSelectedTrip1ArrivalFlightTime(desTime)
                            );
                            dispatch(setSelectedTrip1FlightPrice(price));
                          }}
                          displaySelectedFlightR={(
                            idR,
                            depTimeR,
                            desTimeR,
                            priceR
                          ) => {
                            dispatch(setSelectedTrip2FlightId(idR));
                            dispatch(
                              setSelectedTrip2DepartureFlightTime(depTimeR)
                            );
                            dispatch(
                              setSelectedTrip2ArrivalFlightTime(desTimeR)
                            );
                            dispatch(setSelectedTrip2FlightPrice(priceR));
                          }}
                          selectedFlight={selectedFlight}
                          goToReturnSelection={() => {
                            SetSelectDepDate(false);
                            SetSelectReturnDate(true);
                          }}
                          setTotalTrip={(
                            depTime,
                            desTime,
                            price,
                            id,
                            idR,
                            depTimeR,
                            desTimeR,
                            priceR,
                            totalTripPrice,
                            usdPrice
                          ) => {
                            dispatch(setSelectedTrip1FlightId(id));
                            dispatch(
                              setSelectedTrip1DepartureFlightTime(depTime)
                            );
                            dispatch(
                              setSelectedTrip1ArrivalFlightTime(desTime)
                            );
                            dispatch(setSelectedTrip1FlightPrice(price));
                            dispatch(setSelectedTrip2FlightId(idR));
                            dispatch(
                              setSelectedTrip2DepartureFlightTime(depTimeR)
                            );
                            dispatch(
                              setSelectedTrip2ArrivalFlightTime(desTimeR)
                            );
                            dispatch(setSelectedTrip2FlightPrice(priceR));
                            dispatch(
                              setSelectedFlightTotalPrice(totalTripPrice)
                            );
                            dispatch(setSelectedFlightUSDPrice(usdPrice));
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="departureFlightDetailsContainerDesktopOneway">
                {Flights.map((flight, index) => {
                  return (
                    <FlightDetails
                      selectedFlightId={trip1Id}
                      id={flight.id}
                      departure={flight.departure}
                      destination={flight.destination}
                      departureTime={flight.departureTime}
                      destinationTime={flight.arrivalTime}
                      flightPrice={flight.price}
                      Selection={(val) => {
                        dispatch(setSelectedTrip1FlightId(val));
                      }}
                      radioState={tripType}
                      displaySelectedFlight={(depTime, desTime, price, id) => {
                        dispatch(setSelectedTrip1FlightId(id));
                        dispatch(setSelectedTrip1DepartureFlightTime(depTime));
                        dispatch(setSelectedTrip1ArrivalFlightTime(desTime));
                        dispatch(setSelectedTrip1FlightPrice(price));
                      }}
                      selectedFlight={selectedFlight}
                      setTotalTrip={(
                        depTime,
                        desTime,
                        price,
                        id,
                        totalTripPrice,
                        usdPrice
                      ) => {
                        dispatch(setSelectedTrip1FlightId(id));
                        dispatch(setSelectedTrip1DepartureFlightTime(depTime));
                        dispatch(setSelectedTrip1ArrivalFlightTime(desTime));
                        dispatch(setSelectedTrip1FlightPrice(price));
                        dispatch(setSelectedTrip2FlightId(""));
                        dispatch(setSelectedTrip2DepartureFlightTime(""));
                        dispatch(setSelectedTrip2ArrivalFlightTime(""));
                        dispatch(setSelectedTrip2FlightPrice(""));
                        dispatch(setSelectedFlightTotalPrice(totalTripPrice));
                        dispatch(setSelectedFlightUSDPrice(usdPrice));
                      }}
                    />
                  );
                })}
              </div>
            )}

            {selectDepDate ? (
              <div
                className={`departureFlightDetailsContainer ${
                  checkBoxD || checkBoxR ? "check" : null
                }`}
              >
                {" "}
                {checkBoxD === "" && checkBoxR === "" ? (
                  <div className="popularFiltersMedia">
                    {" "}
                    <PopularFilters
                      selectedFilter={popularFilterSelect}
                      setSelectedFilter={(val) => {
                        setPopularFilterSelect(val);
                      }}
                    />{" "}
                  </div>
                ) : null}
                {checkBoxD ? (
                  <div
                    className={`SelectedFlightStatusContainer ${
                      checkBoxD ? "open" : null
                    }`}
                  >
                    {" "}
                    <SelectedFlightsDetails
                      departureTime={trip1DepartureTime}
                      arrivalTime={trip1ArrivalTime}
                      price={trip1Price}
                      selectDepDate={selectDepDate}
                      selectReturnDate={selectReturnDate}
                      depAirport={desAirport}
                      desAirport={depAirport}
                      depDate={desDate}
                      desDate={desAirport}
                      tripType={tripType}
                      SetSelectReturnDate={(val) => {
                        SetSelectReturnDate(val);
                      }}
                      SetSelectDepDate={(val) => {
                        SetSelectDepDate(val);
                      }}
                      setCheckBoxD={(val) => {
                        setCheckBoxD(val);
                      }}
                      setCheckBoxR={(val) => {
                        setCheckBoxR(val);
                      }}
                      checkD={checkBoxD}
                      checkR={checkBoxR}
                    />
                  </div>
                ) : null}
                {checkBoxR ? (
                  <div
                    className={`SelectedFlightStatusContainer ${
                      checkBoxR ? "open" : null
                    }`}
                  >
                    <SelectedFlightsDetails
                      departureTime={trip2DepartureTime}
                      arrivalTime={trip2ArrivalTime}
                      price={trip2Price}
                      selectDepDate={selectDepDate}
                      selectReturnDate={selectReturnDate}
                      depAirport={desAirport}
                      desAirport={depAirport}
                      depDate={desDate}
                      desDate={desAirport}
                      tripType={tripType}
                      SetSelectReturnDate={(val) => {
                        SetSelectReturnDate(val);
                      }}
                      SetSelectDepDate={(val) => {
                        SetSelectDepDate(val);
                      }}
                      setCheckBoxD={(val) => {
                        setCheckBoxD(val);
                      }}
                      setCheckBoxR={(val) => {
                        setCheckBoxR(val);
                      }}
                      checkD={checkBoxD}
                      checkR={checkBoxR}
                    />
                  </div>
                ) : null}
                {Flights.map((flight, index) => {
                  return (
                    <FlightDetails
                      selectedFlightId={trip1Id}
                      id={flight.id}
                      departure={flight.departure}
                      destination={flight.destination}
                      departureTime={flight.departureTime}
                      destinationTime={flight.arrivalTime}
                      flightPrice={flight.price}
                      idR={flight.idR}
                      departureR={flight.departureR}
                      destinationR={flight.destinationR}
                      departureTimeR={flight.departureTimeR}
                      destinationTimeR={flight.arrivalTimeR}
                      flightPriceR={flight.priceR}
                      Selection={(val) => {
                        dispatch(setSelectedTrip1FlightId(val));
                      }}
                      radioState={tripType}
                      setCheckForSelectD={(val) => {
                        setCheckBoxD(val);
                      }}
                      setCheckForSelectR={(val) => {
                        setCheckBoxR(val);
                      }}
                      checkBoxStateD={checkBoxD}
                      checkBoxStateR={checkBoxR}
                      displaySelectedFlightD={(depTime, desTime, price, id) => {
                        dispatch(setSelectedTrip1FlightId(id));
                        dispatch(setSelectedTrip1DepartureFlightTime(depTime));
                        dispatch(setSelectedTrip1ArrivalFlightTime(desTime));
                        dispatch(setSelectedTrip1FlightPrice(price));
                      }}
                      displaySelectedFlightR={(
                        idR,
                        depTimeR,
                        desTimeR,
                        priceR
                      ) => {
                        dispatch(setSelectedTrip2FlightId(idR));
                        dispatch(setSelectedTrip2DepartureFlightTime(depTimeR));
                        dispatch(setSelectedTrip2ArrivalFlightTime(desTimeR));
                        dispatch(setSelectedTrip2FlightPrice(priceR));
                      }}
                      selectedFlight={selectedFlight}
                      goToReturnSelection={() => {
                        SetSelectDepDate(false);
                        SetSelectReturnDate(true);
                      }}
                      setTotalTrip={(
                        depTime,
                        desTime,
                        price,
                        id,
                        idR,
                        depTimeR,
                        desTimeR,
                        priceR,
                        totalTripPrice,
                        usdPrice
                      ) => {
                        dispatch(setSelectedTrip1FlightId(id));
                        dispatch(setSelectedTrip1DepartureFlightTime(depTime));
                        dispatch(setSelectedTrip1ArrivalFlightTime(desTime));
                        dispatch(setSelectedTrip1FlightPrice(price));
                        dispatch(setSelectedTrip2FlightId(idR));
                        dispatch(setSelectedTrip2DepartureFlightTime(depTimeR));
                        dispatch(setSelectedTrip2ArrivalFlightTime(desTimeR));
                        dispatch(setSelectedTrip2FlightPrice(priceR));
                        dispatch(setSelectedFlightTotalPrice(totalTripPrice));
                        dispatch(setSelectedFlightUSDPrice(usdPrice));
                      }}
                    />
                  );
                })}
              </div>
            ) : null}
            {openFlightReviewModal ? (
              <div className="flightReviewModalContainer">
                <FlightReviewModal
                  closeFlightRevieModal={() => {
                    handleFlightReviewModal();
                  }}
                />
              </div>
            ) : null}
          </div>
        ) : (
          <div className="multicityCallusBlock">
            <div className="multicityCallusTitle">
              Call Us at 1800-FlyOkart For Multicity Bookings
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FlightSearch;
