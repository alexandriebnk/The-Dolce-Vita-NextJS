import React from "react";
import classes from "./InfosLayout.module.css";
import Description from "../Description/Description";

const InfosLayout = ({ title, text, price, icon }) => {
  return (
    <div className={classes["infos-layout"]}>
      <div className={classes["infos-layout-description"]}>
        <Description title={title} text={text} />
        {price && <p className={classes["infos-layout-price"]}>{price}</p>}
      </div>
      <div className={classes["infos-layout-icon-container"]}>
        <img src={icon} className={classes["infos-layout-icon"]} alt="icon" />
      </div>
    </div>
  );
};

export default InfosLayout;
