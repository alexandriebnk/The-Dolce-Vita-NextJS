import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import classes from "./Slider.module.css";
import Arrow from "../Arrow/Arrow";
import DishItem from "../DishItem/DishItem";

const Slider = ({ menu }) => {
  const [canSlide, setCanSlide] = useState(true);

  const sliderItems = useRef();
  const slide = useRef();
  const rightArrow = useRef();
  const leftArrow = useRef();

  const showRightArrow = () => {
    gsap.set(rightArrow.current, { opacity: "1", pointerEvents: "all" });
  };

  const hideRightArrow = () => {
    gsap.set(rightArrow.current, { opacity: "0", pointerEvents: "none" });
  };

  const showLeftArrow = () => {
    gsap.set(leftArrow.current, { opacity: "1", pointerEvents: "all" });
  };

  const hideLeftArrow = () => {
    gsap.set(leftArrow.current, { opacity: "0", pointerEvents: "none" });
  };

  const nextSlide = () => {
    if (!canSlide) return;
    const width = slide.current.getBoundingClientRect().width + 12;
    const { left, right } = sliderItems.current.getBoundingClientRect();
    if (window.innerWidth < right - width) {
      setCanSlide(false);
      showLeftArrow();
      gsap.to(sliderItems.current, {
        duration: ".5",
        x: left - width,
        ease: "power4.out",
        onComplete: () => {
          setCanSlide(true);
          window.innerWidth >= right - width * 2 && hideRightArrow();
        },
      });
    }
  };

  const previousSlide = () => {
    if (!canSlide) return;
    const width = slide.current.getBoundingClientRect().width + 12;
    const left = sliderItems.current.getBoundingClientRect().left;
    if (left < 0) {
      setCanSlide(false);
      showRightArrow();
      gsap.to(sliderItems.current, {
        duration: ".5",
        x: left + width,
        ease: "power4.out",
        onComplete: () => {
          setCanSlide(true);
          left + width >= 0 && hideLeftArrow();
        },
      });
    }
  };

  useEffect(() => {
    hideLeftArrow();
  }, []);

  return (
    <div className={classes.slider}>
      <div className={classes["slider-arrows"]}>
        <div
          className={classes["slider-arrow-left"]}
          onClick={previousSlide}
          ref={leftArrow}
        >
          <Arrow direction="left" />
        </div>
        <div
          className={classes["slider-arrow-right"]}
          onClick={nextSlide}
          ref={rightArrow}
        >
          <Arrow direction="right" />
        </div>
      </div>
      <div className={classes["slider-items"]} ref={sliderItems}>
        {menu.items.map((item, index) => (
          <div
            className={classes["slider-items-child"]}
            ref={slide}
            /*ref={(el) => slides.current.push(el)}*/
            key={`${item.title}-${index}`}
          >
            <DishItem item={item} icon={menu.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
