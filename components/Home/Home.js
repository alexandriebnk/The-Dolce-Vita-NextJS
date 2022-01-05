import { useState, useEffect } from "react";
import classes from "./Home.module.css";
import Carrousel from "../Carrousel/Carrousel";
import CarrouselMobile from "../CarrouselMobile/CarrouselMobile";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 576);
  }, []);

  return (
    <div className={classes.home}>
      {isMobile ? <CarrouselMobile /> : <Carrousel />}
    </div>
  );
};

export default Home;
