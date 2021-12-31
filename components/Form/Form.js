import React, { useState, useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import classes from "./Form.module.css";
import CustomGuestsInput from "../CustomGuestsInput/CustomGuestsInput";
import CustomDateInput from "../CustomDateInput/CustomDateInput";
import CustomTimeInput from "../CustomTimeInput/CustomTimeInput";
import Input from "../Input/Input";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import ReservationContext from "../../store/ReservationContext";

const Form = ({ toggle }) => {
  const {
    icons: { name: nameIcon, phone: phoneIcon, email: emailIcon },
  } = useContext(ReservationContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const button = useRef();

  // eslint-disable-next-line
  const regExName = /^[A-Za-zàäâéèëêïîôùüÿçœ\'-]{2,}/;
  // eslint-disable-next-line
  const regExPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  // eslint-disable-next-line
  const regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const onNameChange = (e) => {
    if (regExName.test(e.target.value)) {
      setName(e.target.value);
      gsap.to(e.target, { color: "#A66D03" });
    } else {
      setName(null);
      gsap.to(e.target, { color: "red" });
    }
  };

  const onPhoneChange = (e) => {
    if (regExPhone.test(e.target.value)) {
      setPhone(e.target.value);
      gsap.to(e.target, { color: "#A66D03" });
    } else {
      setPhone(null);
      gsap.to(e.target, { color: "red" });
    }
  };

  const onEmailChange = (e) => {
    if (regExEmail.test(e.target.value)) {
      setEmail(e.target.value);
      gsap.to(e.target, { color: "#A66D03" });
    } else {
      setEmail(null);
      gsap.to(e.target, { color: "red" });
    }
  };

  useEffect(() => {
    if (name && phone && email) {
      gsap.set(button.current, { opacity: "1", pointerEvents: "all" });
    } else {
      gsap.set(button.current, { opacity: ".3", pointerEvents: "none" });
    }
  }, [name, phone, email]);

  return (
    <form className={classes.form}>
      <div className={classes["form-inputs"]}>
        <div className={classes["form-inputs-left"]}>
          <CustomGuestsInput />
          <CustomDateInput />
          <CustomTimeInput />
        </div>
        <div className={classes["form-inputs-right"]}>
          <Input
            type="text"
            icon={nameIcon}
            placeholder="Name"
            onChange={onNameChange}
          />
          <Input
            type="tel"
            icon={phoneIcon}
            placeholder="650-560-75644"
            onChange={onPhoneChange}
          />
          <Input
            type="email"
            icon={emailIcon}
            placeholder="your@email.com"
            onChange={onEmailChange}
          />
        </div>
      </div>
      <div className={classes["form-btn"]} ref={button}>
        <ConfirmButton toggle={toggle} />
      </div>
    </form>
  );
};

export default Form;
