import React, { useEffect, useContext, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";
import MenuContext from "../../store/MenuContext";
import NavigationContext from "../../store/NavigationContext";

const Menu = () => {
  const menu = useContext(MenuContext);
  const arrayMenu = Object.values(menu);
  const { menuIsOpen, setMenuIsOpen } = useContext(NavigationContext);

  const tlMenu = useRef();
  const menuPage = useRef();
  const list = useRef();
  const items = useRef([]);

  const hideMenu = () => {
    tlMenu.current.reverse();
    setMenuIsOpen(false);
  };

  useEffect(() => {
    tlMenu.current = gsap
      .timeline({ paused: true })
      .fromTo(
        menuPage.current,
        { top: "-100%", opacity: "0" },
        { duration: ".5", top: "0", opacity: "1" }
      )
      .fromTo(list.current, { opacity: "0" }, { duration: ".5", opacity: "1" });
  }, []);

  useEffect(() => {
    if (!menuIsOpen) {
      tlMenu.current.reverse();
    } else {
      tlMenu.current.play();
    }
  }, [menuIsOpen]);

  return (
    <div className={classes.menu} ref={menuPage}>
      <ul className={classes["menu-list"]} ref={list}>
        {arrayMenu.map((item) => (
          <li
            key={item.name}
            className={classes["menu-item"]}
            onClick={() => hideMenu()}
            ref={(el) => items.current.push(el)}
          >
            <Link to={`/menu/${item.name}`} className={classes["menu-link"]}>
              <img
                src={item.icon}
                alt={`food-icon-${item.name}`}
                draggable="false"
              />
              <h4>{item.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
