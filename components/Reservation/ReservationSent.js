import React, { useContext } from "react";
import classes from "./ReservationSent.module.css";
import Description from "../Description/Description";
import CloseButton from "../CloseButton/CloseButton";
import ReservationContext from "../../store/ReservationContext";

const ReservationSent = ({ toggle }) => {
  const {
    confirmation: { icon, title, text },
  } = useContext(ReservationContext);

  return (
    <div className={classes["reservation-done"]}>
      <div className={classes["reservation-done-message"]}>
        <img
          src={icon}
          className={classes["reservation-img"]}
          alt="sentImg"
          draggable="false"
        ></img>
        <div className={classes["reservation-description"]}>
          <Description title={title} text={text} />
        </div>
        <div className={classes["reservation-close"]}>
          <CloseButton toggle={toggle} />
        </div>
      </div>
    </div>
  );
};

export default ReservationSent;
