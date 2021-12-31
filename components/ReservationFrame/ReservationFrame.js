import React, { useState, useContext } from "react";
import classes from "./ReservationFrame.module.css";
import ReservationUser from "../Reservation/ReservationUser";
import ReservationSent from "../Reservation/ReservationSent";
import ReservationContext from "../../store/ReservationContext";

const ReservationFrame = () => {
  const { frameTitle } = useContext(ReservationContext);

  const [isSent, setIsSent] = useState(false);

  const toggleIsSent = () => {
    setIsSent(!isSent);
  };

  return (
    <div className={classes.reservation}>
      <p className={classes["reservation-p"]}>{frameTitle}</p>
      <div className={classes["reservation-frame"]}>
        {isSent ? (
          <ReservationSent toggle={toggleIsSent} />
        ) : (
          <ReservationUser toggle={toggleIsSent} />
        )}
      </div>
    </div>
  );
};

export default ReservationFrame;
