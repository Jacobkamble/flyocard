import React, { useState, useEffect } from "react";

import useClickOutside from "../../Utilities/useClickOutside";
import MonthDropDown from "../../Utilities/MonthDropDown";
import TitleSelectionDropDown from "../../Utilities/TitleSelectionDropDown";
import GenderSelectionDropDown from "../../Utilities/GenderSelectionDropDown";
import "./TravellerInfoInput.css";

import { setDobDay, setDobMonth } from "../../actions/PaymentAndBookingActions";
import { useSelector, useDispatch } from "react-redux";
import MyButton from "../../Utilities/Button";
import LoginRegisterModal from "../../Register-sign-in_sign-out/LoginRegisterModal";
import SignOutModal from "../../Register-sign-in_sign-out/SignOutModal";

const TravellerInfoInput = ({ travellerType, travellerNo }) => {

  const [openRegistersignInModal, setOpenRegistersignInModal] = useState(false);
  const [openSignOutModal, setOpenSignOutModal] = useState(false);
  const handleLoginBtn = () => {
    setOpenRegistersignInModal((prev) => !prev);
  };

  const dispatch = useDispatch();
  const DOB_DAY = useSelector((state) => state.PaymentAndBooking.DOB_Day);
  const [dropDown, setDropDown] = useState(false);
  const [dropDownTitle, setDropDownTitle] = useState(false);
  const [dropDownGender, setDropDownGender] = useState(false);

  const ref = useClickOutside(setDropDown);
  const refTitle = useClickOutside(setDropDownTitle);
  const refGender = useClickOutside(setDropDownGender);

  const [queryDobDay, setQueryDobDay] = useState("");
  const [queryDobYear, setQueryDobYear] = useState("");

  const [Outline, setOutLine] = useState({
    outlineFirstName: "",
    outlineMiddleName: "",
    outlineLastName: "",
    outlineEmail: "",
    outlineDob: "",
  });

  const [travellerEmail, setTravellerEmail] = useState("");
  const [emailPromo, setEmailPromo] = useState("");
  const [err, setErr] = useState({
    errTitle: "",
    errGender: "",
    errFirstName: "",
    errLastName: "",
    errEmail: "",
    errDobDay: "",
    errDobYear: "",
  });
  const [travellerName, setTravellerName] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
  });

  const [travellerDOB, setTravellerDOB] = useState({
    Month: "",
    Day: "",
    Year: "",
  });
  const [travellerTitle, setTravellerTitle] = useState();
  const [travellerGender, setTravellerGender] = useState();

  /*-------------------------- EMAIL VALIDATIONS----------------------------------------*/

  const validateEmailRegex = (val) => {
    const emailRgex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid = emailRgex.test(String(val).toLowerCase());

    if (!valid) {
      setErr((prev) => {
        return { ...prev, errEmail: "Please enter a valid email address" };
      });
    } else {
      setErr((prev) => {
        return { ...prev, errEmail: "" };
      });
    }
  };
  const validateEmail = (travellerEmail) => {
    if (travellerEmail === "") {
      setErr((prev) => {
        return { ...prev, errEmail: "Please enter email address" };
      });
    } else {
      setErr((prev) => {
        return { ...prev, errEmail: "" };
      });
    }
  };

  /*-------------------------- FIRST,MIDDLE,LAST NAME VALIDATIONS----------------------------------------*/

  const FirstNameValidation = (val) => {
    if (val === "") {
      setErr((prev) => {
        return { ...prev, errFirstName: "Please enter first name" };
      });
    } else {
      setErr((prev) => {
        return { ...prev, errFirstName: "" };
      });
    }
  };
  const LastNameValidation = (val) => {
    if (val === "") {
      setErr((prev) => {
        return { ...prev, errLastName: "Please enter last name" };
      });
    } else {
      setErr((prev) => {
        return { ...prev, errLastName: "" };
      });
    }
  };

  /*-------------------------- Dob DAY and YEAR VALIDATIONS----------------------------------------*/
  const sysDate = new Date();
  const currentYear = sysDate.getFullYear();

  useEffect(() => {
    const dobMonthValidation = () => {
      console.log(DOB_DAY);
      console.log(travellerDOB.Month);

      if (DOB_DAY > 30) {
        if (
          travellerDOB.Month === "February" ||
          travellerDOB.Month === "April" ||
          travellerDOB.Month === "June" ||
          travellerDOB.Month === "September" ||
          travellerDOB.Month === "November"
        ) {
          setErr((prev) => {
            return { ...prev, errDobDay: "Invalid date of birth" };
          });
          dispatch(setDobMonth(""));
        } else {
          setErr((prev) => {
            return { ...prev, errDobDay: "" };
          });
        }
      }
    };
    dobMonthValidation();
  }, [DOB_DAY, dispatch, travellerDOB.Month]);

  const dobDayValidation = (val) => {
    if (travellerDOB.Month && val) {
      if (val.length > 0 || val.length < 3) {
        if (travellerDOB.Month === "January") {
          if (val >= 32 || val <= 0) {
            setErr((prev) => {
              return { ...prev, errDobDay: "invalid date of birth" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: "" };
            });
          } else {
            setErr((prev) => {
              return { prev, errDobDay: "" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: val };
            });
          }
        }
        if (travellerDOB.Month === "February") {
          if (val >= 29 || val < 0) {
            setErr((prev) => {
              return { ...prev, errDobDay: "invalid date of birth" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: "" };
            });
          } else {
            setErr((prev) => {
              return { ...prev, errDobDay: "" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: val };
            });
          }
        }
        if (travellerDOB.Month === "March") {
          if (val >= 32 || val < 0) {
            setErr((prev) => {
              return {
                ...prev,
                errDobDay: "invalid date of birth",
              };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: "" };
            });
          } else {
            setErr((prev) => {
              return { ...prev, errDobDay: "" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: val };
            });
          }
        }
        if (travellerDOB.Month === "April") {
          if (val >= 31 || val < 0) {
            setErr((prev) => {
              return { ...prev, errDobDay: "invalid date of birth" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: "" };
            });
          } else {
            setErr((prev) => {
              return { ...prev, errDobDay: "" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: val };
            });
          }
        }
        if (travellerDOB.Month === "May") {
          if (val >= 32 || val < 0) {
            setErr((prev) => {
              return { ...prev, errDobDay: "invalid date of birth" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: "" };
            });
          } else {
            setErr((prev) => {
              return { ...prev, errDobDay: "" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: val };
            });
          }
        }
        if (travellerDOB.Month === "June") {
          if (val >= 31 || val < 0) {
            setErr((prev) => {
              return { ...prev, errDobDay: "invalid date of birth" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: "" };
            });
          } else {
            setErr((prev) => {
              return { ...prev, errDobDay: "" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: val };
            });
          }
        }
        if (travellerDOB.Month === "July") {
          if (val >= 32 || val < 0) {
            setErr((prev) => {
              return { ...prev, errDobDay: "invalid date of birth" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: "" };
            });
          } else {
            setErr((prev) => {
              return { ...prev, errDobDay: "" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: val };
            });
          }
        }
        if (travellerDOB.Month === "August") {
          if (val >= 31 || val < 0) {
            setErr((prev) => {
              return { ...prev, errDobDay: "invalid date of birth" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: "" };
            });
          } else {
            setErr((prev) => {
              return { ...prev, errDobDay: "" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: val };
            });
          }
        }
        if (travellerDOB.Month === "September") {
          if (val >= 32 || val < 0) {
            setErr((prev) => {
              return { ...prev, errDobDay: "invalid date of birth" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: "" };
            });
          } else {
            setErr((prev) => {
              return { ...prev, errDobDay: "" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: val };
            });
          }
        }
        if (travellerDOB.Month === "October") {
          if (val >= 31 || val < 0) {
            setErr((prev) => {
              return { ...prev, errDobDay: "invalid date of birth" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: "" };
            });
          } else {
            setErr((prev) => {
              return { ...prev, errDobDay: "" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: val };
            });
          }
        }
        if (travellerDOB.Month === "November") {
          if (val >= 31 || val < 0) {
            setErr((prev) => {
              return { ...prev, errDobDay: "invalid date of birth" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: "" };
            });
          } else {
            setErr((prev) => {
              return { ...prev, errDobDay: "" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: val };
            });
          }
        }
        if (travellerDOB.Month === "December") {
          if (val >= 32 || val < 0) {
            setErr((prev) => {
              return { ...prev, errDobDay: "invalid date of birth" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: "" };
            });
          } else {
            setErr((prev) => {
              return { ...prev, errDobDay: "" };
            });
            setTravellerDOB((prev) => {
              return { ...prev, Day: val };
            });
          }
        }
      }
    }
  };
  const dobYearValidation = (val) => {
    var valLength = val.length;
    if (valLength > 3 && valLength < 5) {
      if (travellerType === "Adult") {
        var ageDiff = currentYear - val;
        if (ageDiff < 16) {
          setErr((prev) => {
            return { ...prev, errDobYear: "invalid date of birth" };
          });
        } else {
          setErr((prev) => {
            return { ...prev, errDobYear: "" };
          });
          setTravellerDOB((prev) => {
            return { ...prev, Year: val };
          });
        }
      }
      if (travellerType === "Child") {
        var ageDiffChild = currentYear - val;
        if (ageDiffChild >= 16 || ageDiffChild < 3) {
          setErr((prev) => {
            return { ...prev, errDobYear: "invalid date of birth" };
          });
        } else {
          setErr((prev) => {
            return { ...prev, errDobYear: "" };
          });
          setTravellerDOB((prev) => {
            return { ...prev, Year: val };
          });
        }
      }
      if (travellerType === "Infant") {
        var ageDiffInfant = currentYear - val;
        if (ageDiffInfant <= 0 || ageDiffInfant > 2) {
          setErr((prev) => {
            return { ...prev, errDobYear: "invalid date of birth" };
          });
        } else {
          setErr((prev) => {
            return { ...prev, errDobYear: "" };
          });
          setTravellerDOB((prev) => {
            return { ...prev, Year: val };
          });
        }
      }
    } else {
      setErr((prev) => {
        return { ...prev, errDobYear: "Please enter a valid date" };
      });
    }
  };

  /*-------------------------- Border VALIDATIONS----------------------------------------*/
  const borderValidationFirstName = () => {
    if (err.errFirstName === "") {
      setOutLine({ outlineFirstName: "" });
    }
  };
  const borderMiddleName = () => {
    setOutLine({ outlineMiddleName: "" });
  };

  const borderValidationLastName = () => {
    if (err.errLastName === "") {
      setOutLine({ outlineLastName: "" });
    }
  };

  const borderValidationEmail = () => {
    if (err.errEmail === "") {
      setOutLine({ outlineEmail: "" });
    }
  };

  const borderValidationDob = () => {
    if (!err.errDobDay) {
      setOutLine({ outlineDob: "" });
    } else if (!err.errDobYear) {
      setOutLine({ outlineDob: "" });
    }
  };
  return (
    <div className="travellerInfoInputContainer">
      <div
        className={`travellerInfoInputHeaderContainer  ${
          travellerNo === 1 ? "Primary" : null
        }`}
      >
        <div className="travellerInfoInputHeader">Traveler Details</div>
        <div className="travellerInfoInputSignin">
          <div className="travellerInfoInputSigninTitle">Already a member?</div>
          <MyButton
            type="default"
            label="SignIn"
            padding=" 6px 20px 6px 20px"
            fontsize="16px"
            runAction={handleLoginBtn}
          />
        </div>
      </div>
        {openRegistersignInModal ? (
          <LoginRegisterModal
            closeModal={() => {
              setOpenRegistersignInModal(false);
            }}
          />
        ) : null}
        {openSignOutModal ? (
          <SignOutModal
            closeSignOutModal={() => {
              setOpenSignOutModal(false);
            }}
          />
        ) : null}
      <div
        className={`travellerInfoInputDetailsInstruction  ${
          travellerNo === 1 ? "Primary" : null
        }`}
      >
        Enter traveler name(s) and date(s) of birth exactly as shown on the
        passport or other government-issued photo ID to be used on this trip.
      </div>
      <div
        className={`travellerEmailContainerDesktop  ${
          travellerNo === 1 ? "Primary" : null
        }`}
      >
        {/* ----------------EMAIL INPUT FIELD---------------------------------------- */}
        <div className="travellerEmailWrapper">
          <div
            className={`travellerEmail  ${
              Outline.outlineEmail === "Email" ? "check" : null
            }  ${err.errEmail ? "Error" : null}   `}
          >
            <input
              type="text"
              placeholder="Email*"
              className="travellerInfoInputField"
              value={travellerEmail ? travellerEmail : ""}
              onChange={(e) => {
                setTravellerEmail(e.target.value);
                validateEmailRegex(e.target.value);
              }}
              onFocus={() => {
                setOutLine((prev) => {
                  return { ...prev, outlineEmail: "Email" };
                });
              }}
              onBlur={(e) => {
                validateEmail(e.target.value);
                validateEmailRegex(e.target.value);
                borderValidationEmail();
              }}
            />
          </div>
          <div className="travellerInfoerrMessage">{err.errEmail}</div>
        </div>

        <div className="travellerEmailPromoBanner">
          <div
            className={`emailPromoBannerCheck  ${
              emailPromo ? "Checked" : null
            }`}
            onClick={() => {
              setEmailPromo((prev) => !prev);
            }}
          >
            <div className="emailPromoBannerCheckIcon ">
              <i class="fas fa-check"></i>
            </div>
          </div>
          Send me the latest travel deals, special offers, coupons.
        </div>
      </div>
      <div className="travellerType">
        {travellerNo} {travellerType}
      </div>
      <div className="InfoInputContainer">
        {/* ----------------Title INPUT FIELD---------------------------------------- */}
        <div className="travellerTitleWrapper">
          <div className="inputSectionHeader">Title*</div>
          <div
            className={`travellerTitle  ${err.errTitle ? "Error" : null}`}
            onClick={() => {
              setDropDownTitle((prev) => !prev);
            }}
            ref={refTitle}
          >
            {travellerTitle ? travellerTitle : "Title*"}
            <div className="titleSelectionDropDown">
              <TitleSelectionDropDown
                open={dropDownTitle}
                setTitle={(val) => {
                  setTravellerTitle(val);
                }}
                Title={travellerTitle}
              />
            </div>
          </div>
        </div>
        {/* ----------------Gender INPUT FIELD---------------------------------------- */}
        <div className="travellerGenderWrapper">
          <div className="inputSectionHeader">Gender*</div>
          <div
            className={`travellerGender ${err.errTitle ? "Error" : null}`}
            onClick={() => {
              setDropDownGender((prev) => !prev);
            }}
            ref={refGender}
          >
            {travellerGender ? travellerGender : "Gender*"}
            <div className="genderSelectionDropDown">
              <GenderSelectionDropDown
                open={dropDownGender}
                setGender={(val) => {
                  setTravellerGender(val);
                }}
                gender={travellerGender}
              />
            </div>
          </div>
        </div>

        {/* ----------------FIRST NAME INPUT FIELD---------------------------------------- */}
        <div className="travellerNameWrapper">
          <div
            className={`travellerFirstName  ${
              Outline.outlineFirstName === "FirstName" ? "check" : null
            } ${err.errFirstName ? "Error" : null}`}
          >
            <input
              type="text"
              placeholder="First Name*"
              className="travellerInfoInputField"
              value={travellerName.FirstName ? travellerName.FirstName : null}
              onChange={(e) => {
                setTravellerName({ FirstName: e.target.value });
                FirstNameValidation(e.target.value);
              }}
              onFocus={() => {
                setOutLine((prev) => {
                  return { ...prev, outlineFirstName: "FirstName" };
                });
              }}
              onBlur={(e) => {
                FirstNameValidation(e.target.value);
                borderValidationFirstName();
              }}
            />
          </div>
          <div className="travellerInfoerrMessage">{err.errFirstName}</div>
        </div>
        {/* ----------------MIDDLE NAME INPUT FIELD---------------------------------------- */}
        <div className="travellerNameWrapper">
          <div
            className={`travellerMiddleName  ${
              Outline.outlineMiddleName === "MiddleName" ? "check" : null
            }`}
          >
            <input
              type="text"
              placeholder="Middle Name"
              className="travellerInfoInputField"
              value={travellerName.MiddleName ? travellerName.MiddleName : null}
              onFocus={() => {
                setOutLine((prev) => {
                  return { ...prev, outlineMiddleName: "MiddleName" };
                });
              }}
              onBlur={(e) => {
                setOutLine((prev) => {
                  return { ...prev, outlineMiddleName: "" };
                });
              }}
            />
          </div>
        </div>
        {/* ----------------LAST NAME INPUT FIELD---------------------------------------- */}
        <div className="travellerNameWrapper">
          <div
            className={`travellerLastName ${
              Outline.outlineLastName === "LastName" ? "check" : null
            } ${err.errLastName ? "Error" : null}`}
          >
            <input
              type="text"
              placeholder="Last Name*"
              className="travellerInfoInputField"
              value={travellerName.LastName ? travellerName.LastName : null}
              onChange={(e) => {
                setTravellerName({ LastName: e.target.value });
                LastNameValidation(e.target.value);
              }}
              onFocus={() => {
                setOutLine((prev) => {
                  return { ...prev, outlineLastName: "LastName" };
                });
              }}
              onBlur={(e) => {
                LastNameValidation(e.target.value);
                borderValidationLastName();
              }}
            />
          </div>
          <div className="travellerInfoerrMessage">{err.errLastName}</div>
        </div>
        {/* ----------------DOB INPUT FIELD---------------------------------------- */}
        <div className="travellerDateOfBirthContainer">
          <div className="inputSectionHeader">Date of Birth*</div>
          <div
            className={`travellerDateOfBirth ${
              Outline.outlineDob === "DOB" ? "check" : null
            }`}
          >
            <div
              className={`dateOfBirthMonth ${
                travellerDOB.Month ? "check" : null
              }`}
              onClick={() => {
                setDropDown((prev) => !prev);
              }}
              ref={ref}
            >
              {travellerDOB.Month ? travellerDOB.Month : "Month"}

              <div className="monthDropDownWrapper">
                <MonthDropDown
                  open={dropDown}
                  monthselection={travellerDOB.Month}
                  setMonthSelection={(val) => {
                    setTravellerDOB((prev) => {
                      return { prev, Month: val };
                    });
                  }}
                  DOB={travellerDOB}
                  setError={(val) => {
                    setErr((prev) => {
                      return { prev, errDobDay: val };
                    });
                  }}
                />
              </div>
            </div>
            <div
              className={`dateOfBirthDay ${Outline === "DD" ? "check" : null}`}
            >
              <input
                type="number"
                min="1"
                max="31"
                maxLength="2"
                placeholder="DD"
                className="travellerInfoInputFieldDOB"
                value={queryDobDay ? queryDobDay : null}
                onFocus={() => {
                  setOutLine((prev) => {
                    return { ...prev, outlineDob: "DOB" };
                  });
                }}
                onChange={(e) => {
                  setQueryDobDay(e.target.value);
                  dispatch(setDobDay(e.target.value));
                }}
                onBlur={(e) => {
                  dobDayValidation(queryDobDay);
                  borderValidationDob();
                }}
              />
            </div>
            <div
              className={`dateOfBirthYear ${
                travellerDOB.Year ? "check" : null
              }`}
            >
              <input
                type="number"
                min={1912}
                max={currentYear}
                maxLength="4"
                placeholder="YYYY"
                className="travellerInfoInputFieldDOB"
                value={queryDobYear ? queryDobYear : null}
                onFocus={() => {
                  setOutLine((prev) => {
                    return { ...prev, outlineDob: "DOB" };
                  });
                }}
                onChange={(e) => {
                  setQueryDobYear(e.target.value);
                }}
                onBlur={() => {
                  dobYearValidation(queryDobYear);
                  borderValidationDob();
                }}
              />
              {}
            </div>
          </div>
          <div className="travellerInfoerrMessage">
            {err.errDobYear
              ? err.errDobYear
              : err.errDobDay
              ? err.errDobDay
              : err.errDobYear && err.errDobDay
              ? err.errDobDay
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TravellerInfoInput;
