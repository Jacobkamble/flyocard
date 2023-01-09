import React, { useState } from "react";
import "./CardInfoInput.css";
import Img from './wallet.png'
import ExpiryMonthDropdown from "../../Utilities/ExpiryMonthDropdown";
import ExpiryYearDropdown from "../../Utilities/ExpiryYearDropdown";
import { default as carte_blanche } from "../../images/carte_blanche_logo.svg";

const CardInfoInput = () => {
  const [dropdownMonth, setDropdownMonth] = useState(false);
  const [dropdownYear, setDropdownYear] = useState(false);
  const [Outline, setOutLine] = useState({
    outLineCardNumber: "",
    outlineNameOnCard: "",
    outlineExpiryMonth: "",
    outlineExpiryYear: "",
    outlineCardCvv: "",
  });
  const [err, setErr] = useState({
    errCardNumber: "",
    errNameOnCard: "",
    errExpiryMonth: "",
    errExpiryYear: "",
    errCardCvv: "",
  });
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    nameOnCard: "",
    expiryMonth: "",
    expiryYear: "",
    cardCvv: "",
    cardCompany: "",
  });

  const setOnlyNumbers = (e) => {
    var ch = String.fromCharCode(e.which);
    if (!/[0-9]/.test(ch)) {
      e.preventDefault();
    }
  };

  /*-------------------------- Border VALIDATIONS----------------------------------------*/
  const borderValidationCardNumber = () => {
    if (err.errCardNumber === "") {
      setOutLine({ outLineCardNumber: "" });
    }
  };

  const borderValidationNameOnCard = () => {
    if (err.errNameOnCard === "") {
      setOutLine({ outlineNameOnCard: "" });
    }
  };

  const borderValidationCardCvv = () => {
    if (err.errCardCvv === "") {
      setOutLine({ outlineCardCvv: "" });
    }
  };

  const borderValidationCardExpiry = () => {
    if (err.errExpiryMonth === "" && err.errExpiryYear === "") {
      setOutLine({ outlineExpiryMonth: "", outlineExpiryYear: "" });
    }
  };

  /*-------------------------- CARD COMPANY VALIDATION----------------------------------------*/

  const setCardCompany = (val) => {
    var cardNoLength = val.length;
    if (cardNoLength > 0) {
      var slicedVal = val.slice(0, 1);

      if (slicedVal === "3") {
        setCardInfo((prev) => {
          return { ...prev, cardCompany: "amex" };
        });
      }
      if (slicedVal === "4") {
        setCardInfo((prev) => {
          return { ...prev, cardCompany: "visa" };
        });
      }
      if (slicedVal === "5") {
        setCardInfo((prev) => {
          return { ...prev, cardCompany: "mastercard" };
        });
      }
      if (slicedVal === "6") {
        setCardInfo((prev) => {
          return { ...prev, cardCompany: "discover" };
        });
      }
    } else {
      setCardInfo((prev) => {
        return { ...prev, cardCompany: "" };
      });
    }

    if (cardNoLength > 1) {
      var slicedVal2 = val.slice(0, 2);
      if (slicedVal2 === "34") {
        setCardInfo((prev) => {
          return { ...prev, cardCompany: "amex" };
        });
      }
      if (slicedVal2 === "37") {
        setCardInfo((prev) => {
          return { ...prev, cardCompany: "amex" };
        });
      }
      if (slicedVal2 === "36") {
        setCardInfo((prev) => {
          return { ...prev, cardCompany: "diners-club" };
        });
      }
      if (slicedVal2 === "30") {
        setCardInfo((prev) => {
          return { ...prev, cardCompany: "carteblanche" };
        });
      }
      if (slicedVal2 === "38") {
        setCardInfo((prev) => {
          return { ...prev, cardCompany: "diners-club" };
        });
      }
    }
  };
  /*-------------------------- CARD NUMBER VALIDATION----------------------------------------*/
  const setCardNumberError = (val) => {
    var cardNoLength = val.length;
    if (cardNoLength > 0) {
      var slicedVal = val.slice(0, 1);

      if (
        slicedVal === "1" ||
        slicedVal === "2" ||
        slicedVal === "7" ||
        slicedVal === "8" ||
        slicedVal === "9"
      ) {
        setErr((prev) => {
          return { ...prev, errCardNumber: "Please enter a valid card number" };
        });
      }
    } else {
      setErr((prev) => {
        return { ...prev, errCardNumber: "" };
      });
    }
  };
  /*--------------------------  EMPTY CARD NUMBER VALIDATION----------------------------------------*/
  const checkEmptyNumber = (val) => {
    if (!(val > 0)) {
      setErr((prev) => {
        return {
          ...prev,
          errCardNumber: "Please enter a card number",
        };
      });
    } else {
      setErr((prev) => {
        return {
          ...prev,
          errCardNumber: "",
        };
      });
    }
  };
  const checkCardNumberOnBlur = (val) => {
    if (!(val > 0)) {
      setErr((prev) => {
        return {
          ...prev,
          errCardNumber: "Please enter a card number",
        };
      });
    } else {
      setErr((prev) => {
        return {
          ...prev,
          errCardNumber: "",
        };
      });
    }
    var cardNoLength = val.length;
    if (cardNoLength > 0) {
      var slicedVal = val.slice(0, 1);

      if (
        slicedVal === "1" ||
        slicedVal === "2" ||
        slicedVal === "7" ||
        slicedVal === "8" ||
        slicedVal === "9"
      ) {
        setErr((prev) => {
          return { ...prev, errCardNumber: "Please enter a valid card number" };
        });
      }
    }
  };

  /*--------------------------  EMPTY CARD CVV VALIDATION----------------------------------------*/

  const checkEmptyCardCvv = (val) => {
    if (!(val > 0)) {
      console.log(val);
      setErr((prev) => {
        return {
          ...prev,
          errCardCvv: "Please enter a card Cvv",
        };
      });
    } else {
      setErr((prev) => {
        return {
          ...prev,
          errCardCvv: "",
        };
      });
    }
  };
  /*--------------------------  EMPTY NAME ON CARD  VALIDATION----------------------------------------*/
  const checkEmptyCardName = () => {
    if (cardInfo.nameOnCard === "") {
      setErr((prev) => {
        return { ...prev, errNameOnCard: "Please enter name on your card" };
      });
    } else {
      setErr((prev) => {
        return { ...prev, errNameOnCard: "" };
      });
    }
  };
  /*--------------------------  EMPTY MONTH & YEAR OF EXPIRY VALIDATION-------------------------------*/

  const checkEmptyMonth = (val) => {
    if (val > 12 || val <= 1) {
      setErr((prev) => {
        return {
          ...prev,
          errExpiryMonth: "Please enter a valid expiry month",
        };
      });
    } else {
      setErr((prev) => {
        return {
          ...prev,
          errExpiryMonth: "",
        };
      });
    }

    // check year from month

    if (cardInfo.expiryYear) {
      var today = new Date(); // gets the current date
      var today_mm = today.getMonth() + 1; // extracts the month portion
      var today_yy = today.getFullYear() % 100; // extracts the year portion and changes it from yyyy to yy format

      if (today_mm < 10) {
        // if today's month is less than 10
        today_mm = "0" + today_mm; // prefix it with a '0' to make it 2 digits
      }

      var mm = val;

      if (mm < 10) {
        // if today's month is less than 10
        mm = "0" + mm; // prefix it with a '0' to make it 2 digits
      }
      var yy = cardInfo.expiryYear;

      if (yy > today_yy) {
        setErr((prev) => {
          return {
            ...prev,
            errExpiryYear: "",
          };
        });
      } else {
        if (mm >= today_mm) {
          setErr((prev) => {
            return {
              ...prev,
              errExpiryYear: "",
            };
          });
        } else {
          setErr((prev) => {
            return {
              ...prev,
              errExpiryYear: "Please enter a valid expiry year",
            };
          });
        }
      }
    }
  };

  const checkEmptyYear = (val) => {
    if (val) {
      var today = new Date(); // gets the current date
      var today_mm = today.getMonth() + 1; // extracts the month portion
      var today_yy = today.getFullYear() % 100; // extracts the year portion and changes it from yyyy to yy format

      if (today_mm < 10) {
        // if today's month is less than 10
        today_mm = "0" + today_mm; // prefix it with a '0' to make it 2 digits
      }

      var mm = cardInfo.expiryMonth;

      if (mm < 10) {
        // if today's month is less than 10
        mm = "0" + mm; // prefix it with a '0' to make it 2 digits
      }
      var yy = val;

      if (yy > today_yy) {
        setErr((prev) => {
          return {
            ...prev,
            errExpiryYear: "",
          };
        });
      } else {
        if (mm >= today_mm) {
          setErr((prev) => {
            return {
              ...prev,
              errExpiryYear: "",
            };
          });
        } else {
          setErr((prev) => {
            return {
              ...prev,
              errExpiryYear: "Please enter a valid expiry year",
            };
          });
        }
      }
    }
  };
  /*--------------------------   MONTH & YEAR OF EXPIRY VALIDATION----------------------------------*/

  return (
    <div className="cardInfoInputContainer">
      <div className="cardInfoInputHeader">Payment Options</div>

      <div className="cardInfoInputOptionsBlock">
        <div className="creditDebitOption">
          <div className="radioCreditDebitCard"></div>
          <div className="radioTitle">Credit/Debit Card</div>
        </div>
        <div className="acceptedCardsLogos">
          <i class="fab fa-cc-visa" title="visa"></i>
          <i class="fab fa-cc-mastercard" title="Master Card"></i>
          <i class="fab fa-cc-amex" title="American Express"></i>
          <i class="fab fa-cc-diners-club" title="Diner's Club"></i>
          <i class="fab fa-cc-discover" title="Discover"></i>

          {/*<img
            title="Carte Blanche"
            className="carteBlancheLogo"
            src={carte_blanche}
            alt="carte-blanche"
          />*/}
        </div>
      </div>

      <div className="creditDebitInputContainer">
        <div className="cardNumberWrapper">
          <div
            className={`cardNumberContainer ${
              Outline.outlineCardNumber === "card number" ? "check" : null
            } ${err.errCardNumber ? "Error" : null}`}
          >
            <input
              type="text"
              size="16"
              maxlength="16"
              placeholder="Credit/Debit Card Number*"
              className="cardInfoInputField"
              value={cardInfo.cardNumber ? cardInfo.cardNumber : null}
              onFocus={(e) => {
                setOutLine((prev) => {
                  return { ...prev, outlineCardNumber: "card number" };
                });
              }}
              onChange={(e) => {
                setCardCompany(e.target.value);
                setCardInfo((prev) => {
                  return { ...prev, cardNumber: e.target.value };
                });
                checkEmptyNumber(e.target.value);
                setCardNumberError(e.target.value);
              }}
              onKeyPress={(e) => {
                setOnlyNumbers(e);
              }}
              onBlur={(e) => {
                borderValidationCardNumber();
                checkEmptyNumber(e.target.value);
                checkCardNumberOnBlur(e.target.value);
              }}
            />
            <div className="selectedCardLogo">
              <i
                class={`fab fa-cc-${
                  cardInfo.cardCompany ? cardInfo.cardCompany : ""
                }`}
                title={cardInfo.cardCompany ? cardInfo.cardCompany : ""}
              ></i>
              {cardInfo.cardCompany === "carteblanche" ? (
                <img
                  title="Carte Blanche"
                  className="carteBlancheLogo"
                  src={carte_blanche}
                  alt="carte-blanche"
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="emptyFieldErrors">
            {err.errCardNumber ? err.errCardNumber : null}
          </div>
        </div>
        <div className="nameOnCardWrapper">
          <div
            className={`nameOnCardContainer ${
              Outline.outlineNameOnCard === "Name on card" ? "check" : null
            } ${err.errNameOnCard ? "Error" : null}`}
          >
            <input
              type="text"
              placeholder="Name on Card*"
              className="cardInfoInputField"
              value={cardInfo.nameOnCard ? cardInfo.nameOnCard : null}
              onFocus={() => {
                setOutLine((prev) => {
                  return { ...prev, outlineNameOnCard: "Name on card" };
                });
              }}
              onChange={(e) => {
                setCardInfo((prev) => {
                  return { ...prev, nameOnCard: e.target.value };
                });

                checkEmptyCardName();
              }}
              onBlur={(e) => {
                borderValidationNameOnCard();
                checkEmptyCardName();
              }}
            />
          </div>
          <div className="emptyFieldErrors">
            {err.errNameOnCard ? err.errNameOnCard : null}
          </div>
        </div>
        <div className="cardExpiryCvvContainer">
          <div className="cardExpiryContainer">
            <div className="cardExpiryHeader">Expiration Date*</div>
            <div
              className={`cardExpiryMonthYearContainer ${
                Outline.outlineExpiryMonth === "Expiry" ||
                Outline.outlineExpiryYear === "Expiry"
                  ? "check"
                  : null
              } ${err.errExpiryMonthYear || err.expiryMonth ? "Error" : null}`}
            >
              <input
                className="cardExpiryMonthYear"
                type="text"
                name="month"
                placeholder="MM"
                maxlength="2"
                size="2"
                value={cardInfo.expiryMonth ? cardInfo.expiryMonth : null}
                onFocus={() => {
                  setOutLine((prev) => {
                    return { ...prev, outlineExpiryMonth: "Expiry" };
                  });
                }}
                onChange={(e) => {
                  setCardInfo((prev) => {
                    return { ...prev, expiryMonth: e.target.value };
                  });
                  checkEmptyMonth(e.target.value);
                }}
                onBlur={(e) => {
                  borderValidationCardExpiry();
                  checkEmptyMonth(e.target.value);
                }}
                onKeyPress={(e) => {
                  setOnlyNumbers(e);
                }}
              />
              <div className="expiryDateSlash">/</div>
              <input
                className="cardExpiryMonthYear"
                type="text"
                name="year"
                placeholder="YY"
                maxlength="2"
                size="2"
                value={cardInfo.expiryYear ? cardInfo.expiryYear : null}
                onFocus={() => {
                  setOutLine((prev) => {
                    return { ...prev, outlineExpiryYear: "Expiry" };
                  });
                }}
                onChange={(e) => {
                  setCardInfo((prev) => {
                    return { ...prev, expiryYear: e.target.value };
                  });
                  checkEmptyYear(e.target.value);
                }}
                onBlur={(e) => {
                  borderValidationCardExpiry();
                  checkEmptyYear(e.target.value);
                }}
                onKeyPress={(e) => {
                  setOnlyNumbers(e);
                }}
              />
            </div>
            <div className="emptyFieldErrors">
              {err.errExpiryMonth
                ? err.errExpiryMonth
                : err.errExpiryYear
                ? err.errExpiryYear
                : null}
            </div>
          </div>
          <div className="cardCvvWrapper">
          
            <div className="cardExpiryHeader">CVV*</div>
            <div
              className={`cardCvvContainer ${
                Outline.outlineCardCvv === "card cvv" ? "check" : null
              } ${err.errCardCvv ? "Error" : null}`}
            >
              <input
                type="text"
                size="30"
                maxlength="3"
                placeholder="Card CVV*"
                className="cardInfoInputField ci"
                value={cardInfo.cardCvv ? cardInfo.cardCvv : null}
                onFocus={() => {
                  setOutLine((prev) => {
                    return { ...prev, outlineCardCvv: "card cvv" };
                  });
                }}
                onChange={(e) => {
                  setCardInfo({ cardCvv: e.target.value });
                  checkEmptyCardCvv(e.target.value);
                }}
                onBlur={(e) => {
                  borderValidationCardCvv();
                  checkEmptyCardCvv(e.target.value);
                }}
                onKeyPress={(e) => {
                  setOnlyNumbers(e);
                }}
              />
              <div className="cardCvvIconContainer">
                <i class="fas fa-credit-card"></i>
              </div>
            </div>
            <div className="emptyFieldErrors">
              {err.errCardCvv ? err.errCardCvv : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfoInput;
