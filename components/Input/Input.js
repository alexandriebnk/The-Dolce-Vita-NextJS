import React from "react";
import classes from "./Input.module.css";

const Input = ({ type, icon, placeholder, onChange }) => {
  return (
    <div className={classes.input}>
      <img src={icon} alt={icon} draggable="false" />
      <input
        className={classes["input-element"]}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
