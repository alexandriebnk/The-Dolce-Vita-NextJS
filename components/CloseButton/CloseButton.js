import React from "react";
import classes from "./CloseButton.module.css";

const CloseButton = ({ toggle }) => {
  return (
    <p className={classes.button} onClick={toggle}>
      CLOSE
    </p>
  );
};

export default CloseButton;
