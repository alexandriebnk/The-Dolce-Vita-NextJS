import React from "react";
import classes from "./RestaurantViewMobile.module.css";
import InfosLayout from "../InfosLayout/InfosLayout";
import BookingLink from "../BookingLink/BookingLink";

const RestaurantViewMobile = ({ item }) => {
  return (
    <div className={classes["restaurant-view-mobile"]}>
      <div className={classes["restaurant-view-mobile-infos-layout"]}>
        <InfosLayout title={item.title} text={item.text} icon={item.icon} />
      </div>
      <div className={classes["restaurant-view-mobile-booking-link"]}>
        <BookingLink />
      </div>
    </div>
  );
};

export default RestaurantViewMobile;
