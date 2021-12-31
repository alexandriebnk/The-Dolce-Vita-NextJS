import React, { useState, useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import classes from "./Carrousel.module.css";
import RestaurantView from "../RestaurantView/RestaurantView";
import CarrouselContext from "../../store/CarrouselContext";

const Carrousel = () => {
  const carrousel = useContext(CarrouselContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = useRef([]);
  const layouts = useRef([]);

  const showLayout = () => {
    gsap.fromTo(
      layouts.current[activeIndex],
      { opacity: "0" },
      { duration: ".5", opacity: "1" }
    );
  };

  const hideLayout = () => {
    gsap.fromTo(
      layouts.current[activeIndex],
      { opacity: "1" },
      { duration: ".5", opacity: "0" }
    );
  };

  const showView = (index) => {
    setActiveIndex(index);
    gsap.fromTo(
      images.current[index],
      { marginLeft: "-50%", opacity: "0" },
      {
        duration: "1",
        marginLeft: "0",
        opacity: "1",
        ease: "power4.out",
      }
    );
  };

  useEffect(() => {
    showView(0);
  }, []);

  return (
    <div className={classes.carrousel}>
      <div className={classes["carrousel-main"]}>
        {carrousel.map((item, index) => (
          <div key={`${item.id}`} className={classes["carrousel-view-item"]}>
            <h2
              key={`${item.id}-${index}`}
              onClick={() => showView(index)}
              className={`${classes["carrousel-view-title"]} ${
                index === activeIndex ? classes["active-title"] : null
              }`}
            >
              <span>0{index + 1}</span>
              {item.type}
            </h2>
            <div className={classes["carrousel-view-content"]}>
              <div
                className={`${classes["carrousel-view-img-wrapper"]} ${
                  index === activeIndex ? classes["active-wrapper"] : null
                }`}
                ref={(el) => images.current.push(el)}
              >
                <img
                  src={item.src}
                  key={`${item.type}-${index}`}
                  onMouseEnter={showLayout}
                  onMouseLeave={hideLayout}
                  className={classes["carrousel-view-img"]}
                  alt={`${item.type}`}
                  draggable="false"
                />
              </div>
              <div
                key={`${item.title}-${index}`}
                className={`${classes["carrousel-view-infos-layout"]} ${
                  index === activeIndex ? classes["active-layout"] : null
                }`}
                ref={(el) => layouts.current.push(el)}
              >
                <RestaurantView item={item} key={`${item.type}-${index}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
