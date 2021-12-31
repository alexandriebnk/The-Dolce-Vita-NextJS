import React, { useState, useContext } from "react";
import classes from "./CustomGuestsInput.module.css";
import ReservationContext from "../../store/ReservationContext";

const CustomGuestsInput = () => {
  const {
    icons: { guests },
  } = useContext(ReservationContext);

  const [guestsNumber, setGuestsNumber] = useState(1);

  const onClickPlus = () => {
    guestsNumber <= 4 && setGuestsNumber(guestsNumber + 1);
  };

  const onClickMinus = () => {
    guestsNumber >= 2 && setGuestsNumber(guestsNumber - 1);
  };

  return (
    <div className={classes.guests}>
      <img src={guests} alt="guests" draggable="false" />
      <div className={classes["guests-count"]}>
        <div className={classes.minus} onClick={onClickMinus}>
          -
        </div>
        <div className={classes.number}>{guestsNumber}</div>
        <div className={classes.plus} onClick={onClickPlus}>
          +
        </div>
      </div>
    </div>
  );
};

export default CustomGuestsInput;
