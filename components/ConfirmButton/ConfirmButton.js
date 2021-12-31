import React from "react";
import classes from "./ConfirmButton.module.css";

const ConfirmButton = ({ toggle }) => {
  return (
    <button className={classes["confirm-btn"]} onClick={toggle}>
      CONFIRM RESERVATION
    </button>
  );
};

export default ConfirmButton;
