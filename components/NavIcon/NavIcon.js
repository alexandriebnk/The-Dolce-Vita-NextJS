import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import classes from "./NavIcon.module.css";
import NavigationContext from "../../store/NavigationContext";

const NavIcon = () => {
  const { menuIsOpen, setMenuIsOpen } = useContext(NavigationContext);

  const forkRef = useRef();
  const spoonRef = useRef();

  const openNav = () => {
    gsap.to(forkRef.current, {
      duration: ".3",
      rotation: "45deg",
      y: "100%",
      transformOrigin: "50% 50%",
    });
    gsap.to(spoonRef.current, {
      duration: ".3",
      rotation: "-45deg",
      y: "-40%",
      transformOrigin: "50% 50%",
    });
  };

  const closeNav = () => {
    gsap.to(forkRef.current, {
      duration: ".5",
      rotation: "0deg",
      y: "0",
    });
    gsap.to(spoonRef.current, {
      duration: ".5",
      rotation: "0deg",
      y: "0",
    });
  };

  useEffect(() => {
    menuIsOpen ? openNav() : closeNav();
  }, [menuIsOpen]);

  const onClick = () => {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
  };

  return (
    <div className={classes["nav-icon"]} onClick={onClick}>
      <svg
        width="30"
        height="38"
        viewBox="0 0 30 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={spoonRef}
          className={classes.spoon}
          d="M20.9403 26.2643L20.0811 25.4234C19.7463 25.0956 19.2862 24.9207 18.8191 24.9436L4.669 25.6902C4.28485 25.7078 3.90938 25.5609 3.60969 25.277C3.57774 25.2469 3.54707 25.2154 3.51767 25.1827C3.24305 24.8777 3.08004 24.472 3.07625 24.0735C3.07209 23.6324 3.26297 23.1802 3.58695 22.8637C3.88126 22.5763 4.25391 22.4251 4.63619 22.4377L18.802 23.0127C19.2684 23.0299 19.7251 22.8495 20.0538 22.5177L20.897 21.6664L20.9015 21.6619C21.5162 21.067 22.3563 20.7852 23.207 20.8887L24.8765 21.0917C26.3298 21.2684 27.6411 21.9904 28.5694 23.1258C28.7517 23.3487 28.8536 23.6298 28.8563 23.9173C28.859 24.2046 28.7624 24.487 28.5843 24.7121C27.6778 25.8582 26.3799 26.5964 24.93 26.7908L23.2646 27.014C22.4159 27.1278 21.5705 26.8561 20.9449 26.2688L20.9403 26.2643ZM4.63708 25.0797L18.786 24.3331C19.424 24.3018 20.0511 24.5402 20.5077 24.987L21.3645 25.8258C21.855 26.2848 22.5169 26.4971 23.1814 26.408L24.847 26.1848C26.1395 26.0115 27.2964 25.3534 28.1047 24.3317C28.1967 24.2154 28.2467 24.0695 28.2452 23.9209C28.2438 23.7723 28.1913 23.6271 28.0971 23.5119C27.2696 22.5004 26.1004 21.8561 24.8048 21.6985L23.1352 21.4955C22.4691 21.4145 21.8112 21.6347 21.3295 22.0997L20.4887 22.9489C20.0404 23.4011 19.4179 23.6471 18.7805 23.6235L4.61577 23.0486C4.40336 23.0415 4.18911 23.1315 4.01472 23.3019C3.80708 23.5046 3.68481 23.7916 3.68733 24.0699C3.68996 24.3481 3.81754 24.6337 4.02897 24.8339C4.20666 25.0022 4.42271 25.0895 4.63708 25.0797Z"
          fill="black"
        />
        <g ref={forkRef} className={classes.fork}>
          <path
            d="M18.0834 13.3178C17.9183 13.318 13.1921 14.1891 13.2072 14.3549C13.2224 14.5205 17.9733 13.918 18.1384 13.9179L26.904 13.905C27.1141 13.9062 27.329 14.0027 27.5092 14.1765C27.7236 14.3833 27.8588 14.6695 27.8711 14.9424C27.8835 15.2151 27.7742 15.4902 27.5771 15.6787C27.4119 15.8369 27.2048 15.9143 26.9963 15.8967L18.3823 15.1071C18.2165 15.0918 13.3367 15.4129 13.3364 15.5777C13.3362 15.7428 18.2157 15.6894 18.3815 15.7046L26.9975 16.4944C27.3731 16.526 27.7334 16.3965 28.0121 16.1296C28.0193 16.1226 28.0264 16.1157 28.0335 16.1086C28.3268 15.8154 28.4898 15.3919 28.4706 14.9696C28.451 14.5369 28.2396 14.086 27.905 13.7633C27.601 13.47 27.2276 13.3073 26.8511 13.3049L18.0834 13.3178Z"
            fill="black"
          />
          <path
            d="M9.13993 18.0718C9.82603 18.0432 10.4777 17.7663 10.975 17.2923C10.9767 17.2909 10.9782 17.2893 10.9797 17.2879L11.8302 16.4426C12.1617 16.1131 12.6195 15.9355 13.0851 15.9552L13.868 15.9911C13.9574 15.9952 14.0394 15.9606 14.0981 15.9019C14.15 15.85 14.1835 15.7794 14.1872 15.7005C14.1952 15.532 14.0652 15.3892 13.8969 15.3815L13.1128 15.3456C12.4766 15.3186 11.8525 15.5609 11.4004 16.01L10.5521 16.8529C10.1669 17.2191 9.66405 17.4346 9.13409 17.4614L3.76004 17.0016C3.70514 16.9968 3.66378 16.9517 3.66381 16.8966C3.66373 16.8587 3.68318 16.8337 3.69472 16.8222C3.70626 16.8107 3.7312 16.7912 3.76919 16.7912L8.2394 16.7882C8.68127 16.7879 9.04104 16.4281 9.04124 15.9861L9.04171 15.4609L9.0416 15.4608L9.04225 14.5281C9.04225 14.5281 9.04236 14.528 9.04225 14.5279L9.04225 14.5277L9.04262 14.0025C9.04293 13.5607 8.68366 13.2014 8.24179 13.2017L3.77169 13.2048C3.71371 13.2049 3.66642 13.1576 3.66646 13.0996C3.6665 13.0445 3.70793 12.9993 3.76284 12.9944L9.13764 12.5273C9.66756 12.5531 10.1702 12.7681 10.5549 13.1336L11.4019 13.9755C11.8533 14.4239 12.4772 14.6652 13.1145 14.6375L13.8787 14.6013C14.0472 14.5932 14.1773 14.4504 14.1696 14.2821C14.1617 14.1137 14.0191 13.9838 13.8507 13.9917L13.0877 14.0278C12.6209 14.0483 12.1634 13.8711 11.8323 13.5423L10.983 12.6982C10.9814 12.6967 10.9799 12.6951 10.9783 12.6937C10.4816 12.2203 9.83028 11.9444 9.14422 11.9168C9.13137 11.9162 9.11841 11.9165 9.10545 11.9176L3.71077 12.3866C3.33784 12.4189 3.05651 12.7257 3.05625 13.0999C3.05598 13.4946 3.37672 13.8153 3.77127 13.8149L8.24148 13.8119C8.34689 13.8119 8.43259 13.8976 8.43252 14.003L8.43226 14.2231L3.45034 14.2267C3.28178 14.2267 3.14509 14.3634 3.14508 14.532C3.14496 14.7004 3.28147 14.8369 3.44991 14.8368L8.43194 14.8333L8.43161 15.1561L3.44969 15.1597C3.28124 15.1598 3.14455 15.2965 3.14443 15.4649C3.1442 15.6335 3.28071 15.77 3.44926 15.7698L8.43118 15.7664L8.43114 15.9866C8.43106 16.092 8.34524 16.1778 8.23983 16.1779L3.76962 16.1811C3.57855 16.1812 3.39874 16.2557 3.26347 16.391C3.12821 16.5262 3.05374 16.706 3.05361 16.8971C3.05335 17.2713 3.33435 17.5776 3.70724 17.6096L9.10128 18.0709C9.11412 18.0721 9.12708 18.0723 9.13993 18.0718Z"
            fill="black"
          />
        </g>
      </svg>
    </div>
  );
};

export default NavIcon;