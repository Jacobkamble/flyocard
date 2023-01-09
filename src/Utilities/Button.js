import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const MyButton = (props) => {
  const btnStyles = {
    padding: `${props.padding}`,
    fontSize: `${props.fontsize}`,
  };
  let template = "";

  const buttons = () => {
    switch (props.type) {
      case "default":
        template = (
          <Link
            className="customButton"
            onClick={() => {
              props.runAction();
            }}
            to={props.err ? null : props.linkTo}
            style={btnStyles}
          >
            {props.label}
          </Link>
        );
        break;
      case "Sub-Label":
        template = (
          <div
            className="customButton"
            style={btnStyles}
            onClick={() => {
              props.runAction();
            }}
            to={props.linkTo}
          >
            <div className="SubLabelContainer">
              {props.label}
              {props.subLabel}
            </div>
          </div>
        );
        break;
      default:
        template = "";
    }
    return template;
  };
  return <div  className={`btn_${props.label}`}>{buttons()}</div>;
};

export default MyButton;
