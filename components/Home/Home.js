import React from "react";
import classes from "./Home.module.css";
import Carrousel from "../Carrousel/Carrousel";
import CarrouselMobile from "../CarrouselMobile/CarrouselMobile";

const Home = () => (
  <div className={classes.home}>
    {window.innerWidth <= 576 ? <CarrouselMobile /> : <Carrousel />}
  </div>
);

export default Home;
