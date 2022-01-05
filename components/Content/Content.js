import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import classes from "./Content.module.css";
import Slider from "../Slider/Slider";
import Grid from "../Grid/Grid";
import MenuContext from "../../store/MenuContext";

const Content = () => {
  const menu = useContext(MenuContext);
  const router = useRouter();
  const category = router.query.category;

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (!menu[category]) router.push("/404");

    setIsTablet(window.innerWidth <= 768);
  }, []);

  return (
    <div className={classes.content}>
      {isTablet ? (
        <Grid menu={menu[category]} />
      ) : (
        <Slider menu={menu[category]} />
      )}
    </div>
  );
};

export default Content;
