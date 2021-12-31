import React, { useEffect, useContext, useRef } from "react";
import gsap from "gsap";
import classes from "./Footer.module.css";
import SiteContext from "../../store/SiteContext";
import NavigationContext from "../../store/NavigationContext";

const Footer = () => {
  const {
    address,
    icons: { instagram },
  } = useContext(SiteContext);
  const { isLoaded } = useContext(NavigationContext);

  const tlFooter = useRef();
  const location = useRef();
  const instagramIcon = useRef();

  useEffect(() => {
    if (isLoaded) {
      tlFooter.current.play();
    }
  }, [isLoaded]);

  useEffect(() => {
    tlFooter.current = gsap
      .timeline({ paused: true })
      .add("showFooter")
      .fromTo(
        location.current,
        { y: "2.5rem", opacity: "0" },
        { duration: "1.5", y: "0", opacity: "1" },
        "showFooter"
      )
      .fromTo(
        instagramIcon.current,
        { y: "2.5rem", opacity: "0" },
        { duration: "1.5", y: "0", opacity: "1" },
        "showFooter"
      );
  }, []);

  return (
    <footer className={classes.footer}>
      <p className={classes["footer-address"]} ref={location}>
        {address}
      </p>
      <img
        src={instagram}
        className={classes["footer-icon"]}
        alt="instagram-icon"
        draggable="false"
        ref={instagramIcon}
      />
    </footer>
  );
};

export default Footer;
