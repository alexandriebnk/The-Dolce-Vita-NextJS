import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import classes from "./Content.module.css";
import Slider from "../Slider/Slider";
import Grid from "../Grid/Grid";
import MenuContext from "../../store/MenuContext";

const Content = () => {
  const menu = useContext(MenuContext);
  const { category } = useParams();

  return (
    <div className={classes.content}>
      {window.innerWidth <= 768 ? (
        <Grid menu={menu[category]} />
      ) : (
        <Slider menu={menu[category]} />
      )}
    </div>
  );
};

export default Content;
