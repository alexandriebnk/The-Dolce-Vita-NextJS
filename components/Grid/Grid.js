import React from "react";
import classes from "./Grid.module.css";
import DishItem from "../DishItem/DishItem";

const Grid = ({ menu }) => {
  return (
    <div className={classes.grid}>
      <div className={classes["grid-items"]}>
        {menu.items.map((item, index) => (
          <div
            className={classes["grid-items-child"]}
            key={`${item.title}-${index}`}
          >
            <DishItem item={item} icon={menu.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
