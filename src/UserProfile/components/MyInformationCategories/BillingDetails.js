import React from "react";
import "./BillingDetails.css";
import Fade from "react-reveal/Fade";

const BillingDetails = () => {
  return (
    <Fade top cascade duration={500}>
      <div className="billingDetailsWrapper">
        <div className="creditCardInfoConatiner">
          <div className="creditCardInfoHeader">
            Enter New Credit Card Information Below
          </div>
          <div className="creditCardInfoDisplay">
            {/* FIRST ROW -CARD NO. & NAME*/}
            <div className="inputFieldRow">
              <div className="inputAndLabel">
                <div className="BDlabel">
                  Card #<span className="compulsouryTextSpan">*</span>
                </div>
                <div className="BDtext">
                  <input
                    className="cardInputField"
                    placeholder="Credit Card Number"
                  />
                </div>
              </div>

              <div className="inputAndLabel">
                <div className="BDlabel">
                  Name<span className="compulsouryTextSpan">*</span>
                </div>
                <div className="BDtext">
                  <input
                    className="cardInputField"
                    placeholder="Name as per on credit card"
                  />
                </div>
              </div>
            </div>
            {/* SECOND ROW -CARD EXPIRY DATE */}
            <div className="inputFieldRow">
              <div className="inputAndLabel">
                <div className="BDlabelExpiryDate">
                  Expiration Date
                  <span className="compulsouryTextSpan">*</span>
                </div>
                <div className="BDtext"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="billingAddressContainer">
          <div className="billingAddressHeader">Billing Address </div>
          <div className="adressOptions">
            <div className="adressOption1">
              <div className="addressRadioBtn">
                <input
                  type="radio"
                  className="addressOptionRadio"
                  name="adressOptionRadio"
                  value="useExisting"
                  disabled="true"
                />
              </div>
              <div className="addressOptionLabel">Use Existing Address</div>
            </div>
            <div className="adressOption2">
              <input
                type="radio"
                className="addressOptionRadio"
                name="adressOptionRadio"
                value="useExisting"
              />
              <div className="addressOptionLabel">Add new Address</div>
            </div>
          </div>
          <div className="addressForm">
            {/* COUNTRY SELECTION AND DISPLAY */}
            <div className="inputFieldRow">
              <div className="inputAndLabel">
                <div className="BDlabel">
                  Country <span className="compulsouryTextSpan">*</span>
                </div>
                <div className="BDtext"></div>
              </div>
            </div>
            {/* ADDRESS LINE1 AND LINE2  */}
            <div className="inputFieldRow">
              <div className="inputAndLabel">
                <div className="BDlabelExpiryDate">
                  Address Line 1 <span className="compulsouryTextSpan">*</span>
                </div>
                <div className="BDtext">
                  <input className="cardInputField" placeholder="" />
                </div>
              </div>
              <div className="inputAndLabel">
                <div className="BDlabelExpiryDate">Address Line 2</div>
                <div className="BDtext">
                  <input className="cardInputField" placeholder="" />
                </div>
              </div>
            </div>
            {/* ZIP/POSTAL-CODE AND BILLING PHONE NUMBER  */}
            <div className="inputFieldRow">
              <div className="inputAndLabel">
                <div className="BDlabel">
                  Zip Code <span className="compulsouryTextSpan">*</span>
                </div>
                <div className="BDtext">
                  <input className="cardInputField" placeholder="" />
                </div>
              </div>
              <div className="inputAndLabel">
                <div className="BDlabelExpiryDate">
                  Billing Phone<span className="compulsouryTextSpan">*</span>
                </div>
                <div className="BDtext">
                  <input className="cardInputField" placeholder="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="saveBtn">Save</div>
      </div>
    </Fade>
  );
};

export default BillingDetails;
