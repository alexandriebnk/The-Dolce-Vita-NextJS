import React, { useEffect, useContext, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import classes from "./Header.module.css";
import BookingLink from "../BookingLink/BookingLink";
import NavIcon from "../NavIcon/NavIcon";
import SiteContext from "../../store/SiteContext";
import NavigationContext from "../../store/NavigationContext";

const Header = () => {
  const {
    icons: { logo },
  } = useContext(SiteContext);
  const { isLoaded } = useContext(NavigationContext);
  const { menuIsOpen, setMenuIsOpen } = useContext(NavigationContext);

  const tlHeader = useRef();
  const navIcon = useRef();
  const logoSite = useRef();
  const link = useRef();

  useEffect(() => {
    if (isLoaded) {
      tlHeader.current.play();
    }
  }, [isLoaded]);

  useEffect(() => {
    tlHeader.current = gsap
      .timeline({ paused: true })
      .add("showHeader")
      .fromTo(
        navIcon.current,
        { y: "-2.5rem", opacity: "0" },
        { duration: "1.5", y: "0", opacity: "1" },
        "showHeader"
      )
      .fromTo(
        logoSite.current,
        { y: "-2.5rem", opacity: "0" },
        { duration: "1.5", y: "0", opacity: "1" },
        "showHeader"
      )
      .fromTo(
        link.current,
        { y: "-2.5rem", opacity: "0" },
        { duration: "1.5", y: "0", opacity: "1" },
        "showHeader"
      );
  }, []);

  const onClick = () => {
    menuIsOpen && setMenuIsOpen(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes["nav-icon"]} ref={navIcon}>
        <NavIcon />
      </div>
      <Link href="/" passHref>
        <h1 className={classes.title} aria-label="The Dolce Vita">
          <img
            src={logo}
            className={classes.logo}
            alt="logo"
            draggable="false"
            ref={logoSite}
            onClick={onClick}
          />
        </h1>
      </Link>
      <div className={classes.link} ref={link}>
        <BookingLink onClick={onClick} />
      </div>
    </header>
  );
};

export default Header;
