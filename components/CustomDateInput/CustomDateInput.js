import React, { useContext } from "react";
import classes from "./CustomDateInput.module.css";
import ReservationContext from "../../store/ReservationContext";

const CustomDateInput = () => {
  const {
    icons: { calendar },
  } = useContext(ReservationContext);

  const getIndex = (index) => {
    return index < 9 ? "0" + (index + 1) : index + 1;
  };
  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={classes.date}>
      <img src={calendar} alt="calendar" draggable="false" />
      <div className={classes.day}>
        <select>
          {[...Array(31)].map((_, index) => (
            <option key={index} value={getIndex(index)}>
              {getIndex(index)}
            </option>
          ))}
        </select>
      </div>
      <div className={classes.month}>
        <select>
          {monthsArray.map((item, index) => (
            <option key={`key-${item}-${index}`} value="item">
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={classes.year}>
        <select>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default CustomDateInput;
