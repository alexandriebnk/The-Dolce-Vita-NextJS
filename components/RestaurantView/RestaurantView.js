import React from "react";
import classes from "./RestaurantView.module.css";
import InfosLayout from "../InfosLayout/InfosLayout";

const RestaurantView = ({ item }) => {
  return (
    <div className={classes["restaurant-view"]}>
      <div className={classes["restaurant-view-infos-layout"]}>
        <InfosLayout title={item.title} text={item.text} icon={item.icon} />
      </div>
    </div>
  );
};

export default RestaurantView;
