import React, { useState } from "react";
import "./BillingAndContactForm.css";
import Bookingsetup from "./Booknowcomponent";
import { Country, State, City }  from 'country-state-city';
const BillingAndContactForm = () => {

  const countries = Country.getAllCountries();
  const [countryDetails, setcountryDetails] = React.useState();
  const [countryCode, setcountryCode] = React.useState();
  const [selectedCountry, setSelectedCountry] = React.useState();

  const [userRegistration, setUserRegistration] = useState({
    country: "",
    address: "",
    zip: "",
    city: "",
    state: "",
    phone: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({
      ...userRegistration,
      [name]: value,
    });
  };

  const [err, setErr] = useState({
    errCountry: "",
    errAddress: "",
    errZip: "",
    errCity: "",
    errState: "",
    errPhone: "",
  });

  const [outline, setOutline] = useState({
    outlineCountry: "",
    outlineAddress: "",
    outlineZip: "",
    outlineState: "",
    outlinePhone: "",
  });

  /*------------------------------------CountryValidation----------------------------------*/

  const validateCountry = (travellerCountry) => {
    if (travellerCountry === "") {
      setErr((prev) => {
        return { ...prev, errCountry: "Please enter  Country" };
      });
    } else {
      setErr((prev) => {
        return { ...prev, errCountry: "" };
      });
    }
  };

  /*------------------------------------AddressValidation-----------------------------------*/
  const validateAddressRegex = (val) => {
    const AddressRegex = "\\d+\\s+([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)";
    var val = AddressRegex.test(String(val));

    if (val === "") {
      setErr((prev) => {
        return {
          ...prev,
          errAddress: "Please Enter your address",
        };
      });
    } else {
      setErr((prev) => {
        return {
          ...prev,
          errAddress: "",
        };
      });
    }
  };

  const validateAddress = (travellerAddress) => {
    if (travellerAddress === "") {
      setErr((prev) => {
        return { ...prev, errAddress: "Please enter  address" };
      });
    } else {
      setErr((prev) => {
        return { ...prev, errAddress: "" };
      });
    }
  };

  /*-----------------------------------------zipValidation---------------------------------------------------------*/

  const validateZip = (travellerZip) => {
    if (travellerZip === "") {
      setErr((prev) => {
        return { ...prev, errZip: "Please enter  Zip" };
      });
    } else if (travellerZip.length != 5) {
      setErr((prev) => {
        return { ...prev, errZip: "Please enter valid  ZipCode" };
      });
    } else {
      setErr((prev) => {
        return { ...prev, errZip: "" };
      });
    }
  };

  /*------------------------------------------CityValidation-------------------------------------------*/
  const validateCity = (travellerCity) => {
    if (travellerCity === "") {
      setErr((prev) => {
        return { ...prev, errCity: "Please enter City" };
      });
    } else {
      setErr((prev) => {
        return { ...prev, errCity: "" };
      });
    }
  };

  /*------------------------------------------CityValidation-------------------------------------------*/
  const validateState = (travellerState) => {
    if (travellerState === "") {
      setErr((prev) => {
        return { ...prev, errState: "Please enter State" };
      });
    } else {
      setErr((prev) => {
        return { ...prev, errState: "" };
      });
    }
  };

  /*---------------------------------------------PhoneValidation-----------------------------------------*/
  const validatePhone = (travellerPhone) => {
    if (travellerPhone.length != 11) {
      setErr((prev) => {
        return { ...prev, errPhone: "Please enter valid Phone Number" };
      });
    } else {
      setErr((prev) => {
        return { ...prev, errPhone: "" };
      });
    }
  };

  

  return (
    <>
      <div className="mainContainer">
        <div className="headingTextContainer">
          Billing And Contact Information
        </div>
        <div className="formElement">
          <form>
            <div className="countrySectionWrapper">
              <div
                className={`countrySection ${
                  outline.outlineCountry === "country" ? "Selected" : null
                } ${err.errCountry ? "error" : null} `}
              >
                <select
                  autoComplete="none"
                  value={userRegistration.country}
                  onChange={(e) => {
                    setUserRegistration({ country: e.target.value });
                    validateCountry(e.target.value);
                    setcountryCode(e.target.value);
                    setSelectedCountry(Country.getCountryByCode(countryCode).name);
                  }}
                  placeholder="Country"
                  name="country"
                  id="country"
                  onFocus={() => {
                    setOutline((prev) => {
                      return {
                        ...prev,
                        outlineCountry: "country",
                      };
                    });
                  }}
                  onBlur={(e) => {
                    setOutline((prev) => {
                      return {
                        ...prev,
                        outlineCountry: "",
                      };
                    });
                    validateCountry(e.target.value);
                  }}>
                    <option>--Choose Country--</option>
                    {countries.map((value, key) => {
                      return (
                        <option value={value.isoCode}>
                          {value.name}
                          
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="errMessage">
                {err.errCountry ? err.errCountry : ""}
              </div>
            </div>
            <div className="addressSectionWrapper">
              <div
                className={`addressSection ${
                  outline.outlineAddress === "address" ? "Selected" : null
                } ${err.errAddress ? "error" : null} `}
              >
                <input
                  type="text"
                  autoComplete="none"
                  placeholder="  *Address"
                  name="address"
                  id="address"
                  value={userRegistration.address}
                  onFocus={() => {
                    setOutline((prev) => {
                      return {
                        ...prev,
                        outlineAddress: "address",
                      };
                    });
                  }}
                  onChange={(e) => {
                    setUserRegistration({ address: e.target.value });
                    validateAddress(e.target.value);
                  }}
                  onBlur={(e) => {
                    setOutline((prev) => {
                      return {
                        ...prev,
                        outlineAddress: "",
                      };
                    });
                    validateAddress(e.target.value);
                  }}
                />
              </div>
              <div className="errMessage">
                {err.errAddress ? err.errAddress : ""}
              </div>
            </div>

            <div className="zipSectionWrapper">
              <div
                className={`zipSection ${
                  outline.outlineZip === "zip" ? "Selected" : null
                } ${err.errZip ? "error" : null} `}
              >
                <input
                  type="number"
                  autoComplete="off"
                  placeholder="  *Zip"
                  maxlength="11"
                  value={userRegistration.zip}
                  onChange={(e) => {
                    setUserRegistration({ zip: e.target.value });
                    validateZip(e.target.value);
                  }}
                  name="zip"
                  id="zip"
                  onFocus={() => {
                    setOutline((prev) => {
                      return {
                        ...prev,
                        outlineZip: "zip",
                      };
                    });
                  }}
                  onBlur={(e) => {
                    setOutline((prev) => {
                      return {
                        ...prev,
                        outlineZip: "",
                      };
                    });
                    validateZip(e.target.value);
                  }}
                />
              </div>
              <div className="errMessage">{err.errZip ? err.errZip : ""}</div>
            </div>

            <div className="citySectionWrapper">
              <div
                className={`citySection ${
                  outline.outlineCity === "city" ? "Selected" : null
                } ${err.errCity ? "error" : null} `}
              >
                <input
                  type="text"
                  autoComplete="none"
                  placeholder="  *City"
                  value={userRegistration.city}
                  onChange={(e) => {
                    setUserRegistration({ city: e.target.value });
                    validateCity(e.target.value);
                  }}
                  name="city"
                  id="city"
                  onFocus={() => {
                    setOutline((prev) => {
                      return {
                        ...prev,
                        outlineCity: "city",
                      };
                    });
                  }}
                  onBlur={(e) => {
                    setOutline((prev) => {
                      return {
                        ...prev,
                        outlineCity: "",
                      };
                    });
                    validateCity(e.target.value);
                  }}
                />
                <div className="errMessage">
                  {err.errCity ? err.errCity : ""}
                </div>
              </div>
            </div>

            <div className="stateSectionWrapper">
              <div
                className={`stateSection ${
                  outline.outlineState === "state" ? "Selected" : null
                } ${err.errState ? "error" : null} `}
              >
                <input
                  type="text"
                  autoComplete="none"
                  placeholder="  *State"
                  value={userRegistration.state}
                  onChange={(e) => {
                    setUserRegistration({ state: e.target.value });
                    validateState(e.target.value);
                  }}
                  name="state"
                  id="state"
                  onFocus={() => {
                    setOutline((prev) => {
                      return {
                        ...prev,
                        outlineState: "state",
                      };
                    });
                  }}
                  onBlur={(e) => {
                    setOutline((prev) => {
                      return {
                        ...prev,
                        outlineState: "",
                      };
                    });
                    validateState(e.target.value);
                  }}
                />
                <div className="errMessage">
                  {err.errState ? err.errState : ""}
                </div>
              </div>
            </div>

            <div className="phoneSectionWrapper">
              <div
                className={`phoneSection ${
                  outline.outlinePhone === "phone" ? "Selected" : null
                } ${err.errPhone ? "error" : null} `}
              >
                <input
                  type="number"
                  autoComplete="off"
                  placeholder="  *Phone Number"
                  value={userRegistration.phone}
                  onChange={(e) => {
                    setUserRegistration({ phone: e.target.value });
                    validatePhone(e.target.value);
                  }}
                  name="phone"
                  id="phone"
                  onFocus={() => {
                    setOutline((prev) => {
                      return {
                        ...prev,
                        outlinePhone: "phone",
                      };
                    });
                  }}
                  onBlur={(e) => {
                    setOutline((prev) => {
                      return {
                        ...prev,
                        outlinePhone: "",
                      };
                    });
                    validatePhone(e.target.value);
                  }}
                />
              </div>
              <div className="errMessage">
                {err.errPhone ? err.errPhone : ""}
              </div>
            </div>
          </form>
        </div>
      </div>
<Bookingsetup/>
    </>
  );
};

export default BillingAndContactForm;
