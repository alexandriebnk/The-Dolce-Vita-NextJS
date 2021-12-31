import classes from "./Arrow.module.css";

const Arrow = ({ direction }) => {
  return (
    <svg
      className={`${classes.arrow} ${
        direction === "left" ? classes.left : classes.right
      }`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490.8 490.8"
    >
      <path
        fill="#a66d037b"
        d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82
	l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262
	c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"
      />
    </svg>
  );
};

export default Arrow;
