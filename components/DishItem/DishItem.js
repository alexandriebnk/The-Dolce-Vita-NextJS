import React, { useRef } from "react";
import gsap from "gsap";
import classes from "./DishItem.module.css";
import InfosLayout from "../InfosLayout/InfosLayout";

const DishItem = ({ item, icon }) => {
  const layout = useRef();

  const showLayout = () => {
    gsap.fromTo(
      layout.current,
      { opacity: "0" },
      { duration: ".5", opacity: "1" }
    );
  };

  const hideLayout = () => {
    gsap.fromTo(
      layout.current,
      { opacity: "1" },
      { duration: ".5", opacity: "0" }
    );
  };

  return (
    <div className={classes["dish-item"]}>
      <img
        src={item.src}
        className={classes["dish-item-image"]}
        alt="dish-item"
        draggable="false"
        onMouseEnter={showLayout}
        onMouseLeave={hideLayout}
      />
      <div className={classes["dish-item-infos-layout"]} ref={layout}>
        <InfosLayout
          title={item.title}
          text={item.text}
          price={item.price}
          icon={icon}
        />
      </div>
    </div>
  );
};

export default DishItem;
